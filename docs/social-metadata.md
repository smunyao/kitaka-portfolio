# Social metadata

## Purpose

Public portfolio routes provide metadata in their initial HTML response. This is
important because link-preview crawlers may not execute the React application.

`src/content/routeMetadata.json` is the source of truth for:

- page titles and descriptions;
- canonical URLs;
- Open Graph type;
- social-preview image paths and alternative descriptions;
- the text and accent used to generate each preview image.

Both the React `Seo` component and the production route-shell generator consume
this manifest. Page content should not maintain a second copy of SEO fields.

## Image strategy

The homepage, How I Work and Writing index share a restrained default image.
Articles and case studies use content-specific images because the subject of the
shared page is more useful than a generic personal card.

Images are PNG files at 1200 × 630 pixels. They use a consistent typographic
treatment, with company colour limited to a small accent on case-study images.
Alternative text describes the image's title and context rather than repeating
generic personal branding.

Generate the committed assets after changing image text or treatment:

```bash
npm run generate:social-images
```

The generated files are committed so Cloudflare deployment does not require a
browser during the build.

## Error pages

The generated `404.html` contains an appropriate title, description and
`noindex, follow` directive. It deliberately omits canonical, Open Graph and
Twitter metadata so an invalid URL is not presented as shareable content.

## Validation

Automated coverage checks the raw HTML response, not only the metadata visible
after React hydration. It also confirms that referenced images are served as
PNG files and that the hydrated document retains one set of metadata.

For a release, inspect representative homepage, article and case-study URLs in
the Cloudflare preview before checking them in platform preview tools.

## Platform caching

Social platforms cache link previews independently of the site. A corrected
deployment may therefore continue to show an older title, description or image
for some time. This does not necessarily indicate that production is serving
stale metadata.

When investigating a preview:

1. inspect the raw production HTML and image URL first;
2. confirm the canonical and `og:url` values match the shared URL;
3. use a platform's official refresh or debugger tool when one is available;
4. avoid changing production URLs solely to bypass a platform cache.

Preview environments should be used for inspecting HTML and layout. Their URLs
should not be promoted as canonical share targets.
