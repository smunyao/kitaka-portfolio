import { useEffect, useLayoutEffect, useRef } from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Seo from "../shared/Seo";
import Hero from "../sections/Hero";
import EngineeringWork from "../sections/EngineeringWork";
import Experience from "../sections/Experience";
import FeaturedWriting from "../sections/FeaturedWriting";
import WorkingPrinciples from "../sections/WorkingPrinciples";
import Contact from "../sections/Contact";

import "./HomePage.css";

function HomePage() {
  const flowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const flow = flowRef.current;

    if (!flow) return;

    const visualViewport = window.visualViewport;
    let frameId = 0;

    const updateViewportHeight = () => {
      const viewportHeight = visualViewport?.height ?? window.innerHeight;
      const viewportBottom =
        viewportHeight + (visualViewport?.offsetTop ?? 0);

      flow.style.setProperty(
        "--home-viewport-height",
        `${Math.ceil(viewportHeight)}px`,
      );
      flow.style.setProperty(
        "--home-viewport-bottom",
        `${Math.ceil(viewportBottom)}px`,
      );
    };

    const scheduleViewportUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateViewportHeight);
    };

    updateViewportHeight();
    visualViewport?.addEventListener("resize", scheduleViewportUpdate);
    visualViewport?.addEventListener("scroll", scheduleViewportUpdate);
    window.addEventListener("resize", scheduleViewportUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      visualViewport?.removeEventListener("resize", scheduleViewportUpdate);
      visualViewport?.removeEventListener("scroll", scheduleViewportUpdate);
      window.removeEventListener("resize", scheduleViewportUpdate);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    let frameId = 0;

    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const updateHeroFade = () => {
      const contentTop = content.getBoundingClientRect().top;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      const fadeStart = viewportHeight * (isMobile ? 0.95 : 0.9);
      const fadeEnd = viewportHeight * (isMobile ? 0.4 : 0.25);

      const progress = clamp((fadeStart - contentTop) / (fadeStart - fadeEnd));

      const easedProgress = 0.5 * (1 - Math.cos(Math.PI * progress));

      hero.style.setProperty("--hero-fade", easedProgress.toString());
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(updateHeroFade);
    };

    updateHeroFade();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="top" aria-hidden="true" />

      <Seo
        title="Kitaka Munyao | Quality Engineer"
        description="Quality Engineer helping product and engineering teams understand complex systems, uncover risk early and ship with confidence. Explore experience and case studies."
        canonical="/"
      />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <div ref={flowRef} className="home-flow">
          <div ref={heroRef} className="home-hero-layer">
            <Hero />
          </div>

          <div className="home-hero-space" aria-hidden="true" />

          <div ref={contentRef} className="home-content">
            <Experience />
            <WorkingPrinciples />
            <FeaturedWriting />
            <EngineeringWork />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
