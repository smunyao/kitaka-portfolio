import type { Article } from "./types";

export const whatSurvivesAnAutomationRewrite: Article = {
  slug: "what-survives-an-automation-rewrite",

  title: "What survives an automation rewrite",

  description:
    "What moving an integration suite from Ruby to Puppeteer and then Playwright taught me about preserving product knowledge without preserving every test.",

  publishedAt: "2026-11-16",

  readingTime: "7 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "One of the longer automation journeys I worked through began with an integration suite written in Ruby. We moved it to Puppeteer, then later to Playwright, first with JavaScript and eventually with TypeScript.",
        "That sequence can be made to sound like a simple story of technical progress. An older tool was replaced by a newer one, the code became more modern, and the suite improved along the way.",
        "The work was not that tidy. Each rewrite forced us to decide what the existing suite actually knew about the product, which parts of that knowledge still mattered, and how much accidental structure had become attached to it. The framework changed more easily than those decisions did.",
        "What survived was not the syntax. It was the understanding encoded in the useful checks: which customer journeys crossed product boundaries, where integrations tended to disagree, what data made a scenario meaningful, and which failures deserved to interrupt delivery.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The old suite was already a record of decisions",
      paragraphs: [
        "A mature test suite is rarely just a collection of instructions for a browser. It contains years of decisions, some deliberate and some no longer visible.",
        "A test may exist because a customer workflow once failed in an unexpected way. A setup helper may reflect an awkward product boundary. A long sequence may be protecting an integration whose success cannot be established from one interface. Even a strangely specific assertion may have made perfect sense when the check was introduced.",
        "The code does not reliably explain any of that. It shows what the suite does, but not always why the team decided the behaviour was worth protecting.",
        "That makes a rewrite an act of interpretation. Copying every check preserves code volume, not necessarily knowledge. Removing every awkward check in pursuit of a cleaner suite may discard the only executable account of an important risk.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Migration is not translation",
      paragraphs: [
        "Our move from Ruby-based tests to Puppeteer gave us a new way to express the browser interactions, but the important work was not converting one command into another. We had to reconstruct the intent of the scenarios around those commands.",
        "Which steps represented the customer journey, and which existed only to accommodate the old implementation? Which assertions established a useful outcome, and which merely confirmed that the test had reached the next screen? Which failures told us something about the product, and which mostly described the test environment?",
        "A direct translation can carry the limitations of the old suite into a new framework while giving them a cleaner appearance. The rewritten checks may run, but the team has learned little about whether the coverage still reflects the product it now supports.",
        "The better unit of migration was therefore not the test file. It was the risk or workflow the file was supposed to describe.",
      ],
    },

    {
      type: "list",
      heading: "What was worth carrying forward",
      items: [
        "Customer journeys whose outcome depended on more than one product or service.",
        "Integration boundaries where data, permissions, or third-party behaviour could alter the result.",
        "Test data that represented a meaningful account state rather than merely satisfying validation.",
        "Assertions that established an outcome a customer or team actually cared about.",
        "Known recovery paths, including what happened after partial completion or a retry.",
        "Enough diagnostic context to make a failure useful to the person investigating it.",
      ],
    },

    {
      type: "paragraphs",
      paragraphs: [
        "Those things did not always survive as the same test. One long scenario might become several checks at more appropriate boundaries. Repeated browser setup could move below the interface. Two apparently different tests might turn out to protect the same risk. A check could also disappear because the product had changed, the behaviour was covered more directly elsewhere, or nobody could explain what decision its failure was meant to support.",
        "Preserving knowledge sometimes meant rewriting less.",
      ],
    },

    {
      type: "paragraphs",
      heading: "A newer framework does not repair an unclear purpose",
      paragraphs: [
        "Playwright gave us stronger capabilities for the next stage of the suite, and moving from JavaScript to TypeScript made more of the code's expectations explicit. Those improvements mattered, but they did not decide what deserved automation.",
        "A fast, well-typed check can still protect an unimportant path. A sophisticated fixture can still hide assumptions about the customer state it creates. A stable locator can still lead to an assertion that stops before the real outcome of the workflow.",
        "Framework features can make a suite easier to build and maintain. They cannot supply the product judgement missing from its scenarios.",
        "The migration was most useful when it created permission to question the coverage, not when it encouraged us to reproduce the old suite as faithfully as possible.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The pipeline changes what reliability means",
      paragraphs: [
        "The automated checks ran through Buildkite as part of the team's continuous integration workflow. That made their reliability an operational concern rather than a private quality-engineering preference.",
        "A check running locally can be retried, watched, and interpreted by the person who wrote it. In a delivery pipeline, the same check competes for time and attention with every other signal the team needs. If it fails without explaining the affected workflow, takes too long to provide useful feedback, or passes after enough retries, people learn to work around it.",
        "Once that happens, the suite has not merely become inconvenient. It has changed the team's behaviour. A warning that is routinely ignored cannot protect a release, however important the original scenario was.",
        "Rewriting the suite therefore meant considering where each check ran, how quickly its result arrived, what evidence accompanied a failure, and whether the team could trust it enough to act. Buildkite was not just where the tests happened to execute; the pipeline was part of the way their value reached the team.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Some things should not survive",
      paragraphs: [
        "It is easy to become respectful of old automation simply because it has lasted. Longevity can indicate importance, but it can also indicate that nobody has felt safe enough to remove something.",
        "I would not preserve a check solely because it was expensive to create. Nor would I carry forward framework-specific workarounds, duplicated journeys, assertions with no clear consequence, or scenarios whose only defence was that they had always been in the suite.",
        "Removal still requires care. Before deleting a test, I want to know what it was intended to reveal, whether that risk still exists, and where the evidence would come from afterwards. Sometimes the answer is another automated layer. Sometimes it is focused exploratory testing, monitoring, or a clearer operational control. Sometimes the product no longer needs the protection at all.",
        "A rewrite is a rare opportunity to make those choices visible.",
      ],
    },

    {
      type: "list",
      heading: "Questions I would take into another rewrite",
      items: [
        "What product knowledge does this check contain that is not documented elsewhere?",
        "Which customer outcome or engineering decision depends on its result?",
        "Is the browser the most useful place to exercise this behaviour?",
        "Which parts of the scenario describe risk, and which only describe the current framework?",
        "What would become harder to understand if the check disappeared?",
        "Can a failure explain enough for somebody else to investigate it?",
        "Does its position in the pipeline make the feedback timely and trustworthy?",
      ],
    },

    {
      type: "paragraphs",
      heading: "The framework is the temporary part",
      paragraphs: [
        "Ruby, Puppeteer, Playwright, JavaScript, and TypeScript each belong to the history of this suite. None of them is the reason the useful checks existed.",
        "The durable part was the team's accumulated understanding of connected products: how customers moved through them, where information crossed a boundary, which assumptions repeatedly caused trouble, and what evidence helped people decide whether a change was safe enough to continue.",
        "That knowledge should not be treated as untouchable. Products change, risks move, and a once-useful scenario can become irrelevant. But it should be examined before it is translated, simplified, or deleted.",
        "An automation rewrite succeeds when the new suite expresses the risks more clearly than the old one did. Adopting a newer framework may enable that work. It is not, by itself, evidence that the work has happened.",
      ],
    },
  ],
};
