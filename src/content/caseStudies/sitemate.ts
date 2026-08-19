import type { CaseStudy } from "./types";

export const sitemateCaseStudy: CaseStudy = {
  slug: "sitemate",

  seo: {
    title: "Building quality practices that scale | Sitemate | Kitaka",
    description:
      "How building QA foundations, growing a QA team and supporting Dashpivot and Sitemate's product ecosystem shaped my approach to scalable quality engineering.",
  },

  company: "Sitemate",
  companyUrl: "https://sitemate.com",

  role: "QA Engineer and Lead",
  period: "2019–2022",

  title: "Building quality from the ground up",

  summary:
    "At Sitemate, I combined hands-on testing with establishing QA practices and starting the automation effort, then began building the QA team by hiring and mentoring its first additional engineer.",

  productEcosystem: [
    "My work centred on Dashpivot, Sitemate's platform for digitising operational and field workflows. Its web and mobile applications supported configurable forms, document management, inspections, data collection and reporting for work carried out both in the office and in the field.",
    "During the COVID-19 pandemic, the team rapidly developed Sitemate ID to help organisations manage workforce health declarations and site access requirements. The product later became more closely connected with Dashpivot, extending the workflows and product boundaries that testing needed to consider.",
    "Supporting both products meant understanding how people moved between applications, what information followed them and where differences between web, mobile and field conditions could affect the experience.",
  ],

  challenge: [
    "As the products and engineering organisation grew, relying on one person to investigate every change would not remain effective. Immediate release work still mattered, but so did establishing practices that could support more engineers, a broader product scope and a changing delivery cadence.",
    "Automation presented a similar tension. Starting it was important, but coverage needed to be chosen deliberately so that maintaining checks did not consume the time required for exploratory testing and product investigation.",
    "The addition of Sitemate ID introduced another product context while the existing platform continued to evolve. The challenge was therefore both practical and organisational: keep testing useful for current delivery while building a QA function that would not depend on one person.",
  ],

  approach: [
    "I remained involved in day-to-day testing across Dashpivot, Sitemate ID and the connections developing between them. That kept decisions about process and automation grounded in the behaviour of the products and the constraints faced by the engineering teams.",
    "Alongside that work, I helped establish QA practices that involved engineers and product colleagues during development rather than concentrating testing at the end of a release. The aim was to make questions about risk, expected behaviour and testability part of the work as it developed.",
    "I started the automation effort by identifying repeatable checks where earlier feedback would be useful. Automation complemented exploratory investigation and product understanding; it was a means of supporting delivery, not a measure of progress by itself.",
    "I later hired and mentored Sitemate's first additional QA engineer. Building the team included sharing product context, developing ways of working together and creating room for another person to contribute their own judgement rather than simply inherit a list of checks.",
  ],

  impact: [
    "The QA function no longer depended on a single engineer. Hiring and mentoring another QA engineer increased the perspectives available during testing and created a basis for the team to continue developing beyond its original shape.",
    "The initial automation work introduced repeatable feedback for selected workflows while preserving hands-on investigation for changes where context and judgement mattered more.",
    "Bringing quality conversations into development also made testing less isolated from Engineering and Product. Questions about risk and expected behaviour could be raised while work was taking shape, rather than being deferred entirely to the end of a release.",
  ],

  reflection: [
    "Sitemate showed me that growing a quality practice is not the same as accumulating more process. It requires deciding which habits genuinely help a team understand its product and which merely add distance from the work.",
    "Hiring and mentoring another QA engineer also changed my understanding of leadership. It involved sharing context and responsibility while remaining open to another person's questions, methods and judgement.",
    "The experience left me with a practical view of scale: stay close to the product, build feedback where it is useful and create conditions in which quality does not rely on a single role or person.",
  ],

  focusAreas: [
    "Quality strategy",
    "QA foundations",
    "Team growth",
    "Hiring",
    "Mentoring",
    "Automation strategy",
    "Cross-functional collaboration",
    "Continuous improvement",
  ],

  productEcosystemItems: [
    "Dashpivot",
    "Sitemate ID",
    "Web platform",
    "Mobile applications",
    "Digital forms",
    "Document management",
    "Field workflows",
  ],
};
