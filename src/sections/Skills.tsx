import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="skills-eyebrow">How I Work</p>

      <h2>How I put quality into practice.</h2>

      <div className="skills-grid">
        <div className="skill-group">
          <h3>Understanding Products</h3>

          <p>
            I learn products before I test them. Working closely with engineers,
            product managers, designers and support teams helps me understand
            how software is built, how customers use it and where quality has
            the greatest impact.
          </p>
        </div>

        <div className="skill-group">
          <h3>Building Confidence</h3>

          <p>
            Testing is part of how I build confidence, not where quality begins.
            I combine exploratory testing, automation and thoughtful
            investigation to help teams understand risk, make informed decisions
            and ship reliable software.
          </p>
        </div>

        <div className="skill-group">
          <h3>Building Together</h3>

          <p>
            I like being part of the work, not standing beside it. I test,
            automate, pair with engineers, learn from teammates and share
            feedback because quality is strongest when everyone shares
            responsibility for it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
