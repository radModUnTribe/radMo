# RadMo Progress

## What Works ✓

### Conceptual Foundation
- **Core thesis validated:** Incentives > morality in platform design
- **Target identity resonates:** "Radically moderate" reframes moderation as rebellious
- **Bridging mechanism proven:** Community Notes demonstrates cross-viewpoint engagement is possible at scale
- **Matrix factorization understood:** note_intercept = common ground factor; user/note factors = political alignment; fully documented with real-number examples
- **Market timing:** Generational pragmatism (younger voters) supports positioning
- **Differentiation clear:** vs. Ground News (multi-dimensional > binary), vs. X/Reddit (quality > engagement)
- **False polarization validated:** Perceived gap, not actual gap, drives hostility — correcting this is a causal intervention
- **Market pull confirmed:** Social media use peaked 2022, declining due to political toxicity and desire for authenticity
- **Information environment formally defined:** See `strategy/information-environment.md` — seven-layer model; RadMo's explicit lane documented

### Design Patterns — Confirmed Architecture
- **Cooling period (confirmed):** Posts live immediately in feeds; cooling period governs what the *poster* sees of their own engagement; perspective panels surface immediately when matches identified; full engagement data unlocks at 12 hours
- **Edit window:** 30-minute window from post time; closes early on first repost
- **Is/ought visualization:** Blue (fact) → amber (opinion) spectrum; "Fact / Opinion" user-facing; "Is/Ought" internal
- **Engagement signal display:** Avg reposter cred (0–100 scale, rendered as progress ring); repost > like as conviction signal; viewpoint reach tabled
- **Perspective check panels:** Surface immediately on match identification (not gated to cooling period); geography as secondary unlike-you signal
- **Badges — confirmed default features:** Bridge Builder, First Principles, Wide Lens; documented in `product/badges.md`
- **Score interaction pattern:** Cred score as circular progress ring, clockwise from 12 o'clock; clicking ring swaps in-place with spider chart
- **Repost intent qualifier:** Disagree / neutral / agree — flagged as to-do mechanic

### Credibility Score — Dimensions Confirmed
- **Dimension 1: Factual Grounding** *(formerly Is/Ought Sequencing)* — grounding as presence not order; % of normative claims with factual support anywhere in user's body of work
- **Dimension 2: Cross-Viewpoint Validation** — expanded beyond political spectrum to composite of: political lean, epistemic tribe distance, geographic/cultural distance, information diet distance (citation graph similarity)
- **Dimension 3: Source Diversity** — expanded beyond political bias ratings to format diversity (7-tier ranking), geographic diversity, political lean as one input among several
- **Dimension 4: Claim Integrity** *(formerly Claim Consistency)* — good faith barometer; pattern detection for motivated vs. sloppy misrepresentation; directional clustering of errors = bad faith signal
- **Spider shape = epistemic fingerprint (CONFIRMED):** Shape encodes Tim Urban's vertical axis (how you think, not what you think); cosine similarity between normalized dimension vectors = epistemic matching signal for perspective panels
- **Dual function:** Spider chart is both credibility display and matching engine — one data structure, two uses

### Claim Integrity — Sub-components Locked (2026-04-10)
Steelmanning detection added as structured extension of Claim Integrity:

| Sub-component | What it measures | Weight within CI |
|---|---|---|
| Factual accuracy | Do cited sources support the claims made? | ~50% |
| Steelmanning score | Is the source's strongest argument engaged? | ~30% |
| Asymmetric rigor | Same accuracy standard for ingroup and outgroup sources? | ~20% |

Full spec: `product/steelmanning-spec.md`

### Steelmanning Compounding Mechanic — Locked (2026-04-10)
- **Decision:** Option B — multiplicative CV multiplier
- `CV_effective = CV_base × (1 + steelmanning_bonus)`, bonus 0.0–0.3
- Adversarial citation earns zero multiplier; steelmanned citation amplifies CV payoff
- Rationale: CI and CV measure different things on the same event — not double-counting
- Status: locked for now, not permanent

### Spider Shape Personas — Confirmed Archetypes
Five named archetypes defined and documented in `product/personas.md`:
- **Bubble Scholar** — rigorous within bubble; tall FG + CI, flat CV + SD. Examples: Krugman, Shapiro, Stewart
- **Vibes Merchant** — collapsed polygon; low everything. Examples: Iran guy, anonymous breaking-news accounts, RFK Jr.
- **Magpie** — wide SD spike, weak elsewhere; widely read, sloppily deployed. Examples: Gladwell, Zakaria
- **Persuader** — single CV spike; charisma as epistemic substitute. Examples: Obama, Harari
- **Radical Moderate** — full balanced polygon; target archetype. Examples: Derek Thompson, Tyler Cowen

**Persona hover blurbs (locked 2026-04-10):**
- Bubble Scholar: "Rigorous, well-sourced, never leaves the bubble."
- Vibes Merchant: "All assertion, zero evidence, high volume."
- Magpie: "Reads widely, synthesizes loosely, cites everything."
- Persuader: "Cross-partisan appeal, charisma-forward, light on rigor."
- Radical Moderate: "Grounded, cross-validated, intellectually honest."

**Persona illustration direction (2026-04-10):** Original IP-safe characters needed. Art direction brief:
- Bubble Scholar: professor lecturing to a room of clones of himself
- Vibes Merchant: The Dude archetype — bathrobe, sunglasses, slippers, cocktail, unbothered
- Magpie: conspiracy board — red string connecting Lancet, Cato, FT, Substack
- Persuader: TED Talk speaker mid-stride, arms open, lighting perfect
- Radical Moderate: referee both teams are annoyed at but secretly trust

### UX Locks (2026-04-10)
- **Cred score ring:** Circular progress ring, clockwise from 12 o'clock, proportional to score; faint full-circle track; color matches persona
- **Avg reposter cred:** Same ring treatment at smaller size; label "avg reposter cred" confirmed
- **Dimension tooltips (Option C):** FG = "Opinions backed by facts"; CV = "Validated by people who disagree"; SD = "Breadth and independence of sources"; CI = "Sources honestly represented"
- **Fact/opinion tooltips (Option A):** Fact = "Likely a factual claim — verifiable against evidence."; Opinion = "Likely a normative claim — reflects a value or judgment."

### Cred Score Primary Function Clarified (2026-04-10)
Cred score's primary job is **discovery primitive** — enabling readers to assess a stranger in their feed and decide whether they're worth following. The spider shape needs to be legible at scroll speed (44px avatar). Secondary job: post-level trust signal. This framing elevates the avatar-as-spider design question to active priority.

Key insight: "You find people worth following not because they think like you politically, but because they think like you epistemically." RadMo's discovery is epistemic fingerprint matching across value distance.

### News Outlet Cross-Aisle Signal (2026-04-10)
RadMo is the only platform where outlets can observe genuine cross-aisle readership data. Steelmanning mechanic is the structural defense against adversarial citation optimizing for dunkable content. Passive presence (outlet as citable source) is immediately valuable without outlet participation. GTM pitch to outlets: audience signal play, not credibility play.

### Asymmetric Rigor — Identified Failure Mode
- **Definition:** Applying rigorous evidential standards to outgroup claims while relaxing them for ingroup claims
- **Mechanism:** Financially self-reinforcing via audience capture
- **Signal:** Gap between ingroup CI score and outgroup CI score — detectable algorithmically
- **Documented in:** `product/personas.md`, `product/steelmanning-spec.md`

### GTM Strategy — Confirmed Framework
- **Investor narrative:** Credibility layer for the web → platform → professional credential
- **Beachhead:** Policy/academic X refugees (primary); journalists/fact-checkers (secondary); Substack writers (tertiary + distribution channel)
- **Defensibility framing:** Citation graph as compounding proprietary asset; no-ads positioning as principled + strategic
- **Monetization hierarchy:** Freemium → B2B credibility API → portable credential/LinkedIn play
- **Build sequencing:** Extension → PWA (Phase 1.5) → web platform → native app

### Technical Execution
- React artifacts for rapid UI iteration working well
- Component patterns: radar chart, arc gauge, rater cards, perspective panels, swappable cred displays, circular progress rings
- Dark UI design system established (Palatino, #0a0a0a bg, color-coded credibility, blue/amber is/ought)
- Persona feed mockup v6 current: `product/mockups/persona-feed-2026-04-10.jsx`

## What's Left to Build

### Critical Path (MVP Readiness)
- [ ] **Factual Grounding scoring operationalization** — argument structure parsing / NLP argument mining
- [ ] **Badge earn conditions** — thresholds, visual design, loss mechanics
- [ ] **Viewpoint diversity reach display** — tabled; Option 1 vs. Option 3 decision deferred
- [ ] **Poster-facing UI** — deferred; reader view complete
- [ ] **Dopamine gap** — must solve before MVP
- [ ] **Repost intent qualifier** — disagree / neutral / agree mechanic
- [ ] **Cred score delta rules** — full mechanic per engagement type
- [ ] **Post-feed mockup updates** — perspective panels always visible; edit button in poster header
- [ ] **PWA design** — mobile presence alongside web platform
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow
- [ ] Community Notes integration (fork + multi-dimensional adaptation)

### Secondary (Post-MVP)
- [ ] Native mobile app (React Native, post platform launch)
- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious)
- [ ] Mobile-first design
- [ ] Ingroup norm surfacing
- [ ] Asymmetric rigor / Directional Claim Integrity dimension
- [ ] Mind-changing quality dimension
- [ ] Inverse audience capture payout structure — deeper design
- [ ] Spider shape trajectory display
- [ ] Hot take spectrum visual
- [ ] Avatar shape mirroring spider chart — legibility question open
- [ ] Persona illustrations — IP-safe original art
- [ ] Public URI / portable credential infrastructure
- [ ] B2B credibility API

### Research Queued
- [ ] News outlet bias rating landscape
- [ ] Community Notes code walkthrough
- [ ] Sentiment analysis / argument mining for Factual Grounding scoring
- [ ] Prediction market monetary incentive design
- [ ] Spider shape change over time
- [ ] Source classification infrastructure
- [ ] Flow state research

## Current Status

**Phase:** Design & Prototyping
**Blockers:** None critical
**Risk Level:** Low

## Known Issues & Trade-offs

### High Priority
1. **Dopamine Gap:** Why stay on RadMo without the outrage loop?
2. **Asymmetric Rigor Detection:** Significant infrastructure requirement
3. **Audience Capture Decay Function:** Gaming risk if rules are legible
4. **Gaming Risk (general):** Legible scoring rules invite metric optimization
5. **Demographic Skew:** Credibility system may miscalibrate against emotional/communal communication styles

### Medium Priority
6. **Prediction Market Incentives:** Real money vs. reputation
7. **Scale & Moderation:** Quality at scale without biased central rater

## Evolution of Key Decisions

### Credibility Score Dimensions
- Renamed: Is/Ought Sequencing → Factual Grounding; Claim Consistency → Claim Integrity
- Redefined: Factual Grounding = presence not order; Cross-Viewpoint = composite axes; Source Diversity = format + geography + political lean as one input
- Claim Integrity sub-components added (2026-04-10): factual accuracy + steelmanning score + asymmetric rigor

### Steelmanning Compounding
- Options A (additive), B (multiplicative), C (gating) evaluated 2026-04-10
- Option B selected: CV_effective = CV_base × (1 + steelmanning_bonus)

### Build Sequencing
- Extension first (original) → Extension + PWA (Phase 1.5 added) → web platform → native mobile app

### Cooling Period
- Original: Post hidden 24 hours → Revised: Post live immediately; cooling = poster's view only; 12 hours

### Is/Ought Visual Language
- Original: Green/yellow/red → Decided: Blue (fact) → amber (opinion); user-facing: "Fact / Opinion"

### Cred Score Display
- Original: numeric badge → Revised: circular progress ring, clockwise from 12 o'clock
- Avg reposter cred: raw number → same ring treatment at smaller size

---

**Last Updated:** 2026-04-10
**Next Review:** Start of next session
