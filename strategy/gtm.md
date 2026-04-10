# RadMo Go-to-Market Strategy

> **Context:** This is a thought experiment — RadMo is in design/prototyping phase. The purpose is to identify GTM constraints that should inform design decisions now, not to produce an investor-ready deck. Written: 2026-04-10.

---

## The Core GTM Problem

RadMo is a social platform, which means it has the cold start problem by default. A credibility score with no users is meaningless. A feed with no posts is empty. The entire value proposition requires density.

**The good news:** RadMo can deliver utility *before* the social layer exists — via a browser extension that overlays credibility signals on existing platforms. This is the beachhead.

---

## Phase 1: Browser Extension as Beachhead

A browser extension that overlays credibility signals on X, Reddit, Substack, and news sites delivers real value with zero users. RadMo isn't competing with Twitter — it's parasitically improving it. This is the Ground News playbook executed one layer below content: on the *reader*, not the outlet.

**Why investors like this:**
- Bypasses cold start entirely
- Accumulates proprietary data (citation graphs, reading patterns, early spider profiles) before the platform exists
- Creates a pre-seeded cohort for platform launch
- Distribution: app stores + word of mouth in credibility-conscious communities

**Pitch sentence:** *"We're building the credibility layer for the web. The platform comes second."*

---

## Beachhead User Segments

**Primary:** Policy/academic X refugees — users who relied on Twitter for intellectual discourse and were pushed out by the post-2022 quality collapse. Bluesky caught some; it has no credibility layer. Already credibility-motivated, already frustrated, already looking.

**Secondary:** Journalists, fact-checkers, media critics — professional identity tied to epistemic rigor. Public RadMo usage = endorsement of the credibility model. That's earned marketing.

**Tertiary:** Substack writers with existing audiences — incentive to display credibility score in byline. Also a distribution channel: a writer who puts "My RadMo score: [link]" in their footer sends their readers to install the extension.

**Generational hypothesis:** Millennial layer first (income, professional incentive, attention span for product depth). Gen Z follows if the product is good. Older users follow if younger family members adopt first.

---

## Investor Narrative Arc

**Problem:** The information environment is broken. Incumbents target symptoms (moderation, fact-checking, labels), not incentives.

**Insight:** Platforms aren't broken because of bad actors. They're doing exactly what they were optimized to do. Fix the optimization target, fix the platform.

**Why now:** Social media use peaked 2022, declining due to toxicity and inauthenticity. Bluesky, Threads, and BeReal captured some demand — none solved the epistemic problem.

**Why us:** Community Notes proved bridging works at scale. We're building a platform *around* the bridging algorithm instead of bolting it on as a feature. Multi-dimensional credibility is the genuine evolution beyond the binary left/right model every major platform has now copied as a checkbox.

**Defensibility:** The credibility score is a proprietary data asset that compounds. Citation graphs are hard to replicate. Spider profiles are sticky identity signals — users won't want to start over.

---

## Citation Graphs

A citation graph is a network where nodes are sources (articles, papers, sites, accounts) and edges are citations — links, references, quotes, or embeds between them.

Every user builds a personal citation graph over time: which sources they draw from, how those sources relate to each other, and how they relate to sources cited by other users.

**Why this matters for RadMo:** Citation graphs detect information diet distance without self-reporting. Two users who only ever cite sources that cluster together have high diet similarity. Two users whose citation graphs barely overlap are genuinely consuming from different information universes — that's the signal for Cross-Viewpoint Validation.

**Infrastructure dependency:** Requires a source classification system — every outlet tagged by format tier, geography, and political lean where available. Built passively from normal platform behavior; no user input required.

**Compounding value:** Citation graphs are a proprietary data asset that gets richer with every interaction. No competitor can replicate three years of graph data overnight. This is a core defensibility argument.

---

## Public-Facing URI

A public-facing URI means a stable, unique, linkable web address for a user's credibility score:

`radmo.com/u/[username]/credibility`

…that resolves to a live page (or clean JSON) showing current score, spider shape, and score history. Anyone who clicks it gets the authoritative, current score from RadMo — not a static screenshot.

**Why it matters:** Enables the portable credential play (LinkedIn bio, Substack footer, email signature, job application). Without a URI, users screenshot it — lossy, static, fakeable. With a URI, other platforms can embed or query the score via API.

**Architectural implication:** User identity and score data must be structured with public addressability from day one. This cannot be retrofitted cleanly.

---

## Monetization Hypothesis

In order of viability:

**1. Freemium (most defensible)**
Basic feed + credibility scores: free. Advanced analytics (spider trajectory over time, source classification detail, information diet audit): paid. ~$8–12/mo. Comparable to Substack subscription psychology.

**2. B2B credibility API**
Newsrooms, fact-checking orgs, and platforms pay to query RadMo's credibility scores. Ground News sells bias ratings to individuals; RadMo sells a richer signal to institutions. Real business even if consumer product struggles.

**3. Portable credential / LinkedIn play**
Long-term. If a RadMo score becomes a professional signal, the platform has LinkedIn-level defensibility. Investors thinking in 10-year arcs will find this compelling.

**What we're deliberately not doing:** Engagement-optimized advertising. Principled *and* strategic — "We don't run ads because ads require optimizing for engagement, and that's the problem we're solving."

---

## Key Investor Objections

**"This is a niche product for already-rigorous people."**
Community Notes has 200M+ users. The credibility-conscious audience is larger than it looks, and the product's job isn't to convert Fox News addicts — it's to create a better home for people already leaving. Bubble/adventure mode framing makes the product legible to users who don't think of themselves as "epistemically rigorous."

**"How do you stop gaming?"**
The credibility score is designed around signals that are hard to game in isolation. Gaming one dimension depresses others. The system rewards the behavior, not the metric.

**"You're fighting human nature."**
We're not fighting it — we're redirecting it. Tribal instincts are the engine; we're changing what they're pointed at. The dopamine loop still exists; it runs on credibility status instead of outrage.

---

## Design Implications from GTM Thinking

- **Browser extension is not just Phase 1 strategy — it's the GTM proof of concept.** If people install and stay, you have PMF signals before the platform exists.
- **Spider chart is a marketing asset.** "Here's your epistemic fingerprint" is shareable. Design it screenshot-worthy from day one.
- **Portable credibility score shapes backend architecture.** Public URI and clean export must be planned upfront, not retrofitted.
- **B2B API viability means source classification infrastructure is also a product.** Worth building with that in mind.
- **Pre-seed high-profile accounts before launch.** First-use experience must deliver a "wow" moment immediately — extension retention is brutal; users who see empty states uninstall within a week.

---

## Mobile Strategy

See `strategy/what-to-build-now.md` for the full mobile sequencing argument. Summary:

- iOS/Android sandboxing prevents cross-app overlay — the extension's core value proposition is impossible in a native mobile app
- A native app requires content density to be useful — brings back the cold start problem the extension bypasses
- Recommended sequencing: extension → PWA alongside web platform → native app only when content density justifies a mobile destination
- Apple Small Business Program: developers under $1M annual App Store revenue qualify for 15% commission from day one (not after 12 months). The per-subscriber 12-month clock is irrelevant to pre-revenue sequencing decisions.
- Apple's policies on political content apps have been historically unpredictable — App Store dependency is a platform risk worth deferring

---

*Last updated: 2026-04-10*
