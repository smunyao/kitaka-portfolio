import { useEffect, useRef, useState } from "react";

import { useActiveSection } from "../hooks/useActiveSection";

import "./Navbar.css";

const SECTION_IDS = ["experience", "how-i-work", "writing", "contact"];

function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (navigationRef.current?.contains(event.target as Node)) return;

      setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const wideNavigation = window.matchMedia("(min-width: 351px)");
    const closeCompactMenu = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    wideNavigation.addEventListener("change", closeCompactMenu);

    return () => {
      wideNavigation.removeEventListener("change", closeCompactMenu);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav
        ref={navigationRef}
        className="navbar"
        aria-label="Primary navigation"
      >
        <div className="navbar-inner">
          <a
            className="navbar-logo"
            href="#top"
            aria-label="Kitaka Munyao home"
            onClick={closeMenu}
          >
            Kitaka
          </a>

          <button
            ref={menuButtonRef}
            className="navbar-menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation-links"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span>Menu</span>
            <span className="navbar-menu-icon" aria-hidden="true">
              ↓
            </span>
          </button>

          <ul
            id="primary-navigation-links"
            className={`navbar-links${isMenuOpen ? " is-open" : ""}`}
          >
            <li>
              <a
                href="#experience"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
