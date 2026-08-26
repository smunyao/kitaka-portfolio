# Homepage design decisions

## Purpose

This document records the agreed information architecture for the portfolio
homepage and the development decisions behind it. It describes the current
structural baseline rather than an active milestone plan.

The homepage should establish Kitaka's quality-engineering position once,
support it with credible professional evidence, offer deeper material for
visitors who want it, and make the path to a professional conversation clear.

## Primary audiences

### Hiring managers and recruiters

The most important question for this audience is:

> Is Kitaka an experienced Quality Engineer worth speaking to?

They need to identify the role, value proposition, breadth of experience and a
clear route to contact without reading every page.

### Engineering, product and quality leaders

The most important question for this audience is:

> How does Kitaka approach quality, risk and collaboration, and is there
> credible evidence behind that approach?

They need enough professional context to assess how Kitaka may contribute to a
team, followed by case studies that demonstrate the thinking in practice.

### Quality-engineering and software peers

The most important question for this audience is:

> Does Kitaka's work and writing demonstrate credible, transferable thinking?

They are more likely to explore the detailed How I Work page, technical
writing, case studies and inspectable engineering work.

## Intended visitor journey

The agreed homepage journey is:

1. **Hero** — establish the quality-engineering position and value proposition.
2. **Experience** — provide immediate professional evidence and routes to case
   studies.
3. **How I Work** — summarise the principles that connect the professional
   examples.
4. **Writing** — demonstrate independent thinking through longer-form material.
5. **Engineering Work** — provide inspectable technical evidence without
   overstating the current project catalogue.
6. **Contact** — invite a professional conversation after the visitor has seen
   sufficient evidence.

The primary on-page action is to read a relevant case study. The intended
visitor outcome is to make contact about a professional opportunity.

The Hero includes one restrained continuation control. It reveals that content
follows and links directly to Experience without presenting competing calls to
action. Primary navigation provides the same destination after the visitor
begins interacting with the page.

The journey must remain complete when animation is disabled. The fixed hero
fade enhances the transition but does not communicate unique information or
provide the only route to any content.

## Section responsibilities

### Hero

**Purpose:** Introduce Kitaka's quality-engineering position and describe the
value offered to product and engineering teams.

**Current message:** Quality begins before testing. Kitaka helps teams
understand complex systems, uncover risk early and ship with confidence.

The Hero should remain concise. Detailed beliefs, examples and working methods
belong later in the journey.

**Transition to Experience:** The position is followed immediately by evidence
from real products, teams and stages of organisational growth.

### Experience

**Purpose:** Establish professional credibility early and give visitors a
choice of detailed case studies.

The three entries demonstrate complementary contexts:

- Harvest: quality across a mature, connected SaaS product ecosystem.
- Chili Piper: complex integrations, customer workflows and emerging
  capabilities.
- Sitemate: establishing quality practices within a growing startup.

The homepage entries provide orientation. The case studies contain the deeper
context, decisions, challenges and learning.

**Transition to How I Work:** After seeing where Kitaka has worked, the visitor
is shown the principles that connect those experiences.

### How I Work

**Purpose:** Provide a concise summary of Kitaka's working principles without
repeating the full editorial page.

This section consolidates the former About and Skills sections. “How I work”
remains the section name because it describes observable practice more clearly
than “Skills” or “Working principles”. The stable `#how-i-work` identifier is
preserved for navigation and existing links.

The homepage introduces three recurring ideas in deliberately reflective rather
than competency-led language:

- learning the product and its surrounding context;
- paying attention to meaningful risk;
- keeping quality within the team's ongoing conversation.

The dedicated How I Work page remains the appropriate place for a fuller
explanation of product understanding, risk, testing, collaboration and
automation. The homepage introduces the behaviours; it does not attempt to
repeat that philosophy or substitute short claims for case-study evidence.

**Transition to Writing:** The principles are followed by independent written
thinking that allows visitors to examine one of those ideas in greater depth.

### Writing

**Purpose:** Demonstrate how Kitaka reasons about quality and engineering beyond
short homepage claims.

The homepage features one article and links to the Writing index. The section
can support additional articles through the existing content model without
requiring new publishing infrastructure.

**Transition to Engineering Work:** Written thinking is followed by something
technical that can be inspected directly.

### Engineering Work

**Purpose:** Make a small set of substantive, inspectable engineering work
discoverable without presenting it as a mature project catalogue.

The compact section replaces the former long Projects treatment. It currently
links to the Webhook Reliability Lab and the portfolio repository, without
adding project-detail routes that the available content does not justify.

The section can grow when substantive additional projects justify it. It does
not anticipate filtering, categories, project routes or other infrastructure
before those needs exist.

**Transition to Contact:** After professional, written and technical evidence,
the visitor receives a direct invitation to continue the conversation.

### Contact

**Purpose:** Give interested visitors a clear, human route into a professional
conversation.

The section supports conversations about the work, collaboration and
professional opportunities. Email remains the primary route, with a separate
email request for the résumé so access stays intentional. LinkedIn and GitHub
remain available in the footer rather than being repeated in the closing
section.

A contact form is not currently justified by an observed visitor problem. It
would introduce spam prevention, privacy, data-retention and service-failure
requirements without improving on the direct email route. This decision can be
revisited if real contact behaviour demonstrates a need.

## Content audit

### Repeated ideas in the former homepage

The former Hero, About and Skills sections repeatedly stated that:

- quality begins before testing;
- teams need to understand products deeply;
- quality is a shared responsibility;
- collaboration helps teams discover risk and build confidence.

These were meaningful ideas, but repeating them across three sections delayed
the professional evidence and made the homepage feel circular.

### Consolidation decisions

- The Hero retains the core position and value proposition.
- The standalone About section and its unused implementation have been removed.
- The strongest About and Skills distinctions are consolidated into How I
  Work.
- The old Skills name and content model have been replaced with Working
  Principles to reflect the section's actual purpose.
- The detailed philosophy remains on the dedicated How I Work page.
- Experience moves directly after the Hero.
- Writing becomes a deliberate homepage section rather than a secondary text
  link.
- Projects becomes the more proportionate Engineering Work section.

Repetition was not removed mechanically. Product understanding, evidence and
shared ownership remain separate working principles because they describe
different parts of the practice.

### Claims currently supported by evidence

- Experience across mature SaaS, complex integrations and startup growth is
  supported by the three professional entries and case studies.
- Collaboration with engineering, product and support is demonstrated in the
  professional narratives.
- Testing and automation practice is supported by case-study detail and the
  inspectable portfolio test suite.
- Accessibility, responsive design and maintainable engineering are supported
  by the portfolio implementation and repository history.

### Evidence boundaries

- Professional contributions and qualitative outcomes are supported through
  the case studies rather than compressed into unsupported homepage claims.
- Working principles remain connected to observable practice without turning
  the homepage into a competency inventory.
- Engineering work qualifies for inclusion only when it provides inspectable
  technical depth not already demonstrated elsewhere.

Unsupported metrics, confidential information and invented outcomes must not
be introduced to make the evidence appear stronger.

## Accessibility and usability decisions

- The document retains one `h1`, followed by section-level `h2` headings and
  item-level `h3` headings.
- Experience supporting headlines are paragraphs rather than unnecessary
  `h4` headings.
- Existing `main`, navigation, section and footer landmarks are preserved.
- Revised section identifiers are `experience`, `how-i-work`, `writing`,
  `engineering-work` and `contact`.
- Primary navigation maps to Experience, How I Work, Writing and Contact.
- Engineering Work remains discoverable in the reading order but is omitted
  from the primary navigation to avoid crowding it.
- All professional evidence is present in text and links. Nothing important is
  communicated only through hover, colour or motion.
- Reduced-motion users receive the same content in normal document order
  without the fixed fading treatment.
- The keyboard and assistive-technology reading order matches the visual and
  narrative order.

## Responsive decisions

The architecture has been reviewed at desktop and mobile reading widths.

The Hero occupies a complete opening viewport and centres its concise content
without allowing the next section to intrude. Experience then begins as a clear
new chapter. Homepage sections use the same order at every viewport; no content
is reordered visually through CSS.

The primary navigation remains usable at current content volumes. At narrow
widths it uses an accessible compact menu rather than allowing links to wrap or
removing destinations.

## Visual hierarchy decisions

The homepage uses a shared section container and type scale while varying
spacing and treatment according to each section's role in the visitor journey.
Consistency remains the baseline, but it no longer gives every section equal
visual weight.

- Experience is the primary evidence chapter. It receives the most generous
  section spacing, while subtle rules make individual experience entries easier
  to scan without turning them into cards.
- How I Work retains its three-column principle structure and sits one level
  below the professional evidence.
- Writing uses an editorial rule above and below the featured article to make
  the recommendation distinct without introducing a decorative container.
- Engineering Work remains deliberately compact so the small project set does
  not compete with professional experience.
- Contact uses a section rule and closing space to read as the conclusion of
  the homepage journey.

Evidence components are introduced only when they expose useful information.
The Webhook Reliability Lab delivery example qualifies because it makes a
technical behaviour inspectable; decorative cards and generic callouts do not.

The hierarchy is communicated through heading scale, spacing, borders and
document position rather than colour alone. Motion and gradients remain
restrained enhancements rather than sources of unique information. Release
measurement is recorded separately in the milestone regression documents.

## Trade-offs

### Removing the standalone About section

This reduces biographical explanation on the homepage, but removes significant
repetition and allows professional evidence to appear sooner. Personality and
working philosophy remain visible through the Hero, How I Work, Writing and
case studies.

### Keeping the portfolio as engineering work

Removing Projects entirely made inspectable repositories unnecessarily hard to
discover. Restoring the former full treatment would overstate the current
catalogue. A compact Engineering Work section preserves the evidence while
remaining honest about its scope.

The portfolio is described as evolving rather than assigned a completion
status. Status metadata will only return if multiple projects make that
distinction useful. Likewise, selection metadata belongs in the model only when
there is a real collection from which work is being selected.

### Including future engineering work

A future project should be included only when it:

- has a working artefact or repository that a visitor can inspect;
- demonstrates decisions, trade-offs or technical depth not already evidenced
  elsewhere on the homepage;
- has enough context to explain what was built and why the implementation is
  worth examining;
- uses an accurate, maintained destination; and
- can be described honestly without invented outcomes or inflated scope.

Technology names should be included only when they help a visitor understand
or inspect the implementation. A second project does not, by itself, justify
detail routes, filtering, categories or other collection infrastructure.

### Limiting hero actions

Competing text links to Experience and How I Work were tested and removed
because they duplicated the document flow and primary navigation. A single
animated continuation control now communicates that meaningful content follows
and links to Experience without turning the Hero into a choice of destinations.

### Using motion as enhancement

The centred fixed Hero, ambient gradient and fade create a deliberate opening,
but the architecture does not depend on them. This preserves the experience for
reduced-motion users and environments where animation is unavailable.

## Navigation, routing and analytics implications

- The homepage hash-navigation targets changed to match the revised sections.
- No new route is required for the homepage architecture.
- Existing How I Work, Writing, article and case-study routes remain unchanged.
- Engineering Work links directly to the relevant external repositories.
- If section-level analytics are introduced later, events should measure useful
  actions such as case-study selection, article selection, repository visits
  and contact actions rather than passive section visibility.
- Analytics are not required to complete this story and should not be added
  without a defined decision they are intended to inform.

## Decision

The revised architecture is accepted as the structural baseline for the rest
of Milestone 4:

> Positioning → professional evidence → working principles → written evidence
> → inspectable engineering work → contact.

Future stories may refine copy and presentation, but should preserve this
narrative unless new evidence demonstrates that a structural change is needed.
