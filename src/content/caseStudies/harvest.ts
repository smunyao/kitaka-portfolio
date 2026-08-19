import type { CaseStudy } from "./types";

export const harvestCaseStudy: CaseStudy = {
  slug: "harvest",

  seo: {
    title:
      "Building confidence across a connected product ecosystem | Harvest | Kitaka",
    description:
      "How working across Harvest and Forecast shaped my approach to testing interconnected SaaS products, automation and collaborative quality engineering.",
  },

  company: "Harvest",
  companyUrl: "https://www.getharvest.com",

  role: "Quality Engineer",
  period: "2019–2025",

  title: "Building confidence across a connected product ecosystem",

  summary:
    "Across Harvest and Forecast, I combined exploratory testing, API and integration validation and targeted automation to help teams understand risk across a connected product ecosystem.",

  productEcosystem: [
    "My work spanned Harvest, Forecast, mobile applications, APIs, browser extensions and third-party integrations. Each served a different part of the customer experience, but they were connected through shared workflows and data.",
    "That connection mattered. A change that appeared contained within one product could affect another platform or integration, sometimes beyond the boundary of the team making it.",
    "I worked increasingly closely with Forecast during my later years at Harvest, as the team reconsidered the relationship between the two products and moved towards a more connected experience.",
  ],

  challenge: [
    "The breadth of the ecosystem made quality a systems problem rather than a collection of isolated feature checks. A workflow could cross products, pass through an API and depend on an external service before reaching the outcome a customer expected.",
    "Permissions, data changes and third-party behaviour added uncertainty that could not be understood from the interface alone. Testing a feature in isolation was therefore rarely enough to explain the risk surrounding it.",
    "The practical challenge was to identify which connections mattered for each change, what could reasonably be exercised before release and where uncertainty still remained.",
  ],

  approach: [
    "I used exploratory testing, API and integration validation, regression coverage and automated end-to-end checks in different combinations. The choice depended on the change: its customer importance, the systems it crossed and the kind of uncertainty the team needed to investigate.",
    "For integration-heavy work, I followed data beyond the immediate interface and through the products and external services involved. This exposed behaviour that isolated user-interface testing could miss and made failures easier to discuss with the engineers working on them.",
    "I contributed to automated integration coverage using Playwright and TypeScript. The most useful checks protected important, repeatable workflows and provided timely feedback, while exploratory work remained available for new behaviour and risks that were difficult to predict in advance.",
    "I worked with engineers and product managers while features were being shaped, and with Customer Support when production behaviour needed the context of a real customer workflow. That collaboration helped connect implementation decisions, test evidence and the ways people were actually using the products.",
    "As my involvement with Forecast increased, I brought the same investigative approach to a product with its own users and constraints rather than assuming that practices from Harvest would transfer unchanged.",
  ],

  impact: [
    "The work gave teams evidence about risk across complete workflows, not only the feature or interface being changed. That made it easier to discuss what had been covered, what remained uncertain and where further investigation would be useful.",
    "Automated integration checks protected selected repeatable journeys and made regressions in those connections visible earlier. They complemented rather than displaced the exploratory testing needed for unfamiliar behaviour and changing product relationships.",
    "Working across Harvest and Forecast also brought a more connected view of quality to conversations about the products. Changes could be considered in terms of their effect on customers moving through the ecosystem, rather than as separate testing responsibilities for each application.",
  ],

  reflection: [
    "Harvest reinforced my view that quality begins before a final testing phase. Product understanding, early conversations and thoughtful engineering all influence the evidence available when a team needs to make a decision.",
    "It also clarified the place of automation in my work. A reliable check can protect a known workflow, but it cannot replace curiosity, context or recognising when a product reaches the expected result for the wrong reason.",
    "Working across Harvest and Forecast ultimately strengthened how I think about products as connected systems: follow the customer journey, understand the boundaries it crosses and remain honest about what the testing can—and cannot—tell you.",
  ],

  focusAreas: [
    "Product risk analysis",
    "Exploratory testing",
    "API validation",
    "Integration testing",
    "End-to-end automation",
    "Cross-platform testing",
    "Release readiness",
    "Cross-functional collaboration",
  ],

  productEcosystemItems: [
    "Harvest",
    "Forecast",
    "Mobile applications",
    "APIs",
    "Browser extensions",
    "Third-party integrations",
  ],
};
