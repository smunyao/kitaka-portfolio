import { projects } from "../content/projects/projects";

import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-eyebrow">Projects</p>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.slug} className="project-item">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>

              <span className="project-status">{project.status}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <p className="project-summary">{project.summary}</p>

            <ul
              className="project-technologies"
              aria-label={`${project.title} technologies`}
            >
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View source</span>
                  <span className="project-link-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit site</span>
                  <span className="project-link-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
