import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");
  const selectedHashTargetRef = useRef(
    decodeURIComponent(window.location.hash.replace(/^#/, "")),
  );

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
        const hashTargetId = selectedHashTargetRef.current;
        const hashTarget = document.getElementById(hashTargetId);
        const hashSection = hashTarget
          ? sectionIds.find((id) => {
              const section = document.getElementById(id);

              return section === hashTarget || section?.contains(hashTarget);
            })
          : undefined;
        const hashTargetBounds = hashTarget?.getBoundingClientRect();
        const isHashTargetVisible =
          hashSection &&
          hashTargetBounds &&
          hashTargetBounds.bottom > navbarHeight &&
          hashTargetBounds.top < window.innerHeight;

        currentSection = isHashTargetVisible
          ? hashSection
          : (sectionIds.at(-1) ?? "");
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

    const handleHashChange = () => {
      selectedHashTargetRef.current = decodeURIComponent(
        window.location.hash.replace(/^#/, ""),
      );
      updateActiveSection();
    };

    const releaseHashPreference = () => {
      selectedHashTargetRef.current = "";
      updateActiveSection();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        ["ArrowDown", "ArrowUp", "End", "Home", "PageDown", "PageUp", " "].includes(
          event.key,
        )
      ) {
        releaseHashPreference();
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("wheel", releaseHashPreference, { passive: true });
    window.addEventListener("touchmove", releaseHashPreference, {
      passive: true,
    });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("wheel", releaseHashPreference);
      window.removeEventListener("touchmove", releaseHashPreference);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionIds]);

  return activeSection;
}
