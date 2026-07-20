import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-eyebrow">Quality Engineer</p>

      <h1>Hi, I'm Kitaka Munyao.</h1>

      <h2>
        Quality isn't something you test at the end. It's something you build
        from the beginning.
      </h2>

      <p>
        I help product and engineering teams build reliable software through
        thoughtful testing, automation, and close collaboration.
      </p>

      <div className="hero-actions">
        <a href="#experience" className="cta cta-secondary">
          View Experience
        </a>
        <a href="#" className="cta cta-primary">
          Download Résumé
        </a>
      </div>
    </section>
  );
}

export default Hero;
