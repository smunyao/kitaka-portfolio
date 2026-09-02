import type { Article } from "./types";

export const whatAnMvpShouldRefuse: Article = {
  slug: "what-an-mvp-should-refuse",

  title: "What an MVP should refuse to do",

  description:
    "Why building a useful first product means making deliberate decisions about what it will not do yet.",

  publishedAt: "2026-09-02",

  readingTime: "7 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "I am building a private MVP around a real operational problem. The product is still in development, which means there are more things it could become than things it needs to be today.",
        "That makes adding features surprisingly easy to justify. A messaging system could keep conversations in one place. Payment processing could remove a manual step. Notifications, imports, analytics, integrations and AI could each make part of the experience feel more complete.",
        "None of those ideas is inherently bad. The problem is that every one of them asks the product to carry another assumption before the central workflow has been proved useful.",
        "I have therefore spent as much time deciding what the MVP should refuse to do as deciding what it should include.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Refusal is not a lack of ambition",
      paragraphs: [
        "An MVP is often described as the smallest version of a product that can be released. That can make scope reduction sound like subtraction: begin with the complete idea, then remove features until it fits the available time.",
        "I find it more useful to begin with the change the product needs to make possible. In this case, the important loop is simple: work is assigned, the person completing it records useful information, the person responsible can see what needs attention, and both can understand what should happen next.",
        "A feature belongs in the first product only if that loop depends on it or if leaving it out would create an unacceptable risk. Everything else needs to earn its way back in.",
        "Refusing work is therefore not about making the product less ambitious. It protects the question the MVP exists to answer from being buried beneath several easier but less important questions.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Do not rebuild what already works",
      paragraphs: [
        "The product's users already have ways to talk to one another. Their conversations may be spread across tools, but replacing those tools is not the problem I am currently trying to solve.",
        "Building chat would introduce message delivery, notifications, attachments, moderation, retention, privacy and expectations about response time. A small text box would be easy to draw and much harder to support responsibly.",
        "For the MVP, structured information belongs in the product, and general conversation can continue through an existing messaging service. A clear route out of the product is enough.",
        "That boundary may eventually feel inconvenient. If people repeatedly lose important context between the two places, that would be evidence for reconsidering it. Until then, rebuilding a familiar communication tool would add surface area without proving the central idea.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Record a process before trying to own it",
      paragraphs: [
        "Payments created a similar decision. The product needs to show what was paid, what remains outstanding and when a renewal may need attention. It does not need to move money to test whether that information helps someone run the work.",
        "Recording an externally received payment supports the operational workflow. Processing one would add provider integration, failure recovery, reconciliation, refunds, security obligations and a much larger consequence when something goes wrong.",
        "The distinction matters beyond payments. A product can help someone understand and coordinate an existing process before it automates the process itself. That often provides enough value to test the underlying model while keeping the most consequential actions where they already work.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Do not collect data simply because it may be useful",
      paragraphs: [
        "The MVP may eventually hold personal, health-related and financial information. That makes an apparently useful field more than a design choice. If the product collects that information, it becomes responsible for who can see it, how long it remains, how it is corrected, how it is backed up and what happens when access should end.",
        "Authentication is only the beginning. Authorization has to follow the person and the record through every read and write. Private information must not appear in another role's view merely because the interface hides the field. Retention, recovery and operational access still need deliberate answers.",
        "The project therefore uses fictional data while those boundaries are being built and reviewed. Progress photos, real payment references and unnecessary medical detail remain outside the product. The first pilot can test language and workflow without asking participants to surrender information the system is not ready to protect.",
        "Data minimisation can look like a missing feature. In an MVP, it can also be evidence that the product understands the cost of what it asks people to trust it with.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Refuse scale that has not arrived",
      paragraphs: [
        "The product currently serves one operator and a small client group. It could be designed immediately for multiple businesses, configurable organisations, complex permissions and bulk migration. Doing so would turn imagined future needs into present architecture.",
        "The current model keeps ownership boundaries explicit without pretending multi-tenancy already exists. A manageable manual import is preferable to building a general import system before the data model has met real records. Configuration stays close to the rules that genuinely need to vary rather than becoming a framework for every possible customer.",
        "This is not an argument for code that cannot change. Repository boundaries, database constraints and focused domain models make later change more manageable. The difference is that they support a known direction without implementing an unknown product.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Novel features still need an ordinary reason to exist",
      paragraphs: [
        "AI recommendations, wearable data and advanced analytics are easy to imagine in this kind of product. They also depend on sufficient trustworthy data, a clear decision they improve and a way to recognise when their output is wrong or unhelpful.",
        "Adding them early would make the MVP appear more capable while making its evidence harder to interpret. If someone returns because a basic accountability loop is useful, that teaches me something about the product. If the same experience includes generated recommendations, automated reminders and several data sources, it becomes less clear what created the value or the frustration.",
        "A fashionable capability should face the same question as any other feature: which observed problem does it solve now? If the answer depends on behaviour the product has not yet seen, waiting is part of the design.",
      ],
    },

    {
      type: "quote",
      quote:
        "A feature belongs in the MVP when the core workflow depends on it—not merely because the finished product might contain it.",
    },

    {
      type: "paragraphs",
      heading: "A refusal should have a way back in",
      paragraphs: [
        "Saying “not now” is only useful when it is more precise than a preference. Each deferred feature should have a reason, an alternative and evidence that would justify revisiting it.",
        "Chat stays out while existing communication remains sufficient; repeated loss of important context may bring it back. Payment processing stays out while manual recording is manageable; reconciliation failures or operational cost may change that decision. Bulk import waits until a small manual migration reveals which fields and exceptions actually exist.",
        "These conditions prevent the backlog from becoming either a promise or a graveyard. The team does not have to act as though every early idea will eventually be built. It only needs to remain attentive to the problems that the current boundary creates.",
      ],
    },

    {
      type: "list",
      heading: "Questions I use when refusing scope",
      items: [
        "Which user behaviour or product outcome depends on this now?",
        "What existing process can carry the need during the MVP?",
        "What new failure modes and responsibilities would the feature introduce?",
        "Can the underlying assumption be tested without building the complete capability?",
        "What evidence would make the decision worth revisiting?",
        "If the feature succeeds, will we understand what it taught us?",
      ],
    },

    {
      type: "paragraphs",
      heading: "The boundary is part of the product",
      paragraphs: [
        "The MVP is not finished, and its current refusals have not yet been validated by a live pilot. Some will survive; others will become the next obvious work once people use the complete workflow.",
        "What they provide now is a clearer experiment. The product can test whether centralising the essential work helps people understand what needs attention and what should happen next. It can do that without also becoming a messaging platform, a payment processor, an analytics product and an integration hub.",
        "A good MVP does not need to look like a smaller version of everything the product may become. It needs to be complete enough to produce useful evidence and disciplined enough that the team can understand what that evidence means.",
      ],
    },
  ],
};
