# RadMo — Running To-Do List

Live document. Updated each session. Items graduate to `memory-bank/progress.md` when resolved.

---

## Design Decisions Needed (high priority)

- [ ] **Is/ought scoring redesign** — current sequencing-based approach is a weak proxy; real intent is quality of connection between factual grounding and normative claims, not ordering; needs algorithmic spec before operationalization
- [ ] **Viewpoint diversity reach display** — TABLED; Option 1 (similarity index) and Option 3 (cluster count) both explored and visualized; polarized case exposes key limitation of Option 1; decision deferred until further iteration
- [ ] **Badge system** — Bridge Builder, First Principles, Wide Lens documented in `product/badges.md`; earn conditions are drafts; visual design, placement, and gamification mechanics not yet specced
- [ ] **CrossViewpoint dimension weight** — user instinct is 40% (up from 30%); evaluate tradeoffs with other weights before finalizing
- [ ] **Dopamine gap** — why stay on RadMo if cooling period removes the standard reward loop? Credibility status + insight velocity is the working hypothesis; needs concrete mechanic design and behavioral research
- [ ] **Poster-facing UI** — how does the original poster see their post's performance? Reader view built first; poster view deferred
- [ ] **Reposter avg cred vs. poster cred score tension** — high-quality reposters amplifying low-quality posts is a meaningful signal; explore how to display, interpret, and weight this gap; possible implications for feed algorithm and content surfacing

---

## Visual / UX To-Do

- [ ] **"Hot take" spectrum visual** — a bar where one end is "hot take" (disincentivized) and the other is "Radically Moderate" (positive signal); alternative or complement to Fact/Opinion display; workshop separately
- [ ] **Avatar shape mirroring spider chart** — replace circular avatar with a small polygon whose shape echoes the user's credibility profile; workshop in dedicated session
- [ ] **Is/ought color spectrum** — DECIDED: blue (fact) ↔ amber (opinion); red/yellow/green reserved exclusively for credibility scores; "Fact / Opinion" is user-facing language; "Is/Ought" stays as internal/technical vernacular

---

## Perspective Check — Open Design Questions

- [ ] **"Someone Unlike You" — geography as primary signal** — explore using geographic proximity as the primary differentiating signal; hypothesis: local dissimilar people who share viewpoints on a topic are the most valuable connections to surface
- [ ] **"Someone Like You / Someone Unlike You" — 4 core design questions**
  1. What signals define "like" vs. "unlike"? (geography first? political lean? demographics? claim-checking behavior?)
  2. When/where does popup trigger? (every post? opinion content only? topic-gated? daily nudge?)
  3. Opt-in vs. proactive surfacing?
  4. Passive exposure vs. interactive engagement?

---

## Research Needed

- [ ] **News outlet bias rating landscape** — collect and compare existing methodologies: Ground News, AllSides, Ad Fontes Media, Media Bias/Fact Check, others; needed to operationalize Source Diversity dimension scoring
- [ ] **Community Notes code walkthrough** — read `matrix_factorization.py` and `scoring.py` at github.com/twitter/communitynotes together; identify RadMo adaptation points for multi-dimensional model
- [ ] **Sentiment analysis for bias detection** — which NLP/LLM models, cost/accuracy tradeoffs, failure modes for is/ought scoring pipeline
- [ ] **Prediction market monetary incentive design** — real money vs. reputation; regulatory landscape post-Kalshi ruling; game theory; reference: Polymarket, Manifold, Metaculus models

---

## Product Features (post-MVP)

- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious — beyond left/right binary)
- [ ] Mobile-first design (currently desktop-focused)
- [ ] Ingroup norm surfacing — "most people in this discussion feel X" interrupts the polarization feedback loop
- [ ] Cooling period UX — where and how the countdown displays to users

---

## Technical / Documentation

- [ ] Decision log for design tradeoffs
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow (how do users add posts?)
- [ ] Community Notes integration (fork + adapt algorithm to multi-dimensional)

---

*Last updated: 2026-04-01*
