import type { CaseStudy } from "../content/caseStudies/types";

import "./CaseStudyLayout.css";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
}

interface CaseStudySectionProps {
  heading: string;
  paragraphs: string[];
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

function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="section-eyebrow">{caseStudy.company}</p>

        <h1>{caseStudy.title}</h1>

        <p className="case-study-summary">{caseStudy.summary}</p>
      </header>

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
          <div className="case-study-company">
            <h2>{caseStudy.company}</h2>

            <p>{caseStudy.role}</p>
            <p>{caseStudy.period}</p>
          </div>

          <section className="case-study-sidebar-section">
            <h3>Focus areas</h3>

            <ul>
              {caseStudy.focusAreas.map((focusArea) => (
                <li key={focusArea}>{focusArea}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-sidebar-section">
            <h3>Product ecosystem</h3>

            <ul>
              {caseStudy.productEcosystemItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <a
            className="case-study-company-link"
            href={caseStudy.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {caseStudy.company} →
          </a>
        </aside>
      </div>
    </article>
  );
}

export default CaseStudyLayout;
