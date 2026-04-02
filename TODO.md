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

## Perspective Check — Open Design Questions

- [ ] **Perspective panels show immediately (DECIDED)** — "Someone Like You / Someone Unlike You" panels surface as soon as those two people are identified, regardless of cooling period; reaction *counts* stay hidden, but *perspectives* are not; this is the dopamine hook for the poster during the cooling window; add to mockup
- [ ] **Perspective panel identification speed** — how quickly can a "someone unlike you nearby" be identified? Does the system need active engagement (like/repost/comment) or passive signal (post viewed)? Passive surfacing is faster but raises privacy and accuracy questions; needs mechanic design
- [ ] **"Same conclusion" vs. "same viewpoint" — clarification needed** — the panels currently conflate two different things: (a) shared political identity/viewpoint between reader and the surfaced person, and (b) shared *assessment of the post's credibility*; Sarah K. being skeptical of Iran guy's claim is a conclusion about the post, not a shared political viewpoint with the reader; must clearly separate these axes in the UI copy and the matching logic; also clarify: is the conclusion comparison about the post or about the underlying event?
- [ ] **\"Someone Unlike You\" — geography as primary signal** — explore using geographic proximity as the primary differentiating signal; hypothesis: local dissimilar people who share viewpoints on a topic are the most valuable connections to surface
- [ ] **\"Someone Like You / Someone Unlike You\" — 4 core design questions**
  1. What signals define \"like\" vs. \"unlike\"? (geography first? political lean? demographics? claim-checking behavior?)
  2. When/where does popup trigger? (every post? opinion content only? topic-gated? daily nudge?)
  3. Opt-in vs. proactive surfacing?
  4. Passive exposure vs. interactive engagement?

---

## Engagement Mechanics — Open Design Questions

- [ ] **Repost intent qualifier — disagree / neutral / agree** — reposting is not necessarily endorsement; a high-cred user reposting to debunk is functionally opposite to a credulous repost; explore requiring a sentiment qualifier at repost time (disagree / neutral / agree); this signal would feed into the poster's credibility score update and would surface in the rater card display; workshop mechanic and friction implications
- [ ] **Like vs. repost as credibility signal** — likes are more unambiguously positive (near-certain agreement); reposts are editorially ambiguous without a qualifier; likes should carry stronger *directional* weight on poster's cred score; reposts should be weighted by the qualifier once that mechanic exists; design the cred score delta rules for each engagement type
- [ ] **Edit button — 30-minute window (DECIDED)** — edit window is 30 minutes; add to mockup; open design questions:
  - Does the clock start at post time or at first public visibility? (If cooling period = 24hrs, starting at post time makes the window effectively meaningless; starting at public visibility is more logical)
  - Should the edit window close early if anyone has reposted? (Repost = manipulation risk; early lock-out is defensible)
  - Typo-level edits vs. substantive edits — distinguish algorithmically; only substantive edits trigger version history display and reposter notification
  - Reposters should be notified of any substantive edit and offered the ability to retract their repost

---

## Visual / UX To-Do

- [ ] **\"Hot take\" spectrum visual** — a bar where one end is \"hot take\" (disincentivized) and the other is \"Radically Moderate\" (positive signal); alternative or complement to Fact/Opinion display; workshop separately
- [ ] **Avatar shape mirroring spider chart** — replace circular avatar with a small polygon whose shape echoes the user's credibility profile; workshop in dedicated session
- [ ] **Is/ought color spectrum** — DECIDED: blue (fact) ↔ amber (opinion); red/yellow/green reserved exclusively for credibility scores; \"Fact / Opinion\" is user-facing language; \"Is/Ought\" stays as internal/technical vernacular

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
- [ ] Ingroup norm surfacing — \"most people in this discussion feel X\" interrupts the polarization feedback loop
- [ ] Cooling period UX — where and how the countdown displays to users

---

## Technical / Documentation

- [ ] Decision log for design tradeoffs
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow (how do users add posts?)
- [ ] Community Notes integration (fork + adapt algorithm to multi-dimensional)

---

*Last updated: 2026-04-02*
