import "./About.css";
import { useReveal } from "../hooks/useReveal";

function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`about reveal ${visible ? "visible" : ""}`}
    >
      <p className="about-eyebrow">About</p>

      <h2>Quality is built into the process, not inspected at the end.</h2>

      <p>
        I believe the best products are built by teams that understand them
        deeply. Quality isn't something added at the end of development. It's
        shaped through curiosity, collaboration, and understanding the product
        from the very beginning.
      </p>

      <p>
        I enjoy working with engineers, product managers, designers and customer
        support to explore ideas, challenge assumptions and understand how
        people actually use the software we build. The best conversations often
        happen while solving problems together, not sitting in meetings.
      </p>

      <p>
        Throughout my career I've helped improve testing practices, build
        automation, mentor other quality engineers and grow QA functions. Those
        experiences have reinforced one belief: quality isn't owned by QA. It's
        something the whole team builds together.
      </p>
    </section>
  );
}

export default About;
