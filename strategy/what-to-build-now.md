# Thought Experiment: What to Build Right Now, and Why

> **Context:** This is a response to the question: *"If you were to build a product right now based on everything we've discussed about the Radical Moderate project, what would you build?"*
>
> This is a genuine strategic opinion, not a summary of what we've discussed. It applies the research to a build decision and argues a specific position.
>
> *Written: 2026-03-21*

---

## The Short Answer

I would not build the social platform first.

I would build a **browser extension that reranks users' existing social media feeds** — and use it to prove the core thesis before committing to the much larger, much harder problem of building a new social platform from scratch.

Here's why.

---

## The Problem With Building the Platform First

The full RadMo vision — a social platform with designed cross-viewpoint features, gamified epistemic rewards, cooling periods, and a subscription model — is intellectually coherent and research-grounded. But it has a structural problem that no amount of research solves: **social platforms are worthless without users, and getting users requires demonstrating value, which requires having users.**

This is the network effects trap. Every social platform that ever tried to launch against an entrenched incumbent died in this trap, regardless of how superior the product experience was. You can build the most carefully designed cross-viewpoint contact system in history, but if there are 200 people on the platform, the feature produces 200 people talking in an empty room. The research on contact hypothesis conditions requires actual *contact*. You can't manufacture that from zero.

The second problem: the research is quite honest about what we don't know. Theory 3 — that cross-viewpoint exposure can be designed to work — is the right theoretical bet, but it has never been validated at social platform scale. The Science 2025 reranking study, the Santoro & Broockman conversations study, the deliberative polling literature — these are the closest precedents, and they're all smaller-scale or structurally different from a live consumer platform. Building the full platform before testing whether the core features actually work at scale is a very expensive way to find out they don't.

Third problem: we don't yet know who the Quiet Majority actually is in practice. We know they exist theoretically. We haven't quantified them, located them, or verified they'd pay for and regularly use a RadMo-style product. Building a platform for an audience you haven't confirmed exists is a classic startup mistake that the research base, however strong, doesn't immunize against.

---

## What I Would Build Instead

### Phase 1: The Feed Reranker (Browser Extension)

Build a browser extension that intercepts and reranks users' Twitter/X, Reddit, and optionally Facebook feeds in real time — downranking content that scores high on partisan animosity and outrage, upranking content that scores high on solution-orientation, intellectual curiosity, and cross-viewpoint engagement.

This is not a new idea. The Science 2025 study did exactly this experimentally. It proved the mechanism works — causally, with a preregistered design, during a live presidential election. The only thing the study didn't do was productize the approach. RadMo can.

**Why this first:**

*It tests the core thesis in the most direct way possible.* The thesis is: people are getting a worse information experience than they want, and the gap is structural. A feed reranker lets users *experience* the difference between their current feed and a RadMo-filtered version of the same feed — on platforms they're already on, with content they're already seeing. The before/after is visceral and personal in a way that no marketing copy can replicate. You're not asking users to imagine the value proposition; you're showing it to them in 60 seconds.

*It sidesteps the network effects problem entirely.* You're not building a new social graph. Users stay on Twitter/X and Reddit with their existing connections and content. RadMo just changes the filter. This means you can have a meaningful product with 1,000 users. The value is individual and immediate, not dependent on critical mass.

*It generates the data you actually need.* Every user who installs the extension and keeps using it is evidence that the core thesis is correct. Every user who uninstalls after a week is evidence that people say they want less outrage but keep choosing it anyway. Both outcomes are information. You need this data before you invest in the full platform.

*It builds the brand before the platform.* People who install the extension become early members of the Quiet Majority community. They've made a choice — to filter their feed differently — that is itself a statement of identity. That opt-in behavior is the first expression of the "radically moderate" identity that the full platform needs as its cultural foundation.

*It's buildable.* A two-engineer team with a good ML/NLP contractor can build a basic version of this in three to four months. The scoring model for partisan animosity and outrage already exists in the research literature — the Science 2025 study used an LLM-based classifier that could be replicated or licensed. The browser extension architecture is well-understood.

### What the Extension Shows the User

The product experience I'd build isn't just a silent filter. It would show the user:

1. **Their current feed's emotional profile** — a simple real-time score showing how much anger, outrage, and partisan animosity they're currently being served. Not accusatory, not preachy. Just: here's what the algorithm is doing to your feed.

2. **The reranked version** — their same feed, with RadMo scoring applied. Same sources, same people they follow, different ordering.

3. **The delta over time** — a weekly summary of how their emotional diet has shifted since installing the extension. Make the structural problem visible in a personal, non-accusatory, empirically grounded way.

This is the Tim Urban move applied to product design: show the user the mechanism that's operating on them before asking them to do anything differently. "Here's what the algorithm is doing" is not identity-threatening. It's information. People can receive that without triggering the defensive response that explicit political challenge would produce.

### Phase 2: The Community Layer

While the extension is building its user base, run a parallel track that establishes the Quiet Majority as an identity and community — before the platform exists to house it.

This means: a newsletter with a Tim Urban-esque voice. A Substack or equivalent where the RadMo thesis is articulated with humor and accessibility. A Discord or community space where extension users can talk about what they're noticing in their filtered vs. unfiltered feeds. Podcast appearances. Press.

The goal of Phase 2 is not to build the product. The goal is to answer the question we currently can't answer from the research alone: **Is "radically moderate" an identity that people will voluntarily adopt and publicly claim?** The preference falsification theory says there are a lot of people who privately hold this identity but won't express it under current social conditions. Phase 2 tests whether a platform and community can lower that cost enough to bring them out.

If the answer is yes — if people are organically sharing the newsletter, self-identifying as Quiet Majority members, telling their friends to install the extension — you have your proof of market. You've found the people. Now you know who you're building for.

### Phase 3: The Platform

Only after Phase 1 and Phase 2 generate real evidence do you build the full social platform. At that point:

- You have users who've already experienced the core value proposition
- You have a community with an established identity and culture
- You have real behavioral data on which features actually reduce emotional distress and increase openness to cross-viewpoint content
- You have evidence — or not — that the addressable market is large enough to sustain the platform
- You've de-risked the most expensive design questions (timing of cross-viewpoint features, framing of popups, gamification mechanics) with cheaper experiments

The platform you build in Phase 3 is fundamentally more likely to work than the platform you'd build today, because it's informed by actual user behavior rather than research-grounded hypotheses.

---

## What This Build Order Protects Against

### The backfire problem
The biggest unresolved design challenge in the research is Theory 3: cross-viewpoint exposure under the wrong conditions makes polarization worse. The extension is not a cross-viewpoint exposure tool — it's a outrage-reduction tool. It sidesteps the backfire risk almost entirely. You're not showing users content from the other side; you're showing them less angry content from all sides. That's a much safer first intervention, and one with direct causal evidence behind it.

### The identity threat problem
The extension doesn't ask users to reconsider their political views. It asks them to see their information diet differently. "The algorithm is making you angry" is not an identity threat. "Here's someone who disagrees with you" is. Phase 1 operates in the safer register.

### The market size problem
The extension gives you real conversion data. If 10,000 people install it, 6,000 keep it for 30 days, and 2,000 refer a friend, you have evidence of a real market. If 10,000 people install it and 9,000 uninstall within a week, you have a serious problem with the core thesis that you need to address before spending years building a platform.

### The resources problem
A browser extension with a community layer is a $300k-$500k build, not a $5M build. It lets you test the thesis with a much smaller capital requirement before committing to the larger vision.

---

## What This Build Order Gives Up

Honesty requires naming the tradeoffs.

**Speed.** The full platform is the actual vision. The extension is a stepping stone, not the destination. This approach adds 18-24 months before the full product launches, during which time a competitor could theoretically enter the space and build the platform directly.

**The social graph.** The extension preserves users' existing social graphs rather than building a new one. The full platform's cross-viewpoint contact features require a new social graph with different matching logic. Phase 1 doesn't build this at all — that work still has to happen.

**The positive feedback loop.** The gamification mechanics, the "someone like you / someone unlike you" features, the cooling period design — none of these exist in Phase 1. The extension is a subtraction product (less outrage) more than an addition product (new social connections). Some users will find the subtraction insufficient motivation to sustain engagement.

**The identity statement.** Joining a new platform called "Radical Moderate" is a stronger identity statement than installing a browser extension. The extension is lower friction but also lower commitment. Community-building may be harder without the platform as the primary container for that identity.

These are real tradeoffs. They don't change my recommendation, but they should inform the timeline and resourcing decisions for Phase 2 and Phase 3.

---

## The Honest Version of the Recommendation

If I'm being fully honest: I'd build the extension not because it's the most exciting product, but because **it's the most honest test of whether the core thesis is true in the way that matters for product-market fit.**

The research makes a strong case that:
- The incentive structure is broken
- People are getting a worse experience than they want
- Algorithmic intervention can change that

What the research cannot tell you is whether *enough people care enough* to change their behavior, pay for a solution, and build their identity around a platform that offers one. That question can only be answered by putting something in front of real users.

The extension does that with the least capital, the least time, and the least identity risk — to users and to the project. If it works, you've found your people and proven your thesis. If it doesn't, you've learned something invaluable for a fraction of the cost of building the full platform and finding out there.

The full RadMo platform, built on that foundation, is a much stronger bet than the platform built from first principles today.

---

## Summary

| Phase | What | Why | Timeline |
|-------|------|-----|----------|
| 1 | Browser extension (feed reranker) | Test core thesis, build initial user base, generate behavioral data | Months 1-6 |
| 2 | Community layer (newsletter, Discord) | Establish Quiet Majority identity, validate addressable market, find early adopters | Months 3-12 (parallel) |
| 3 | Full social platform | Build on proven thesis, known audience, tested features, established culture | Month 18+ |

The platform is the destination. The extension and community are how you earn the right to build it.

---

*This document represents a strategic opinion based on the research conducted in this project. It should be revisited as the addressable market research (open question #1 from the session notes) develops and as the core thesis evidence base expands.*
