import "./Experience.css";

const experiences = [
  {
    company: "Harvest",
    url: "https://www.getharvest.com",
    headline: "Building quality at scale",
    context: "Mature SaaS Platform · Web · Mobile · APIs · Integrations",
    description:
      "Working across Harvest and Forecast taught me that quality grows through collaboration as much as testing. From researching automation approaches and improving test coverage to pairing with engineers and shaping releases, I learned how thoughtful quality practices help teams ship reliable software with confidence.",
  },
  {
    company: "Chili Piper",
    url: "https://www.chilipiper.com",
    headline: "Navigating complexity",
    context: "CRM Integrations · Calendars · AI Features · Customer Workflows",
    description:
      "Testing Chili Piper meant understanding systems that depended on other systems. Working across integrations, customer workflows and new AI capabilities reinforced the importance of learning products deeply before deciding how to test them.",
  },
  {
    company: "Sitemate",
    url: "https://sitemate.com",
    headline: "Building quality from the ground up",
    context: "Startup · QA Foundations · Team Growth",
    description:
      "Joining a growing startup gave me the opportunity to build QA practices while remaining hands-on with testing. I helped establish processes, hired and mentored the first QA engineers, and worked alongside the team to make quality part of everyday development rather than something added at the end.",
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
