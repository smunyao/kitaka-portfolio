import { howIWork } from "../content/howIWork";
import EditorialPageHeader from "../shared/EditorialPageHeader";
import Footer from "../shared/Footer";
import Seo from "../shared/Seo";

import "./HowIWorkPage.css";

function HowIWorkPage() {
  return (
    <>
      <Seo
        title="How I work | Kitaka"
        description="How I approach software quality, product understanding, risk, exploratory testing, automation, collaboration and building confidence."
        canonical="/how-i-work"
        type="article"
      />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <EditorialPageHeader
        backTo="/#about"
        backLabel="Back to about"
        ariaLabel="How I work navigation"
      />

      <main id="main-content" tabIndex={-1}>
        <article className="how-i-work">
          <header className="how-i-work-header">
            <p className="section-eyebrow">{howIWork.eyebrow}</p>

            <h1>{howIWork.title}</h1>

            <div className="how-i-work-introduction">
              {howIWork.introduction.map((paragraph, index) => (
                <p key={`introduction-${index}`}>{paragraph}</p>
              ))}
            </div>
          </header>

          <div className="how-i-work-content">
            {howIWork.sections.map((section) => (
              <section key={section.title} className="how-i-work-section">
                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="how-i-work-section how-i-work-closing">
              <h2>{howIWork.closing.title}</h2>

              {howIWork.closing.paragraphs.map((paragraph, index) => (
                <p key={`closing-${index}`}>{paragraph}</p>
              ))}
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default HowIWorkPage;
