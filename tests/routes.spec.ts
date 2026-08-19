import { expect, test } from "@playwright/test";

const routes = [
  {
    name: "homepage",
    path: "/",
    heading: "Quality starts long before testing.",
  },
  {
    name: "How I work",
    path: "/how-i-work",
    heading: "Understanding products. Building confidence.",
  },
  {
    name: "Writing index",
    path: "/writing",
    heading: "Writing",
  },
  {
    name: "article",
    path: "/writing/testing-is-information-not-approval",
    heading: "Testing is information, not approval",
  },
  {
    name: "Harvest case study",
    path: "/case-studies/harvest",
    heading: "Building confidence across a connected product ecosystem",
  },
  {
    name: "Chili Piper case study",
    path: "/case-studies/chili-piper",
    heading: "Quality begins with understanding the system",
  },
  {
    name: "Sitemate case study",
    path: "/case-studies/sitemate",
    heading: "Building quality from the ground up",
  },
];

test.describe("core routes", () => {
  for (const route of routes) {
    test(`${route.name} loads directly`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: route.heading,
        }),
      ).toBeVisible();

      await expect(page.locator("h1")).toHaveCount(1);

      const reloadResponse = await page.reload();

      expect(reloadResponse?.status()).toBe(200);
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: route.heading,
        }),
      ).toBeVisible();

      const horizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );

      expect(horizontalOverflow).toBeLessThanOrEqual(0);
    });
  }

  test("homepage metadata reflects the visible positioning", async ({ page }) => {
    await page.goto("/");

    const description =
      "Quality Engineer helping product and engineering teams understand complex systems, uncover risk early and ship with confidence. Explore experience and case studies.";

    await expect(page).toHaveTitle("Kitaka Munyao | Quality Engineer");
    const metaDescription = page.locator('meta[name="description"]');

    await expect(metaDescription).toHaveCount(1);
    await expect(metaDescription).toHaveAttribute(
      "content",
      description,
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      "content",
      description,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://kitakamunyao.com/",
    );
  });
});
