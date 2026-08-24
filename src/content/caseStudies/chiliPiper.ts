import type { CaseStudy } from "./types";

export const chiliPiperCaseStudy: CaseStudy = {
  slug: "chili-piper",

  company: "Chili Piper",
  companyUrl: "https://www.chilipiper.com",

  role: "QA Analyst",
  period: "2022–2024",

  title: "Quality begins with understanding the system",

  summary:
    "At Chili Piper, I investigated scheduling workflows across CRM integrations, calendar providers, APIs and emerging AI capabilities, using product understanding to shape the testing approach.",

  productEcosystem: [
    "My work covered scheduling workflows connected to CRM platforms, calendar providers, APIs and emerging AI-powered capabilities. Customers experienced these parts as one journey even when several products and external services were involved behind the interface.",
    "The outcome of a scheduling attempt could depend on CRM data, calendar availability, permissions, routing rules and a customer's own configuration. The same visible action could therefore travel through a different path—or produce a different result—from one customer environment to another.",
    "Understanding those relationships was necessary before testing could provide useful information. A result only made sense in the context of the data, rules and integrations that produced it.",
  ],

  challenge: [
    "The difficult cases rarely belonged neatly to one feature. An unexpected scheduling result might originate in product logic, customer data, permissions, configuration or the behaviour of an external service.",
    "That made reproduction and diagnosis as important as recognising that something had gone wrong. Testing needed enough realistic context to distinguish a product defect from an integration or configuration problem without dismissing what the customer was experiencing.",
    "The challenge was to select meaningful combinations from a wide range of possible environments, then follow complete workflows far enough to understand where behaviour diverged from the intended outcome.",
  ],

  approach: [
    "I began by mapping the customer workflow: what the person was trying to achieve, which systems participated, how information moved between them and which configuration or business rules affected the result. That model guided the questions I asked before it became a list of tests.",
    "I used exploratory testing to investigate unfamiliar behaviour and varied configurations, alongside API and integration validation to follow what was happening beyond the interface. End-to-end checks were useful for selected repeatable journeys, but they could not represent every meaningful combination of customer data and connected services.",
    "When behaviour was unexpected, I traced the workflow through its dependencies rather than treating the visible symptom as the whole problem. This helped separate product defects from configuration and integration issues while retaining the customer experience as the starting point for the investigation.",
    "I worked with engineers and product managers to surface assumptions while features were being developed and to share what testing revealed about the surrounding system. The conversation was not limited to whether a check passed; it included whether the expected behaviour still made sense for the workflow being supported.",
    "As AI-powered capabilities entered the product, I applied the same discipline: understand the intended outcome, identify the data and systems influencing it, and investigate behaviour that could not be evaluated through a simple deterministic assertion.",
  ],

  impact: [
    "Following complete scheduling journeys gave the team evidence about behaviour across product and integration boundaries, including failures that would not have been explained by checking the visible interface alone.",
    "Investigations could identify whether a problem came from product logic, an external dependency or a particular customer configuration. That distinction made the resulting information more useful to the people deciding what needed to change.",
    "The work also exposed assumptions about customer environments and expected behaviour. Testing contributed not only defect reports, but a clearer account of how the product behaved when its connected systems and rules met real workflows.",
  ],

  reflection: [
    "Chili Piper changed how I approach the beginning of a testing problem. Before choosing a technique or writing a check, I now spend more time understanding the system that makes the behaviour possible.",
    "That understanding does not remove uncertainty, particularly when external services and customer-specific configurations are involved. It makes the uncertainty easier to describe and helps testing focus on the relationships most likely to matter.",
    "The experience reinforced a principle I still use: begin with the customer outcome, learn the path that produces it, then choose the testing that can provide the most useful evidence about that path.",
  ],

  focusAreas: [
    "Systems thinking",
    "Product understanding",
    "CRM integrations",
    "Scheduling workflows",
    "API validation",
    "Exploratory testing",
    "End-to-end testing",
    "Customer workflows",
    "Cross-functional collaboration",
  ],

  productEcosystemItems: [
    "Scheduling platform",
    "Salesforce",
    "HubSpot",
    "Google Calendar",
    "Microsoft Outlook",
    "APIs",
    "AI-powered features",
  ],
};
