import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Kitaka Munyao</h1>

      <h2>
        Quality isn't something you test at the end. It's something you build
        from the beginning.
      </h2>

      <p>
        I'm a Quality Engineer with over nine years of experience helping teams
        build reliable software through thoughtful testing, automation, and
        close collaboration with product and engineering teams.
      </p>

      <div className="hero-actions">
        <a href="#experience" className="experience-button">
          View Experience
        </a>
        <a href="#" className="resume-button">
          Download Résumé
        </a>
      </div>
    </section>
  );
}

export default Hero;
