export type ProjectStatus = "Completed" | "Active" | "Archived";

export interface Project {
  slug: string;

  title: string;
  description: string;
  summary: string;

  repositoryUrl?: string;
  liveUrl?: string;

  technologies: string[];

  featured: boolean;
  status: ProjectStatus;
}
