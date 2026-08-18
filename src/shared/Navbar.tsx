import { useActiveSection } from "../hooks/useActiveSection";

import "./Navbar.css";

const SECTION_IDS = ["experience", "how-i-work", "writing", "contact"];

function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS);

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
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
                aria-current={
                  activeSection === "experience" ? "location" : undefined
                }
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#how-i-work"
                className={activeSection === "how-i-work" ? "active" : ""}
                aria-current={
                  activeSection === "how-i-work" ? "location" : undefined
                }
              >
                How I work
              </a>
            </li>

            <li>
              <a
                href="#writing"
                className={activeSection === "writing" ? "active" : ""}
                aria-current={
                  activeSection === "writing" ? "location" : undefined
                }
              >
                Writing
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
