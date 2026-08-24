import { useParams } from "react-router-dom";

import { getCaseStudyBySlug } from "../content/caseStudies";

import CaseStudyLayout from "../shared/CaseStudyLayout";
import EditorialPageHeader from "../shared/EditorialPageHeader";
import Footer from "../shared/Footer";
import NotFound from "./NotFound";
import Seo from "../shared/Seo";

function CaseStudyPage() {
  const { slug } = useParams();

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <NotFound variant="case-study" />;
  }

  return (
    <>
      <Seo path={`/case-studies/${caseStudy.slug}`} />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <EditorialPageHeader
        backTo="/#experience"
        backLabel="Back to experience"
        ariaLabel="Case study navigation"
      />

      <main id="main-content" tabIndex={-1}>
        <CaseStudyLayout caseStudy={caseStudy} />
      </main>

      <Footer />
    </>
  );
}

export default CaseStudyPage;
