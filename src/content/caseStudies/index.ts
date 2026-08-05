import { harvestCaseStudy } from "./harvest";

export const caseStudies = [harvestCaseStudy];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
