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

test.describe("navigation", () => {
  test("primary navigation reaches each homepage section", async ({ page }) => {
    await page.goto("/");

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
  });

  test("compact navigation reaches a section without obscuring it", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto("/");

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
      sectionTop: document
        .querySelector("#how-i-work")!
        .getBoundingClientRect().top,
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

  test("engineering work links to the inspectable portfolio repository", async ({
    page,
  }) => {
    await page.goto("/#engineering-work");

    const engineeringWork = page.locator("#engineering-work");
    const repositoryLink = engineeringWork.getByRole("link", {
      name: "View the source on GitHub",
    });

    await expect(
      engineeringWork.getByRole("heading", {
        level: 2,
        name: "This portfolio, treated as a product.",
      }),
    ).toBeVisible();
    await expect(repositoryLink).toHaveAttribute(
      "href",
      "https://github.com/smunyao/kitaka-portfolio",
    );
    await expect(repositoryLink).toHaveAttribute("target", "_blank");
    await expect(repositoryLink).toHaveAttribute("rel", "noopener noreferrer");
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
          name: `Read the ${caseStudy.company} case study`,
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
