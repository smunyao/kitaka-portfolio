import { Link, Navigate, useParams } from "react-router-dom";

import { getCaseStudyBySlug } from "../content/caseStudies";
import CaseStudyLayout from "../shared/CaseStudyLayout";
import Footer from "../shared/Footer";

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

      <header className="case-study-navigation">
        <Link to="/#experience">← Back to experience</Link>
      </header>

      <main id="main-content" tabIndex={-1}>
        <CaseStudyLayout caseStudy={caseStudy} />
      </main>

      <Footer />
    </>
  );
}

export default CaseStudyPage;
