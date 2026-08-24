export type EngineeringProject = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  featured?: boolean;
  links: {
    label: string;
    url: string;
  }[];
  technologies: string[];
};
