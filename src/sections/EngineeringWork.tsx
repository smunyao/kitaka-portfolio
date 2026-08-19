import { engineeringWork } from "../content/engineeringWork";

import "./EngineeringWork.css";

function EngineeringWork() {
  const portfolio = engineeringWork.find(
    (project) => project.slug === "portfolio",
  );

  if (!portfolio) {
    return null;
  }

  return (
    <section
      id="engineering-work"
      className="home-section home-section--compact engineering-work"
    >
      <p className="section-eyebrow">Engineering work</p>

      <h2>{portfolio.title}</h2>

      <p className="engineering-work-description">{portfolio.description}</p>

      <p className="engineering-work-summary">{portfolio.summary}</p>

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
          <span>View the source on GitHub</span>
          <span className="engineering-work-link-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      )}
    </section>
  );
}

export default EngineeringWork;
