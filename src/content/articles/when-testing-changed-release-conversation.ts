import type { Article } from "./types";

export const whenTestingChangedReleaseConversation: Article = {
  slug: "when-testing-changed-release-conversation",

  title: "When testing changed the release conversation",

  description:
    "Two anonymised situations where testing changed what a team understood about a release and made the decision in front of it clearer.",

  publishedAt: "2026-10-13",

  readingTime: "7 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "A useful investigation does not always end with a dramatic defect. Sometimes its most important result is that the team begins discussing a different question.",
        "Instead of asking whether the expected path passed, people may start asking whether the customer actually reached the intended outcome. Instead of treating an unusual report as an isolated configuration problem, they may recognise an assumption the product has been making about a wider group of customers.",
        "That change in understanding can alter what the team tests next, which limitation it is willing to accept, what it needs to observe after release, and whether the work is ready to move towards release.",
        "The situations below are drawn from recurring patterns in my work across connected SaaS products. I have generalised the product details and combined closely related examples so that the customer and company context remains private. The decisions and testing principles are the parts that matter here.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The interface said the work was done",
      paragraphs: [
        "In one integration-heavy workflow, the visible path was reassuring. A person completed the action, the interface accepted it, and the immediate response looked correct. If the release conversation had depended only on that path, the change would have appeared ready.",
        "The customer outcome depended on more than the interface. Information still had to cross an API boundary, be interpreted by another part of the product, and remain consistent with an external service. A successful response at the beginning of that journey did not establish that the complete workflow had finished correctly.",
        "I followed the data beyond the confirmation shown to the user. I varied the account state and the information entering the workflow, then compared the state recorded by each participating system at important points in the journey.",
        "The useful finding was not simply that one variation behaved unexpectedly. It was that the team’s definition of success ended too early. We could confirm that the product had accepted the request, but we had not yet established what happened when a later step was delayed, rejected, or completed only partially.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The release question became more precise",
      paragraphs: [
        "The conversation moved away from “does the feature work?” and towards a set of questions the team could answer more honestly.",
        "Which state represented completion from the customer’s point of view? If a downstream step failed, would the original confirmation become misleading? Could the operation be retried safely? Would the customer or Support have enough information to recover? Would the engineering team know that the two systems had disagreed?",
        "Some of those questions belonged to the implementation. Others concerned the product’s language, Support, and operational readiness. Testing had exposed the gap, but resolving it did not belong to testing alone.",
        "That distinction mattered. I could explain which paths I had followed, where the evidence stopped, and why I thought the unresolved behaviour created risk. Engineering could explain what the system could observe and recover. Product could decide whether the remaining limitation was compatible with the intended experience.",
        "The release decision became clearer because the team was no longer using one green interface path as a stand-in for the complete customer outcome.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Configuration was part of the product behaviour",
      paragraphs: [
        "Another recurring situation began with a customer report that was difficult to reproduce in a default environment. The expected workflow worked for the team, and the difference initially appeared to belong to that customer’s configuration.",
        "That explanation can be factually correct and still be incomplete. Customers experience the configured product as the product. If a supported combination of permissions, rules, connected services, or older data changes the outcome, dismissing it as “just configuration” does not explain whether the behaviour is acceptable.",
        "Customer Support often held the context that made these reports useful. They understood the sequence the customer had followed, the settings involved, and whether similar confusion had appeared before. I used that context to build a more representative state, then traced the workflow through the product and its integrations rather than simply repeating the default scenario.",
        "The investigation separated several possibilities: a product defect, an external dependency behaving within its own rules, a configuration the interface permitted but did not explain well, or an expectation the team had never made explicit.",
        "Even when the final behaviour was technically consistent with the configuration, the testing could reveal that the product gave the customer too little help understanding or recovering from it.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The defect was not the only evidence",
      paragraphs: [
        "A narrow defect report would have recorded the unexpected result and the steps needed to reproduce it. The release conversation needed more context than that.",
        "How many supported configurations could reach the same state? Was the outcome visible immediately, or would the customer discover it later? Did the product prevent the problematic combination, explain it, or leave Support to reconstruct it afterwards? Could the team distinguish this behaviour from an unrelated integration failure?",
        "Those questions changed the significance of the finding. A problem that first appeared isolated could represent a broader product assumption. A technically correct result could still expose a confusing experience. A limitation could be acceptable for a release if the team understood its scope, offered a recovery route, and knew how it would recognise the problem in production.",
        "Testing contributed by making those distinctions visible. It did not turn them into a universal severity or an automatic release verdict.",
      ],
    },

    {
      type: "list",
      heading: "Questions that often change the conversation",
      items: [
        "What outcome does the customer believe has completed?",
        "Where does the last reliable evidence match that expectation?",
        "Which configuration, permissions, data history, or external service can change the path?",
        "What happens after partial completion or an interrupted operation?",
        "Can the customer, Support, or Engineering recognise and recover from the failure?",
        "How widely could the behaviour occur, and what evidence supports that estimate?",
        "Which important part of the risk has not been tested or cannot be reproduced before release?",
      ],
    },

    {
      type: "paragraphs",
      paragraphs: [
        "I do not apply every question to every release. Their value is in interrupting an answer that has become broader than the evidence behind it.",
        "A small, contained change may genuinely need little discussion. A workflow crossing products, customer-specific rules, APIs, and external services deserves a different account of confidence. The investigation should remain proportionate to the risk, but the definition of success should not become smaller merely because the wider path is inconvenient to test.",
      ],
    },

    {
      type: "paragraphs",
      heading: "A recommendation should show its reasoning",
      paragraphs: [
        "After an investigation changes what the team understands, I still owe it a clear recommendation. Shared ownership is not an excuse to retreat into “it depends.”",
        "I can state what I observed, the conditions under which it occurred, the customer consequence I think is plausible, and the limits of the investigation. I can explain whether the risk appears contained, whether a workaround or recovery path exists, and what would remain unknown if the release proceeded.",
        "I can then recommend that the team release, wait, narrow the rollout, investigate further, or make a particular limitation visible. The recommendation becomes useful because somebody else can inspect the reasoning behind it rather than receiving a pass or fail label.",
        "The eventual decision may still differ from my recommendation. Product urgency, operational constraints, customer commitments, and the reversibility of the change all matter. If the team proceeds, the testing evidence should remain attached to the decision instead of disappearing once permission has been granted.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The change is often in what the team can now see",
      paragraphs: [
        "The strongest testing contribution is not always the number of defects found before a release. It can be a clearer description of the system, a customer outcome the team had defined too narrowly, or an assumption that nobody had needed to say aloud until the evidence challenged it.",
        "In the connected workflow, testing made the difference between request acceptance and customer completion visible. In the configuration example, it made the difference between explaining a cause and understanding the product experience visible.",
        "Neither investigation removed uncertainty. Both gave the team a better account of what it was choosing.",
        "That is what I want testing to change in a release conversation: not who has permission to say yes, but how clearly the team understands the yes it is about to give.",
      ],
    },
  ],
};
