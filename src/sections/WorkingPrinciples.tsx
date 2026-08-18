import { Link } from "react-router-dom";

import { workingPrinciples } from "../content/workingPrinciples";

import "./WorkingPrinciples.css";

function WorkingPrinciples() {
  return (
    <section id="how-i-work" className="working-principles">
      <p className="section-eyebrow">How I work</p>

      <h2>Principles matter when they change the work.</h2>

      <p className="working-principles-intro">
        These are the habits I bring to product conversations, testing and
        release decisions.
      </p>

      <div className="working-principles-grid">
        {workingPrinciples.map((principle) => (
          <article key={principle.title} className="working-principle">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>

      <Link className="working-principles-link" to="/how-i-work">
        <span>Explore how I work</span>
        <span className="working-principles-link-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </section>
  );
}

export default WorkingPrinciples;
