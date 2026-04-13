# RadMo — Running To-Do List

Live document. Updated each session. Items graduate to `memory-bank/progress.md` when resolved.

> **Note:** This file lives in `memory-bank/` so it is loaded at the start of each session alongside other context files.

---

## Design Decisions Needed (high priority)

- [ ] **Factual Grounding scoring operationalization** — requires argument structure parsing (NLP/argument mining) to link normative claims to factual support across non-adjacent text; harder than order-detection; needs tech spec
- [ ] **Cross-viewpoint validation composite weighting** — how to weight political lean vs. epistemic tribe vs. geographic/cultural vs. information diet distance across the four axes; TBD
- [ ] **Source classification infrastructure** — shared dependency for Source Diversity scoring AND information diet distance (cross-viewpoint); needs outlet tagging system: format tier, geography, political lean (where available), institutional type; also a B2B product candidate
- [ ] **CrossViewpoint dimension weight** — 40% vs. 30% still unresolved
- [ ] **Dopamine gap** — why stay on RadMo without the outrage loop? Credibility status + insight velocity is the working hypothesis; needs concrete mechanic design
- [ ] **Badge system** — Bridge Builder, First Principles, Wide Lens documented in `product/badges.md`; earn conditions are drafts; visual design, placement, gamification mechanics not yet specced
- [ ] **Poster-facing UI** — how does the original poster see their post's performance? Reader view built first; poster view deferred
- [ ] **Viewpoint diversity reach display** — TABLED; Option 1 vs. Option 3; polarized case is the key test; decision deferred
- [ ] **Bubble mode / Adventure mode** — names TBD; core concept: give users explicit toggle between in-bubble and out-of-bubble feeds; primary value is the *mirror* (proving the bubble exists and is larger than assumed), not just content variety; two user segments: (1) knows they're in a bubble but underestimates it — adventure mode is calibration; (2) doesn't believe they have a bubble — the label alone is an intervention; contrast must be legible; red pill / blue pill framing has tribal baggage — steer toward "before/after reveal" in copy
- [ ] **Feed weighting sliders** — alternative/complement to binary bubble/adventure toggle; always-visible sliders showing user's current information diet mix; workshop after bubble/adventure mode is resolved
- [ ] **Digest feed format** — instead of infinite scroll, RadMo serves a fixed daily digest; operationalization: ranked set per user based on spider profile, served 1-2x daily; tension with retention needs workshopping
- [ ] **Top 10 facts of the day** — daily surfacing of the most cross-viewpoint-validated factual claims in the last 24hrs; buildable on existing CV architecture; needs UX design
- [ ] **Flow state as optimization target** — optimize for *insight events per session* not time-on-app; proxy signals: dwell time ending in a rating/repost, switching to adventure mode immediately after reading a post; needs concrete instrumentation design
- [ ] **PWA design** — mobile presence alongside web platform launch; push notification mechanics (perspective panel matches, digest delivery) are the primary thing native does better; design PWA experience before committing to native app
- [ ] **Avatar legibility at 44px** — are the five spider shapes distinct enough at avatar size without a legend? Elevated to active design question 2026-04-10; see persona-feed mockup
- [ ] **News outlet incentive mechanic** — GTM angle for pitching outlets on RadMo as cross-aisle audience signal play; passive presence vs. active participation framing; needs development

---

## Engagement Mechanics — Open Design Questions

- [ ] **Repost intent qualifier — disagree / neutral / agree** — required at repost time; feeds into poster's cred score delta; workshop friction implications
- [ ] **Cred score delta rules** — full mechanic for how likes, repost qualifiers, and engagement types update poster's credibility score
- [ ] **Edit button mechanics** — 30-min window confirmed; open: typo vs. substantive edit distinction (NLP); reposter notification on substantive edits; retraction mechanic for reposters

---

## Perspective Check — Open Design Questions

- [ ] **Perspective panel identification speed** — active engagement (like/repost) vs. passive signal (post viewed); passive is faster but raises privacy and accuracy questions
- [ ] **"Same conclusion" vs. "same viewpoint" UI clarification** — post credibility verdict vs. political agreement; must be separated in copy and matching logic
- [ ] **"Someone Like You / Someone Unlike You" — 4 core design questions**
  1. What signals define "like" vs. "unlike" beyond political lean? (spider shape confirmed as epistemic axis; geography as secondary)
  2. When/where do panels trigger for readers (not just poster)?
  3. Opt-in vs. proactive surfacing?
  4. Passive exposure vs. interactive engagement?

---

## Visual / UX To-Do

- [ ] **Post-feed mockup updates needed:**
  - Perspective panels always visible (not cooling-period gated)
  - Edit button in poster header (30-min window)
- [ ] **"Hot take" spectrum visual** — bar from hot take to Radically Moderate; workshop separately
- [ ] **Avatar shape mirroring spider chart** — polygon avatar matching credibility profile; elevated to active design priority 2026-04-10; open question is 44px legibility
- [ ] **Public information diet display** — nutrition-label style display on user profile; design TBD
- [ ] **Persona illustrations** — original IP-safe characters for each archetype; art direction brief exists (2026-04-10); designer needed; references: The Dude (Vibes Merchant), professor-lecturing-to-clones (Bubble Scholar), conspiracy board (Magpie), TED Talk guy (Persuader), referee (Radical Moderate)

---

## Research Needed

- [ ] **Spider shape change over time** — Sam Harris as primary case study; what causes spider drift? audience capture vs. topic self-selection vs. genuine epistemic change?
- [ ] **News outlet bias rating landscape** — Ground News, AllSides, Ad Fontes, Media Bias/Fact Check
- [ ] **Community Notes code walkthrough** — `matrix_factorization.py` and `scoring.py`; identify RadMo multi-dimensional adaptation points
- [ ] **Sentiment analysis / argument mining** — NLP model selection for Factual Grounding scoring
- [ ] **Prediction market monetary incentive design** — real money vs. reputation; Kalshi ruling; Polymarket/Manifold/Metaculus reference models
- [ ] **Flow state research** — psychology/UX literature on flow in information consumption contexts
- [ ] **Center for Humane Technology** — potential strategic relationship; CHT is advocacy/awareness (not product); could be legitimizing partner; track their AI and social media work for alignment and differentiation

---

## Future Dimension Candidate (post-MVP)

- [ ] **Mind-changing quality dimension** — reward grounded position updates; tabled until core four dimensions are stable
- [ ] **Epistemic restraint signal** — cred score accrues at decreasing rate during posting silence; cadence-baseline variant
- [ ] **Track record calibration** — signal for whether a user "called" outcomes through consistent epistemic reasoning vs. lucky contrarianism; key distinction is calibration (evidence-based prediction) vs. survivorship bias (hot take that landed); likely a Claim Integrity sub-component or future standalone dimension; natural home in prediction markets mechanic post-MVP; requires temporal claim extraction (falsifiable prediction detection + outcome resolution NLP); also relevant to historical account analysis at signup

---

## Product Features (post-MVP)

- [ ] Native mobile app — React Native; after web platform has content density + user base to justify a mobile destination
- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious)
- [ ] Ingroup norm surfacing — "most people in this discussion feel X"
- [ ] Cooling period UX — countdown display design
- [ ] Temporal source diversity — citing across time; deprioritized
- [ ] **Portable cred score / LinkedIn integration** — RadMo score as professional signal; requires public-facing URI architecture from day one
- [ ] **B2B credibility API** — newsrooms, fact-checkers, platforms pay to query scores; source classification infrastructure is the shared foundation

---

## Technical / Documentation

- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow
- [ ] Community Notes integration (fork + adapt to multi-dimensional)
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Decision log for design tradeoffs
- [ ] Public-facing URI architecture for credibility scores (required for portable credential play)

---

*Last updated: 2026-04-13*
