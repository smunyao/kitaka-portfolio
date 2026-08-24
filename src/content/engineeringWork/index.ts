import type { EngineeringProject } from "./types";

export const engineeringWork: EngineeringProject[] = [
  {
    slug: "webhook-reliability-lab",
    title: "Webhook Reliability Lab",
    description:
      "A small TypeScript system for investigating signed webhook delivery across an unreliable boundary.",
    summary:
      "It makes transient failures, retries, duplicates, invalid signatures and out-of-order events reproducible, with real HTTP integration tests and a documented account of the trade-offs.",
    repositoryUrl: "https://github.com/smunyao/webhook-reliability-lab",
    repositoryLabel: "View the lab on GitHub",
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
      "An evolving place for my experience, case studies and writing about software quality.",
    summary:
      "Its repository shows the decisions behind accessible interactions, content-driven routes and metadata, responsive layouts and Playwright checks for critical journeys.",
    repositoryUrl: "https://github.com/smunyao/kitaka-portfolio",
    repositoryLabel: "View portfolio source on GitHub",
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
