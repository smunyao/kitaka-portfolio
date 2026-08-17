import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Kitaka Munyao";
const BASE_URL = "https://kitakamunyao.com";
const DEFAULT_SOCIAL_IMAGE = "/og-image-v2.png";

function Seo({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_SOCIAL_IMAGE,
  noIndex = false,
}: SeoProps) {
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const imageUrl = `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="author" content="Kitaka Munyao" />

      {noIndex && <meta name="robots" content="noindex, follow" />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={SITE_NAME} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta property="og:image" content={imageUrl} />

      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:alt" content="Kitaka Munyao, Quality Engineer" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default Seo;
