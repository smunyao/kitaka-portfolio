import type { Article } from "./types";

export const whatAnMvpShouldRefuse: Article = {
  slug: "what-an-mvp-should-refuse",

  title: "A first version takes shape",

  description:
    "Notes from building a private product around one accountability loop before its first pilot.",

  publishedAt: "2026-09-02",

  readingTime: "6 min read",

  sections: [
    {
      type: "paragraphs",
      paragraphs: [
        "The product began with a coaching operations problem, not a missing fitness feature. The information needed to run the work lived in too many places: conversations, spreadsheets, notes, payment records, and other applications.",
        "The useful morning question was much more direct: who is training today, who completed their work, who has not checked in, who needs a response, and whose package or payment needs attention?",
        "Once I began building, nearly every part of that question suggested another product. Conversation suggested chat. Payment records suggested payment processing. Progress suggested analytics. Repeated administration suggested automation. A future client list suggested bulk imports and a platform for more than one coach.",
        "The hard part hasn't been thinking of features. It has been deciding which ideas would help test the product and which would keep me from knowing whether the basic thing was useful.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The prototype made everything look close",
      paragraphs: [
        "The prototype became broad quite quickly. It had a dashboard, clients, workouts, check-ins, progress, a calendar, and payment views. Typed fictional records made the complete experience inspectable before a database or authentication existed.",
        "That helped the coach and me discuss the shape of the product. It also made the product look further along than it was. A screen backed by a fixture can make a workflow feel almost finished. Persistence asks less visible questions: who owns this record, who may change it, what happens to its history, what should be derived rather than stored, and what happens when an operation fails halfway through?",
        "Moving from prototype screens to persistent client workflows made the difference between visible scope and operational scope difficult to ignore. The interface was not a list of nearly completed features. It was a map of decisions still waiting to be made.",
      ],
    },

    {
      type: "paragraphs",
      heading: "The loop I need to prove",
      paragraphs: [
        "I eventually reduced the first product to an accountability loop. A coach assigns work. A client sees what to do and records what happened. The coach can distinguish ordinary progress from something requiring attention. Both can see enough context to decide what happens next.",
        "That loop still contains difficult work. A skipped workout is not the same as one the system considers missed. A report of pain should become visible without turning the product into a diagnostic tool. A corrected submission should not quietly erase what was shared before it. Attention needs a reason a person can understand, not an unexplained score.",
        "That became my working boundary: if the accountability loop does not depend on something, it has to justify why it belongs in the first release.",
      ],
    },

    {
      type: "paragraphs",
      heading: "WhatsApp can stay",
      paragraphs: [
        "The coach and client already know how to talk to one another. Building chat would not prove that the accountability loop works. It would also require message delivery, notifications, attachments, retention, privacy, and expectations about response time.",
        "The boundary I chose is narrower. Structured check-ins, workout feedback, and coach responses belong in the product because they affect the shared record. General conversation can remain in WhatsApp, with a clear route there when it is needed.",
        "This is not automatically the correct long-term boundary. If the pilot shows that people repeatedly lose important context between the two places, the decision should change. For now, an existing tool carries the part of the problem the MVP does not need to own.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Recording payments is enough for now",
      paragraphs: [
        "Payments created another tempting expansion. The coach needs to know whether a payment was recorded, what balance remains, and whether a package is approaching renewal. My first instinct was to integrate the payment provider because the records originate there.",
        "Instead, the MVP records evidence of money received elsewhere. It does not move money. That is enough to test whether bringing payment and package context into the same operational view is useful.",
        "Processing payments would make the product responsible for provider failures, reconciliation, refunds, security, and the consequences of getting a transaction wrong. That may become worthwhile, but it is a different problem from helping the coach see what needs attention today.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Real data can wait",
      paragraphs: [
        "There is a similar boundary around data. This product may eventually hold health-related, progress, and financial information. Authentication alone does not make collecting that information responsible.",
        "The coach and client workspaces now have separate server-owned roles. Client identity comes from the authenticated session rather than from a URL. Reads and writes are constrained again at the repository boundary, and private coach notes are excluded from client queries.",
        "Even with those controls, the MVP still uses fictional records. Retention, backups, recovery, operational access, and users' privacy expectations need further review. The pilot can test comprehension and workflow without asking participants to enter real injuries, payment references, or progress photos.",
        "Calling that a limitation is accurate. Treating it as a reason to collect real data anyway would confuse technical progress with readiness.",
      ],
    },

    {
      type: "paragraphs",
      heading: "Import by hand first",
      paragraphs: [
        "I nearly made the import process larger too. There is existing information to bring into the product, and a general importer sounds more efficient than entering it manually. It would also require me to decide the shape of records and exceptions before the model has encountered them.",
        "The MVP will begin with a manageable manual import. The database can retain a source identity so a future import doesn't duplicate the same record, but the full bulk workflow can wait. The awkward manual path will show which fields are genuinely consistent, which need interpretation, and which should not be carried over at all.",
      ],
    },

    {
      type: "paragraphs",
      heading: "One coach is enough for now",
      paragraphs: [
        "I have made the same decision about multi-coach tenancy. The data model should not prevent it forever, but this MVP is being built with one coach. Designing an organisation platform now would mean solving for users who do not yet exist.",
      ],
    },

    {
      type: "list",
      items: [
        "Does the accountability loop need this?",
        "What can carry the need during the pilot?",
        "What would I have to observe before changing my mind?",
      ],
    },

    {
      type: "paragraphs",
      heading: "The boundary I am least sure about",
      paragraphs: [
        "Notifications are the boundary I am least certain about. An accountability product cannot rely on people remembering to open it, but reminders can become noise remarkably quickly.",
        "I have left them for the pilot because I need to learn which moments genuinely deserve interruption before deciding how the product should create it. A missed workout, an unanswered check-in, and an approaching renewal may all matter, but that does not mean each needs an immediate notification.",
        "This is the kind of refusal I find useful. It does not assume the feature is unnecessary. It gives me something specific to observe before I build it.",
      ],
    },

    {
      type: "paragraphs",
      heading: "What the pilot needs to answer",
      paragraphs: [
        "The MVP is not finished, and a live pilot has validated none of these boundaries. That is precisely why I want the first release to ask a recognisable question.",
        "Can one shared accountability loop help a coach and client understand what has happened, what needs attention, and what should happen next?",
        "If the answer is no, chat, payments, integrations, and AI will not rescue the product. If the answer is yes, the places where the current boundaries create friction will tell me much more clearly what deserves to be built next.",
        "A useful MVP is not a small imitation of the eventual product. It is a deliberate piece of software that can still teach you when to change your mind.",
      ],
    },
  ],
};
