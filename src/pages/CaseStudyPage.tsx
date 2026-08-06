import { Link, Navigate, useParams } from "react-router-dom";

import { getCaseStudyBySlug } from "../content/caseStudies";
import CaseStudyLayout from "../shared/CaseStudyLayout";
import Footer from "../shared/Footer";

import "./CaseStudyPage.css";

function CaseStudyPage() {
  const { slug } = useParams();

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="case-study-page-header">
        <div className="case-study-page-nav">
          <nav
            className="case-study-page-header-content"
            aria-label="Case study navigation"
          >
            <Link
              className="case-study-home-link"
              to="/"
              aria-label="Kitaka Munyao home"
            >
              Kitaka
            </Link>

            <Link className="case-study-back-link" to="/#experience">
              ← Back to experience
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <CaseStudyLayout caseStudy={caseStudy} />
      </main>

      <Footer />
    </>
  );
}

export default CaseStudyPage;
