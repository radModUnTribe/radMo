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
- **Credibility scoring framework:** 30/30/25/15 weighting feels coherent (is/ought, cross-viewpoint, source diversity, consistency)
- **Is/ought visualization:** Letter-by-letter gradient effectively shows bias hiding in text
- **Cooling period concept:** User research insight suggests friction is a feature, not a bug
- **Behavioral credibility:** Account legitimacy as credibility signal aligns with actual user behavior (Reddit bot-checking)

### Technical Execution
- React artifacts for rapid UI iteration working smoothly
- Artifact quality sufficient for stakeholder feedback
- Component design patterns emerging (radar chart > bar chart for multi-dimensional data)

## What's Left to Build

### Critical Path (MVP Readiness)
- [ ] **[ELEVATED PRIORITY] Design "Someone Like You / Someone Unlike You" popup** — research confirms this is a causal depolarization mechanism via meta-perception correction; four open design questions still to resolve (signals, trigger, opt-in vs. proactive, passive vs. interactive)
- [ ] Finalize credibility score visual (v2 radar preferred; needs A/B clarity)
- [ ] Operationalize is/ought scoring (spec, not just visual)
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

### Research & Documentation
- [ ] `product/features.md` formal specs
- [ ] Decision log for design tradeoffs
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Community Notes code walkthrough (`matrix_factorization.py`, `scoring.py`)

## Current Status

**Phase:** Design & Prototyping

**Completion:** ~25% (conceptual framework + UI mockups; backend/integration 0%)

**Blockers:** None critical; design questions are clarification, not showstoppers

**Risk Level:** Low (validating concepts before heavy engineering)

## Known Issues & Trade-offs

### High Priority
1. **Dopamine Gap:** Why stay on RadMo if cooling period removes reward loop?
   - *Hypothesis:* Credibility status + insight velocity substitute for engagement dopamine
   - *Validation needed:* User testing, behavioral model research
   - *Timeline:* Must solve before MVP launch

2. **Generational adoption strategy:** Different primary motives by cohort
   - *Hypothesis:* Gen Z joins for genuine connection; older Millennials+ join for credibility and information quality
   - *Adoption mechanic:* Younger users lead → parents follow to understand the platform → parents discover it serves their own informational needs (mirrors Facebook parent-adoption dynamic)
   - *Validation needed:* User interviews across cohorts

3. **First-Party Content Moderation:** Original submissions create moderation burden
   - *Trade-off:* Aggregation (like Ground News) vs. Community-generated (like Reddit)
   - *Current stance:* Original content necessary for differentiation; moderation team scales as needed

4. **Behavioral Credibility Signals:** How do we prevent gaming? (Account age can be bought)
   - *Hypothesis:* Multi-signal approach (age + consistency + cross-viewpoint validation + prediction accuracy)
   - *Validation needed:* Gaming simulation, adversarial testing

### Medium Priority
5. **Prediction Market Incentives:** Monetary design is complex game theory
   - *Research needed:* How do successful prediction markets (Polymarket, PredictIt) balance accuracy vs. participation?
   - *Cost implications:* Subsidizing early users vs. organic adoption

6. **Scale & Moderation:** How to maintain quality at scale?
   - *Reference:* Ground News solved via curation; RadMo's community model may require different approach
   - *Timeline:* Post-MVP, but architecture choices made now matter

7. **"Why open RadMo?"** — Motivation to switch from incumbent platforms unclear
   - *Current hypothesis:* Credibility status + insider position (early community) + honest business model
   - *Validation needed:* Messaging A/B test, user interviews

## Evolution of Key Decisions

### Credibility Score Weighting (30/30/25/15)
- **Original:** Even split across all dimensions
- **Refined:** Is/ought + cross-viewpoint validation elevated (epistemic quality)
- **Rationale:** Distinguish RadMo from engagement-driven platforms; quality beats consensus

### Cooling Period Implementation (24-72hr)
- **Original:** Flat 48-hour delay
- **Refined:** Configurable range based on post sensitivity/topic
- **Rationale:** Allows customization; hot-button topics get longer cooling

### Community Notes Integration
- **Original:** Direct fork of X algorithm
- **Refined:** Fork + evolve to multi-dimensional instead of binary
- **Rationale:** Addresses known limitation; cross-cultural framing more ambitious than left-right

### "Someone Unlike You" Feature Priority
- **Original:** Listed as open design question with four unresolved sub-questions
- **Elevated:** Now top of critical path based on research confirming causal depolarization mechanism
- **Research basis:** Unifying content (showing shared views across partisan lines) causally reduces hostility through meta-perception correction — not just exposure. Feature is mechanistically grounded.

---

**Last Updated:** 2026-03-31
**Next Review:** After "Someone Like You" design decision
