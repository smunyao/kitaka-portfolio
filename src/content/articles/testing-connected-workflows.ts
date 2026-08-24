import type { Article } from "./types";

export const testingConnectedWorkflows: Article = {
  slug: "testing-connected-workflows",

  title: "Testing connected workflows",

  description:
    "Start with the customer journey, find the boundaries it crosses and choose the testing that provides useful evidence about each risk.",

  publishedAt: "2026-08-24",

  readingTime: "8 min read",

  seo: {
    title: "Testing connected workflows | Kitaka",
    description:
      "A practical approach to testing customer journeys across APIs, integrations and external services without relying on end-to-end checks alone.",
  },

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "Some of the most difficult testing problems I have worked on looked simple from the interface. A person chose an option, submitted some information or expected two products to agree. Behind that action, data moved through APIs, permissions, business rules and external services before the result returned to the screen.",
        "When the outcome was wrong, the visible symptom was only the end of the story. The problem might have begun in configuration, in data transformed between systems, in an assumption made by one service about another or in a dependency outside the team's control.",
        "That changes how I approach the testing. I do not begin by trying to turn every possible journey into an end-to-end check. I begin with the outcome the customer expects, learn the path that produces it and identify the boundaries where useful information could be lost, delayed or misunderstood.",
        "This is not a universal formula for distributed systems. It is a way of deciding what the team needs to learn and which combination of testing can provide that evidence.",
      ],
    },

    {
      type: "paragraphs",
      heading: "One journey can contain several systems",
      paragraphs: [
        "A customer does not experience an API, a background job and a third-party integration as separate architectural components. They experience one task that either reaches the intended outcome or does not.",
        "The architecture still matters. Each boundary changes what can fail, who controls the behaviour and what evidence is available. But starting from the architecture alone can make the testing follow the shape of the implementation rather than the purpose of the workflow.",
        "I find it more useful to hold both views at once: the journey as the customer understands it and the systems that cooperate to make it possible.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Start with the intended outcome",
      paragraphs: [
        "Before choosing tools or writing checks, I want to understand what the person is trying to accomplish. What should be true when the workflow finishes? Which parts of that outcome matter most? What would a misleading success look like?",
        "That last question is important. An interface can display a confirmation while another system has rejected the request. A record can be created but contain the wrong ownership or permissions. Two products can show compatible values immediately and drift apart when a later update arrives.",
        "A clear outcome gives the investigation an anchor. It also exposes the difference between checking that an interaction completed and establishing that the workflow produced the right result.",
      ],
    },

    {
      type: "list",
      heading: "Trace the path that produces it",
      items: [
        "Which products, services and external providers participate?",
        "Where does the data originate, and how is it transformed?",
        "Which identities, permissions or configuration choices influence the path?",
        "Which steps happen immediately, and which complete asynchronously?",
        "Where does responsibility pass from one team or system to another?",
        "What can be observed at each point when the result is unexpected?",
      ],
    },

    {
      type: "paragraphs",
      paragraphs: [
        "This does not always require a formal architecture diagram. A rough map made with the people building the feature can be enough to reveal assumptions that are invisible in a list of interface-level test cases.",
        "The map will rarely be complete on the first attempt. Testing helps refine it. An unexpected response, an undocumented transformation or a dependency that behaves differently under a particular configuration all add to the team's understanding of the system.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Risk gathers at the boundaries",
      paragraphs: [
        "Boundaries deserve attention because they are places where two parts of the system may hold different assumptions. One service may consider a field optional while another depends on it. A successful request may only mean that work was accepted, not completed. A retry may recover a temporary failure or repeat an action that should happen once.",
        "I look for risks such as missing or transformed data, stale state, delayed processing, duplicate requests, ordering, partial completion, expired permissions and customer-specific configuration. The relevant risks depend on the product; the list is a prompt, not a template to apply mechanically.",
        "External services add another constraint. The team may be able to observe their behaviour without controlling it, simulate certain responses without reproducing the complete service, or exercise a real integration only in a limited environment. Those differences affect what a test result can honestly establish.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Choose evidence, not a favourite test level",
      paragraphs: [
        "Once the journey and risks are clearer, I choose the smallest useful place to investigate each question. A business rule may be covered reliably close to the code that owns it. An API check may exercise data and permissions without the setup cost of the interface. A contract test can establish whether two services still agree about their requests and responses. A complete journey can show whether selected parts work together in a representative environment.",
        "These forms of testing answer different questions. Contract coverage does not prove that the customer reaches the intended outcome. An end-to-end check may prove that one configured path worked while saying little about the combinations it did not exercise. Exploratory testing can reveal relationships nobody predicted, but the resulting knowledge still needs to be communicated and retained where it matters.",
        "The goal is not to choose the most impressive technique. It is to obtain useful feedback at a cost and speed appropriate to the risk.",
      ],
    },

    {
      type: "quote",
      quote:
        "Start with the customer journey to understand the system. Then test each important risk at the boundary that can provide the clearest evidence.",
    },

    {
      type: "paragraphs",
      heading: "Keep a small number of complete journeys",
      paragraphs: [
        "I still value end-to-end testing. Important workflows need some evidence that the assembled product can perform them. Those checks can also reveal configuration and deployment problems that isolated tests cannot see.",
        "The difficulty begins when a team expects the end-to-end suite to represent every meaningful combination. Connected workflows accumulate states quickly: different permissions, providers, data histories, timing and failure responses. Trying to cover all of them through the interface produces slow feedback and a suite that can be difficult to diagnose when it fails.",
        "I would rather keep a deliberate set of complete journeys and move narrower variations closer to the boundary responsible for them. The exact balance changes with the system and the consequences of failure.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Treat failure as an investigation",
      paragraphs: [
        "When a connected workflow fails, repeating the visible steps is only the beginning. I want to know what entered the system, which path it followed, where the observed state last matched the expectation and what changed after that point.",
        "API responses, browser network activity, application logs, traces, stored data and configuration can each provide part of that account. The available evidence varies between teams, and quality engineers do not always have access to every layer. Knowing what cannot be observed is itself useful: it identifies a gap in the team's ability to understand production behaviour.",
        "This is also where collaboration matters. An engineer may recognise a service boundary in a trace, Product may clarify a rule that changes the expected outcome, and Customer Support may provide the configuration or sequence that makes an apparently inconsistent report reproducible.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Automate what is stable enough to protect",
      paragraphs: [
        "Automation is most useful when the expected behaviour is understood, the workflow matters and a repeated check can provide timely information. For connected systems, that might mean protecting a contract, validating an API transition or exercising a small number of critical journeys.",
        "I am more cautious when the environment is difficult to control, an external provider changes independently or the assertion hides important intermediate behaviour. A check that reports only that the final screen appeared may pass even when the system reached it for the wrong reason.",
        "That does not make the workflow untestable. It may mean the team needs better observability, a controllable test interface, a narrower assertion or continued exploratory investigation rather than another broad automated scenario.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Pre-release testing is not the complete picture",
      paragraphs: [
        "Real customer data, production configuration and third-party behaviour create combinations that a test environment cannot reproduce perfectly. Connected systems therefore need feedback after deployment as well as before it.",
        "Monitoring, logs, traces, staged releases and support signals can show whether the assumptions behind the testing continue to hold. They do not excuse weak pre-release work. They acknowledge that some uncertainty can only be reduced in the environment where the complete system operates.",
        "The useful question remains the same: what evidence do we have, what does it tell us and what uncertainty is still important?",
      ],
    },

    {
      type: "paragraphs",
      heading: "A method for choosing, not a recipe",
      paragraphs: [
        "Testing a connected workflow is not one large test. It is a set of decisions about outcomes, boundaries, risks and evidence.",
        "Beginning with the customer journey prevents the architecture from obscuring the purpose of the work. Testing at the relevant boundaries makes feedback more precise. Selected end-to-end journeys show that the parts can cooperate. Observability and production feedback help the team investigate what controlled environments cannot fully represent.",
        "The result is not certainty. It is a more defensible account of how the workflow behaves, where confidence comes from and where the team should remain curious.",
      ],
    },

    {
      type: "links",
      heading: "Further reading",
      links: [
        {
          label: "Testing for Reliability — Google SRE",
          href: "https://sre.google/sre-book/testing-reliability/",
          description:
            "A systems view of testing, production validation and confidence in reliability.",
        },
        {
          label: "Introduction to contract testing — Pact",
          href: "https://docs.pact.io/",
          description:
            "How consumer-driven contracts verify expectations between collaborating services.",
        },
        {
          label: "Observability primer — OpenTelemetry",
          href: "https://opentelemetry.io/docs/concepts/observability-primer/",
          description:
            "An introduction to logs, metrics and traces for understanding distributed behaviour.",
        },
        {
          label: "Making retries safe with idempotent APIs — AWS",
          href: "https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/",
          description:
            "A practical account of retries, duplicate requests and idempotency in distributed systems.",
        },
        {
          label:
            "An empirical analysis of microservices systems using consumer-driven contract testing",
          href: "https://research.chalmers.se/en/publication/534630",
          description:
            "Research examining how four open-source projects combine contract tests with other testing levels.",
        },
      ],
    },
  ],
};
