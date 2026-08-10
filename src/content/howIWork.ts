export type HowIWorkSection = {
  title: string;
  paragraphs: string[];
};

export const howIWork = {
  eyebrow: "How I work",

  title: "Understanding products. Building confidence.",

  introduction: [
    "Quality engineering, to me, is largely about understanding.",
    "Understanding what we are building, why we are building it, who will use it, how it fits into the rest of the product, and what matters when something does not behave as expected.",
    "Testing is an important part of that work, but it is not where quality begins or ends. The aim is not to prove that software is perfect. It is to give a team enough useful information about behaviour and risk to make good decisions with confidence.",
    "Over time, a few principles have shaped how I approach that work.",
  ],

  sections: [
    {
      title: "Understand before you test",
      paragraphs: [
        "It is difficult to meaningfully test something without understanding what it is trying to accomplish.",
        "Requirements and acceptance criteria are useful starting points, but satisfying them does not necessarily mean that we have built the right thing, or even that the resulting experience makes sense to the person using it.",
        "Before thinking about test cases or automation, I want to understand the problem being solved, the expected user journey, the systems involved and the consequences when something goes wrong.",
        "Working on products spanning web applications, APIs, browser extensions and third-party integrations has reinforced this for me. A feature may look isolated in the interface while depending on several systems underneath it. A change that works perfectly in one path can have consequences somewhere seemingly unrelated.",
        "Scheduling and calendar integrations are a good example. What appears to a user as choosing a time can depend on availability rules, time zones, calendars, external providers, synchronisation and data that the interface never exposes.",
        "Understanding those relationships changes the questions I ask and, ultimately, the testing I do.",
        "It also means quality work can start long before there is something finished to test.",
      ],
    },
    {
      title: "Look for risk, not just requirements",
      paragraphs: [
        "I don't think the purpose of testing is simply to demonstrate that the expected paths work.",
        "Those paths matter, but some of the most useful questions are about what we don't yet know.",
        "What assumptions are we making? Where does data cross a system boundary? What happens when an external dependency behaves differently from what we expect? Which failure would matter most to a user? What happens when somebody uses the product in a way we did not anticipate?",
        "That is why I value exploratory testing.",
        "Structured tests are excellent for confirming behaviour we already understand. Exploration helps us learn about behaviour we haven't thought to specify yet.",
        "The two are complementary. A regression suite can tell me that hundreds of known behaviours still work. It cannot tell me that those are the only behaviours worth thinking about.",
        "Risk also helps determine depth. Not every change deserves the same testing effort. A small presentation change and a change affecting customer data, permissions or a critical integration carry different consequences.",
        "Good testing should reflect that difference.",
      ],
    },
    {
      title: "Automate deliberately",
      paragraphs: [
        "I have spent a significant part of my career building and maintaining automated tests, and I consider automation an important part of a mature engineering process.",
        "But automation is a means, not the objective.",
        "Its value comes from the information it can provide reliably and repeatedly: whether important behaviour still works, whether a change has affected another part of the system, and whether we can detect certain problems quickly enough to act on them.",
        "That means I don't begin with what can we automate?",
        "I prefer to begin with what do we need to know?",
        "Sometimes automation is the best way to answer that question. Sometimes an API-level check provides better feedback than an end-to-end browser test. Sometimes the most valuable thing I can do is explore the feature myself, inspect the underlying data or talk through an unexpected behaviour with an engineer.",
        "More tests do not automatically produce more confidence. A large suite of slow, brittle or poorly targeted tests can create maintenance work without giving the team much useful information.",
        "The goal is useful feedback, at the right level, at the right time.",
      ],
    },
    {
      title: "Quality is built together",
      paragraphs: [
        "I don't see quality as something one person or one discipline owns.",
        "Product understands the problem we intend to solve. Design understands the experience we are creating. Engineers understand how the system behaves and the constraints underneath it. Support sees how the product behaves once it meets real customers. Quality engineering often works across all of those perspectives.",
        "That makes collaboration part of the technical work.",
        "A conversation while a feature is still being designed can uncover an ambiguity that would otherwise become a defect. A question during implementation can expose an assumption before it becomes expensive to change. A customer report can reveal a scenario nobody considered when the original requirements were written.",
        "This is also why I am uncomfortable with QA becoming the final gate through which software must pass.",
        "Testing can provide evidence. It can expose risk. It can challenge assumptions and help a team understand what remains uncertain.",
        "It cannot make a release decision on behalf of the whole team.",
        "Quality works better when that information is shared and the responsibility for acting on it is shared too.",
      ],
    },
    {
      title: "Build confidence, then keep learning",
      paragraphs: [
        "I prefer to think about confidence rather than approval.",
        "Passing tests does not prove that a product has no defects, just as finding defects does not necessarily mean that a product cannot be released. What matters is what we know, what we don't know, the significance of the remaining risks and whether the team has enough information to make an informed decision.",
        "Confidence is not certainty.",
        "There will always be things that are difficult to reproduce before release. Real users have different environments, data, workflows and expectations. External systems change. Products are sometimes used in ways nobody anticipated.",
        "That makes production another source of information.",
        "Support conversations, production behaviour, incidents and real user feedback can all teach us something about both the product and the assumptions we made while building it. That learning should feed back into future testing, design and engineering decisions.",
        "But learning from production is not the same as relying on production to find problems we could reasonably have found beforehand.",
        "Iteration should not mean shipping something we know is poorly understood and hoping users tell us what is wrong. It means doing the work appropriate to the risk, making an informed decision with the evidence available, and remaining willing to learn when reality gives us new information.",
        "That feedback loop never really ends.",
      ],
    },
  ] satisfies HowIWorkSection[],

  closing: {
    title: "Understanding products. Building confidence.",
    paragraphs: [
      "The tools I use will change. Testing practices will evolve. Automation will continue to become more capable, particularly as AI changes how software is built and tested.",
      "The underlying questions are more durable.",
      "What are we trying to achieve? What matters to the person using it? Where is the risk? What do we know? What are we assuming? What information would make the next decision better?",
      "That is how I think about quality engineering: understanding the product deeply enough to ask useful questions, using the right techniques to find meaningful information, and helping teams turn that information into confidence.",
    ],
  },
};
