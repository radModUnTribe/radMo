# RadMo — Running To-Do List

Live document. Updated each session. Items graduate to `memory-bank/progress.md` when resolved.

> **Note:** This file lives in `memory-bank/` so it is loaded at the start of each session alongside other context files.

---

## ⚠️ Fundamental Blockers (Investor-Level Red Flags)

These are pre-implementation blockers. Nothing in the technical build queue should be treated as a priority over resolving or at minimum documenting mitigation strategies for these.

- [ ] **Dopamine gap** — why stay on RadMo without the outrage loop? Credibility status + insight velocity is the working hypothesis but has never been validated at scale. Existential product question — if the engagement loop doesn't work, nothing else matters. Needs concrete mechanic design and ideally early testing.
- [ ] **No validated willingness to pay** — freemium is the monetization plan but there is zero evidence the target user pays $8–12/mo vs. using Bluesky for free. B2B API requires scale that doesn't exist. Portable credential is 5+ years out. No near-term revenue path with evidence behind it.
- [ ] **Factual Grounding is 30% of the score and effectively a placeholder** — hardest dimension to build; nobody has productized it; a credibility score where nearly a third is absent or directionally noisy at launch is a material investor concern.
- [ ] **Gaming risk is structural** — legible scoring rules invite metric optimization; steelmanning and asymmetric rigor are especially vulnerable; current defense ("gaming one dimension depresses others") is a hypothesis not a validated mechanism.
- [ ] **"Who scores the scorers" governance problem** — source credibility, factual claim definitions, cross-viewpoint validation thresholds are all politically contested; no documented governance model for how scoring decisions are made, updated, or appealed; will be weaponized at first controversial call.
- [ ] **Platform/API dependency risk** — extension beachhead and account-analysis concept both depend on social media API access that is actively becoming more hostile; X API is expensive and restricted; Meta is locked down; no mitigation plan documented.
- [ ] **Addressable market is theorized, not quantified** — "Quiet Majority exists" is research-grounded but nobody has measured whether it's 5M or 500M people, whether they'd pay, or whether they'd adopt a new platform vs. muting politics on existing ones.
- [ ] **Legal exposure from user-level credibility scoring** — scoring individual users' epistemic behavior in ways that affect reach or reputation is defamation-adjacent, especially if the score is wrong or perceived as politically motivated; no legal framework documented; material risk at scale. *Partial mitigation: spider profile private by default; post-level scoring carries lower exposure (editorial judgment about content, Section 230 territory). Full legal framework still needed pre-launch.*
- [ ] **No team** — design and prototyping stage with one person; build complexity (custom ML, matrix factorization, RAG pipelines, real-time scoring, social platform) requires a technical co-founder and ML expertise not yet in place.
- [ ] **Cold start on the platform itself remains unsolved** — extension defers but does not solve; spider profiles and CV dimension only generate meaningful signal at critical mass of diverse users posting on RadMo; the cold start problem is deferred to Phase 3 with no documented solution.

---

## Source Diversity — Active Work

- [ ] **Add domain column to AllSides CSV** — `data/allsides_bias_ratings.csv` has display names only; manual mapping required for production use; start with top 100 outlets by citation likelihood
- [ ] **Pull and commit GDELT source-country dataset** — 13,155 English-language outlets mapped to country of origin; free download from GDELT blog; solves geography dimension
- [ ] **Join AllSides + GDELT on domain** — produces combined political lean + geography table; foundation for `outlets` DB
- [ ] **Define 7-tier format taxonomy** — no public dataset exists; manual tagging required; top 200 outlets covers ~80% of expected citations
- [ ] **Pull Ad Fontes reliability data** — bias + reliability for 3,400+ outlets; older CSV on GitHub for prototyping; consider licensing for production
- [ ] **Pull MBFC ratings** — bias + factual accuracy + credibility for 2,000+ outlets; CMU scraper available (requires paid MBFC account)
- [ ] **Build outlet_tagging_queue logic** — unknown domains at post submission → queue for manual tagging; prioritize by citation_count
- [ ] **Implement Shannon entropy scoring** — format_entropy + geo_entropy sub-scores for `user_source_diversity_scores`
- [ ] **Implement lean_spread calculation** — variance of political_lean across cited outlets
- [ ] **Build materialized score update job** — nightly or per citation threshold; not per page load
- [ ] **Scoring window decision — PARKED** — all-time vs. rolling 90 days vs. weighted recency; schema supports any approach; revisit when scoring pipeline is being built

---

## Design Decisions Needed

- [ ] **Persona naming pass** — shift from personality traits to capture/pattern language (The Echo, The Aggregator, etc.); under construction from 2026-04-19 session
- [ ] **Onboarding mechanic spec** — self-perception slider → reality reveal; binary vs. spectrum decision: spectrum slider preferred (neither end labeled until user commits); wording must avoid tribal tripwires on both ends; neither answer should feel like an admission
- [ ] **Group comparison mechanic** — political group averages vs. user score confirmed interesting; expand to other identity groups TBD; needs data model spec
- [ ] **Vibes Merchant reframe** — honest/flattering tension unresolved; underlying behavior is genuinely low-quality; "your instincts are fast" risks flattering rather than naming; flagged for dedicated workshop
- [ ] **Activation/retention mechanic post-acquisition** — villain narrative gets users in the door but doesn't sustain; what converts "I hate engagement optimization" into "I want to think better"? Needs dedicated design work
- [ ] **Factual Grounding scoring operationalization** — requires argument structure parsing (NLP/argument mining) to link normative claims to factual support across non-adjacent text; harder than order-detection; needs tech spec
- [ ] **Cross-viewpoint validation composite weighting** — how to weight political lean vs. epistemic tribe vs. geographic/cultural vs. information diet distance across the four axes; TBD
- [ ] **Source classification infrastructure** — shared dependency for Source Diversity scoring AND information diet distance (cross-viewpoint); needs outlet tagging system: format tier, geography, political lean (where available), institutional type; also a B2B product candidate
- [ ] **CrossViewpoint dimension weight** — 40% vs. 30% still unresolved
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
- [ ] **Two-tier data model** — what users see (broad/simplified post-level spider signal) vs. what RadMo holds internally (rich full-dimensional user profile); internal data is the scoring engine and matching primitive; public-facing version intentionally less granular; architecture and UX implications need spec
- [ ] **Spider profile incentivization structure** — users who opt in to making their spider chart public get something in return; exact mechanic TBD; framing: a good score is worth showing off, platform should make that feel rewarding not coerced; explore reward options (badge, reach bonus, discovery boost)

---

## Messaging / Positioning

- [ ] **"Algorithm capture" as acquisition narrative** — "here's how the algorithm sees you" as opening hook; villain = engagement optimization incentive structure (not specific platforms); two-step architecture: villain for acquisition, epistemic agency for retention; needs copy development and consistency check against existing strategy docs
- [ ] **"Platform you'd want your kids to use" tagline** — contrast with well-documented knowledge by social media insiders that their own products were harmful (Facebook execs not letting kids use Facebook, etc.); RadMo as the platform built with that awareness baked in from day one; exact copy TBD but direction: "a platform we'd let our own kids use" / "designed for humans, not engagement metrics"; workshop as part of broader brand voice development

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
- [ ] **Factual Grounding landscape** — companies working on argument mining, claim detection, NLP-based fact-checking (Full Fact, Logically, Factiverse, FEVER benchmark community); assess partnership vs. build vs. integrate options
- [ ] **Legal framework for user-level credibility scoring** — defamation exposure, Section 230 scope, jurisdiction considerations; needs legal counsel before public launch
- [ ] **Addressable market sizing** — quantify the Quiet Majority; willingness to pay research; behavioral data from extension as primary eventual source

---

## GTM — Under Construction

- [ ] **Extension absorption risk** — browser/platform players (Chrome, Edge, X) have history of absorbing popular extension categories as native features; RadMo's surface-level feed overlay is replicable; moat is the compounding citation graph and spider profile depth, not the UI; timing bet more than a defensibility bet; strategy still under construction
- [ ] **Account-analysis beachhead** — ingest user's social media history, analyze it, produce initial spider chart / persona as onboarding hook; potentially more viral than feed overlay (epistemic fingerprint is shareable); constrained by API access hostility; still under construction

---

## Future Dimension Candidate (post-MVP)

- [ ] **Mind-changing quality dimension** — reward grounded position updates; tabled until core four dimensions are stable
- [ ] **Epistemic restraint signal** — cred score accrues at decreasing rate during posting silence; cadence-baseline variant
- [ ] **Track record calibration** — signal for whether a user "called" outcomes through consistent epistemic reasoning vs. lucky contrarianism; key distinction is calibration (evidence-based prediction) vs. survivorship bias (hot take that landed); likely a Claim Integrity sub-component or future standalone dimension; natural home in prediction markets mechanic post-MVP; requires temporal claim extraction (falsifiable prediction detection + outcome resolution NLP); also relevant to historical account analysis at signup

---

## Potential Future Partners & Collaborators

- [ ] **Center for Humane Technology (CHT)** — Tristan Harris / Aza Raskin; nonprofit advocacy org, not a product; aligned on incentive-reform thesis; could provide legitimacy, press access, policy credibility; no competitive overlap; currently pivoting focus toward AI; potential legitimizing partner worth cultivating
- [ ] **Ground News** — currently documented as competitive foil in strategy docs (outlet-level bias aggregation for readers vs. RadMo's user-level epistemic scoring for participants); limited actual product overlap; potential data-sharing angle: their outlet bias ratings are direct input for RadMo's Source Diversity scoring; worth reframing as potential data partner while preserving competitive positioning notes elsewhere
- [ ] **Factiverse** — Norwegian fact-checking API; claim extraction and verification at sentence level in 110+ languages; peer-reviewed technology; small and unfunded; potential integration for Claim Integrity factual accuracy sub-component; actively seeking enterprise partners
- [ ] **Full Fact** — UK nonprofit; building LLM-assisted claim detection tooling for journalists (Gemini-based prototype); potential API or methodology licensing; no commercial conflict with RadMo
- [ ] **AllSides / Ad Fontes / Media Bias Fact Check** — outlet bias rating databases; direct input for Source Diversity scoring; all three have existing methodologies RadMo could license or integrate rather than rebuild from scratch
- [ ] **FEVER benchmark community** — academic fact extraction and verification research (Cambridge NLP group and others); state-of-the-art signal for Factual Grounding; natural research partner and credibility validator; not a product partner
- [ ] **Science 2025 reranking study authors** — authored the preregistered feed reranking study that is the closest empirical precedent to RadMo's extension concept; potential academic validation partnership

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

*Last updated: 2026-04-19*
