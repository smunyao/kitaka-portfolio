import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const navbar = document.querySelector(".site-header");

      const navbarHeight =
        navbar instanceof HTMLElement ? navbar.offsetHeight : 0;

      const readingLineRatio = 0.35;

      const readingLine = navbarHeight + window.innerHeight * readingLineRatio;

      const scrollBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollBottom >= documentHeight - 2;

      let currentSection = "";

      if (isAtBottom) {
        currentSection = sectionIds.at(-1) ?? "";
      } else {
        for (const id of sectionIds) {
          const section = document.getElementById(id);

          if (!section) continue;

          const { top } = section.getBoundingClientRect();

          if (top <= readingLine) {
            currentSection = id;
          } else {
            break;
          }
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
