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
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Quality starts long before testing.",
      }),
    ).toBeVisible();
    await expect(page.locator(".hero-intro")).toBeVisible();

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );

    expect(horizontalOverflow).toBeLessThanOrEqual(0);
  });
});
