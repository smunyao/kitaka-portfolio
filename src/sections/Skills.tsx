import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="skills-eyebrow">Skills</p>

      <h2>
        The tools, practices, and approaches I use to build confidence in
        software.
      </h2>

      <div className="skills-grid">
        <div className="skill-group">
          <h3>Quality Engineering</h3>
          <p>
            Test strategy, exploratory testing, API testing, integration
            testing, and building confidence throughout the software development
            lifecycle.
          </p>
        </div>

        <div className="skill-group">
          <h3>Automation & Tooling</h3>
          <p>
            Playwright, TypeScript, JavaScript, CI/CD workflows, Postman, and
            creating maintainable automated test solutions.
          </p>
        </div>

        <div className="skill-group">
          <h3>AI-Assisted Engineering</h3>
          <p>
            Using AI tools to improve test creation, debugging, documentation,
            research, and everyday engineering workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
