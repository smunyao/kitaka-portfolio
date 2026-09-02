# The decision testing cannot make

Status: Draft  
Not published on the portfolio.

There is a question that often arrives near the end of a release: are we good to go?

I understand why it is handed to QA. By then, the quality engineer may have explored more of the complete change than anyone else. Test results are available, defects have been discussed, and the team needs an answer that sounds clearer than “it depends.”

The difficult word is not “go.” It is “good.” Good enough for whom? Under which conditions? With what still unknown? A test result can contribute to those answers, but it cannot decide what the remaining risk means to the product or the business.

When testing is expected to provide permission, a question the team should answer together becomes a verdict delivered by one role.

## The question is larger than testing

A release decision can include customer impact, timing, contractual commitments, support readiness, operational recovery, and the cost of waiting. Testing does not own all of that context.

Product may know whether the affected workflow is central or rarely used. Engineering may understand whether the change can be disabled or rolled back safely. Customer Support may know whether the limitation already has a workable explanation. Testing contributes evidence about behaviour and risk, but the evidence does not remove those other judgements.

A pass can be misleading for the same reason. It says that selected checks produced their expected results under particular conditions. It does not say that every relevant condition was exercised, that an external dependency will behave consistently, or that production contains no combination the team has missed.

## A defect does not contain its own decision

I have seen release conversations become a count of what passed and what failed. The arithmetic looks objective, but it removes the part that matters most: consequence.

A spelling error, an intermittent problem in a low-use workflow, and a defect that could corrupt customer data are all defects. They should not carry equal weight. Ten minor issues do not necessarily outweigh one poorly understood integration failure, and a green regression run does not cancel a serious unresolved risk.

The useful questions are more specific. Who can encounter the problem? How likely is it? Can the effect spread? Is there a workaround? Will the team know if it happens? Can the release be reversed without creating another problem?

Testing helps investigate those questions. Deciding whether the answers are acceptable is a product and engineering decision informed by that investigation.

## What I can say with confidence

Moving away from approval does not require a vague response. “It depends” is only useful if I explain what it depends on.

Instead of saying that QA has passed the release, I try to give the team a concise account: what was tested, what was observed, which important areas were not covered, what remains unresolved, and where I think the greatest risk sits.

That account may be brief. For a familiar low-risk change, a few sentences can be enough. A connected workflow with uncertain external behaviour may need a clearer record of configuration, environments, and evidence. The format matters less than whether the people making the decision understand what the testing can and cannot support.

I can also be direct. If the evidence suggests a realistic risk of data loss, broken access, or widespread customer impact, I should say so plainly and recommend that the release does not proceed. Providing information does not mean becoming neutral about what it shows.

## Refusing sign-off is not stepping away

It can sound as though removing QA approval weakens the quality engineer’s influence. I think the opposite is possible.

If my responsibility begins only when a release needs a verdict, I have arrived too late to affect many of the decisions that created its risk. I would rather ask about failure, observability, customer behaviour, integrations, and recovery while the work is still taking shape.

That involvement may change the design, add a smaller automated check at the right boundary, expose a requirement nobody had made explicit, or give Support the context it will need after release. None of those contributions requires QA to become the final owner of the decision.

It does require the team to treat testing as an investigation rather than a ceremony performed before permission is granted.

## The decision stays with the risk

There will still be uncertainty when a release decision is made. Real users bring different data, histories, devices, permissions, and configurations. External services change. Production will expose combinations a controlled environment did not reproduce.

The response is not to test carelessly or make every release somebody else’s problem. It is to do work proportionate to the risk, make the evidence understandable, and be honest about what remains unknown.

When someone asks whether we are good to release, I can explain what I have learned and what concerns me. I can recommend a course of action, challenge a decision, and keep serious risk visible.

What testing cannot do is turn that evidence into certainty or make the team’s decision on its own.
