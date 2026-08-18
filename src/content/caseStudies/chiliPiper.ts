import type { CaseStudy } from "./types";

export const chiliPiperCaseStudy: CaseStudy = {
  slug: "chili-piper",

  seo: {
    title: "Understanding systems before testing them | Chili Piper | Kitaka",
    description:
      "How testing CRM integrations, calendars and AI-assisted scheduling reinforced the importance of understanding complex systems before designing a testing strategy.",
  },

  company: "Chili Piper",
  companyUrl: "https://www.chilipiper.com",

  role: "QA Analyst",
  period: "2022–2024",

  title: "Quality begins with understanding the system",

  summary:
    "At Chili Piper, I investigated scheduling workflows across CRM integrations, calendar providers, APIs and emerging AI capabilities, using product understanding to shape the testing approach.",

  productEcosystem: [
    "My work spanned scheduling workflows, CRM integrations, APIs, calendar providers and emerging AI-powered capabilities. These products formed a connected ecosystem where users expected scheduling to feel effortless, despite the complexity behind the scenes.",
    "The platform relied on communication between multiple external services, customer configurations and business rules. Delivering quality meant understanding how those moving parts interacted rather than viewing each component in isolation.",
    "Every integration introduced another opportunity for unexpected behaviour, making it essential to think beyond individual features and consider the complete customer journey.",
  ],

  challenge: [
    "Testing highly integrated software required much more than validating individual features. A single workflow could depend on CRM data, scheduling logic, calendar availability, permissions and external APIs all behaving consistently together.",
    "Customer environments also varied considerably, meaning quality depended on understanding how different configurations and integrations influenced product behaviour rather than assuming every user experienced the platform in the same way.",
    "Many behaviours only became meaningful when multiple systems interacted under realistic customer conditions, making it important to investigate uncertainty rather than rely on isolated component testing.",
    "The challenge was to identify meaningful risks while recognising that many issues only became visible when complete workflows were exercised from beginning to end.",
  ],

  approach: [
    "My approach centred on understanding products before deciding how to test them. I invested time in learning customer workflows, integration points and data flow so that testing reflected how people actually interacted with the platform.",
    "Rather than beginning with test cases, I first sought to understand the problems customers were trying to solve, how information moved between connected systems and where complexity introduced meaningful risk.",
    "I combined exploratory testing, API validation, integration testing and automation where each provided the greatest value. Automation helped strengthen confidence in important, repeatable workflows, while exploratory testing remained essential for investigating new behaviour and emerging risks.",
    "Working closely with engineers and product managers helped surface assumptions early, while collaboration across the team ensured quality remained a shared responsibility throughout development rather than an activity performed only before release.",
    "As the platform evolved to include AI-powered experiences, the same principles remained relevant. Regardless of the technology involved, understanding expected behaviour, customer intent and product risk continued to shape how I approached quality.",
    "Not every problem was a software defect. Sometimes the most valuable outcome was helping the team better understand the product, its assumptions and the behaviour customers were actually experiencing.",
  ],

  impact: [
    "Contributing across complex integrations helped strengthen confidence in workflows that depended on multiple connected systems rather than isolated features.",
    "The combination of product understanding, exploratory investigation and targeted automation provided clearer insight into product risk and supported more informed release decisions.",
    "The work also reinforced the value of testing systems as customers experienced them, where successful outcomes depended on several products, services and configurations working together.",
    "Beyond identifying defects, the process often helped expose unclear assumptions and improve the team's shared understanding of how the product behaved in real customer workflows.",
  ],

  reflection: [
    "Chili Piper fundamentally changed how I think about testing. It reinforced that understanding a product is often the most valuable investment a quality engineer can make.",
    "Once the relationships between systems, integrations and customer workflows become clear, choosing appropriate testing strategies becomes a far more thoughtful and effective process.",
    "That experience continues to shape how I approach every new product: understand the ecosystem first, identify what matters most to customers, then use testing to provide meaningful information rather than simply executing checks.",
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
