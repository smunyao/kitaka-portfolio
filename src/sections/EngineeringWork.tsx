import { projects } from "../content/projects/projects";

import "./EngineeringWork.css";

function EngineeringWork() {
  const portfolio = projects.find((project) => project.slug === "portfolio");

  if (!portfolio) {
    return null;
  }

  return (
    <section id="engineering-work" className="engineering-work">
      <p className="section-eyebrow">Engineering work</p>

      <h2>This portfolio, treated as a product.</h2>

      <p className="engineering-work-description">{portfolio.description}</p>

      <p className="engineering-work-summary">
        Built and evolved in public through incremental releases, documented
        decisions and automated checks for its critical user journeys.
      </p>

      <ul
        className="engineering-work-technologies"
        aria-label="Portfolio technologies"
      >
        {portfolio.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {portfolio.repositoryUrl && (
        <a
          className="engineering-work-link"
          href={portfolio.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Explore the source and development history</span>
          <span className="engineering-work-link-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      )}
    </section>
  );
}

export default EngineeringWork;
