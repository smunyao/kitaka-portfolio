import { expect, test } from "@playwright/test";

const primaryNavigation = [
  { name: "Experience", hash: "#experience" },
  { name: "How I work", hash: "#how-i-work" },
  { name: "Writing", hash: "#writing" },
  { name: "Contact", hash: "#contact" },
];

const caseStudies = [
  {
    company: "Harvest",
    path: "/case-studies/harvest",
    heading: "Building confidence across a connected product ecosystem",
    summary:
      "Across Harvest and Forecast, I combined exploratory testing, API and integration validation and targeted automation to help teams understand risk across a connected product ecosystem.",
  },
  {
    company: "Chili Piper",
    path: "/case-studies/chili-piper",
    heading: "Quality begins with understanding the system",
    summary:
      "At Chili Piper, I investigated scheduling workflows across CRM integrations, calendar providers, APIs and emerging AI capabilities, using product understanding to shape the testing approach.",
  },
  {
    company: "Sitemate",
    path: "/case-studies/sitemate",
    heading: "Building quality from the ground up",
    summary:
      "At Sitemate, I combined hands-on testing with establishing QA practices and starting the automation effort, then began building the QA team by hiring and mentoring its first additional engineer.",
  },
];

const articles = [
  {
    title: "What an MVP should refuse to do",
    path: "/writing/what-an-mvp-should-refuse",
  },
  {
    title: "Testing connected workflows",
    path: "/writing/testing-connected-workflows",
  },
  {
    title: "Testing is information, not approval",
    path: "/writing/testing-is-information-not-approval",
  },
];

const alignedPageFrames = [
  {
    name: "homepage",
    path: "/",
    navigation: ".navbar-inner",
    content: ".home-section",
  },
  {
    name: "Writing index",
    path: "/writing",
    navigation: ".editorial-page-header-content",
    content: ".writing",
  },
  {
    name: "article",
    path: "/writing/testing-connected-workflows",
    navigation: ".editorial-page-header-content",
    content: ".article",
  },
  {
    name: "How I work",
    path: "/how-i-work",
    navigation: ".editorial-page-header-content",
    content: ".how-i-work",
  },
  {
    name: "case study",
    path: "/case-studies/harvest",
    navigation: ".editorial-page-header-content",
    content: ".case-study",
  },
];

test.describe("navigation", () => {
  for (const frame of alignedPageFrames) {
    test(`${frame.name} navigation, content and footer share a frame`, async ({
      page,
    }) => {
      await page.goto(frame.path);

      const positions = await page.evaluate(({ navigation, content }) => {
        const navigationRect = document
          .querySelector(navigation)!
          .getBoundingClientRect();
        const contentRect = document
          .querySelector(content)!
          .getBoundingClientRect();
        const footerRect = document
          .querySelector(".footer-inner")!
          .getBoundingClientRect();

        return {
          navigation: {
            left: Math.round(navigationRect.left),
            right: Math.round(navigationRect.right),
          },
          content: {
            left: Math.round(contentRect.left),
            right: Math.round(contentRect.right),
          },
          footer: {
            left: Math.round(footerRect.left),
            right: Math.round(footerRect.right),
          },
        };
      }, frame);

      expect(
        Math.abs(positions.navigation.left - positions.content.left),
      ).toBeLessThanOrEqual(1);
      expect(
        Math.abs(positions.navigation.right - positions.content.right),
      ).toBeLessThanOrEqual(1);
      expect(
        Math.abs(positions.footer.left - positions.content.left),
      ).toBeLessThanOrEqual(1);
      expect(
        Math.abs(positions.footer.right - positions.content.right),
      ).toBeLessThanOrEqual(1);
    });
  }

  test("Not Found content and footer retain the compact frame", async ({
    page,
  }) => {
    await page.goto("/this-page-does-not-exist");

    const positions = await page.evaluate(() => {
      const content = document
        .querySelector(".not-found")!
        .getBoundingClientRect();
      const footer = document
        .querySelector(".footer-inner")!
        .getBoundingClientRect();

      return {
        content: {
          left: Math.round(content.left),
          right: Math.round(content.right),
        },
        footer: {
          left: Math.round(footer.left),
          right: Math.round(footer.right),
        },
      };
    });

    expect(positions.footer).toEqual(positions.content);
  });

  test("the hero continuation link reveals Experience", async ({ page }) => {
    await page.goto("/");

    const continuationLink = page.getByRole("link", {
      name: "Continue to experience",
    });

    await expect(continuationLink).toBeVisible();
    await expect(continuationLink).toHaveAttribute("href", "#experience");

    await continuationLink.click();

    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator("#experience")).toBeInViewport();
    await expect(page.locator(".site-header")).toHaveCSS("opacity", "1");
  });

  test("primary navigation reaches each homepage section", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 48));

    for (const item of primaryNavigation) {
      await page.getByRole("link", { name: item.name, exact: true }).click();

      await expect(page).toHaveURL(item.hash);
      await expect(page.locator(item.hash)).toBeInViewport();
    }
  });

  test("the Kitaka home link returns to the true top of the homepage", async ({
    page,
  }) => {
    await page.goto("/#contact");

    await page.getByRole("link", { name: "Kitaka Munyao home" }).click();

    await expect(page).toHaveURL("/#top");
    await expect
      .poll(() => page.evaluate(() => Math.round(window.scrollY)))
      .toBe(0);
    await expect(page.locator(".site-header")).toHaveCSS("opacity", "0");
  });

  test("navigation hides at the top even when a section hash remains", async ({
    page,
  }) => {
    await page.goto("/#contact");
    await expect(page.locator("#contact")).toBeInViewport();
    await expect(page.locator(".site-header")).toHaveCSS("opacity", "1");

    await page.evaluate(() => window.scrollTo(0, 0));

    await expect(page).toHaveURL("/#contact");
    await expect
      .poll(() => page.evaluate(() => Math.round(window.scrollY)))
      .toBe(0);
    await expect(page.locator(".site-header")).toHaveCSS("opacity", "0");
  });

  test("compact navigation reaches a section without obscuring it", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 48));

    const menuButton = page.getByRole("button", { name: "Menu" });

    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();

    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const howIWorkLink = page.getByRole("link", {
      name: "How I work",
      exact: true,
    });

    await expect(howIWorkLink).toBeVisible();
    await howIWorkLink.click();

    await expect(page).toHaveURL("/#how-i-work");
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    const targetPosition = await page.evaluate(() => ({
      headerBottom: document
        .querySelector(".site-header")!
        .getBoundingClientRect().bottom,
      sectionTop: document.querySelector("#how-i-work")!.getBoundingClientRect()
        .top,
    }));

    expect(targetPosition.sectionTop).toBeGreaterThanOrEqual(
      targetPosition.headerBottom,
    );
  });

  test("full navigation remains visible above the compact breakpoint", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 48));

    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();

    for (const item of primaryNavigation) {
      await expect(
        page.getByRole("link", { name: item.name, exact: true }),
      ).toBeVisible();
    }
  });

  test("homepage content links reach How I work and Writing", async ({
    page,
  }) => {
    await page.goto("/");

    const workingPrinciples = page.locator("#how-i-work");

    await expect(
      workingPrinciples.getByRole("heading", {
        level: 2,
        name: "The work starts with context, questions and conversation.",
      }),
    ).toBeVisible();
    await expect(
      workingPrinciples.getByRole("heading", {
        level: 3,
        name: "Learning the product",
      }),
    ).toBeVisible();
    await expect(
      workingPrinciples.getByRole("heading", {
        level: 3,
        name: "Paying attention to risk",
      }),
    ).toBeVisible();
    await expect(
      workingPrinciples.getByRole("heading", {
        level: 3,
        name: "Keeping quality in the conversation",
      }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Explore how I work" }).click();
    await expect(page).toHaveURL("/how-i-work");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Understanding products. Building confidence.",
      }),
    ).toBeVisible();

    await page.goto("/");
    await page.getByRole("link", { name: "View all writing" }).click();
    await expect(page).toHaveURL("/writing");
    await expect(
      page.getByRole("heading", { level: 1, name: "Writing" }),
    ).toBeVisible();
  });

  test("homepage features the latest article", async ({ page }) => {
    await page.goto("/#writing");

    const writingSection = page.locator("#writing");
    const featuredArticleLink = writingSection.getByRole("link", {
      name: "Testing connected workflows",
    });

    await expect(featuredArticleLink).toHaveAttribute(
      "href",
      "/writing/testing-connected-workflows",
    );
  });

  test("Writing index links to every published article", async ({ page }) => {
    await page.goto("/writing");

    for (const article of articles) {
      const articleHeading = page.getByRole("heading", {
        level: 2,
        name: article.title,
      });
      const articleLink = articleHeading.getByRole("link", {
        name: article.title,
      });

      await expect(articleLink).toHaveAttribute("href", article.path);
    }
  });

  test("engineering work links to each inspectable repository", async ({
    page,
  }) => {
    await page.goto("/#engineering-work");

    const engineeringWork = page.locator("#engineering-work");

    await expect(
      engineeringWork.getByRole("heading", {
        level: 2,
        name: "Engineering work",
      }),
    ).toBeVisible();

    const labLink = engineeringWork.getByRole("link", {
      name: "View Webhook Reliability Lab repository on GitHub",
    });
    const portfolioLink = engineeringWork.getByRole("link", {
      name: "View portfolio repository on GitHub",
    });

    await expect(
      engineeringWork.getByRole("heading", {
        level: 3,
        name: "Webhook Reliability Lab",
      }),
    ).toBeVisible();
    await expect(
      engineeringWork.getByRole("heading", {
        level: 3,
        name: "This portfolio, treated as a product.",
      }),
    ).toBeVisible();

    await expect(labLink).toHaveAttribute(
      "href",
      "https://github.com/smunyao/webhook-reliability-lab",
    );
    await expect(portfolioLink).toHaveAttribute(
      "href",
      "https://github.com/smunyao/kitaka-portfolio",
    );

    await expect(
      engineeringWork.getByText("Duplicate acknowledged · 1 event processed"),
    ).toBeVisible();

    for (const repositoryLink of [labLink, portfolioLink]) {
      await expect(repositoryLink).toHaveAttribute("target", "_blank");
      await expect(repositoryLink).toHaveAttribute(
        "rel",
        "noopener noreferrer",
      );
    }
  });

  for (const caseStudy of caseStudies) {
    test(`${caseStudy.company} link opens the correct case study`, async ({
      page,
    }) => {
      await page.goto("/#experience");

      const experience = page
        .locator(".experience-item")
        .filter({ hasText: caseStudy.company });

      await experience
        .getByRole("link", {
          name: `Read the case study for ${caseStudy.company}`,
        })
        .click();

      await expect(page).toHaveURL(caseStudy.path);
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: caseStudy.heading,
        }),
      ).toBeVisible();
      await expect(
        page.getByText(caseStudy.summary, { exact: true }),
      ).toBeVisible();
    });
  }

  test("directional links return to their parent pages", async ({ page }) => {
    await page.goto("/how-i-work");
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(page).toHaveURL("/");

    await page.goto("/writing/testing-is-information-not-approval");
    await page.getByRole("link", { name: "Back to writing" }).first().click();
    await expect(page).toHaveURL("/writing");

    await page.goto("/case-studies/harvest");
    await page.getByRole("link", { name: "Back to experience" }).click();
    await expect(page).toHaveURL("/#experience");
    await expect(page.locator("#experience")).toBeInViewport();
  });

  test("editorial endings continue to related content and parent indexes", async ({
    page,
  }) => {
    await page.goto("/writing/testing-connected-workflows");

    const writingNavigation = page.getByRole("navigation", {
      name: "Continue exploring writing",
    });

    await expect(
      writingNavigation.getByRole("link", { name: "All writing" }),
    ).toHaveAttribute("href", "/writing");

    await writingNavigation
      .getByRole("link", {
        name: /Testing is information, not approval/,
      })
      .click();

    await expect(page).toHaveURL(
      "/writing/testing-is-information-not-approval",
    );

    await page.goto("/case-studies/harvest");

    const caseStudyNavigation = page.getByRole("navigation", {
      name: "Continue exploring case studies",
    });

    await expect(
      caseStudyNavigation.getByRole("link", { name: "All experience" }),
    ).toHaveAttribute("href", "/#experience");

    await caseStudyNavigation
      .getByRole("link", { name: /Chili Piper/ })
      .click();

    await expect(page).toHaveURL("/case-studies/chili-piper");
  });

  test("footer provides contact and professional destinations", async ({
    page,
  }) => {
    await page.goto("/writing");

    const footerNavigation = page.getByRole("navigation", {
      name: "Contact and professional profiles",
    });

    await expect(
      footerNavigation.getByRole("link", { name: "Email" }),
    ).toHaveAttribute("href", "mailto:sylv.munyao@gmail.com");
    await expect(
      footerNavigation.getByRole("link", { name: "LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/sylvester-munyao/");
    await expect(
      footerNavigation.getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/smunyao");
  });

  test("contact provides direct email and résumé-request routes", async ({
    page,
  }) => {
    await page.goto("/#contact");

    const contact = page.locator("#contact");

    await expect(
      contact.getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute(
      "href",
      "mailto:sylv.munyao@gmail.com?subject=%5BPortfolio%5D%20Let's%20connect",
    );
    await expect(
      contact.getByRole("link", { name: "request a copy of my résumé" }),
    ).toHaveAttribute(
      "href",
      "mailto:sylv.munyao@gmail.com?subject=%5BPortfolio%5D%20R%C3%A9sum%C3%A9%20request",
    );
  });

  test("browser Back and Forward preserve navigation history", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "View all writing" }).click();
    await expect(page).toHaveURL("/writing");

    await page.goBack();
    await expect(page).toHaveURL("/");

    await page.goForward();
    await expect(page).toHaveURL("/writing");
  });
});
