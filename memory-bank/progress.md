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
- **Mechanism:** Financially self-reinforcing via audience capture; attention economics pay more as tribal intensity increases
- **Signal:** Gap between ingroup CI score and outgroup CI score — detectable algorithmically
- **Potential dimension:** Directional Claim Integrity — track CI separately for ingroup-confirming vs. ingroup-challenging sources
- **Documented in:** `product/personas.md`

### Inverse Audience Capture Payout Structure — Concept Documented
- **Thesis:** If credibility score drops as audience becomes more homogeneous, platform creates financial incentive for adversarial validation over tribal applause
- **Proposed mechanics:**
  - Decay function on homogeneous engagement (90%+ likes from similar spiders = score discount)
  - Bonus multiplier for adversarial validation (first cross-bubble validation worth more than hundredth same-bubble validation)
  - Visibility inversely correlated with audience homogeneity
- **Tension:** Fights the dopamine loop; requires cross-viewpoint respect to *feel* like status — the badge and credibility systems must make this work culturally
- **Documented in:** `product/personas.md` (under asymmetric rigor section)

### Spider Evolution Over Time — Documented Cases
- **Sam Harris:** Near-Radical Moderate early → Bubble Scholar late; CV collapsed as audience narrowed post-2016
- **Joe Rogan:** Wide Persuader early → Vibes Merchant core late; guest list narrowed, claim integrity degraded
- **Bret Weinstein:** Legitimate Bubble Scholar early → rogue late; citation universe collapsed, documented claim integrity failures
- **Pattern:** Audience capture is the primary driver of spider drift; financial incentives reinforce the narrowing
- **Research to-do:** What causes spider drift? Is it audience capture, topic self-selection, or genuine epistemic change? Does RadMo's inverse-capture mechanics prevent drift?

### Technical Execution
- React artifacts for rapid UI iteration working well
- Component patterns: radar chart, arc gauge, rater cards, perspective panels, swappable cred displays
- Dark UI design system established (Palatino, #0a0a0a bg, color-coded credibility, blue/amber is/ought)
- Inline visualizer (Anthropic March 2026) used for interactive mockups; artifacts panel still available for downloadable files

## What's Left to Build

### Critical Path (MVP Readiness)
- [ ] **Factual Grounding scoring operationalization** — argument structure parsing / NLP argument mining; harder than order-detection
- [ ] **Badge earn conditions** — thresholds, visual design, loss mechanics; see `product/badges.md`
- [ ] **Viewpoint diversity reach display** — tabled; Option 1 vs. Option 3 decision deferred
- [ ] **Poster-facing UI** — deferred; reader view complete
- [ ] **Dopamine gap** — must solve before MVP; credibility status + insight velocity is working hypothesis
- [ ] **Repost intent qualifier** — disagree / neutral / agree mechanic; feeds into cred score delta
- [ ] **Cred score delta rules** — full mechanic per engagement type
- [ ] **Cooling period UX** — where/how countdown displays to poster
- [ ] **Post-feed mockup updates** — perspective panels always visible; edit button in poster header
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow
- [ ] Community Notes integration (fork + multi-dimensional adaptation)

### Secondary (Post-MVP)
- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious)
- [ ] Mobile-first design
- [ ] Ingroup norm surfacing — "most people in this discussion feel X"
- [ ] Asymmetric rigor / Directional Claim Integrity dimension
- [ ] Mind-changing quality dimension (updating on evidence)
- [ ] Inverse audience capture payout structure — deeper design and implementation
- [ ] Spider shape trajectory display — show a user's shape over time, not just current
- [ ] Hot take spectrum visual
- [ ] Avatar shape mirroring spider chart

### Research Queued
- [ ] News outlet bias rating landscape
- [ ] Community Notes code walkthrough (`matrix_factorization.py`, `scoring.py`)
- [ ] Sentiment analysis / argument mining for Factual Grounding scoring
- [ ] Prediction market monetary incentive design
- [ ] Spider shape change over time — what causes drift? Audience capture vs. topic self-selection vs. genuine epistemic change
- [ ] Source classification infrastructure — shared dependency for Source Diversity and information diet distance

## Current Status

**Phase:** Design & Prototyping

**Blockers:** None critical

**Risk Level:** Low

## Known Issues & Trade-offs

### High Priority
1. **Dopamine Gap:** Why stay on RadMo without the outrage loop?
   - *Hypothesis:* Credibility status + insight velocity
   - *Validation needed:* User testing, behavioral research

2. **Asymmetric Rigor Detection:** Directional CI is the right signal but requires source-level political lean tagging and per-source CI scoring — significant infrastructure requirement

3. **Audience Capture Decay Function:** Inverse payout structure requires detecting homogeneous engagement at scale — gaming risk if rules are legible

4. **Gaming Risk (general):** Legible scoring rules invite optimization for the metric rather than the behavior it proxies

5. **Demographic Skew:** Credibility system rewards a specific epistemic style. Emotional or communal communication registers may score lower not because they're less credible but because the system is miscalibrated.

### Medium Priority
6. **Prediction Market Incentives:** Real money vs. reputation; complex game theory
7. **Scale & Moderation:** Quality at scale; RadMo needs a defensible approach to source credibility without a biased central rater

## Evolution of Key Decisions

### Credibility Score Dimensions
- **Original names:** Is/Ought Sequencing, Cross-Viewpoint Validation, Source Diversity, Claim Consistency
- **Renamed this session:** Factual Grounding (from Is/Ought Sequencing), Claim Integrity (from Claim Consistency)
- **Redefined:** Factual Grounding = presence not order; Cross-Viewpoint = composite axes not just political spectrum; Source Diversity = format + geography + political lean as one input

### Cooling Period
- **Original:** Post hidden for 24 hours
- **Revised:** Post live immediately; cooling period = poster's view of engagement only; 12 hours (down from 24)
- **Rationale:** Distribution is the point; friction targets the dopamine loop, not the spread

### Is/Ought Visual Language
- **Original:** Green/yellow/red gradient
- **Problem:** Conflicts with credibility score color language
- **Decided:** Blue (fact) → amber (opinion); user-facing: "Fact / Opinion"

### Spider Shape Matching
- **Original:** Political lean as matching signal
- **Confirmed:** Spider shape similarity (cosine distance between normalized vectors) = "Someone Like You"
- **Rationale:** Matches on *how* someone thinks (Tim Urban's vertical axis), not *what* they think

### Perspective Panels Timing
- **Original:** Shown after cooling period
- **Revised:** Surface immediately when matches identified — this is the dopamine hook during the cooling window

### Cost of Ignoring Shared Facts
- **Proposed:** Standalone mechanic tying reach penalties to user engagement with Top 10 daily facts
- **Problem:** Specialization ≠ hermetic sealing; a nurse who never engages with foreign policy facts isn't in a bubble; penalizing legitimate specialization is a false positive
- **Resolved:** The cred score handles this more fairly — if a user's citation graph and reposts never leave a single ideological cluster *across all topics they post about*, this depresses Cross-Viewpoint and Source Diversity scores naturally. Standalone mechanic unnecessary. Flag for review when cred score dimensions are fully operationalized.

---

**Last Updated:** 2026-04-07
**Next Review:** Start of next session
