export type ExperienceSlug = "harvest" | "chili-piper" | "sitemate";

export interface ExperienceItem {
  slug: ExperienceSlug;
  company: string;
  headline: string;
  context: string;
  description: string;
  caseStudyUrl?: string;
}
