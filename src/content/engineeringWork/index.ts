import type { EngineeringProject } from "./types";

export const engineeringWork: EngineeringProject[] = [
  {
    slug: "webhook-reliability-lab",
    title: "Webhook Reliability Lab",
    description:
      "A small TypeScript system for investigating signed webhook delivery across an unreliable boundary.",
    summary:
      "It makes transient failures, retries, duplicates, invalid signatures and out-of-order events reproducible, with real HTTP integration tests and a documented account of the trade-offs.",
    featured: true,
    links: [
      {
        label: "View the lab on GitHub",
        url: "https://github.com/smunyao/webhook-reliability-lab",
      },
      {
        label: "View the v0.1.0 release",
        url: "https://github.com/smunyao/webhook-reliability-lab/releases/tag/v0.1.0",
      },
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Vitest",
      "HTTP",
      "HMAC",
      "GitHub Actions",
    ],
  },
  {
    slug: "portfolio",
    title: "This portfolio, treated as a product.",
    description:
      "The portfolio itself, built and tested as an evolving product.",
    summary:
      "Its source shows accessible interactions, content-driven routes and metadata, responsive layouts and Playwright coverage for critical journeys.",
    links: [
      {
        label: "View portfolio source on GitHub",
        url: "https://github.com/smunyao/kitaka-portfolio",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Modern CSS",
      "Playwright",
      "GitHub Actions",
      "Cloudflare Pages",
    ],
  },
];
