import { chiliPiperCaseStudy } from "./chiliPiper";
import { harvestCaseStudy } from "./harvest";
import { sitemateCaseStudy } from "./sitemate";

export const caseStudies = [
  harvestCaseStudy,
  chiliPiperCaseStudy,
  sitemateCaseStudy,
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
