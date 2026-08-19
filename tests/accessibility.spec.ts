import { expect, test } from "@playwright/test";

test.describe("accessibility", () => {
  test("skip link is first in the keyboard order and moves focus to main", async ({
    page,
  }) => {
    await page.goto("/");

    const skipLink = page.getByRole("link", { name: "Skip to main content" });

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press("Enter");

    await expect(page).toHaveURL(/#main-content$/);
    await expect(page.getByRole("main")).toBeFocused();
  });

  test("recovery link has a visible keyboard focus indicator", async ({
    page,
  }) => {
    await page.goto("/this-page-does-not-exist");

    const recoveryLink = page.getByRole("link", {
      name: "Return to the homepage",
    });

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await expect(recoveryLink).toBeFocused();
    await expect(recoveryLink).toHaveCSS("outline-style", "solid");
    await expect(recoveryLink).toHaveCSS("outline-width", "3px");
    await expect(recoveryLink).toHaveCSS("outline-offset", "4px");
  });

  test("reduced motion removes the fixed hero transition layout", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    await expect(page.locator(".home-hero-layer")).toHaveCSS(
      "position",
      "relative",
    );
    await expect(page.locator(".home-hero-layer")).toHaveCSS("opacity", "1");
    await expect(page.locator(".home-hero-space")).toHaveCSS("display", "none");
    await expect(page.locator(".hero h1")).toBeVisible();
    await expect(page.locator(".hero h1")).toHaveCSS("animation-name", "none");
    await expect(page.locator(".hero-intro")).toBeVisible();
  });

  test("hero remains readable at a narrow mobile width", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Quality starts long before testing.",
      }),
    ).toBeVisible();
    await expect(page.locator(".hero-intro")).toBeVisible();
    await expect(page.locator(".home-hero-layer")).toHaveCSS(
      "position",
      "fixed",
    );

    const experienceTop = await page
      .locator("#experience")
      .evaluate((element) => element.getBoundingClientRect().top);

    expect(experienceTop).toBeGreaterThanOrEqual(568 + 96);

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );

    expect(horizontalOverflow).toBeLessThanOrEqual(0);
  });

  test("homepage navigation yields to the hero until visitors interact", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const header = page.locator(".site-header");
    const heroLayer = page.locator(".home-hero-layer");

    await expect(header).toHaveCSS("opacity", "0");
    await expect(heroLayer).toHaveCSS("opacity", "1");

    const initialLayout = await page.evaluate(() => ({
      experienceTop: document
        .querySelector("#experience")!
        .getBoundingClientRect().top,
      viewportHeight: window.innerHeight,
    }));

    expect(initialLayout.experienceTop).toBeGreaterThanOrEqual(
      initialLayout.viewportHeight + 96,
    );

    await page.evaluate(() => window.scrollTo(0, 48));

    await expect(header).toHaveCSS("opacity", "1");

    await page.evaluate(() => window.scrollTo(0, 0));

    await expect(header).toHaveCSS("opacity", "0");
  });

  test("keyboard focus reveals the initially hidden navigation", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.locator(".site-header");
    const homeLink = page.getByRole("link", { name: "Kitaka Munyao home" });

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to main content" }),
    ).toBeFocused();

    await page.keyboard.press("Tab");

    await expect(homeLink).toBeFocused();
    await expect(header).toHaveCSS("opacity", "1");
  });

  test("short landscape loads with an unfaded, fully framed hero", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 882, height: 344 });
    await page.goto("/");

    await expect(page.locator(".site-header")).toHaveCSS("opacity", "0");
    await expect(page.locator(".home-hero-layer")).toHaveCSS("opacity", "1");

    const landscapeLayout = await page.evaluate(() => ({
      experienceTop: document
        .querySelector("#experience")!
        .getBoundingClientRect().top,
      heroHeight: document.querySelector(".hero")!.getBoundingClientRect()
        .height,
      viewportHeight: window.innerHeight,
    }));

    expect(landscapeLayout.heroHeight).toBe(landscapeLayout.viewportHeight);
    expect(landscapeLayout.experienceTop).toBeGreaterThanOrEqual(
      landscapeLayout.viewportHeight,
    );
  });

  test("compact navigation supports touch and keyboard operation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Menu" });

    await menuButton.focus();
    await expect(menuButton).toHaveCSS("outline-style", "solid");
    await expect(menuButton).toHaveCSS("outline-width", "3px");

    await menuButton.press("Enter");

    const navigationLinks = page.locator(".navbar-links").getByRole("link");

    for (const link of await navigationLinks.all()) {
      const height = await link.evaluate(
        (element) => element.getBoundingClientRect().height,
      );

      expect(Math.round(height)).toBeGreaterThanOrEqual(44);
    }

    const experienceLink = page.getByRole("link", {
      name: "Experience",
      exact: true,
    });

    await experienceLink.focus();
    await experienceLink.press("Escape");

    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await expect(menuButton).toBeFocused();
  });

  test("footer covers the fixed hero at the bottom of a short landscape viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 882, height: 344 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footerLayout = await page.locator(".footer").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const styles = getComputedStyle(element);

      return {
        backgroundColor: styles.backgroundColor,
        bottom: rect.bottom,
        viewportHeight: window.innerHeight,
        width: rect.width,
        viewportWidth: window.innerWidth,
      };
    });

    expect(footerLayout.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(
      Math.abs(footerLayout.bottom - footerLayout.viewportHeight),
    ).toBeLessThanOrEqual(1);
    expect(footerLayout.width).toBeGreaterThanOrEqual(
      footerLayout.viewportWidth - 2,
    );
  });

  test("experience case-study links retain a visible focus indicator", async ({
    page,
  }) => {
    await page.goto("/#experience");

    const caseStudyLink = page.getByRole("link", {
      name: "Read the Harvest case study",
    });

    await caseStudyLink.focus();

    await expect(caseStudyLink).toBeFocused();
    await expect(caseStudyLink).toHaveCSS("outline-style", "solid");
    await expect(caseStudyLink).toHaveCSS("outline-width", "3px");
  });

  test("mobile case-study context is visible before optional details", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/case-studies/sitemate");

    const mobileContext = page.locator(".case-study-mobile-context");

    await expect(
      mobileContext.getByText("QA Engineer and Lead", { exact: true }),
    ).toBeVisible();
    await expect(
      mobileContext.getByText("2019–2022", { exact: true }),
    ).toBeVisible();

    const details = page.locator(".case-study-mobile-details");
    const summary = page.getByText("Product and focus details", {
      exact: true,
    });

    await expect(details).not.toHaveAttribute("open", "");
    await summary.focus();
    await expect(summary).toHaveCSS("outline-style", "solid");

    await summary.press("Enter");

    await expect(details).toHaveAttribute("open", "");
    await expect(
      details.getByRole("heading", { name: "Product ecosystem" }),
    ).toBeVisible();
    await expect(
      details.getByRole("heading", { name: "Focus areas" }),
    ).toBeVisible();
  });

  test("case-study details use the mobile treatment on a short landscape screen", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto("/case-studies/sitemate");

    await expect(page.locator(".case-study-mobile-context")).toBeVisible();
    await expect(page.locator(".case-study-sidebar")).toBeHidden();

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );

    expect(horizontalOverflow).toBeLessThanOrEqual(0);
  });

  test("engineering work remains usable at narrow widths", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto("/#engineering-work");

    const repositoryLink = page.getByRole("link", {
      name: "View the source on GitHub",
    });

    await repositoryLink.focus();

    await expect(repositoryLink).toBeFocused();
    await expect(repositoryLink).toHaveCSS("outline-style", "solid");
    await expect(repositoryLink).toHaveCSS("outline-width", "3px");

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );

    expect(horizontalOverflow).toBeLessThanOrEqual(0);
  });
});
