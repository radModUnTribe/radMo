# RadMo System Patterns

## Core Design Philosophy

**Redirect, don't resist:** Work with human psychology (status-seeking, dopamine, social proof) rather than against it.

**Measured product features:** Every core concept should be operationalized and measurable, not abstract.

## Key Frameworks & Concepts

### Is/Ought Separation (30% of credibility score)
**Definition:** Distinguishing factual claims (is) from value judgments (ought) in text.

**Why it matters:** Bias often hides value claims as facts; explicit separation builds epistemic rigor.

**Current implementation:** Per-letter color gradient visualization (green=is, yellow=mixed, red=ought) in `is-ought.jsx`

**Operationalization needed:** Automated is/ought scoring as part of credibility calculation

### Credibility Meter (Multi-dimensional)
**Components:**
- Is/ought sequencing: 30%
- Cross-viewpoint validation: 30%
- Source diversity: 25%
- Claim consistency: 15%

**Why it's not engagement:** Credibility is a status substitute (mimics expertise/prestige) without the addiction mechanics of likes/retweets

**Current implementations:** 
- `credibility-score-v1.jsx` (bar chart visualization)
- `credibility-score-v2.jsx` (animated radar/spider chart)

**Next:** Integrate into post composer; make real-time feedback as users write

### Cooling Period (24-72 hours)
**Purpose:** Deliberately less addictive than traditional social media; friction is a feature

**Effect:** Allows time for thoughtful reactions; reduces reactive pile-ons

**Status:** Designed (post composer state tracking in `rm-post.jsx`); not yet integrated into backend

### Community Notes Foundation
**Source:** Twitter/X's Community Notes algorithm (open source at github.com/twitter/communitynotes)

**Why it's foundational:**
- Binary left-right model is its weakness; RadMo evolves to multi-dimensional
- Bridging works—proved by X adoption across platforms
- Every major platform (Meta, TikTok, YouTube) copied the feature but none built a platform around it

**RadMo enhancement:** Cross-cultural angle instead of binary political framing

### Cost of Conformity / Silence Tax
**Definition:** Framework for understanding preference falsification under social pressure

**Application:** Guides feature design around reducing conformity costs and surfacing silent majorities

### Prediction Markets + Reputation
**Purpose:** Surfaced underreported topics through skin-in-the-game incentives

**Mechanism:** Users with strong credibility scores gain predictive power; predictions feed topic elevation

**Status:** Conceptual; needs monetary incentive design

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

- **Dopamine gap:** Why stay if cooling period removes reward? Must solve via credibility status and insight velocity
- **First-party content risk:** Original submissions vs. aggregation increases moderation burden
- **Prediction market design:** Monetary incentives are complex; need careful game theory review