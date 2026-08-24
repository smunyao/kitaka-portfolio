import { expect, test } from "@playwright/test";

const publicRoutes = [
  {
    path: "/",
    title: "Kitaka Munyao | Quality Engineer",
    image: "/social/kitaka-munyao.png",
  },
  {
    path: "/how-i-work",
    title: "How I work | Kitaka",
    image: "/social/kitaka-munyao.png",
  },
  {
    path: "/writing",
    title: "Writing | Kitaka",
    image: "/social/kitaka-munyao.png",
  },
  {
    path: "/writing/testing-is-information-not-approval",
    title: "Testing is information, not approval | Kitaka",
    image: "/social/testing-is-information-not-approval.png",
  },
  {
    path: "/writing/testing-connected-workflows",
    title: "Testing connected workflows | Kitaka",
    image: "/social/testing-connected-workflows.png",
  },
  {
    path: "/case-studies/harvest",
    title:
      "Building confidence across a connected product ecosystem | Harvest | Kitaka",
    image: "/social/harvest-case-study.png",
  },
  {
    path: "/case-studies/chili-piper",
    title: "Understanding systems before testing them | Chili Piper | Kitaka",
    image: "/social/chili-piper-case-study.png",
  },
  {
    path: "/case-studies/sitemate",
    title: "Building quality practices that scale | Sitemate | Kitaka",
    image: "/social/sitemate-case-study.png",
  },
];

test.describe("crawler-visible metadata", () => {
  for (const route of publicRoutes) {
    test(`${route.path} includes social metadata in its HTML response`, async ({
      request,
    }) => {
      const response = await request.get(route.path);
      const html = await response.text();
      const canonical = `https://kitakamunyao.com${route.path}`;
      const image = `https://kitakamunyao.com${route.image}`;

      expect(response.status()).toBe(200);
      expect(html).toContain(`<title>${route.title}</title>`);
      expect(html).toContain(`rel="canonical" href="${canonical}"`);
      expect(html).toContain(`property="og:title" content="${route.title}"`);
      expect(html).toContain(`property="og:url" content="${canonical}"`);
      expect(html).toContain(`property="og:image" content="${image}"`);
      expect(html).toContain('name="twitter:card" content="summary_large_image"');
      expect(html).toContain(`name="twitter:image" content="${image}"`);
      expect(html).toContain('name="twitter:image:alt"');

      const imageResponse = await request.get(route.image);
      const imageBody = await imageResponse.body();

      expect(imageResponse.status()).toBe(200);
      expect(imageResponse.headers()["content-type"]).toBe("image/png");
      expect(imageBody.readUInt32BE(16)).toBe(1200);
      expect(imageBody.readUInt32BE(20)).toBe(630);
      expect(imageBody.byteLength).toBeLessThan(300_000);
    });
  }

  test("the 404 response is noindex without share or canonical metadata", async ({
    request,
  }) => {
    const response = await request.get("/metadata-test-not-found");
    const html = await response.text();

    expect(response.status()).toBe(404);
    expect(html).toContain("<title>Page not found | Kitaka</title>");
    expect(html).toContain('name="robots" content="noindex, follow"');
    expect(html).not.toContain('rel="canonical"');
    expect(html).not.toContain('property="og:');
    expect(html).not.toContain('name="twitter:');
  });
});

test("React preserves a single set of metadata after hydration", async ({
  page,
}) => {
  await page.goto("/writing/testing-connected-workflows");

  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('meta[name="twitter:image:alt"]')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
});

test("client navigation updates and restores social metadata", async ({
  page,
}) => {
  await page.goto("/writing");
  await page
    .getByRole("link", { name: "Testing connected workflows", exact: true })
    .click();

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Testing connected workflows | Kitaka",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://kitakamunyao.com/social/testing-connected-workflows.png",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);

  await page.goto("/metadata-navigation-not-found");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(page.locator('meta[property^="og:"]')).toHaveCount(0);

  await page.getByRole("link", { name: "Return to the homepage" }).click();
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Kitaka Munyao | Quality Engineer",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://kitakamunyao.com/",
  );
});
