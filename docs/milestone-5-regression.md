# Milestone 5 regression and reach measurement

## Purpose

This record evaluates Milestone 5 as one visitor experience. It brings together
automated, exploratory, production, accessibility, performance, SEO, and
deployment evidence without treating a passing suite as automatic release
approval.

## Release candidate

- **Milestone:** Milestone 5 — Content and Reach
- **Regression branch:** `feature/story-5-9-milestone-regression`
- **Baseline release:** `v4.0.0`
- **Merged Milestone 5 candidate:** `5f8fbaa1fab7366d02b6cd9f3578823e2c66d4fc`
- **Approved commit:** To be recorded after the regression pull request is
  approved
- **Cloudflare preview:** `https://52959957.kitaka-portfolio.pages.dev`
- **Production commit:** To be recorded after deployment

## Scope

### Public routes

- `/`
- `/how-i-work`
- `/writing`
- `/writing/testing-is-information-not-approval`
- `/writing/testing-connected-workflows`
- `/case-studies/harvest`
- `/case-studies/chili-piper`
- `/case-studies/sitemate`

### Negative routes

- unknown top-level route
- unknown article slug
- unknown case-study slug

### Milestone journeys

- homepage continuation into professional evidence
- Experience into every case study
- Featured Writing into the latest article
- Writing index into every article
- article and case-study continuation navigation
- Engineering Work into each inspectable repository
- professional evidence into Contact
- direct email and intentional résumé request
- footer contact and professional profiles
- contextual Not Found recovery

## Automated evidence

| Check | Result | Evidence |
| --- | --- | --- |
| ESLint | Passed | `npm run lint` |
| Production build | Passed | `npm run build`; seven nested route shells and `404.html` generated |
| Complete local Playwright suite | Passed: 222/222 | `npm run test:e2e` |
| Complete production Playwright suite | Passed: 222/222 | `PLAYWRIGHT_BASE_URL=https://kitakamunyao.com npm run test:e2e` |
| GitHub Actions | Passed for merged candidate | [Run 32819198643](https://github.com/smunyao/kitaka-portfolio/actions/runs/32819198643) |
| Valid route status and refresh | Covered | `tests/routes.spec.ts` |
| Invalid route status and recovery | Covered | `tests/errors.spec.ts` |
| Navigation and critical journeys | Covered | `tests/navigation.spec.ts` |
| Keyboard, responsive, and motion behaviour | Covered | `tests/accessibility.spec.ts` |
| Metadata and search surface | Covered | `tests/metadata.spec.ts` |

Automation runs across desktop, tablet, and mobile Chromium projects. It does
not replace real-device Safari, screen-reader, visual-quality, or production
hosting checks.

## Exploratory charters

### Charter 1: content and discovery continuity

Move from the homepage through Experience, case studies, Writing, articles,
Engineering Work, and Contact. Evaluate whether every transition is
understandable without prior knowledge of the site and whether each piece of
content adds distinct evidence.

- **Environment:** Production, desktop and mobile Chromium
- **Findings:** The sequence from positioning to professional evidence,
  principles, writing, inspectable engineering work, and contact remains
  understandable. The two articles provide distinct perspectives: testing as
  decision information and testing across connected systems. Case studies and
  projects provide different forms of evidence rather than duplicating one
  another.

### Charter 2: navigation under interruption

Alternate primary links, contextual links, hashes, direct URLs, refresh, new
tabs, Back, and Forward. Include valid and invalid routes. Look for lost
position, obscured headings, stale active states, and incomplete recovery.

- **Environment:** Production Playwright suite plus focused response inspection
- **Findings:** All eight public routes load directly and after refresh. Three
  representative invalid route classes return `404` and retain contextual
  recovery. Primary, contextual, history, hash, footer, project, and contact
  journeys passed. No reliability defect was found.

### Charter 3: constrained and alternative presentation

Use keyboard-only navigation, 200% zoom, reduced motion, forced colours, light
and dark schemes, narrow portrait, short landscape, and iPhone Safari. Use the
longest article and case study to look for overflow, hidden context, or
viewport-dependent content loss.

- **Environment:** Production Chromium at 1440 × 900 and 390 × 844; automated
  tablet, narrow-mobile, short-landscape, increased-text, forced-colour, and
  reduced-motion checks
- **Findings:** No horizontal overflow or hidden critical content was found.
  Real iPhone Safari, actual 200% browser zoom, light mode, and a focused
  VoiceOver review of the Harvest case study passed as manual release evidence.

## Manual regression evidence

### Content and discovery

- [x] New and revised journeys have distinct purposes.
- [x] Article, case-study, and project relationships are understandable.
- [x] Homepage continuation is discoverable without explanation.
- [x] Contact remains clear without resembling a conversion funnel.
- [x] Visual refinements preserve hierarchy and reading rhythm.
- [x] Claims, dates, roles, spelling, and destinations are accurate.

### Navigation and reliability

- [x] Primary, secondary, contextual, footer, and recovery links work.
- [x] Every public route loads directly and survives refresh.
- [x] Back and Forward preserve understandable history.
- [x] Hash destinations stop below sticky navigation.
- [x] Valid routes return `200`; representative invalid routes return `404`.
- [x] External destinations are correct.

### Accessibility and responsiveness

- [x] Complete the critical journey using only the keyboard.
- [x] Verify skip link, landmarks, headings, accessible names, and focus.
- [x] Review at 200% browser zoom.
- [x] Review reduced motion and forced colours.
- [x] Review light and dark schemes.
- [x] Review desktop, tablet, narrow mobile, portrait, and landscape.
- [x] Review iPhone Safari, including initial hero framing and viewport chrome.
- [x] Confirm no unintended horizontal overflow.

### SEO and deployment

- [x] Titles, descriptions, canonicals, social metadata, and structured data
      match visible content.
- [x] `robots.txt` and `sitemap.xml` describe the intended public surface.
- [x] Error pages remain `noindex` without invalid canonicals.
- [x] Cloudflare preview responses include `X-Robots-Tag: noindex`.
- [ ] The deployed commit matches the approved commit.

## Performance and asset evidence

Use at least three mobile Lighthouse runs per representative route and record
the median rather than the best score.

| Route | Mode | Runs | Median performance | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage | Mobile | 98, 98, 98 | 98 | 2.1 s | 0 | 0 ms |
| Homepage | Desktop | 100 | 100 | 0.6 s | 0 | 0 ms |
| Long article | Mobile | 98, 98, 98 | 98 | 2.1 s | 0 | 0 ms |
| Long article | Desktop | 100 | 100 | 0.6 s | 0 | 0 ms |
| Case study | Mobile | 98, 98, 98 | 98 | 2.1 s | 0 | 0 ms |
| Case study | Desktop | 100 | 100 | 0.6 s | 0 | 0 ms |

Representative mobile runs also recorded FCP and Speed Index at 1.9 s.
Representative desktop runs recorded FCP and Speed Index at 0.6 s. Results
were identical across the homepage, long article, and Harvest case study, with
no unexplained regression.

### Generated assets

| Asset | `v4.0.0` baseline | Milestone 5 candidate | Assessment |
| --- | --- | --- | --- |
| JavaScript bundle | 305.11 kB raw / 96.03 kB gzip | 307.10 kB raw / 96.13 kB gzip | Negligible transfer increase |
| CSS bundle | 37.67 kB raw / 6.40 kB gzip | 44.54 kB raw / 7.35 kB gzip | 0.95 kB gzip increase; proportionate to milestone UI and responsive work |
| Social images | Not present as a content-specific set | Approximately 1.1 MB across six PNG files | Cacheable metadata assets; not requested during ordinary page rendering |

## Findings and disposition

Record observed facts separately from questions and accepted risks.

| ID | Finding | Impact | Disposition |
| --- | --- | --- | --- |
| M5-01 | Desktop case studies repeat “Product ecosystem” as a narrative and sidebar heading. | No visitor impact observed during the focused VoiceOver heading-navigation review. | Closed; the regions remained understandable and no follow-up is warranted. |

## Known limitations and accepted risks

- Automated browser coverage is Chromium-only.
- Real iPhone Safari and browser viewport chrome remain manual evidence.
- Third-party availability is not a build gate; configured external
  destinations are verified instead.
- Lighthouse laboratory scores vary between runs; medians and underlying
  metrics are used for release decisions.
- Automated checks do not establish editorial clarity or visual quality.

## Exit decision

Milestone 5 is ready to close only when:

- no unresolved issue has unacceptable visitor impact;
- no accessibility issue blocks a critical journey;
- no unexplained performance regression remains;
- preview and production behaviour match the approved release candidate;
- manual and automated evidence is complete; and
- follow-up work is captured in explicit issues.

**Decision:** Pending
