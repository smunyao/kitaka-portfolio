import { Link } from "react-router-dom";

import Footer from "../shared/Footer";
import Seo from "../shared/Seo";

import "./NotFound.css";

type NotFoundVariant = "page" | "article" | "case-study";

interface NotFoundProps {
  variant?: NotFoundVariant;
}

interface NotFoundContent {
  eyebrow: string;
  title: string;
  description: string;
  recoveryTo: string;
  recoveryLabel: string;
  seoTitle: string;
  seoDescription: string;
}

const notFoundContent: Record<NotFoundVariant, NotFoundContent> = {
  page: {
    eyebrow: "Page not found",
    title: "This page doesn’t exist.",
    description:
      "The page may have moved, or the address may be incorrect. You can return to the homepage and continue exploring from there.",
    recoveryTo: "/",
    recoveryLabel: "Return to the homepage",
    seoTitle: "Page not found | Kitaka",
    seoDescription: "The requested page could not be found.",
  },
  article: {
    eyebrow: "Writing",
    title: "Article not found.",
    description:
      "This article may have moved or is no longer available. You can browse the writing archive to find something else to read.",
    recoveryTo: "/writing",
    recoveryLabel: "Browse all writing",
    seoTitle: "Article not found | Kitaka",
    seoDescription: "The requested article could not be found.",
  },
  "case-study": {
    eyebrow: "Case studies",
    title: "Case study not found.",
    description:
      "This case study may have moved or is no longer available. You can return to the experience section to explore the available case studies.",
    recoveryTo: "/#experience",
    recoveryLabel: "Return to experience",
    seoTitle: "Case study not found | Kitaka",
    seoDescription: "The requested case study could not be found.",
  },
};

function NotFound({ variant = "page" }: NotFoundProps) {
  const content = notFoundContent[variant];

  return (
    <>
      <Seo
        title={content.seoTitle}
        description={content.seoDescription}
        noIndex
      />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <main id="main-content" className="not-found-main" tabIndex={-1}>
        <section className="not-found" aria-labelledby="not-found-title">
          <p className="section-eyebrow">{content.eyebrow}</p>

          <h1 id="not-found-title">{content.title}</h1>

          <p className="not-found-description">{content.description}</p>

          <Link className="not-found-recovery-link" to={content.recoveryTo}>
            <span>{content.recoveryLabel}</span>

            <span className="not-found-recovery-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
