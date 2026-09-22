import type { Article } from "./types";

export const beforeTheReleaseDecision: Article = {
  slug: "before-the-release-decision",

  title: "Before the release decision",

  description:
    "How shared context, exploratory testing, and clear recommendations help a team understand what it is about to ship.",

  publishedAt: "2026-09-22",

  readingTime: "8 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "There is a question that often arrives near the end of a release: are we good to go?",
        "I understand why it is handed to QA. By then, the quality engineer may have explored more of the complete change than anyone else. Test results are available, defects have been discussed, and the team needs an answer that sounds clearer than “it depends.”",
        "The uncomfortable part is that confidence cannot be created at that moment. The team has already decided what problem it is solving, what the expected behaviour should be, which compromises are acceptable, how the system should respond when something fails, and what it will be able to observe after release.",
        "Testing can challenge those decisions and reveal where they do not hold. It cannot recreate context that was missing when they were made, and it cannot decide what the remaining risk means to the product or the business.",
        "When testing is expected to provide permission, a question the team should answer together becomes a verdict delivered by one role.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Confidence starts while the work is still movable",
      paragraphs: [
        "I do not want a team to finish building something and then wait to see what QA catches.",
        "I would rather be involved while the team is still deciding why the work matters, what success looks like, and which assumptions sit beneath the proposed solution. A question raised during discovery or design can change the feature before that assumption becomes code. The same question raised during final testing may leave the team choosing between delay and a risk it has only just understood.",
        "Acceptance criteria are useful, but they are not the complete product. They can describe what a feature should do without explaining why somebody needs it, what they already understand about the workflow, or what they may reasonably expect to happen next.",
        "That context changes how I test. A button can meet its written requirement and still lead somebody somewhere unexpected. A workflow can behave correctly in isolation and fail when it crosses an account setting, an older piece of customer data, or an external integration.",
        "Early involvement does not mean Quality Engineering controls the design or turns every conversation into a testing meeting. It means contributing another way of looking at the work while the decisions are still movable.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Nobody holds all the product context",
      paragraphs: [
        "The question is larger than testing because no single role holds everything needed to answer it.",
        "At Harvest, Customer Support often knew details about customer behaviour that were difficult to see from a requirement or ticket. They knew which workflows people misunderstood, which configurations appeared repeatedly in support conversations, and where a seemingly small change could create friction.",
        "Product brought a different view of the intended outcome. Engineers understood the implementation and the places where a change touched existing behaviour. Design could explain what the interface was trying to communicate. Quality Engineering could bring those perspectives into the investigation, explore where their assumptions met, and make uncertainty easier to discuss.",
        "Collaboration matters here for a practical reason: the quality of the investigation depends on the quality of the context available to it.",
        "That remains true when a release decision is needed. Product may understand the customer impact. Engineering may know whether the change can be disabled or rolled back safely. Support may know whether the limitation has a workable explanation. Testing contributes evidence about behaviour and risk, but that evidence does not remove the other judgements.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The expected path is only one path",
      paragraphs: [
        "Structured test cases preserve useful knowledge. They make important checks repeatable and help a team see what it has deliberately covered.",
        "They are also based on expectations.",
        "Users arrive with different histories, permissions, data, devices, and understandings of the interface. They click controls for reasons the team did not anticipate. They leave a workflow halfway through and return later. They connect services with their own constraints and failure modes.",
        "Exploratory testing gives me room to investigate those differences. I still use the requirement and acceptance criteria, but I do not treat them as a complete description of how the product can behave.",
        "This is not random clicking. I may follow data through a connected workflow, vary account state, interrupt an operation, revisit an earlier step, or deliberately use the interface in a way that seems plausible but was not part of the example the team designed around.",
        "The aim is not to prove that the team failed to imagine everything. No team can imagine everything. The aim is to learn where the product’s behaviour and the team’s assumptions begin to separate.",
      ],
    },

    {
      type: "paragraphs",
      heading: "A defect does not contain its own decision",
      paragraphs: [
        "I have seen release conversations become a count of what passed and what failed. The arithmetic looks objective, but it removes the part that matters most: consequence.",
        "A spelling error, an intermittent problem in a low-use workflow, and a defect that could corrupt customer data are all defects. They should not carry equal weight. Ten minor issues do not necessarily outweigh one poorly understood integration failure, and a green regression run does not cancel a serious unresolved risk.",
        "The useful questions are more specific. Who can encounter the problem? How likely is it? Can the effect spread? Is there a workaround? Will the team know if it happens? Can the release be reversed without creating another problem?",
        "Testing helps investigate those questions. Deciding whether the answers are acceptable is a product and engineering decision informed by that investigation.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Automation protects knowledge; it does not grant permission",
      paragraphs: [
        "Automation is valuable when it gives the team fast, reliable evidence about behaviour it needs to preserve.",
        "If an API contract, integration boundary, or important customer workflow must remain stable, a focused automated check can protect that knowledge every time the system changes. It can reveal regression quickly and leave more time for investigating what is new or uncertain.",
        "The number of automated tests does not tell me whether the team should feel confident. A large suite can repeatedly confirm the wrong things, hide unreliable checks in familiar noise, or return green while an important boundary remains unexplored.",
        "I therefore think about automation as part of the evidence, not as a substitute for judgement. The useful question is not simply what can be automated. It is which repeated uncertainty is worth turning into a dependable check, and at which layer that check will provide the clearest information.",
      ],
    },

    {
      type: "paragraphs",
      heading: "A recommendation is not permission",
      paragraphs: [
        "Moving away from QA approval does not require a vague response. “It depends” is only useful if I explain what it depends on.",
        "Instead of saying that QA has passed the release, I can give the team a concise account: what was tested, what was observed, which important areas were not covered, what remains unresolved, and where I think the greatest risk sits.",
        "That account may be brief. A familiar, low-risk change may need only a few sentences. A connected workflow with uncertain external behaviour may need a clearer record of configuration, environments, failure modes, and available evidence. The format matters less than whether the people making the decision understand what the testing can and cannot support.",
        "I can also be direct. If the evidence suggests a realistic risk of data loss, broken access, or widespread customer impact, I should say so plainly and recommend that the release does not proceed.",
        "Providing information does not mean becoming neutral about what it shows. A recommendation can be firm without pretending that Quality Engineering owns every consequence of the decision.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Shipping adds evidence the team could not have before",
      paragraphs: [
        "There will still be uncertainty when a release is made. Real users bring different data, histories, devices, permissions, and configurations. External services change. Production exposes combinations a controlled environment did not reproduce.",
        "That does not make pre-release testing pointless. It means release is another point in the learning process rather than the moment uncertainty disappears.",
        "Customer feedback, support conversations, operational signals, and observed behaviour should feed into what the team does next. Sometimes they confirm that the original understanding was sound. Sometimes they expose a problem. Sometimes the product works, but its explanation, recovery path, or surrounding process needs to change.",
        "Confidence should be able to change when the evidence changes.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The decision stays with the risk",
      paragraphs: [
        "Quality Engineering can contribute strongly to confidence without pretending to manufacture it alone.",
        "I can challenge an unclear requirement, investigate an unfamiliar workflow, identify a failure mode, build a useful automated check, explain what remains untested, and recommend a course of action. Other people contribute product intent, implementation knowledge, customer context, operational readiness, and the consequences of waiting.",
        "The confidence behind a release comes from how well those perspectives have been brought together.",
        "When someone asks whether we are good to release, I can explain what I have learned and what concerns me. I can recommend that we proceed, recommend that we wait, challenge the decision, and keep serious risk visible.",
        "What testing cannot do is turn that evidence into certainty or make the team’s decision on its own.",
      ],
    },
  ],
};
