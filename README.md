# Kitaka Munyao | Portfolio

> A personal portfolio exploring quality engineering, engineering thinking, accessibility, and modern frontend development.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
[![Playwright tests](https://github.com/smunyao/kitaka-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/smunyao/kitaka-portfolio/actions/workflows/playwright.yml)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Live site

[**https://kitakamunyao.com**](https://kitakamunyao.com)

---

## About

This portfolio was built from scratch as an opportunity to create a fast, accessible and thoughtfully engineered web experience while exploring modern frontend engineering.

It has since evolved into a place to demonstrate not only what I have worked on, but how I think about software quality, engineering decisions and continuous improvement. A dedicated **How I work** page explores the principles behind that approach, including product understanding, risk, testing, collaboration, automation and building confidence.

The portfolio also includes long-form engineering case studies exploring real product challenges, testing strategy, engineering trade-offs and the principles that have shaped my approach to quality engineering.

A dedicated **Writing** area provides space for longer-form articles about quality engineering, testing, product understanding and engineering practice.

The homepage prioritises selected professional experience, concise working principles and technical writing. A compact engineering-work section also makes the portfolio's source and documented development history directly inspectable without competing with the stronger professional evidence.

The project focuses on:

- Engineering quality
- Accessibility
- Performance
- SEO
- Responsive design
- Maintainable architecture
- Continuous deployment
- Iterative product development

The repository documents the development process through GitHub Issues, feature branches, pull requests, milestones, semantic versioning and iterative releases, reflecting the same engineering practices I value in professional software teams.

---

## Tech Stack

- React
- TypeScript
- React Router
- Vite
- React Helmet Async
- Vanilla CSS
- Playwright
- Git & GitHub
- GitHub Actions
- GitHub Projects & Issues
- Cloudflare Pages
- Cloudflare Registrar
- Cloudflare Web Analytics
- Fontsource (Geist)

---

## Features

- Responsive portfolio
- Engineering case studies
- Long-form "How I work" engineering philosophy
- Technical writing and reusable article architecture
- Inspectable source and engineering documentation
- Dynamic routing
- Light & dark mode
- Keyboard-accessible navigation
- Skip-to-content support
- Reduced-motion support
- Sticky editorial sidebar
- Active section tracking
- Privacy-friendly site analytics
- Open Graph & Twitter/X metadata
- Canonical URLs
- robots.txt & sitemap.xml
- Custom domain
- Automatic Cloudflare deployments

---

## Performance

Reference Lighthouse audit (Production):

| Metric         |   Score |
| :------------- | ------: |
| Performance    | **100** |
| Accessibility  | **100** |
| Best Practices | **100** |
| SEO            | **100** |

> Lighthouse scores are periodically reviewed as the portfolio evolves. Scores
> vary between routes, devices and individual runs, so regressions are assessed
> using repeated runs and individual performance metrics rather than a single
> aggregate score.

---

## Analytics

The portfolio uses **Cloudflare Web Analytics** for lightweight site-usage measurement.

The existing Cloudflare integration records traffic across the portfolio's public routes, including the home page, How I work, case studies, Writing and individual articles.

No additional client-side analytics library or custom event-tracking system has been introduced. Interaction-level tracking will only be considered where the resulting information would be useful enough to justify the additional implementation and maintenance.

---

## Running locally

Clone the repository:

```bash
git clone https://github.com/smunyao/kitaka-portfolio.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production build generates static shells for every public route and a
shared `404.html`, allowing Cloudflare Pages to preserve direct React route
loading while returning a true `404` for invalid URLs. See the
[server-level 404 decision record](docs/server-level-404s.md) for details.

---

## Testing

The portfolio uses Playwright for focused end-to-end coverage of its critical
routes, navigation, accessibility behaviour, responsive layouts, and error
states.

Run the automated suite:

```bash
npm run test:e2e
```

See the [test strategy and manual regression guide](docs/testing.md) for the
scope of automation, local and deployed test commands, manual checks,
exploratory charters, and release criteria.

---

## Deployment

The site is automatically deployed through **Cloudflare Pages** whenever changes are merged into the `main` branch.

---

## Roadmap

Planned improvements include:

- Dedicated Open Graph images for individual case studies
- Additional personal engineering projects
- Potential long-form project pages for larger projects
- Continued accessibility improvements
- Ongoing design refinements

---

**Understanding products. Building confidence.**

---

## Licence and content rights

The source code in this repository is licensed under the [MIT License](LICENSE).

Unless otherwise stated, the original editorial and personal content in this repository — including case studies, professional experience, biography, project narratives, written commentary, branding and original imagery — is © 2026 Kitaka Munyao. All rights reserved.

The MIT License applies to the source code and does not grant permission to reproduce, republish or adapt that original editorial or personal content.

Third-party names, trademarks, logos and other assets remain the property of their respective owners.
