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
- **Engagement signal display:** Avg reposter cred (0–100 scale); repost > like as conviction signal; viewpoint reach tabled
- **Perspective check panels:** Surface immediately on match identification (not gated to cooling period); geography as secondary unlike-you signal
- **Badges — confirmed default features:** Bridge Builder, First Principles, Wide Lens; documented in `product/badges.md`
- **Score interaction pattern:** Clicking cred score swaps in-place with spider chart; no dropdowns
- **Repost intent qualifier:** Disagree / neutral / agree — flagged as to-do mechanic

### Credibility Score — Dimensions Confirmed
- **Dimension 1: Factual Grounding** *(formerly Is/Ought Sequencing)* — grounding as presence not order; % of normative claims with factual support anywhere in user's work
- **Dimension 2: Cross-Viewpoint Validation** — expanded beyond political spectrum to composite of: political lean, epistemic tribe distance, geographic/cultural distance, information diet distance (citation graph similarity)
- **Dimension 3: Source Diversity** — expanded beyond political bias ratings to format diversity (7-tier ranking), geographic diversity, political lean as one input among several
- **Dimension 4: Claim Integrity** *(formerly Claim Consistency)* — good faith barometer; pattern detection for motivated vs. sloppy misrepresentation; directional clustering of errors = bad faith signal
- **Spider shape = epistemic fingerprint (CONFIRMED):** Shape encodes Tim Urban's vertical axis (how you think, not what you think); cosine similarity between normalized dimension vectors = epistemic matching signal for perspective panels
- **Dual function:** Spider chart is both credibility display and matching engine — one data structure, two uses

### Spider Shape Personas — Confirmed Archetypes
Five named archetypes defined and documented in `product/personas.md`:
- **Bubble Scholar** — rigorous within bubble; tall FG + CI, flat CV + SD. Examples: Krugman, Shapiro, Stewart
- **Vibes Merchant** — collapsed polygon; low everything. Examples: Iran guy, anonymous breaking-news accounts, RFK Jr.
- **Magpie** — wide SD spike, weak elsewhere; widely read, sloppily deployed. Examples: Gladwell, Zakaria
- **Persuader** — single CV spike; charisma as epistemic substitute. Examples: Obama, Harari
- **Radical Moderate** — full balanced polygon; target archetype. Examples: Derek Thompson, Tyler Cowen

### Asymmetric Rigor — Identified Failure Mode
- **Definition:** Applying rigorous evidential standards to outgroup claims while relaxing them for ingroup claims
- **Mechanism:** Financially self-reinforcing via audience capture
- **Signal:** Gap between ingroup CI score and outgroup CI score — detectable algorithmically
- **Documented in:** `product/personas.md`

### Inverse Audience Capture Payout Structure — Concept Documented
- Credibility score decays as audience becomes more homogeneous
- Bonus multiplier for adversarial validation
- Visibility inversely correlated with audience homogeneity
- **Documented in:** `product/personas.md`

### GTM Strategy — Confirmed Framework (this session)
- **Investor narrative:** Credibility layer for the web → platform → professional credential
- **Beachhead:** Policy/academic X refugees (primary); journalists/fact-checkers (secondary); Substack writers (tertiary + distribution channel)
- **Defensibility framing:** Citation graph as compounding proprietary asset; no-ads positioning as principled + strategic
- **Monetization hierarchy:** Freemium → B2B credibility API → portable credential/LinkedIn play
- **Objection playbook:** Niche concern (Community Notes scale counter); gaming concern (multi-dimensional defense); human nature concern (redirect not suppress)
- **Key investor pitch:** "We don't run ads because ads require optimizing for engagement, and that's the problem we're solving."

### Citation Graphs — Defined and Documented
- Network of sources linked by citations; built passively from posting behavior
- Core infrastructure for information diet distance detection (no self-reporting)
- Shared dependency with Source Diversity dimension
- Proprietary data asset that compounds — core defensibility argument
- Requires source classification system as foundation

### Public-Facing URI — Architected
- Stable linkable URL per user credibility score (e.g., `radmo.com/u/[username]/credibility`)
- Enables portable credential play (LinkedIn, Substack bylines, email signatures)
- Other platforms can query/embed via API using URI as identifier
- Must be planned from day one — cannot be retrofitted

### Mobile / App Store Strategy — Confirmed
- **iOS sandboxing:** Cross-app overlay (extension's core value) is impossible in a native mobile app
- **Sequencing:** Extension → PWA (Phase 1.5, alongside web platform) → native app (Phase 3+)
- **Apple Small Business Program:** Sub-$1M annual App Store revenue = 15% commission from day one; per-subscriber 12-month clock is irrelevant to pre-revenue decisions
- **"Start the timer early" instinct debunked:** The 15% rate is per subscriber, not a company-level clock
- **PWA advantages:** No App Store tax, no review process, no Apple political content risk, build once for iOS + Android
- **PWA limitations:** Push notifications partial on iOS; slightly lower fidelity than native
- **First-use retention:** Extension retention is brutal — must pre-seed high-profile accounts so first-use experience is populated, not empty
- **Native app trigger:** When content density + user base justify a mobile destination experience

### Technical Execution
- React artifacts for rapid UI iteration working well
- Component patterns: radar chart, arc gauge, rater cards, perspective panels, swappable cred displays
- Dark UI design system established (Palatino, #0a0a0a bg, color-coded credibility, blue/amber is/ought)

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
- [ ] Avatar shape mirroring spider chart
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

### Build Sequencing
- Extension first (original) → Extension + PWA (Phase 1.5 added this session) → web platform → native mobile app
- PWA added as pragmatic mobile solution before committing to App Store dependency

### Cooling Period
- Original: Post hidden 24 hours → Revised: Post live immediately; cooling = poster's view only; 12 hours

### Is/Ought Visual Language
- Original: Green/yellow/red → Decided: Blue (fact) → amber (opinion); user-facing: "Fact / Opinion"

---

**Last Updated:** 2026-04-10
**Next Review:** Start of next session
