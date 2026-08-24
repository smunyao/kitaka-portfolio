import { Link } from "react-router-dom";

import { experiences } from "../content/experience";

import "./Experience.css";

function Experience() {
  return (
    <section
      id="experience"
      className="home-section home-section--evidence experience"
    >
      <h2>Experience across products, teams and stages of growth.</h2>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="experience-item">
            <div className="experience-item-header">
              <h3 className="experience-company">{experience.company}</h3>
            </div>

            <p className="experience-headline">{experience.headline}</p>

            <p className="experience-context">{experience.context}</p>

            <p className="experience-summary">{experience.summary}</p>

            {experience.caseStudyUrl && (
              <Link
                className="experience-case-study-link"
                data-company={experience.slug}
                to={experience.caseStudyUrl}
                aria-label={`Read the case study for ${experience.company}`}
              >
                <span>Read the case study</span>

                <span
                  className="experience-case-study-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
