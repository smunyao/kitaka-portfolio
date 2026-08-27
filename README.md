# Kitaka Munyao | Portfolio

The source, content model, automated checks and deployment tooling behind [kitakamunyao.com](https://kitakamunyao.com).

The portfolio is treated as a product: its structure, accessibility, performance, metadata and production behaviour are developed and verified alongside its editorial content.

[![Playwright tests](https://github.com/smunyao/kitaka-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/smunyao/kitaka-portfolio/actions/workflows/playwright.yml)

## What the project demonstrates

- An evidence-led portfolio structured around professional experience, case studies, writing and inspectable engineering work
- Typed, content-driven rendering for articles, case studies, experience and project entries
- Keyboard-accessible, responsive navigation with light and dark colour schemes and reduced-motion support
- Focused Playwright coverage for critical routes, navigation, metadata, accessibility behaviour and error states
- Content-specific metadata, structured data, social imagery, canonical URLs and crawler-visible route shells
- Direct loading of valid React routes and true HTTP `404` responses for invalid production URLs
- Iterative delivery through GitHub Issues, milestones, feature branches, pull requests and versioned releases

## Technical foundation

- React, TypeScript, React Router and Vite
- Vanilla CSS with shared design tokens and responsive layout rules
- Typed editorial content and route metadata
- Playwright end-to-end testing
- Build-time route shells, structured data and social metadata
- Cloudflare Pages, Cloudflare Web Analytics and GitHub Actions
- Fontsource Geist

Cloudflare Web Analytics provides privacy-conscious aggregate usage data without adding a separate client-side analytics dependency.

## Architecture

| Path | Responsibility |
| --- | --- |
| [`src/app`](src/app) | Application entry point and route composition |
| [`src/pages`](src/pages) | Route-level page components |
| [`src/sections`](src/sections) | Homepage sections |
| [`src/content`](src/content) | Typed editorial content, project data and route metadata |
| [`src/shared`](src/shared) | Navigation, layout, SEO and reusable editorial components |
| [`src/styles`](src/styles) | Design tokens, typography and shared utilities |
| [`scripts`](scripts) | Route-shell generation, social-image generation and production preview |
| [`tests`](tests) | Playwright route, navigation, metadata, accessibility and error coverage |
| [`docs`](docs) | Focused technical decisions and verification guidance |
| [`public`](public) | Static assets, social images, sitemap and crawler instructions |

## Inspect the repository

A useful path through the implementation is:

1. Start with [`src/app/App.tsx`](src/app/App.tsx) for public routing and contextual error behaviour.
2. Review [`src/content`](src/content) for the content model shared by pages and sections.
3. Follow page metadata through [`src/shared/Seo.tsx`](src/shared/Seo.tsx), [`src/content/buildStructuredData.ts`](src/content/buildStructuredData.ts) and [`src/content/routeMetadata.ts`](src/content/routeMetadata.ts).
4. Inspect [`scripts/generate-route-shells.mjs`](scripts/generate-route-shells.mjs) for direct route loading, crawler-visible metadata and server-level `404` behaviour.
5. Review [`tests`](tests) for the automated boundaries around public journeys and negative states.
6. Use the focused records in [`docs`](docs) when an implementation decision needs more context.

## Run and verify locally

Node.js 24 or newer is required.

```bash
git clone https://github.com/smunyao/kitaka-portfolio.git
cd kitaka-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Run the project checks:

```bash
npm run lint
npm run test:e2e
npm run build
```

Preview the production output:

```bash
npm run preview
```

When social-preview copy or visual treatments change, regenerate the committed images with:

```bash
npm run generate:social-images
```

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the development workflow and [`docs/testing.md`](docs/testing.md) for automated scope, manual regression, exploratory charters and release criteria.

## Production behaviour

The site deploys to Cloudflare Pages whenever changes are merged into `main`.

The production build generates a static shell for every public route and a shared `404.html`. This preserves direct loading and refreshes for valid React routes while allowing invalid URLs to return a true HTTP `404`.

Route shells also contain crawler-visible social metadata and proportionate structured data. The generated output is tested separately from the local Vite development experience where infrastructure behaviour differs intentionally.

## Performance reference

Representative production Lighthouse audits from the Milestone 5 release:

| Route | Mobile median | Desktop |
| :--- | ---: | ---: |
| Homepage | **97** | **100** |
| Connected workflows article | **97** | **100** |
| Harvest case study | **98** | **100** |

Scores vary between routes, devices and individual runs. Regressions are assessed through repeated audits and individual metrics rather than a single aggregate result.

## Technical records

- [`docs/testing.md`](docs/testing.md) — automated scope, manual regression and release checks
- [`docs/server-level-404s.md`](docs/server-level-404s.md) — route-shell and HTTP-status decisions
- [`docs/social-metadata.md`](docs/social-metadata.md) — content-specific social metadata and imagery
- [`docs/search-discoverability.md`](docs/search-discoverability.md) — canonical URLs, structured data and crawler behaviour
- [`docs/homepage-design-decisions.md`](docs/homepage-design-decisions.md) — durable homepage visual decisions
- [`docs/v5-release-evidence.md`](docs/v5-release-evidence.md) — Milestone 5 regression and release evidence

## Current work

Current and planned improvements are tracked through [GitHub Issues](https://github.com/smunyao/kitaka-portfolio/issues) and [milestones](https://github.com/smunyao/kitaka-portfolio/milestones).

## Licence and content rights

The source code in this repository is licensed under the [MIT License](LICENSE).

Unless otherwise stated, the original editorial and personal content in this repository—including case studies, professional experience, biography, project narratives, written commentary, branding and original imagery—is © 2026 Kitaka Munyao. All rights reserved.

The MIT License applies to the source code and does not grant permission to reproduce, republish or adapt that original editorial or personal content.

Third-party names, trademarks, logos and other assets remain the property of their respective owners.
