# Homepage architecture

## Purpose

This document records the agreed information architecture for the portfolio
homepage and the content decisions behind it. It provides the structural
foundation for the remaining Milestone 4 stories.

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

The hero does not require a call-to-action. Experience is the next section in
the document, primary navigation provides direct access to it, and additional
hero links would duplicate those routes.

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

**Purpose:** Make the portfolio's source and development history discoverable
without presenting one project as a mature project catalogue.

The compact section replaces the former long Projects treatment. It links to
the repository but does not link back to the live site the visitor is already
using.

The section can grow when substantive additional projects justify it. It does
not anticipate filtering, categories, project routes or other infrastructure
before those needs exist.

**Transition to Contact:** After professional, written and technical evidence,
the visitor receives a direct invitation to continue the conversation.

### Contact

**Purpose:** Convert interest into a professional conversation.

The section provides direct email and résumé-request actions, together with
LinkedIn and GitHub profiles. Later positioning work may make availability for
opportunities more explicit without changing the section's structural role.

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

### Claims requiring stronger evidence

- Professional experience entries should communicate contributions and
  outcomes more clearly.
- Working-principle claims should be connected to concrete examples where
  appropriate.
- Future projects should demonstrate meaningful engineering depth rather than
  being added to increase apparent volume.

These gaps are assigned to follow-up stories. Unsupported metrics,
confidential information and invented outcomes must not be introduced to fill
them.

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

The primary navigation remains usable at current content volumes. Its mobile
treatment will receive a dedicated review in Story 4.7.

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
- Engineering Work remains deliberately compact and uses a quieter heading so
  one inspectable artefact does not compete with professional experience.
- Contact uses a section rule and closing space to read as the conclusion of
  the homepage journey.

No new evidence component was introduced. The experience summaries and
descriptive case-study links already communicate the available evidence; a new
callout would repeat it rather than reveal something useful. This decision
should be revisited only when a distinct outcome or artefact needs a repeated
presentation pattern.

The hierarchy is communicated through heading scale, spacing, borders and
document position rather than colour alone. No imagery, shadows, additional
gradients, animation or JavaScript were added.

The comparative production Lighthouse review is deferred to Story 4.9, where
the complete milestone will be measured against the established baseline.
Story 4.6 remains responsible for avoiding new asset or JavaScript weight,
layout shift and observable responsive regressions.

## Trade-offs

### Removing the standalone About section

This reduces biographical explanation on the homepage, but removes significant
repetition and allows professional evidence to appear sooner. Personality and
working philosophy remain visible through the Hero, How I Work, Writing and
case studies.

### Keeping the portfolio as engineering work

Removing Projects entirely made the inspectable repository unnecessarily hard
to discover. Restoring the former full section would overstate a catalogue that
currently contains one project. A compact Engineering Work section preserves
the evidence while remaining honest about its scope.

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

### Omitting hero actions

Links to Experience and How I Work were tested and removed because they
duplicated the document flow, primary navigation and contextual links. The
cleaner Hero establishes the position without creating unnecessary choices.

### Using motion as enhancement

The centred fixed Hero, ambient gradient and fade create a deliberate opening,
but the architecture does not depend on them. This preserves the experience for
reduced-motion users and environments where animation is unavailable.

## Follow-up stories

The architecture informs the following Milestone 4 work:

- **4.2 Hero and positioning rewrite:** validate and refine the final
  positioning language and metadata.
- **4.3 Experience and outcomes:** strengthen professional evidence and make
  contributions and outcomes clearer.
- **4.4 About and working principles:** refine the consolidated principles and
  the relationship with the dedicated page.
- **4.5 Projects section direction:** define what qualifies as substantive
  inspectable engineering work and how the section should grow.
- **4.6 Homepage visual hierarchy:** refine section rhythm and visual emphasis
  across the complete page.
- **4.7 Mobile navigation and hero refinement:** revisit navigation behaviour
  and complete focused mobile review.
- **4.9 Milestone regression and measurement:** perform final accessibility,
  responsive, performance and behavioural verification.

No remaining implementation story is blocked by an unresolved homepage
structural decision.

## Navigation, routing and analytics implications

- The homepage hash-navigation targets changed to match the revised sections.
- No new route is required for the homepage architecture.
- Existing How I Work, Writing, article and case-study routes remain unchanged.
- Engineering Work links directly to the existing external repository.
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
