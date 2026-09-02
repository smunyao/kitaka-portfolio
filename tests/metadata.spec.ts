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
    title: "Are we good to go? | Kitaka",
    image: "/social/testing-is-information-not-approval.png",
  },
  {
    path: "/writing/testing-connected-workflows",
    title: "Testing connected workflows | Kitaka",
    image: "/social/testing-connected-workflows.png",
  },
  {
    path: "/writing/what-an-mvp-should-refuse",
    title: "A first version takes shape | Kitaka",
    image: "/social/what-an-mvp-should-refuse.png",
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

const structuredRoutes = [
  {
    path: "/",
    type: "ProfilePage",
  },
  {
    path: "/writing/testing-is-information-not-approval",
    type: "BlogPosting",
  },
  {
    path: "/writing/testing-connected-workflows",
    type: "BlogPosting",
  },
  {
    path: "/writing/what-an-mvp-should-refuse",
    type: "BlogPosting",
  },
  {
    path: "/case-studies/harvest",
    type: "Article",
  },
  {
    path: "/case-studies/chili-piper",
    type: "Article",
  },
  {
    path: "/case-studies/sitemate",
    type: "Article",
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
    expect(html).not.toContain('type="application/ld+json"');
  });

  for (const route of structuredRoutes) {
    test(`${route.path} includes supported structured data in its HTML response`, async ({
      request,
    }) => {
      const response = await request.get(route.path);
      const html = await response.text();
      const match = html.match(
        /<script id="structured-data" type="application\/ld\+json">(.*?)<\/script>/,
      );

      expect(match).not.toBeNull();

      const data = JSON.parse(match![1]);

      expect(data["@context"]).toBe("https://schema.org");

      if (route.type === "ProfilePage") {
        const profile = data["@graph"].find(
          (item: { "@type": string }) => item["@type"] === "ProfilePage",
        );

        expect(profile.mainEntity).toMatchObject({
          "@type": "Person",
          name: "Kitaka Munyao",
          jobTitle: "Quality Engineer",
        });
        expect(profile.mainEntity.sameAs).toEqual([
          "https://www.linkedin.com/in/sylvester-munyao/",
          "https://github.com/smunyao",
        ]);
      } else {
        expect(data["@type"]).toBe(route.type);
        expect(data.mainEntityOfPage).toBe(
          `https://kitakamunyao.com${route.path}`,
        );
        expect(data.author).toMatchObject({
          "@type": "Person",
          name: "Kitaka Munyao",
          url: "https://kitakamunyao.com/",
        });
        expect(data.headline).toBeTruthy();
        expect(data.description).toBeTruthy();
        expect(data.image).toMatch(/^https:\/\/kitakamunyao\.com\/social\//);
      }
    });
  }

  test("index routes omit unsupported structured data", async ({ request }) => {
    for (const path of ["/how-i-work", "/writing"]) {
      const html = await request.get(path).then((response) => response.text());

      expect(html).not.toContain('type="application/ld+json"');
    }
  });

  test("robots and sitemap describe the complete public search surface", async ({
    request,
  }) => {
    const robots = await request.get("/robots.txt");
    const sitemap = await request.get("/sitemap.xml");
    const sitemapXml = await sitemap.text();
    const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      ([, url]) => url,
    );

    expect(robots.status()).toBe(200);
    await expect(robots.text()).resolves.toContain("User-agent: *\nAllow: /");
    await expect(robots.text()).resolves.toContain(
      "Sitemap: https://kitakamunyao.com/sitemap.xml",
    );
    expect(sitemap.status()).toBe(200);
    expect(sitemapUrls.toSorted()).toEqual(
      publicRoutes
        .map((route) => `https://kitakamunyao.com${route.path}`)
        .toSorted(),
    );
    expect(new Set(sitemapUrls).size).toBe(sitemapUrls.length);
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
  await expect
    .poll(() => page.locator("#structured-data").textContent())
    .toContain('"@type":"BlogPosting"');
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
  await expect(page.locator("#structured-data")).toHaveCount(0);

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
  await expect
    .poll(() => page.locator("#structured-data").textContent())
    .toContain('"@type":"ProfilePage"');
});
