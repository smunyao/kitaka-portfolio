export type EngineeringProject = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  featured?: boolean;
  evidence?: {
    label: string;
    items: {
      label: string;
      value: string;
    }[];
    summary: string;
  };
  links: {
    label: string;
    url: string;
  }[];
  technologies: string[];
};
