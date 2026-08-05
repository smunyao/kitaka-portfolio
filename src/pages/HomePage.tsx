import { useEffect } from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
