import type { CaseStudy } from "./types";

export const harvestCaseStudy: CaseStudy = {
  slug: "harvest",

  company: "Harvest",
  companyUrl: "https://www.getharvest.com",

  role: "Quality Engineer",
  period: "2019–2025",

  title: "Building confidence across a connected product ecosystem",

  summary:
    "Working across Harvest and Forecast taught me that quality depends on understanding how products, platforms, APIs and integrations behave together—not only whether individual features work in isolation.",

  productEcosystem: [
    "My work spanned multiple parts of the Harvest ecosystem, including Harvest, Forecast, mobile applications, APIs, browser extensions and third-party integrations.",
    "Each product served different workflows, but they were connected by shared customer journeys and data. A change that appeared contained within one area could affect another product, platform or integration in ways that were not always immediately obvious.",
    "Over time, my responsibilities expanded across the ecosystem. During my later work, I was especially involved with Forecast as the team refined the relationship between the two products and worked towards a more connected experience.",
  ],

  challenge: [
    "The breadth of the ecosystem made quality a systems problem rather than a collection of isolated feature checks.",
    "Reliable releases required understanding how users moved between products, how information travelled through APIs, and how integrations behaved when external services, permissions or data changed.",
    "The challenge was not simply to find defects before release. It was to help the team understand where risk existed, which workflows mattered most and how much confidence the available evidence could reasonably provide.",
  ],

  approach: [
    "I combined exploratory testing, API validation, integration testing, regression coverage and automated end-to-end checks. The balance depended on the change and the risks involved rather than on applying the same testing method to every feature.",
    "For integration-heavy work, I looked beyond the immediate interface and examined the full flow of data between Harvest, connected products and external services. This helped uncover problems that would not necessarily appear through isolated user-interface testing.",
    "I also contributed to building and expanding automated integration coverage using Playwright and TypeScript. Automation was most useful when it protected important, repeatable workflows and gave the team fast feedback without replacing exploratory investigation.",
    "Close collaboration was central to the work. I partnered with engineers and product managers while features were still being shaped, and worked with Customer Support to understand how issues appeared in real customer workflows.",
    "As my work on Forecast increased, I applied the same principles to a product with different user needs and workflows: understand the product deeply, identify the most meaningful risks and use testing to provide useful information throughout development.",
  ],

  impact: [
    "This approach gave teams clearer visibility into risk and supported more confident release decisions across a broad product ecosystem.",
    "Expanding automated coverage helped protect important integration workflows while leaving room for exploratory testing where judgement and product context were more valuable.",
    "Working across Harvest and Forecast also encouraged a more consistent view of quality across products, rather than treating each application or platform as a separate testing responsibility.",
    "The result was not simply broader test coverage. It was a stronger shared understanding of how connected changes could affect customers and where the team should focus its attention.",
  ],

  reflection: [
    "Harvest reinforced the idea that quality is created long before a final testing phase. It grows through product understanding, early conversations, thoughtful engineering and shared ownership of risk.",
    "It also taught me that automation is most valuable when it supports judgement. A reliable automated check can protect a known workflow, but it cannot replace curiosity, context or the ability to recognise when the product is behaving correctly for the wrong reasons.",
    "Most importantly, working across Harvest, Forecast, mobile applications, APIs and integrations strengthened my ability to think about products as connected systems. That perspective continues to shape how I approach quality today.",
  ],

  capabilities: [
    "Product risk analysis",
    "Exploratory testing",
    "API validation",
    "Integration testing",
    "End-to-end automation",
    "Playwright",
    "TypeScript",
    "Cross-platform testing",
    "Release readiness",
    "Cross-functional collaboration",
  ],
};
