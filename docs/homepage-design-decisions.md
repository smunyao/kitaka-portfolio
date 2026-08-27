# Homepage design decisions

## Purpose

This document records the durable structural, visual and interaction decisions behind the portfolio homepage. It describes the current implementation rather than milestone planning or temporary design exploration.

The homepage introduces the site's quality-engineering perspective, supports it with professional and technical evidence, and provides clear routes into deeper content.

## Page structure

The homepage follows one source order at every viewport:

1. **Hero** — introduces the site's central quality-engineering position.
2. **Experience** — provides professional context and routes into case studies.
3. **How I Work** — summarises the working principles connecting those examples.
4. **Writing** — surfaces longer-form thinking.
5. **Engineering Work** — presents code and technical decisions that can be inspected directly.
6. **Contact** — provides a restrained conclusion and direct contact route.

The order moves from a concise position into progressively deeper forms of evidence. Animation enhances the transition between chapters but does not alter the source order or expose unique content.

## Section responsibilities

### Hero

The Hero states the central idea once and remains deliberately concise. Detailed working principles, professional examples and technical decisions belong later in the page or on dedicated routes.

A single continuation control indicates that content follows and links to Experience. Competing calls to action were avoided because the page already provides a clear reading direction and primary navigation.

### Experience

Experience is the primary evidence chapter. Homepage entries provide enough context to distinguish the products and environments, while case studies contain the detailed challenges, decisions and learning.

Case-study links remain visually associated with their corresponding entries and use descriptive accessible names.

### How I Work

How I Work summarises observable working principles rather than listing tools or generic competencies. It consolidates ideas that previously appeared across separate About and Skills sections.

The stable `#how-i-work` identifier is retained for navigation. The dedicated How I Work page remains the appropriate place for the complete editorial treatment.

### Writing

Writing presents selected long-form material without reproducing the Writing index. Featured content comes from the existing article model so additional articles do not require homepage-specific markup.

### Engineering Work

Engineering Work exposes a small set of substantive repositories without presenting them as a larger project catalogue. It currently includes the Webhook Reliability Lab and this portfolio's source.

The section remains compact and does not introduce project-detail routes, categories or filtering before the available content justifies them.

### Contact

Contact closes the page with a direct email route. LinkedIn and GitHub remain in the footer rather than being repeated in the section.

A contact form is not currently justified. Introducing one would add validation, spam prevention, privacy, retention and failure-state requirements without solving an observed problem.

## Content boundaries

- The Hero establishes the position; it does not contain the complete quality philosophy.
- Experience introduces professional examples; case studies carry the detailed evidence.
- How I Work describes recurring behaviours; it does not duplicate case-study narratives.
- Writing demonstrates extended reasoning; the homepage only selects and introduces it.
- Engineering Work includes only projects with inspectable technical substance.
- Claims remain qualitative unless a metric is accurate, supportable and safe to publish.
- Confidential information and invented outcomes are not introduced to strengthen presentation.

These boundaries prevent the homepage from repeating the same ideas at increasing lengths and keep dedicated editorial pages useful.

## Navigation and routing

- Primary navigation targets Experience, How I Work, Writing and Contact.
- Engineering Work remains discoverable in source order but is omitted from primary navigation to keep the navigation proportionate.
- Stable section identifiers are `experience`, `how-i-work`, `writing`, `engineering-work` and `contact`.
- Existing How I Work, Writing, article and case-study routes remain independent of the homepage structure.
- Engineering Work links directly to the relevant external repositories.
- Hash navigation stops at useful positions without allowing the sticky header to obscure section headings.
- Browser Back and Forward behaviour remains native.

## Accessibility decisions

- The document contains one `h1`, followed by section-level `h2` headings and item-level `h3` headings.
- Supporting labels remain paragraphs when they do not introduce a new document subsection.
- `main`, navigation, section and footer landmarks preserve a logical reading order.
- Important evidence is available in text and is not communicated only through colour, hover or motion.
- Link names describe their destinations or purpose.
- Keyboard focus remains visible across navigation, content links and contact routes.
- Reduced-motion users receive the same content in normal document order without the fixed fading treatment.
- Forced-colours and increased-text-size behaviour must preserve meaning and operability even when decorative treatments disappear.

## Responsive decisions

The same narrative and source order are preserved across desktop, tablet, portrait mobile and landscape mobile layouts.

The Hero occupies the opening viewport without allowing the next section to peek into view. Its sizing accounts for dynamic mobile viewport units so Safari browser controls do not expose Experience prematurely.

The mobile navigation uses an accessible compact menu when the full link set no longer fits. Links are not silently removed, and the menu remains operable by keyboard and assistive technology.

Content widths share a common site frame so page content, navigation and footer edges remain visually related. Individual reading widths may be narrower when long-form text benefits from shorter lines.

## Visual hierarchy

The homepage reuses a shared type scale, spacing system and warm editorial palette while varying emphasis according to content purpose.

- Experience receives the strongest section spacing because it contains the primary professional evidence.
- Subtle rules separate experience entries without turning them into decorative cards.
- How I Work uses repeated principle blocks only where the content structure is genuinely repeated.
- Writing uses editorial rules to distinguish the featured article without adding a decorative container.
- Engineering Work remains compact so a small project set does not overpower the professional and editorial material.
- Contact uses closing space and a section rule to read as the end of the page.

Hierarchy is communicated through heading scale, spacing, borders and document position rather than colour alone. Shadows, gradients and animation remain restrained and must serve the reading experience rather than decorate empty space.

## Motion

The centred fixed Hero, ambient gradient, fade and continuation cue form the opening transition. They remain progressive enhancements:

- no content is available only during an animation;
- scrolling and hash navigation remain functional without JavaScript-driven motion;
- reduced-motion preferences disable non-essential movement;
- the fixed Hero cannot reappear beneath later content or the footer;
- viewport and orientation changes must not leave the Hero partially faded on initial load.

## Engineering-work inclusion criteria

A project belongs in Engineering Work only when it:

- has a working artefact or repository that can be inspected;
- demonstrates decisions, trade-offs or technical depth not already evidenced elsewhere;
- provides enough context to explain what was built and why it is worth examining;
- uses an accurate and maintained destination; and
- can be described without inflated scope or invented outcomes.

Technology names are included only when they help explain or inspect the implementation. Additional projects do not automatically justify new routing, filtering or collection infrastructure.

## Maintenance

Future homepage changes should preserve these decisions unless an observed content, accessibility or usability problem justifies revisiting them.

When the structure changes:

1. Update section identifiers and navigation together.
2. Confirm source order, heading hierarchy and landmarks.
3. Review desktop, tablet, narrow mobile and landscape layouts.
4. Verify keyboard, increased-text-size, reduced-motion and forced-colours behaviour.
5. Update route, navigation and accessibility coverage where the public journey changes.
6. Record only durable implementation decisions in this document; keep temporary planning and private professional strategy out of the repository.
