import type { CaseStudy } from "../content/caseStudies/types";
import ContentEndNavigation from "./ContentEndNavigation";

import "./CaseStudyLayout.css";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
  nextCaseStudy: CaseStudy;
}

interface CaseStudySectionProps {
  heading: string;
  paragraphs: string[];
}

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
  includeCompany?: boolean;
  sectionHeadingLevel?: 2 | 3;
}

function CaseStudySection({ heading, paragraphs }: CaseStudySectionProps) {
  return (
    <section className="case-study-section">
      <h2>{heading}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={`${heading}-${index}`}>{paragraph}</p>
      ))}
    </section>
  );
}

function CaseStudyDetails({
  caseStudy,
  includeCompany = true,
  sectionHeadingLevel = 3,
}: CaseStudyDetailsProps) {
  const SectionHeading = sectionHeadingLevel === 2 ? "h2" : "h3";

  return (
    <>
      {includeCompany && (
        <div className="case-study-company">
          <h2>{caseStudy.company}</h2>
          <p>{caseStudy.role}</p>
        </div>
      )}

      <section className="case-study-sidebar-section">
        <SectionHeading>Product ecosystem</SectionHeading>

        <ul>
          {caseStudy.productEcosystemItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case-study-sidebar-section">
        <SectionHeading>Focus areas</SectionHeading>

        <ul>
          {caseStudy.focusAreas.map((focusArea) => (
            <li key={focusArea}>{focusArea}</li>
          ))}
        </ul>
      </section>

      <a
        className="case-study-company-link"
        data-company={caseStudy.slug}
        href={caseStudy.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Visit {caseStudy.company}</span>

        <span className="case-study-company-link-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </>
  );
}

function CaseStudyLayout({ caseStudy, nextCaseStudy }: CaseStudyLayoutProps) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="section-eyebrow">{caseStudy.company}</p>

        <h1>{caseStudy.title}</h1>

        <p className="case-study-summary">{caseStudy.summary}</p>
      </header>

      <div className="case-study-mobile-context">
        <p className="case-study-mobile-meta">{caseStudy.role}</p>

        <details
          className="case-study-mobile-details"
          data-company={caseStudy.slug}
        >
          <summary>Product and focus details</summary>

          <div className="case-study-mobile-details-content">
            <CaseStudyDetails
              caseStudy={caseStudy}
              includeCompany={false}
              sectionHeadingLevel={2}
            />
          </div>
        </details>
      </div>

      <div className="case-study-layout">
        <div className="case-study-content">
          <CaseStudySection
            heading="Product ecosystem"
            paragraphs={caseStudy.productEcosystem}
          />

          <CaseStudySection
            heading="Challenge"
            paragraphs={caseStudy.challenge}
          />

          <CaseStudySection
            heading="Approach"
            paragraphs={caseStudy.approach}
          />

          <CaseStudySection heading="Impact" paragraphs={caseStudy.impact} />

          <CaseStudySection
            heading="Reflection"
            paragraphs={caseStudy.reflection}
          />
        </div>

        <aside className="case-study-sidebar" aria-label="Case study details">
          <CaseStudyDetails caseStudy={caseStudy} />
        </aside>
      </div>

      <ContentEndNavigation
        backTo="/#experience"
        backLabel="All experience"
        nextTo={`/case-studies/${nextCaseStudy.slug}`}
        nextLabel="Another case study"
        nextTitle={`${nextCaseStudy.company} — ${nextCaseStudy.title}`}
        nextAccent={nextCaseStudy.slug}
        ariaLabel="Continue exploring case studies"
      />
    </article>
  );
}

export default CaseStudyLayout;
