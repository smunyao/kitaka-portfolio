# Test strategy

## Purpose

This document describes how quality is evaluated for the portfolio, what is
covered by automation, what remains a deliberate manual activity, and what
evidence is expected before a change is released.

The strategy is risk-based. Its purpose is not to maximise the number of tests
or to prove that the site is defect-free. Its purpose is to provide useful,
repeatable information about the behaviours that matter most to visitors and
to make regressions visible early enough to act on them.

## Quality risks

The most important product risks are:

1. A visitor cannot reach or navigate the site's core content.
2. A direct or refreshed route renders a blank, incomplete, or incorrect page.
3. A keyboard or assistive-technology user cannot understand or operate the
   site.
4. Content becomes unreadable or inaccessible at a representative viewport.
5. Invalid content produces a confusing state or an unrecoverable journey.
6. metadata causes valid content to be indexed incorrectly or error pages to
   be indexed unintentionally.
7. A deployment behaves differently from the locally verified production
   build.
8. Performance degrades enough to affect the reading or navigation experience.

These risks determine what is automated, what is checked manually, and what
must be verified in a deployed environment.

## Testing principles

### Test behaviour, not implementation

Tests should describe outcomes visible to a visitor. Prefer accessible roles,
names, headings, URLs, and metadata over component names, DOM depth, or CSS
implementation details.

An assertion should fail because a meaningful behaviour changed, not because a
harmless refactor rearranged markup.

### Automate repeatable, deterministic checks

Automation is most valuable when a check:

- protects a critical journey;
- is executed frequently;
- has an objective result;
- is expensive or error-prone to repeat manually;
- can be kept deterministic in an isolated environment.

Visual judgement, editorial quality, and subjective interaction quality remain
manual unless a specific recurring regression justifies targeted automation.

### Use the lowest sufficient scope

The suite uses browser-level tests because routing, history, focus, responsive
layout, and metadata are browser behaviours. Tests should not be added at this
level when a smaller and faster test would provide the same confidence.

The portfolio currently has no separate unit-test layer. Introduce one only
when application logic becomes complex enough to benefit from isolated tests.

### Treat flaky tests as defects

A flaky test provides ambiguous information and weakens trust in the suite.
Do not normalise rerunning a failure until it passes. Investigate whether the
cause is the product, the test, its data, or its environment.

Retries are enabled in CI to preserve diagnostic evidence for an intermittent
failure. A passing retry does not make the original failure irrelevant.

### Keep tests independent

Each test should establish its own starting state and should not depend on the
execution order or side effects of another test. Parallel execution must not
change the result.

## Test levels and ownership

| Layer                   | Purpose                                     | Current approach                   |
| ----------------------- | ------------------------------------------- | ---------------------------------- |
| Static analysis         | Detect type and code-quality problems       | TypeScript and ESLint              |
| Build verification      | Confirm the deployable application compiles | Vite production build              |
| Browser automation      | Protect critical routes and journeys        | Playwright with Chromium           |
| Manual regression       | Evaluate usability and visual quality       | Structured checklist               |
| Exploratory testing     | Discover risks outside known assertions     | Risk-focused charters              |
| Deployment verification | Detect hosting and environment differences  | Preview and production checks      |
| Performance and SEO     | Monitor user experience and discoverability | Lighthouse and response inspection |

## Automated coverage

The Playwright suite currently covers:

- direct loading of every public route;
- the homepage, How I work, Writing, the current article, and every case study;
- expected primary headings and a single `<h1>` per page;
- primary navigation and hash navigation;
- directional links and browser Back and Forward behaviour;
- links from each experience entry to the correct internal case study;
- unknown top-level, article, and case-study routes;
- contextual error headings, metadata, and recovery links;
- skip-link order and focus movement;
- visible keyboard focus on critical recovery navigation;
- reduced-motion behaviour for the homepage hero;
- horizontal overflow at representative viewports.

The suite does not request external company websites. External availability is
outside the portfolio's control and would introduce false failures. Where an
external destination is important, verify the configured `href`; do not make
the build depend on the third party returning a successful response.

## Representative viewports

Automated tests run in Chromium at:

| Project | Viewport   | Purpose                                                    |
| ------- | ---------- | ---------------------------------------------------------- |
| Desktop | 1440 × 900 | Common laptop and desktop layout                           |
| Tablet  | 768 × 1024 | Primary responsive breakpoint and narrow landscape content |
| Mobile  | 390 × 844  | Common modern mobile viewport                              |

These viewports provide consistent regression signals; they do not represent
every device. Manual testing should also resize around breakpoints rather than
checking only the exact configured widths. Defects often occur immediately
before or after a breakpoint, not at the breakpoint itself.

## Environments

### Local development

Use the development server for rapid investigation and exploratory testing:

```bash
npm run dev
```

Development-server behaviour is useful feedback, but it is not final release
evidence.

### Local production build

The default Playwright run builds the application and starts the Vite preview
server automatically:

```bash
npm run test:e2e
```

This is the primary automated environment because it is deterministic and
represents the generated application that will be deployed.

### Cloudflare preview

Use the preview deployment to verify Cloudflare routing, asset delivery,
headers, and environment-specific behaviour before merging:

```bash
PLAYWRIGHT_BASE_URL=https://preview-url.pages.dev npm run test:e2e
```

The preview must correspond to the commit under review. Record the tested URL
and commit when reporting release evidence.

### Production

Production smoke tests must be read-only and safe to repeat:

```bash
PLAYWRIGHT_BASE_URL=https://kitakamunyao.com npm run test:e2e
```

Do not use production automation for destructive actions, mutable test data,
or checks that could generate unwanted communication or analytics noise.

## Running and debugging Playwright

Install the project dependencies from the lockfile:

```bash
npm ci
```

Install the Chromium version managed by Playwright:

```bash
npx playwright install chromium
```

On a Linux CI runner that also needs browser system dependencies, use:

```bash
npx playwright install --with-deps chromium
```

Run the complete suite:

```bash
npm run test:e2e
```

Run with a visible browser:

```bash
npm run test:e2e:headed
```

Use Playwright's interactive runner:

```bash
npm run test:e2e:ui
```

Open the latest HTML report:

```bash
npm run test:e2e:report
```

Run one file:

```bash
npx playwright test tests/errors.spec.ts
```

Run one project:

```bash
npx playwright test --project=mobile
```

Run a test selected by title:

```bash
npx playwright test -g "skip link"
```

When a test fails, review the assertion message, screenshot, trace, video, page
URL, and console output before changing the test. Confirm whether the expected
behaviour is still valid. Do not update an assertion merely to match a new
result without understanding why the result changed.

## Test design standards

New Playwright tests should:

- use `getByRole`, labels, and accessible names where possible;
- contain an assertion that expresses visitor value;
- start from an explicit route or state;
- avoid fixed waits and arbitrary timeouts;
- rely on Playwright's web-first assertions;
- avoid order dependence and shared mutable state;
- avoid checking exact layout values unless they represent a requirement;
- avoid screenshots as the only assertion;
- be safe to run against preview and production when practical;
- include a clear test name that describes the expected behaviour.

CSS selectors are appropriate when the behaviour under test has no accessible
surface, such as detecting horizontal overflow or verifying a reduced-motion
layout rule. Their use should be deliberate rather than the default.

## Manual regression checklist

Use judgement when selecting the depth of regression. A content-only change
does not require the same breadth as routing, navigation, or global CSS work.
Record any omitted area and the reason it was considered low risk.

### Content and presentation

- [ ] Confirm headings, summaries, dates, role information, and links are
      accurate.
- [ ] Review spelling, punctuation, line breaks, and typographic characters.
- [ ] Confirm long-form content remains readable and paragraphs are not overly
      wide or dense.
- [ ] Check long headings and paragraphs for awkward wrapping.
- [ ] Confirm hover, active, and focus treatments remain visually consistent.
- [ ] Confirm the footer is positioned appropriately on both short and long
      pages.

### Navigation and routing

- [ ] Navigate through the site without manually editing the URL.
- [ ] Open important internal links in a new tab where browser behaviour allows.
- [ ] Load nested routes directly and refresh them.
- [ ] Verify hash links stop at a useful position below sticky navigation.
- [ ] Verify browser Back and Forward after both route and hash navigation.
- [ ] Confirm invalid routes explain what happened and provide an appropriate
      recovery path.
- [ ] Check that external links point to the intended destinations without
      submitting data or relying on those sites for build success.

### Keyboard and accessibility

- [ ] Complete each critical journey using only the keyboard.
- [ ] Verify focus order follows the visual and semantic reading order.
- [ ] Verify the skip link appears on focus and moves focus to the main content.
- [ ] Confirm every interactive control has a visible focus indicator.
- [ ] Confirm focus is not obscured by sticky content.
- [ ] Check that link names make sense without surrounding prose.
- [ ] Confirm each page has one descriptive `<h1>` and headings do not skip
      levels without reason.
- [ ] Review landmarks and page regions with browser accessibility tools or a
      screen reader.
- [ ] Check meaningful content at 200% browser zoom.
- [ ] Check Windows High Contrast or forced-colours mode when global colour or
      focus styles change.
- [ ] Verify the experience with reduced motion enabled.

Automated accessibility checks are useful but cannot establish that the page is
understandable, logically ordered, or pleasant to use. Manual keyboard and
assistive-technology review remains necessary.

### Responsive behaviour

- [ ] Review desktop, tablet, and mobile layouts.
- [ ] Resize through responsive breakpoints and inspect widths immediately on
      both sides of each breakpoint.
- [ ] Verify no unintended horizontal scrolling occurs.
- [ ] Confirm navigation remains readable and operable at narrow widths.
- [ ] Confirm headings, metadata, code blocks, and long links wrap safely.
- [ ] Check portrait and landscape where the change affects viewport-dependent
      layout.
- [ ] Check touch targets and spacing on a real mobile device when practical.

### Colour and motion

- [ ] Review both light and dark colour schemes.
- [ ] Confirm text, borders, focus indicators, and accents remain distinguishable.
- [ ] Check that colour is not the only way information is communicated.
- [ ] Confirm animations do not obstruct interaction or delay access to content.
- [ ] Confirm reduced-motion mode removes non-essential movement without hiding
      content.

### SEO and metadata

- [ ] Confirm every indexable page has a useful, unique title and description.
- [ ] Confirm canonical URLs reference the intended production URL.
- [ ] Confirm article and case-study metadata matches visible content.
- [ ] Confirm error pages use `noindex` and do not declare invalid canonicals.
- [ ] Check Open Graph data and the social image after metadata changes.
- [ ] Confirm `robots.txt` and `sitemap.xml` remain reachable and accurate.

Do not use an error page's Lighthouse SEO score as a release target. Lighthouse
correctly reports `noindex` as failing its indexability audit, while `noindex`
is the intended behaviour for these pages.

### Performance

- [ ] Run Lighthouse against representative content, not only the homepage.
- [ ] Include at least one long article or case study.
- [ ] Run mobile audits multiple times and use the median result.
- [ ] Review LCP, CLS, TBT/INP, and asset weight rather than relying only on the
      aggregate score.
- [ ] Investigate consistent regressions; do not chase normal one- or two-point
      laboratory variance.
- [ ] Confirm fonts and key content do not shift unexpectedly during loading.

### Deployment smoke test

- [ ] Confirm the deployed commit matches the commit that was approved.
- [ ] Open the homepage and at least one nested route directly.
- [ ] Refresh a nested route.
- [ ] Exercise one primary navigation path and one recovery path.
- [ ] Inspect the browser console for new errors or warnings.
- [ ] Confirm expected response headers and status codes where hosting behaviour
      matters.
- [ ] Confirm preview deployments include indexing protection.

## Exploratory testing

Use short, focused charters rather than unstructured browsing. Examples:

- Explore navigation while alternating mouse, keyboard, Back, Forward, refresh,
  and direct URL entry.
- Explore the site at extreme zoom and narrow widths using the longest available
  article and case-study content.
- Explore how the site communicates failure when route segments, slugs, hashes,
  and trailing slashes are unexpected.
- Explore reading continuity while switching colour scheme or reduced-motion
  preference.
- Explore whether sticky and fixed elements obscure content, focus, or browser
  find results.

Time-box a charter, record the environment and scope, and distinguish observed
facts from questions or risks that require further investigation.

## Failure investigation

When a check fails, capture:

- the tested commit and environment;
- the exact route and viewport;
- reproducible steps;
- expected and observed behaviour;
- screenshots, trace, video, console output, or response headers as relevant;
- whether the failure reproduces locally, in preview, and in production;
- user impact and release risk.

Classify the failure before acting:

- **Product defect:** the implemented behaviour violates the expectation.
- **Test defect:** the assertion, selector, setup, or synchronisation is wrong.
- **Environment defect:** infrastructure or configuration prevents a valid test.
- **Expected change:** the requirement changed and both the implementation and
  test need an intentional update.
- **External dependency:** a third party is unavailable or has changed outside
  the portfolio's control.

## Release evidence and exit criteria

A change is ready to merge when:

- relevant acceptance criteria are satisfied;
- TypeScript and the production build succeed;
- ESLint succeeds;
- relevant automated tests pass;
- appropriate manual and exploratory checks are complete;
- failures and intentionally omitted checks are understood and recorded;
- the Cloudflare preview has been reviewed when deployment behaviour is in
  scope;
- no known issue presents an unacceptable visitor, accessibility, SEO, or
  operational risk.

Passing automation is necessary evidence, not automatic approval to release.
The release decision should consider the nature of the change, unresolved risk,
and the quality of the evidence available.

## Known limitations and future considerations

- Playwright currently runs Chromium only. Cross-browser visual review remains
  manual until Firefox or WebKit coverage provides enough value to justify its
  cost.
- Cloudflare Pages currently serves the SPA shell with HTTP `200` for unknown
  routes. React renders the correct error state, but true server-level `404`
  responses are tracked separately.
- The suite does not validate third-party availability.
- Automated visual comparison is intentionally excluded. Introduce it only for
  stable, high-value surfaces with a demonstrated regression history.
- Automated accessibility tooling may be added later, but it will complement
  rather than replace keyboard, screen-reader, zoom, contrast, and usability
  review.

Review this strategy whenever the site's architecture, content model,
deployment platform, supported browsers, or principal user journeys change.
