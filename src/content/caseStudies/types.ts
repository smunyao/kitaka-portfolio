export interface CaseStudy {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  company: string;
  companyUrl: string;

  role: string;
  period: string;

  title: string;
  summary: string;

  productEcosystem: string[];
  challenge: string[];
  approach: string[];
  impact: string[];
  reflection: string[];

  focusAreas: string[];
  productEcosystemItems: string[];
}
