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
          <article
            key={project.slug}
            className={`engineering-work-item${project.featured ? " engineering-work-item--featured" : ""}`}
          >
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

            {project.evidence && (
              <figure className="engineering-work-evidence">
                <figcaption>{project.evidence.label}</figcaption>

                <ol>
                  {project.evidence.items.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ol>

                <p>{project.evidence.summary}</p>
              </figure>
            )}

            <div className="engineering-work-links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  className="engineering-work-link"
                  href={link.url}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.label}</span>
                  <span
                    className="engineering-work-link-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EngineeringWork;
