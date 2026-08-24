import type { RouteMetadata } from "./routeMetadata";

const BASE_URL = "https://kitakamunyao.com";
const PERSON_ID = `${BASE_URL}/#person`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Kitaka Munyao",
  url: `${BASE_URL}/`,
  jobTitle: "Quality Engineer",
  sameAs: [
    "https://www.linkedin.com/in/sylvester-munyao/",
    "https://github.com/smunyao",
  ],
};

export function buildStructuredData(path: string, metadata: RouteMetadata) {
  const configuration = metadata.structuredData;

  if (!configuration) {
    return undefined;
  }

  const canonicalUrl = `${BASE_URL}${path}`;

  if (configuration.kind === "profile") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          url: `${BASE_URL}/`,
          name: "Kitaka Munyao",
          publisher: { "@id": PERSON_ID },
        },
        {
          "@type": "ProfilePage",
          "@id": `${BASE_URL}/#profile-page`,
          url: `${BASE_URL}/`,
          name: metadata.title,
          description: metadata.description,
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: person,
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": configuration.kind === "blog-posting" ? "BlogPosting" : "Article",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: canonicalUrl,
    headline: configuration.headline,
    description: metadata.description,
    image: `${BASE_URL}${metadata.image}`,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      url: person.url,
    },
    isPartOf: { "@id": WEBSITE_ID },
    ...(configuration.datePublished
      ? { datePublished: configuration.datePublished }
      : {}),
  };
}
