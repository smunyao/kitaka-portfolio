import { useEffect } from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Seo from "../shared/Seo";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function HomePage() {
  useEffect(() => {
    // Keep initial hash navigation in sync with active-section tracking.
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <>
      <Seo
        title="Kitaka | Quality Engineer"
        description="Senior Quality Engineer specialising in software quality, automation, engineering practices and testing strategy. Explore experience, projects and detailed case studies."
        canonical="/"
      />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
