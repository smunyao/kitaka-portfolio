import { useEffect } from "react";

import { getRouteMetadata } from "../content/routeMetadata";

interface PublicPageSeoProps {
  path: string;
  noIndex?: false;
}

interface ErrorPageSeoProps {
  title: string;
  description: string;
  noIndex: true;
}

type SeoProps = PublicPageSeoProps | ErrorPageSeoProps;

const SITE_NAME = "Kitaka Munyao";
const BASE_URL = "https://kitakamunyao.com";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

function removeSocialMetadata() {
  document.head
    .querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')
    .forEach((element) => element.remove());
}

function Seo(props: SeoProps) {
  useEffect(() => {
    if (props.noIndex) {
      document.title = props.title;
      upsertMeta("name", "description", props.description);
      upsertMeta("name", "robots", "noindex, follow");
      document.head.querySelector('link[rel="canonical"]')?.remove();
      removeSocialMetadata();
      return;
    }

    const { title, description, type, image, imageAlt } = getRouteMetadata(
      props.path,
    );
    const canonicalUrl = `${BASE_URL}${props.path}`;
    const imageUrl = `${BASE_URL}${image}`;

    document.title = title;
    document.head.querySelector('meta[name="robots"]')?.remove();

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", SITE_NAME);
    upsertCanonical(canonicalUrl);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:type", "image/png");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", imageAlt);
  }, [props]);

  return null;
}

export default Seo;
