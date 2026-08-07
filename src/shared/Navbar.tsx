import { useActiveSection } from "../hooks/useActiveSection";

import "./Navbar.css";

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"];

function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS);

  const experienceActive =
    activeSection === "experience" || activeSection === "projects";

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-inner">
          <a
            className="navbar-logo"
            href="#top"
            aria-label="Kitaka Munyao home"
          >
            Kitaka
          </a>

          <ul className="navbar-links">
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                aria-current={
                  activeSection === "about" ? "location" : undefined
                }
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className={experienceActive ? "active" : ""}
                aria-current={experienceActive ? "location" : undefined}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                aria-current={
                  activeSection === "skills" ? "location" : undefined
                }
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                aria-current={
                  activeSection === "contact" ? "location" : undefined
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
