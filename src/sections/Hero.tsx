import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="section-eyebrow">
        Quality Engineering • Product Thinking • Collaboration
      </p>

      <h1>Quality starts long before testing.</h1>

      <p className="hero-intro">
        I help product and engineering teams understand complex systems,
        uncover risk early and ship with confidence.
      </p>

      <a
        className="hero-continuation"
        href="#experience"
        aria-label="Continue to experience"
      >
        <span className="hero-continuation-track" aria-hidden="true">
          <span className="hero-continuation-chevron" />
          <span className="hero-continuation-chevron" />
          <span className="hero-continuation-chevron" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
