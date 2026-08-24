import { testingIsInformationNotApproval } from "./testing-is-information-not-approval";
import { testingConnectedWorkflows } from "./testing-connected-workflows";
import type { Article } from "./types";

export const articles: Article[] = [
  testingConnectedWorkflows,
  testingIsInformationNotApproval,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
