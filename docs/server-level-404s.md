# Server-level 404 responses

## Decision

The portfolio uses build-time route shells and Cloudflare Pages' static
`404.html` behaviour.

The production build creates an `index.html` file for every public route in
`sitemap.xml` and creates `dist/404.html` from the same React application shell.
Cloudflare can therefore find a real file for every valid direct request and
return `200`. Requests that do not match a generated file fall through to
`404.html` and return `404` while React renders the appropriate contextual Not
Found experience.

The sitemap is the deployment contract for indexable public routes. Adding or
removing an article, case study or other public route requires updating the
sitemap. A future valid route that must not be indexed should be added to a
separate route manifest rather than to the sitemap.

## Current Cloudflare Pages behaviour

Without a top-level `404.html`, Cloudflare Pages identifies the build as a
single-page application and serves the root shell with `200` for unmatched
paths. This allows React routes to load directly, but it also gives invalid
paths a successful HTTP response.

Adding only `404.html` would disable that automatic fallback and cause valid
nested React routes to return `404`. Materialising the valid route shells
preserves direct loading while enabling correct Not Found responses.

## Alternatives considered

### Pages Functions

A catch-all Pages Function could classify paths and return the application
shell with either `200` or `404`. It would introduce runtime execution, a route
manifest inside server code and Functions usage for otherwise static requests.
That cost is not justified by the portfolio's small, known route set.

### Cloudflare Worker

A Worker with static assets would provide the greatest routing control, but it
would add deployment configuration and runtime infrastructure for behaviour
that can be expressed during the existing static build.

### Static 404 page without route shells

This is the smallest configuration change, but valid articles, case studies
and editorial routes would no longer load or refresh successfully when opened
directly.

## Trade-offs

- The solution has no edge-runtime dependency or Function invocation cost.
- Valid paths remain inspectable in the build output.
- Route changes must remain aligned with the sitemap.
- Every route shell contains the same initial HTML; React selects and renders
  the visible page after loading.
- Local development still uses Vite's SPA behaviour. HTTP status semantics are
  verified against the generated production build, preview deployment and
  production.

## SEO behaviour

Invalid routes retain the application's `noindex, follow` metadata and do not
declare canonical URLs. A response-level `X-Robots-Tag` is not added because
the existing HTML metadata expresses the indexing policy and the `404` status
already communicates that the resource is unavailable.

Lighthouse will reduce the SEO score of an error page because it is not
indexable. That is expected and should not be treated as a regression.

## Verification boundary

The dependency-free local preview server mirrors the required static-host
contract:

- generated valid routes return `200`;
- unknown routes return `404.html` with status `404`;
- direct loading and refresh work for both states.

Playwright runs against this server in local development and CI. Cloudflare
preview and production remain the integration boundary for confirming the
provider's actual routing and response headers.
