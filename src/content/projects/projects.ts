import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "portfolio",

    title: "Engineering portfolio",

    description:
      "A personal portfolio exploring software quality, accessibility and thoughtful frontend engineering.",
    summary:
      "This portfolio began as an opportunity to build a fast, accessible and thoughtfully engineered personal website while exploring modern frontend engineering. As the project evolved, it became an editorial platform for sharing engineering case studies, personal projects and the thinking behind my approach to software quality. Like any software product, it continues to evolve through incremental improvements, reflecting my belief that quality is achieved through thoughtful iteration rather than one-off redesigns.",

    repositoryUrl: "https://github.com/smunyao/kitaka-portfolio",

    liveUrl: "https://kitakamunyao.com",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "React Helmet Async",
      "Cloudflare Pages",
    ],

    featured: true,

    status: "Completed",
  },
];
