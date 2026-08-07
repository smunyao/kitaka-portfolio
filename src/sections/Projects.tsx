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
                  View source →
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site →
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
