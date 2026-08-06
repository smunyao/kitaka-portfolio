import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  image?: string;
}

const SITE_NAME = "Kitaka";
const BASE_URL = "https://kitakamunyao.com";
const DEFAULT_IMAGE = "/og-image-v2.png";

function Seo({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
}: SeoProps) {
  const canonicalUrl = `${BASE_URL}${canonical}`;
  const imageUrl = `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="author" content="Kitaka Munyao" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default Seo;
