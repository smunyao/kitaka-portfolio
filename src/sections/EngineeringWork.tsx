import { engineeringWork } from "../content/engineeringWork";

import "./EngineeringWork.css";

function EngineeringWork() {
  if (engineeringWork.length === 0) {
    return null;
  }

  return (
    <section
      id="engineering-work"
      className="home-section home-section--compact engineering-work"
    >
      <h2>Engineering work</h2>

      <div className="engineering-work-list">
        {engineeringWork.map((project) => (
          <article key={project.slug} className="engineering-work-item">
            <h3>{project.title}</h3>

            <p className="engineering-work-description">
              {project.description}
            </p>

            <p className="engineering-work-summary">{project.summary}</p>

            <ul
              className="engineering-work-technologies"
              aria-label={`${project.title} technologies`}
            >
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <a
              className="engineering-work-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{project.repositoryLabel}</span>
              <span
                className="engineering-work-link-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EngineeringWork;
