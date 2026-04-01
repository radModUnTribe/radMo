# RadMo Progress

## What Works ✓

### Conceptual Foundation
- **Core thesis validated:** Incentives > morality in platform design
- **Target identity resonates:** "Radically moderate" reframes moderation as rebellious
- **Bridging mechanism proven:** Community Notes demonstrates cross-viewpoint engagement is possible
- **Market timing:** Generational pragmatism (younger voters) supports positioning
- **Differentiation clear:** vs. Ground News (multi-dimensional > binary), vs. X/Reddit (quality > engagement)
- **False polarization validated:** Research confirms in-group/out-group differences are dramatically overestimated; perceived gap (not actual gap) drives hostility — correcting this is a causal intervention
- **Market pull confirmed:** Social media use peaked 2022 and declining, driven by political toxicity and desire for authenticity — not just screen fatigue

### Design Patterns
- **Credibility scoring framework:** 30/30/25/15 weighting feels coherent (is/ought, cross-viewpoint, source diversity, consistency); cross-viewpoint may warrant elevation to 40%
- **Is/ought visualization:** Letter-by-letter gradient effectively shows bias hiding in text; sequencing-based scoring flagged for rethink — intent is connection quality, not ordering
- **Cooling period concept:** User research insight suggests friction is a feature, not a bug
- **Behavioral credibility:** Account legitimacy as credibility signal aligns with actual user behavior (Reddit bot-checking)
- **Engagement signal display:** Avg reposter cred score on 0–100 scale + viewpoint reach bar; reposter pool weighted over liker pool (higher conviction signal)
- **Perspective check panels:** "Someone unlike you / someone like you" shown below each post as cross-viewpoint exposure mechanism; framing validated by meta-perception correction research
- **Badges introduced:** Bridge Builder (cross-viewpoint), First Principles (is/ought), Wide Lens (source diversity) — design spec pending

### Technical Execution
- React artifacts for rapid UI iteration working smoothly
- Artifact quality sufficient for stakeholder feedback
- Component design patterns established: radar chart, arc gauge, viewpoint bar, rater cards, perspective panels

## What's Left to Build

### Critical Path (MVP Readiness)
- [ ] **Resolve is/ought scoring intent** — not sequencing order but connection quality between factual grounding and normative claims; needs algorithmic spec
- [ ] **Badge system design** — Bridge Builder, First Principles, Wide Lens named; earn conditions, visual design, and placement not yet specced
- [ ] **Poster UI** (deferred) — engagement signal display for the original poster's own view of how their post is performing; reader view built first
- [ ] Finalize credibility score visual (v2 radar preferred; needs A/B clarity)
- [ ] Cooling period UX (where/how user sees countdown)
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow (how do users add posts?)
- [ ] Community Notes integration (fork & adapt algorithm)

### Secondary (Post-MVP)
- [ ] Prediction markets + reputation system
- [ ] Sentiment analysis for automated bias detection
- [ ] Claim extraction & cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (beyond left-right binary)
- [ ] Mobile-first design (currently desktop-focused)
- [ ] Ingroup norm surfacing feature ("most people in this discussion feel X" — interrupts polarization feedback loop)
- [ ] Source credibility rating methodology — research needed; Ground News and AllSides as reference points; bias rating landscape to be documented

### Research & Documentation
- [ ] Decision log for design tradeoffs
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Community Notes code walkthrough (`matrix_factorization.py`, `scoring.py`)
- [ ] News outlet bias rating landscape — collect and compare existing methodologies (Ground News, AllSides, Ad Fontes, others)

## Current Status

**Phase:** Design & Prototyping

**Completion:** ~30% (conceptual framework + UI mockup suite; backend/integration 0%)

**Blockers:** None critical

**Risk Level:** Low (validating concepts before heavy engineering)

## Known Issues & Trade-offs

### High Priority
1. **Dopamine Gap:** Why stay on RadMo if cooling period removes reward loop?
   - *Hypothesis:* Credibility status + insight velocity substitute for engagement dopamine
   - *Validation needed:* User testing, behavioral model research
   - *Timeline:* Must solve before MVP launch

2. **Is/Ought scoring rethink:** Ordering-based scoring is a weak proxy for the real intent
   - *Current weakness:* A normative claim that comes before evidence isn't inherently less credible than one that comes after
   - *Better intent:* How well does the user demonstrate the connection between factual grounding and normative conclusions?
   - *Needs:* Algorithmic spec, potentially NLP-based claim extraction

3. **Generational adoption strategy:** Different primary motives by cohort
   - *Hypothesis:* Gen Z joins for genuine connection; older Millennials+ join for credibility and information quality
   - *Adoption mechanic:* Younger users lead → parents follow
   - *Validation needed:* User interviews across cohorts

4. **Behavioral Credibility Signals:** How do we prevent gaming?
   - *Hypothesis:* Multi-signal approach (age + consistency + cross-viewpoint validation + prediction accuracy)
   - *Validation needed:* Gaming simulation, adversarial testing

### Medium Priority
5. **Prediction Market Incentives:** Monetary design is complex game theory
6. **Scale & Moderation:** How to maintain quality at scale?
7. **"Why open RadMo?"** — primary motivation to switch from incumbent platforms still needs design work

## Evolution of Key Decisions

### Credibility Score Weighting
- **Original:** Even split across dimensions
- **Refined:** 30/30/25/15 (is/ought, cross-viewpoint, source diversity, consistency)
- **In discussion:** Cross-viewpoint elevation to 40% — most aligned with platform's core depolarization goal

### Is/Ought Scoring Intent
- **Original:** Sequencing — normative claims follow factual grounding
- **Flagged weakness:** Ordering is a weak proxy; a hot take isn't less credible because it came first
- **Revised intent:** Quality of connection between is and ought — does the user show their reasoning?
- **Status:** Needs redesign before operationalization

### Engagement Signal Display
- **Decision:** Show reposter avg cred (not liker avg) — reposting puts reputation on the line
- **Scale:** 0–100 (not 0–1)
- **Focal point:** Viewpoint reach (cross-viewpoint diversity of who engaged) over raw cred aggregate
- **Working toward:** Single composite engagement quality score; experimenting first with separate signals
- **Deferred:** Poster-facing UI (how the poster sees their own post's performance)

### Perspective Check Panels
- **Mechanism:** Meta-perception correction via vicarious contact (research-grounded)
- **Two panels:** "Someone unlike you" (different background, same conclusion) + "Someone like you" (same background, different conclusion)
- **Four design questions still open:** Signals defining like/unlike, trigger conditions, opt-in vs. proactive, passive vs. interactive
- **Status:** First mockup built; design decisions pending

### Community Notes Integration
- **Original:** Direct fork of X algorithm
- **Refined:** Fork + evolve to multi-dimensional instead of binary left/right
- **Rationale:** Addresses known limitation; cross-cultural framing more ambitious

---

**Last Updated:** 2026-04-01
**Next Review:** Badge system design; is/ought scoring redesign; dopamine gap
