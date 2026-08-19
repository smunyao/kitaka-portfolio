import { expect, test } from "@playwright/test";

const errorStates = [
  {
    name: "unknown page",
    path: "/this-page-does-not-exist",
    title: "Page not found | Kitaka",
    heading: "This page doesn’t exist.",
    recoveryLabel: "Return to the homepage",
    recoveryPath: "/",
  },
  {
    name: "unknown article",
    path: "/writing/this-article-does-not-exist",
    title: "Article not found | Kitaka",
    heading: "Article not found.",
    recoveryLabel: "Browse all writing",
    recoveryPath: "/writing",
  },
  {
    name: "unknown case study",
    path: "/case-studies/this-case-study-does-not-exist",
    title: "Case study not found | Kitaka",
    heading: "Case study not found.",
    recoveryLabel: "Return to experience",
    recoveryPath: "/#experience",
  },
];

test.describe("error states", () => {
  for (const errorState of errorStates) {
    test(`${errorState.name} provides a complete recovery experience`, async ({
      page,
    }) => {
      const response = await page.goto(errorState.path);

      expect(response?.status()).toBe(404);

      await expect(page).toHaveTitle(errorState.title);
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: errorState.heading,
        }),
      ).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);

      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        "noindex, follow",
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);

      await expect(page.getByRole("main")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();
      await expect(page.getByRole("navigation")).toHaveCount(0);

      const reloadResponse = await page.reload();

      expect(reloadResponse?.status()).toBe(404);
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: errorState.heading,
        }),
      ).toBeVisible();

      const recoveryLink = page.getByRole("link", {
        name: errorState.recoveryLabel,
      });

      await expect(recoveryLink).toHaveAttribute("href", errorState.recoveryPath);
      await recoveryLink.click();
      await expect(page).toHaveURL(errorState.recoveryPath);
    });
  }
});
