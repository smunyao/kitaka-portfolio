import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-eyebrow">
        Quality Engineering • Product Thinking • Collaboration
      </p>

      <h1>Quality starts long before testing.</h1>

      <h2>
        I work with engineers, product managers and designers to understand
        products, challenge assumptions, and help teams build software people
        can trust.
      </h2>

      <p>
        Bugs matter, but they're rarely the whole story. For me, quality is
        about understanding how a product works, how people use it, and how
        teams work together to build it. I enjoy exploring ideas with engineers,
        learning from customer support, working with product managers, and
        helping teams make decisions that lead to better software.
      </p>

      <p className="hero-signature">Quality starts long before testing.</p>

      <div className="hero-actions">
        <a href="#experience" className="cta cta-primary">
          Meet the engineer
        </a>
        <a
          href="/resume/sylvester-kitaka-munyao-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cta cta-secondary"
        >
          View Résumé
        </a>
      </div>
    </section>
  );
}

export default Hero;
