import { Link } from "react-router-dom";

import { experiences } from "../content/experience";

import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <p className="section-eyebrow">Experience</p>

      <h2>The teams that shaped how I think about quality.</h2>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="experience-item">
            <div className="experience-item-header">
              <h3 className="experience-company">{experience.company}</h3>

              {experience.caseStudyUrl && (
                <Link
                  className="experience-case-study-link"
                  data-company={experience.slug}
                  to={experience.caseStudyUrl}
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
            </div>

            <h4 className="experience-headline">{experience.headline}</h4>

            <p className="experience-context">{experience.context}</p>

            <p className="experience-description">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
