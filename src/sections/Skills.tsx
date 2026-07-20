import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-group">
          <h3>Quality Engineering</h3>
          <p>
            Manual testing, exploratory testing, API testing,
            integration testing, and automation.
          </p>
        </div>

        <div className="skill-group">
          <h3>Tools & Technologies</h3>
          <p>
            Playwright, TypeScript, JavaScript, Git, CI/CD,
            Postman, and modern web technologies.
          </p>
        </div>

        <div className="skill-group">
          <h3>AI-Assisted Engineering</h3>
          <p>
            Using AI tools to improve test creation,
            debugging, documentation, and development workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;