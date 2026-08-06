import type { CaseStudy } from "../content/caseStudies/types";

import "./CaseStudyLayout.css";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
}

interface CaseStudySectionProps {
  heading: string;
  paragraphs: string[];
}

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
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

function CaseStudyDetails({ caseStudy }: CaseStudyDetailsProps) {
  return (
    <>
      <div className="case-study-company">
        <h2>{caseStudy.company}</h2>
        <p>{caseStudy.role}</p>
        <p>{caseStudy.period}</p>
      </div>

      <section className="case-study-sidebar-section">
        <h3>Product ecosystem</h3>

        <ul>
          {caseStudy.productEcosystemItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case-study-sidebar-section">
        <h3>Focus areas</h3>

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

function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="section-eyebrow">{caseStudy.company}</p>

        <h1>{caseStudy.title}</h1>

        <p className="case-study-summary">{caseStudy.summary}</p>
      </header>

      <details className="case-study-mobile-details">
        <summary>At a glance</summary>

        <div className="case-study-mobile-details-content">
          <CaseStudyDetails caseStudy={caseStudy} />
        </div>
      </details>

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
    </article>
  );
}

export default CaseStudyLayout;
