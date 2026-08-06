import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
}

const SITE_NAME = "Kitaka";
const BASE_URL = "https://kitakamunyao.com";

function Seo({ title, description, canonical, type = "website" }: SeoProps) {
  const canonicalUrl = `${BASE_URL}${canonical}`;

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

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default Seo;
