import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const navbar = document.querySelector(".site-header");

      const navbarHeight =
        navbar instanceof HTMLElement ? navbar.offsetHeight : 0;

      // Reading line: just below the sticky navbar,
      // about 35% down the viewport.
      const readingLineRatio = 0.35;

      const readingLine = navbarHeight + window.innerHeight * readingLineRatio;

      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        const top = rect.top;
        const bottom = rect.bottom;

        if (top <= readingLine && bottom >= readingLine) {
          currentSection = id;
          break;
        }
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
