import { Link } from "react-router-dom";

import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <p className="section-eyebrow">About</p>

      <h2>Quality is built into the process, not inspected at the end.</h2>

      <p>
        I believe the best products are built by teams that understand products
        deeply. Quality isn't something added at the end of development. It's
        shaped through curiosity, collaboration, and asking the right questions
        to learn how a product really works from the very beginning.
      </p>

      <p>
        I enjoy working with engineers, product managers, designers and customer
        support to explore ideas, challenge assumptions and understand how
        people actually use the software we build. The best conversations often
        happen while solving problems together, not sitting in meetings.
      </p>

      <p>
        Throughout my career, those opportunities have reinforced one belief:
        quality isn't owned by QA. The best products come from teams that share
        responsibility for understanding customers, challenging assumptions, and
        building the right thing together.
      </p>

      <div className="about-links">
        <Link className="about-link" to="/how-i-work">
          <span>How I work</span>
          <span className="about-link-arrow" aria-hidden="true">
            →
          </span>
        </Link>

        <Link className="about-link" to="/writing">
          <span>Writing</span>
          <span className="about-link-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

export default About;
