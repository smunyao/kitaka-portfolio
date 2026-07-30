import "./Skills.css";
import { skillPrinciples } from "../content/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="skills-eyebrow">How I Work</p>

      <h2>How I put quality into practice.</h2>

      <div className="skills-grid">
        {skillPrinciples.map((principle) => (
          <div key={principle.title} className="skill-group">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
