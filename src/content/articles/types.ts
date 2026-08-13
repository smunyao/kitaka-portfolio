export type ArticleSection =
  | {
      type: "paragraphs";
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: "list";
      heading?: string;
      items: string[];
    }
  | {
      type: "quote";
      quote: string;
      attribution?: string;
    }
  | {
      type: "code";
      heading?: string;
      language?: string;
      code: string;
    };

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  seo: {
    title: string;
    description: string;
  };
  sections: ArticleSection[];
};
