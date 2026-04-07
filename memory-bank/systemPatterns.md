# RadMo System Patterns

## Core Design Philosophy

**Redirect, don't resist:** Work with human psychology (status-seeking, dopamine, social proof) rather than against it.

**Measured product features:** Every core concept should be operationalized and measurable, not abstract.

## Key Frameworks & Concepts

### Factual Grounding (30% of credibility score)
**Definition:** What percentage of a user's normative claims have traceable factual support somewhere in their work. Grounding as *presence*, not *order*.

**Why it matters:** Normative claims unmoored from factual scaffolding are the core failure mode of opinion media. Surfacing whether that scaffolding exists — not whether it appears in a prescribed order — is the right signal.

**Current implementation:** Per-letter color gradient visualization — **blue (fact) → amber (opinion)** — in `is-ought.jsx`. User-facing language: "Fact / Opinion." "Is/Ought" is internal/technical vocabulary only. Red/yellow/green is reserved exclusively for credibility score display.

**Operationalization needed:** Automated scoring via NLP/argument mining as part of credibility calculation.

### Credibility Meter (Multi-dimensional)
**Components:**
- Factual Grounding: 30%
- Cross-Viewpoint Validation: 30%
- Source Diversity: 25%
- Claim Integrity: 15%

**Why it's not engagement:** Credibility is a status substitute (mimics expertise/prestige) without the addiction mechanics of likes/retweets.

**Current implementations:**
- `credibility-score-v1.jsx` (bar chart visualization)
- `credibility-score-v2.jsx` (animated radar/spider chart — preferred direction)

### Cooling Period (12 hours)
**Purpose:** Deliberately less compulsive than traditional social media; friction is a feature.

**How it works:** Posts are live in feeds immediately. The cooling period governs what the *poster* sees of their own engagement — reaction counts, who liked, who reposted, scores — all hidden for 12 hours after posting. Perspective panels (Someone Like You / Someone Unlike You) surface immediately when matches are identified, serving as the dopamine hook during the window.

**Status:** Architecture confirmed; post composer state tracking built in `rm-post.jsx`; backend integration pending.

### Community Notes Foundation
**Source:** Twitter/X's Community Notes algorithm (open source at github.com/twitter/communitynotes)

**Why it's foundational:**
- Binary left-right model is its weakness; RadMo evolves to multi-dimensional
- Bridging works — proved by X adoption across platforms
- Every major platform (Meta, TikTok, YouTube) copied the feature but none built a platform around it

**RadMo enhancement:** Cross-cultural, multi-dimensional model instead of binary political framing.

### Cost of Conformity / Silence Tax
**Definition:** Framework for understanding preference falsification under social pressure.

**Application:** Guides feature design around reducing conformity costs and surfacing silent majorities.

### Prediction Markets + Reputation
**Purpose:** Surface underreported topics through skin-in-the-game incentives.

**Mechanism:** Users with strong credibility scores gain predictive power; predictions feed topic elevation.

**Status:** Conceptual (Bucket 1); needs monetary incentive design.

## Architectural Principles

1. **Transparency as structure:** Explicit modeling of bias/credibility visible to all users
2. **Behavioral credibility:** Proof of humanity (account age, consistency) combined with epistemic quality
3. **Time to insight:** Optimize for reducing friction between opening app and reaching genuine insight (not time reading)
4. **Expert + Seeker loops:** Platform must serve both generators (experts/analysts) and consumers (learners)

## Technical Patterns

- **React artifacts** for UI design and rapid iteration
- **Component composition** over monolithic design
- **Data-driven visualizations** for credibility transparency
- **Stat-based feedback** (no engagement metrics displayed to users)

## Known Limitations & Trade-offs

- **Dopamine gap:** Why stay if cooling period removes the reward loop? Must solve via credibility status and insight velocity
- **First-party content risk:** Original submissions vs. aggregation increases moderation burden
- **Prediction market design:** Monetary incentives are complex; need careful game theory review

*Last updated: 2026-04-07*
