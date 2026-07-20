import "./Experience.css";

const experiences = [
  {
    company: "Harvest",
    url: "https://www.getharvest.com",
    headline: "Building quality across",
    context: "SaaS Platform · Web Applications · APIs · Integrations",
    description:
      "Worked across the Harvest and Forecast ecosystem, helping teams deliver reliable software through thoughtful testing, automation, and close collaboration with engineering and product teams.",
  },
  {
    company: "Chili Piper",
    url: "https://www.chilipiper.com",
    headline: "Improving quality across",
    context: "B2B SaaS · Integrations · Calendar Systems · AI Features",
    description:
      "Focused on complex workflows and integrations, partnering with engineering and product teams to improve confidence in customer-facing experiences and new product capabilities.",
  },
  {
    company: "Sitemate",
    url: "https://sitemate.com",
    headline: "Building and leading QA practices at",
    context: "Startup Environment · QA Practices · Team Enablement",
    description:
      "Helped establish and improve quality practices within a growing engineering team, creating processes that supported reliable releases and stronger collaboration.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <p className="experience-eyebrow">Experience</p>

      <h2>
        Quality engineering across products, platforms, and growing teams.
      </h2>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="experience-item">
            <h3>
              {experience.headline}{" "}
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company} ↗
              </a>
            </h3>

            <p className="experience-context">{experience.context}</p>

            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
