import { testingIsInformationNotApproval } from "./testing-is-information-not-approval";
import type { Article } from "./types";

export const articles: Article[] = [testingIsInformationNotApproval];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
