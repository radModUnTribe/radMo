# RadMo — Running To-Do List

Live document. Updated each session. Items graduate to `memory-bank/progress.md` when resolved.

> **Note:** This file lives in `memory-bank/` so it is loaded at the start of each session alongside other context files.

---

## Design Decisions Needed (high priority)

- [ ] **Factual Grounding scoring operationalization** — requires argument structure parsing (NLP/argument mining) to link normative claims to factual support across non-adjacent text; harder than order-detection; needs tech spec
- [ ] **Cross-viewpoint validation composite weighting** — how to weight political lean vs. epistemic tribe vs. geographic/cultural vs. information diet distance across the four axes; TBD
- [ ] **Source classification infrastructure** — shared dependency for Source Diversity scoring AND information diet distance (cross-viewpoint); needs outlet tagging system: format tier, geography, political lean (where available), institutional type
- [ ] **CrossViewpoint dimension weight** — 40% vs. 30% still unresolved
- [ ] **Dopamine gap** — why stay on RadMo without the outrage loop? Credibility status + insight velocity is the working hypothesis; needs concrete mechanic design
- [ ] **Badge system** — Bridge Builder, First Principles, Wide Lens documented in `product/badges.md`; earn conditions are drafts; visual design, placement, gamification mechanics not yet specced
- [ ] **Poster-facing UI** — how does the original poster see their post's performance? Reader view built first; poster view deferred
- [ ] **Viewpoint diversity reach display** — TABLED; Option 1 vs. Option 3; polarized case is the key test; decision deferred
- [ ] **Bubble mode / Adventure mode** — names TBD; core concept: give users explicit toggle between in-bubble and out-of-bubble feeds; primary value is the *mirror* (proving the bubble exists and is larger than assumed), not just content variety; two user segments: (1) knows they're in a bubble but underestimates it — adventure mode is calibration; (2) doesn't believe they have a bubble — the label alone is an intervention; contrast must be legible (algorithm dependency: bubble detection must be real, adventure surfacing must be aggressive); red pill / blue pill framing has tribal baggage — steer toward "before/after reveal" in copy
- [ ] **Feed weighting sliders** — alternative/complement to binary bubble/adventure toggle; always-visible sliders showing user's current information diet mix; slider position potentially displayable on profile as a credibility-adjacent signal; workshop after bubble/adventure mode is resolved

---

## Engagement Mechanics — Open Design Questions

- [ ] **Repost intent qualifier — disagree / neutral / agree** — required at repost time; feeds into poster's cred score delta; workshop friction implications
- [ ] **Cred score delta rules** — full mechanic for how likes, repost qualifiers, and engagement types update poster's credibility score; likes = stronger directional weight (near-certain agreement); reposts weighted by qualifier once built
- [ ] **Edit button mechanics** — 30-min window confirmed; open: typo vs. substantive edit distinction (NLP); reposter notification on substantive edits; retraction mechanic for reposters

---

## Perspective Check — Open Design Questions

- [ ] **Perspective panel identification speed** — active engagement (like/repost) vs. passive signal (post viewed); passive is faster but raises privacy and accuracy questions
- [ ] **\"Same conclusion\" vs. \"same viewpoint\" UI clarification** — post credibility verdict vs. political agreement; must be separated in copy and matching logic
- [ ] **\"Someone Like You / Someone Unlike You\" — 4 core design questions**
  1. What signals define \"like\" vs. \"unlike\" beyond political lean? (spider shape confirmed as epistemic axis; geography as secondary)
  2. When/where do panels trigger for readers (not just poster)?
  3. Opt-in vs. proactive surfacing?
  4. Passive exposure vs. interactive engagement?

---

## Visual / UX To-Do

- [ ] **Post-feed mockup updates needed:**
  - Perspective panels always visible (not cooling-period gated)
  - Edit button in poster header (30-min window)
- [ ] **Spider shape personas** — five archetypes defined (Bubble Scholar, Vibes Merchant, Magpie, Persuader, Radical Moderate); add real-world examples to `product/features.md` Section 7 or a new `product/personas.md`
- [ ] **\"Hot take\" spectrum visual** — bar from hot take to Radically Moderate; workshop separately
- [ ] **Avatar shape mirroring spider chart** — polygon avatar matching credibility profile; workshop separately

---

## Research Needed

- [ ] **Spider shape change over time** — Sam Harris as the primary case study; his spider was closer to Radical Moderate early career and has drifted toward Bubble Scholar as his audience narrowed post-2016; research question: what causes spider drift? Is it audience capture, topic self-selection, or genuine epistemic change? Implications for whether RadMo should surface a user's *trajectory* not just their current shape
- [ ] **News outlet bias rating landscape** — Ground News, AllSides, Ad Fontes, Media Bias/Fact Check; needed for Source Diversity operationalization
- [ ] **Community Notes code walkthrough** — `matrix_factorization.py` and `scoring.py`; identify RadMo multi-dimensional adaptation points
- [ ] **Sentiment analysis / argument mining** — NLP model selection for Factual Grounding scoring; cost/accuracy tradeoffs
- [ ] **Prediction market monetary incentive design** — real money vs. reputation; Kalshi ruling; Polymarket/Manifold/Metaculus reference models

---

## Future Dimension Candidate (post-MVP)

- [ ] **Mind-changing quality dimension** — reward grounded position updates (new evidence cited); penalize tribal flips (no factual trigger); signal: whether + why someone changed their mind; tabled until core four dimensions are stable

---

## Product Features (post-MVP)

- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious)
- [ ] Mobile-first design
- [ ] Ingroup norm surfacing — \"most people in this discussion feel X\"
- [ ] Cooling period UX — countdown display design
- [ ] Temporal source diversity — citing across time, not just recent; deprioritized, add later

---

## Technical / Documentation

- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow
- [ ] Community Notes integration (fork + adapt to multi-dimensional)
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Decision log for design tradeoffs

---

*Last updated: 2026-04-04*
