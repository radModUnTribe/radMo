# RadMo Progress

## What Works ✓

### Conceptual Foundation
- **Core thesis validated:** Incentives > morality in platform design
- **Target identity resonates:** "Radically moderate" reframes moderation as rebellious
- **Bridging mechanism proven:** Community Notes demonstrates cross-viewpoint engagement is possible at scale
- **Matrix factorization understood:** note_intercept = common ground factor; user/note factors = political alignment; fully documented this session with real-number examples
- **Market timing:** Generational pragmatism (younger voters) supports positioning
- **Differentiation clear:** vs. Ground News (multi-dimensional > binary), vs. X/Reddit (quality > engagement)
- **False polarization validated:** Perceived gap, not actual gap, drives hostility — correcting this is a causal intervention
- **Market pull confirmed:** Social media use peaked 2022, declining due to political toxicity and desire for authenticity

### Design Patterns
- **Credibility scoring framework:** 30/30/25/15 weighting; cross-viewpoint elevation to 40% under discussion
- **Is/ought visualization:** Blue (fact) → amber (opinion) spectrum; "Fact / Opinion" user-facing; "Is/Ought" internal
- **Is/ought scoring intent clarified:** Connection quality between factual and normative claims — not ordering; needs redesign
- **Cooling period:** Friction is a feature; 24–72hr configurable delay
- **Behavioral credibility:** Account legitimacy as credibility signal; Reddit bot-checking behavior as validation
- **Engagement signal display:** Avg reposter cred (0–100 scale); repost > like as conviction signal; viewpoint reach tabled
- **Perspective check panels:** "Someone unlike you — nearby" + "Someone like you"; geography as primary unlike-you signal; meta-perception correction mechanism
- **Badges — confirmed default features:** Bridge Builder, First Principles, Wide Lens; documented in `product/badges.md`
- **Score interaction pattern:** Clicking cred score swaps in-place with spider chart; no dropdowns

### Technical Execution
- React artifacts for rapid UI iteration working well
- Component patterns: radar chart, arc gauge, rater cards, perspective panels, swappable cred displays
- Dark UI design system established (Palatino, #0a0a0a bg, color-coded credibility, blue/amber is/ought)

## What's Left to Build

### Critical Path (MVP Readiness)
- [ ] **Is/ought scoring redesign** — algorithmic spec for connection quality, not ordering
- [ ] **Badge earn conditions** — thresholds (draft: score ≥75, 90-day rolling, 20+ posts), visual design, loss mechanics; see `product/badges.md`
- [ ] **Viewpoint diversity reach display** — tabled; Option 1 (similarity index) vs. Option 3 (cluster count); polarized case is the key test
- [ ] **Poster-facing UI** — deferred; reader view complete
- [ ] **Dopamine gap** — must solve before MVP; credibility status + insight velocity is working hypothesis
- [ ] Cooling period UX (where/how countdown displays)
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
- [ ] Source credibility rating methodology — Ground News, AllSides, Ad Fontes, Media Bias/Fact Check landscape
- [ ] Hot take spectrum visual — bar from 😑 hot take to ✅ Radically Moderate
- [ ] Avatar shape mirroring spider chart — polygon avatar matching credibility profile

### Research Queued
- [ ] News outlet bias rating landscape
- [ ] Community Notes code walkthrough (`matrix_factorization.py`, `scoring.py`)
- [ ] Sentiment analysis for bias detection (model selection, cost/accuracy)
- [ ] Prediction market monetary incentive design

## Current Status

**Phase:** Design & Prototyping

**Completion:** ~32% (conceptual framework + UI mockup suite; backend/integration 0%)

**Blockers:** None critical

**Risk Level:** Low

## Known Issues & Trade-offs

### High Priority
1. **Dopamine Gap:** Why stay on RadMo without the outrage loop?
   - *Hypothesis:* Credibility status + insight velocity
   - *Validation needed:* User testing, behavioral research

2. **Is/Ought scoring redesign:** Ordering is a weak proxy
   - *Better intent:* Quality of connection between factual grounding and normative conclusions
   - *Needs:* NLP/LLM-based claim extraction spec

3. **Viewpoint diversity reach:** Option 1 can't distinguish polarized agreement from genuine broad reach
   - *Option 3 advantage:* Cluster shape preserves this distinction
   - *Option 3 cost:* Higher cognitive load for users
   - *Status:* Tabled

4. **Behavioral Credibility Signals:** Gaming prevention
   - *Hypothesis:* Multi-signal (age + consistency + cross-viewpoint + prediction accuracy)

### Medium Priority
5. **Prediction Market Incentives:** Real money vs. reputation; complex game theory
6. **Scale & Moderation:** Quality at scale; Ground News used curation; RadMo needs different approach
7. **"Why open RadMo?"** — primary motivation to switch still needs design work

## Evolution of Key Decisions

### Credibility Score Weighting
- **Original:** Even split
- **Refined:** 30/30/25/15
- **In discussion:** Cross-viewpoint to 40%

### Is/Ought Scoring Intent
- **Original:** Sequencing (normative after factual)
- **Flagged weakness:** Ordering is a weak proxy
- **Revised intent:** Connection quality between is and ought
- **Status:** Needs redesign

### Is/Ought Visual Language
- **Original:** Green/yellow/red gradient
- **Problem:** Conflicts with credibility score color language
- **Decided:** Blue (fact) → amber (opinion); user-facing: "Fact / Opinion"

### Engagement Signal Display
- **Decision:** Reposter avg cred only; 0–100 scale; swap interaction (not dropdown)
- **Tabled:** Viewpoint reach (geometric reach visualization deferred)
- **Deferred:** Poster-facing UI

### Perspective Check Panels
- **Mechanism:** Meta-perception correction via vicarious contact
- **New direction:** Geography as primary signal for "Someone Unlike You"
- **Hypothesis:** Local dissimilar people who share your viewpoint = most valuable connection
- **Four design questions still open:** Signals, trigger, opt-in vs. proactive, passive vs. interactive

### Community Notes Integration
- **Original:** Direct fork
- **Refined:** Fork + multi-dimensional factors (not binary left/right)
- **This session:** Full matrix factorization mechanics documented with real-number examples

### Badges
- **Original:** Mentioned in research notes as a concept
- **This session:** Bridge Builder, First Principles, Wide Lens named and documented as confirmed default features in `product/badges.md`

---

**Last Updated:** 2026-04-02
**Next Review:** Start of next session
