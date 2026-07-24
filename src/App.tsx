import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
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
  return (
    <>
      <Navbar />

      <main>
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

export default App;
