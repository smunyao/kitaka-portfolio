import { experiences } from "../content/experience";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <p className="experience-eyebrow">Experience</p>

      <h2>The teams that shaped how I think about quality.</h2>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="experience-item">
            <a
              className="experience-company"
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>

            <h3>{experience.headline}</h3>

            <p className="experience-context">{experience.context}</p>

            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
