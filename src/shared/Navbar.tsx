import { useActiveSection } from "../hooks/useActiveSection";

import "./Navbar.css";

function Navbar() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "skills",
    "contact",
  ]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">
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
