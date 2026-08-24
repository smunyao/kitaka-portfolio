import type { Article } from "./types";

export const testingIsInformationNotApproval: Article = {
  slug: "testing-is-information-not-approval",

  title: "Testing is information, not approval",

  description:
    "Why testing should inform release decisions rather than turning QA into the final gatekeeper.",

  publishedAt: "2026-08-13",

  readingTime: "6 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "One of the most uncomfortable responsibilities that can quietly fall onto a quality engineer is the idea that software becomes safe to release only when QA approves it.",
        "It often sounds reasonable. Testing usually happens towards the end of a piece of work, QA has often explored more of the product's behaviour by that point, and someone needs to decide whether the release should proceed.",
        "But I think that framing creates the wrong kind of responsibility.",
        "Testing can tell a team what has been observed, what has not been explored, which behaviours appear reliable, where uncertainty remains and what risks may still matter. It can provide evidence. It cannot turn uncertainty into certainty.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The problem with sign-off",
      paragraphs: [
        "When QA becomes the final sign-off point, release responsibility can gradually move away from the people who actually own the product and the engineering decisions behind it.",
        "A release may contain a known limitation, an unresolved edge case or a dependency that behaves unpredictably. Those things do not automatically mean the product cannot be released. They mean the team needs to understand the consequences and decide whether the remaining risk is acceptable.",
        "That decision usually involves more than testing. Product may understand the customer impact. Engineering may understand the technical exposure. Support may know whether a workaround is realistic. Quality engineering contributes another important perspective, but it is still one perspective.",
        "If QA alone is expected to approve the release, the team can end up asking the wrong question: 'Did QA pass it?' rather than 'Do we understand this well enough to release it?'",
      ],
    },

    {
      type: "paragraphs",
      heading: "Testing should reduce uncertainty",
      paragraphs: [
        "Useful testing changes what the team knows.",
        "Sometimes that means confirming that an important workflow still behaves as expected. Sometimes it means discovering an unexpected interaction between systems. Sometimes the outcome of testing is that we still do not understand something well enough and need more investigation.",
        "That is why I prefer to think about testing in terms of confidence rather than approval.",
        "Confidence can increase when repeated checks show that important behaviour remains stable. It can decrease when exploratory testing reveals assumptions we had not considered. Either outcome is useful because the team now knows more than it did before.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Not every defect has the same meaning",
      paragraphs: [
        "A defect on its own does not tell us whether a release should stop.",
        "A spelling mistake, an intermittent failure in a low-use workflow and a problem that can corrupt customer data are all defects, but they represent very different levels of risk.",
        "The useful conversation is therefore not simply whether bugs remain. It is what those bugs mean.",
        "How likely is the problem to occur? Who does it affect? Is there a workaround? Could the impact spread beyond the immediate feature? What happens if we release now rather than waiting?",
        "Testing helps uncover the information needed to answer those questions. The release decision comes from what the team does with that information.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Quality works better as a shared responsibility",
      paragraphs: [
        "Moving away from QA sign-off does not mean reducing the influence of quality engineering.",
        "When quality engineers are expected to provide useful information rather than a final verdict, they can become involved much earlier in the work. Questions about risk, user behaviour, integrations, failure modes and testability can influence the product before implementation is complete.",
        "That creates a healthier responsibility model. Engineers remain responsible for the quality of what they build. Product remains responsible for product decisions. Quality engineering helps the team investigate behaviour and understand risk. Everyone contributes to the confidence behind a release.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Communicating uncertainty matters",
      paragraphs: [
        "This approach also changes how testing results should be communicated.",
        "A simple 'pass' or 'fail' can hide useful context. I would rather communicate what was tested, what was observed, where the important risks are and what remains uncertain.",
        "That does not require an enormous report. Often a short conversation or concise release note is enough.",
        "The goal is simple: the team should understand the decision it is making.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Approval is attractive because certainty is attractive",
      paragraphs: [
        "I understand why teams fall into approval workflows. A clear gate feels safer. It gives everyone a moment where somebody can say the work is finished and ready.",
        "Software rarely offers that level of certainty.",
        "Real users have different environments, data and workflows. External services change. Production reveals combinations and behaviours that are difficult to reproduce beforehand.",
        "That does not mean we should release carelessly and wait for users to find the problems. It means we should do the work appropriate to the risk, understand the evidence we have, acknowledge what we do not know and make the release decision deliberately.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Build confidence, not permission",
      paragraphs: [
        "I still want testing to influence whether something is released. If the evidence shows significant unresolved risk, that should be difficult for a team to ignore.",
        "But influence is different from ownership.",
        "The role of testing is to improve the quality of the decision: uncover important information, challenge assumptions and make risk visible.",
        "A strong quality process does not end with QA granting permission. It ends with a team that understands what it is releasing and why it is confident enough to do so.",
      ],
    },
  ],
};
