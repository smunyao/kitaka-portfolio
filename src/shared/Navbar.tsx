import { useActiveSection } from "../hooks/useActiveSection";

import "./Navbar.css";

function Navbar() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "skills",
    "contact",
  ]);

  // const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.currentTarget.blur();
  // };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">
            Kitaka
          </a>

          <ul className="navbar-links">
            <li>
              <a
                href="#about"
                // onClick={handleClick}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                // onClick={handleClick}
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                // onClick={handleClick}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                // onClick={handleClick}
                className={activeSection === "contact" ? "active" : ""}
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
