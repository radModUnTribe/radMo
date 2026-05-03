# RadMo Active Context

## Current Work Focus

**Primary (2026-05-03):** Source Diversity entropy scoring validated against test dataset. Shannon entropy (format + geo) and lean spread variance computed for all 5 personas. Scores differentiate personas correctly with one exception: Magpie and Radical Moderate score nearly identically (54.6 vs 55.1) despite meaningfully different lean profiles. Weight sensitivity analysis identified as next step before finalizing scoring formula.

**Previous session (2026-04-27):** Chrome extension v0.1 built and running locally on X. Fact/opinion analyzer ported from standalone HTML demo to manifest v3 extension. First 5 tweets colorize correctly; queue stalls after that — suspected API rate limiting; retry/backoff logic is the immediate next step. Marketing concepts documented: `_ButWhy` social accounts and `@grok is this true` tagline.

**Previous session (2026-04-19):** Algorithm capture narrative explored. Personas shifting from identity descriptors to capture archetypes. Onboarding self-perception → reality gap mechanic identified as core hook and research dataset opportunity. Villain framing (engagement optimization as enemy) identified as acquisition mechanism — not retention.

**Previous session (2026-04-18):** Built working fact/opinion spectrum analyzer as standalone local HTML demo. Live, tested, working. Delivered as `fact-opinion-analyzer.html`.

**Previous session (2026-04-14):** Source Diversity v1 implementation underway. Schema designed, test datasets committed. Next step: write scoring math against test data, then add domain column to AllSides data and pull GDELT.

**Previous session (2026-04-13):** Investor red flags audit, spider profile privacy model, technical build order, LLM integration architecture, partners & collaborators section established.

**Previous session (2026-04-10):** GTM strategy thought experiment — investor narrative, browser extension economics, mobile/PWA sequencing, citation graphs, public-facing URI architecture.

## What's Committed & Current

### Mockups
- `product/mockups/rm-post.jsx` — post composer with cooling period
- `product/mockups/is-ought.jsx` — letter-by-letter gradient (14KB)
- `product/mockups/credibility-score-v1.jsx` — bar chart (9.5KB)
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (13.5KB)
- `product/mockups/rm-expert-post.jsx` — expert post variant (13.7KB)
- `product/mockups/post-feed.jsx` — v3 reader view (superseded for now — see below)
- `product/mockups/persona-feed-2026-04-10.jsx` — **v6 persona feed (current)** — spider avatars, cred progress rings, fact/opinion coloring, avg reposter cred ring, full hover tooltip system

### Prototypes (local, not committed)
- `fact-opinion-analyzer.html` — **working live demo** built 2026-04-18; self-contained HTML file; takes API key in browser; calls Claude Haiku via Anthropic API; segments text into spans scored 0.0–1.0 (fact→opinion); renders blue→amber spectrum inline; hover reveals label + description + score; tested and confirmed working
- `radmo-extension/` — **Chrome extension v0.1** built 2026-04-27; manifest v3; content script reads DOM directly on x.com; MutationObserver for infinite scroll; SPA navigation fix via URL polling; result caching via Map; first 5 tweets colorize correctly; known bug: queue stalls after ~5 tweets (suspected rate limiting)

### Documentation
- `product/features.md` — updated 2026-04-10
- `product/badges.md` — Bridge Builder, First Principles, Wide Lens
- `product/personas.md` — five spider shape archetypes with real-world examples; v1 + v2 framing as of 2026-04-19
- `product/steelmanning-spec.md` — **updated 2026-04-10** — compounding mechanic (Option B) added
- `research/research.md` — primary research reference
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/gtm.md`, `strategy/what-to-build-now.md`, `strategy/information-environment.md`
- `memory-bank/TODO.md` — live running to-do list

### Datasets
- `data/README.md` — documents all datasets, fields, known gaps, planned additions
- `data/allsides_bias_ratings.csv` — AllSides bias ratings; News Media subset; ~120 outlets; political lean (1–5), confidence, methodology flags; **no domain field** — display name mapping required
- `data/test_outlets_extended.csv` — 29 outlets from AllSides manually extended with `format_tier` (1–7), `format_tier_label`, `country_code`; reference table for test scoring
- `data/test_post_citations.csv` — **111 rows**; 5 personas × 8 posts each; fields: `citation_id`, `user_id`, `post_id`, `news_source`, `cited_at`, `source`, `post_topic`, `post_summary`; Jan–Apr 2026 timestamps; designed to produce distinct scores across all three SD sub-scores

**Test dataset persona fingerprints:**
- `bubble_scholar` — 21 citations; all US; all left/left-center (rating_num 1–2); tiers 2–6; tight lean cluster; high quality, zero viewpoint diversity
- `vibes_merchant` — 11 citations; all US; all right tier 7 only; zero format or geo diversity
- `magpie` — 23 citations; US/GB/QA; tiers 3–6; wide source variety; moderate lean spread
- `persuader` — 23 citations; mostly US; left-center to right-center; tiers 5–6 only; cross-lean but narrow format range
- `radical_moderate` — 32 citations; US/GB/QA; tiers 2–6; lean spread 1–5; highest diversity on all three sub-scores

## Locked Design Decisions

### Source Diversity Scoring — First Run Results (2026-05-03)

Scoring formula: `SD = 0.35 × format_entropy_norm + 0.35 × geo_entropy_norm + 0.30 × lean_spread_norm`

| Persona | n | Format | Geo | Lean | SD Score |
|---|---|---|---|---|---|
| Bubble Scholar | 21 | 0.553 | 0.174 | 0.102 | 28.5 |
| Vibes Merchant | 11 | 0.000 | 0.000 | 0.000 | 0.0 |
| Magpie | 23 | 0.670 | 0.844 | 0.053 | 54.6 |
| Persuader | 23 | 0.423 | 0.000 | 0.119 | 18.4 |
| Radical Moderate | 32 | 0.740 | 0.630 | 0.240 | 55.1 |

**What validated correctly:**
- Vibes Merchant = 0.0 on all sub-scores (100% US tier-7 right-only) — perfect floor
- Bubble Scholar (28.5) has real format diversity but near-zero geo and lean spread — scores appropriately mid-low
- Persuader (18.4) correctly penalized: genuinely cross-lean citations but 100% US sources → geo = 0
- Radical Moderate highest lean spread (0.240), broadest format range, strong geo → highest overall SD

**Known issue — Magpie/RM convergence:**
Magpie and Radical Moderate score nearly identically (54.6 vs 55.1) despite meaningfully different profiles. Magpie's diversity is almost entirely geographic (geo=0.844 vs RM's 0.630) with near-zero lean spread (0.053 vs RM's 0.240). Current 35/35/30 weighting doesn't sufficiently differentiate them. Hypothesis: increasing lean spread weight to ~40% (dropping format or geo slightly) would correctly separate them. **Weight sensitivity analysis needed before finalizing formula.**

### Algorithm Capture Narrative (2026-04-19)
- Core reframe: spider chart = capture map, not personality profile
- Preferred wording: "here's how the algorithm sees you" (present tense, activating) over "here's what it turned you into" (past tense, victimizing)
- User = protagonist arguing back at the machine; algorithm has a model of you that may be wrong — that framing invites engagement not shame
- Villain = the incentive structure (engagement optimization), not any specific platform; survives platform churn; inoculates against "RadMo is just another engagement optimizer" attack
- Two-step messaging architecture:
  - Acquisition: villain narrative gets them in the door
  - Activation/retention: something else entirely; villain narrative doesn't sustain
- Tribal judo: shared external threat (engagement optimization) as in-group cohesion mechanism for RadMo's user base; well-documented psych mechanism (Tajfel, Robbers Cave); has a shelf life if over-indexed
- Persona names may shift from personality traits to capture/pattern language — under construction
- Onboarding: self-perception first, reveal second; gap is the hook
- Self-reported feed agency (spectrum slider, not binary) + actual scores = built-in research dataset from day one; correlation between self-perception and score is a product insight
- Group comparison mechanic (your score vs. tribe average) becomes load-bearing under this frame; expand beyond political groups TBD
- Forced binary onboarding risk: feels reductive; spectrum slider proposed as mitigation; both ends unlabeled until after user commits position

### Marketing — Taglines & Concepts (2026-04-27)
- **Best tagline to date:** `'@grok is this true' shouldn't be the top comment` — culturally legible now; implies RadMo's value prop without stating it; subtle Grok/Musk jab; slightly platform-specific and may age. Durable variant: "You shouldn't need to ask a bot if the post is real."
- **`_ButWhy` social accounts concept** — platform-native accounts (TikTokButWhy, XButWhy etc.) in WaitButWhy style; expose platform absurdity via memes and posts; strongest content asset = AI slop feed video (visceral, apolitical, undeniable); inflammatory/misinformation examples are riskier (partisan perception risk); platform-specific separate accounts preferred over one general account
  - **Legal risk:** handle names like GrokButWhy, FacebookButWhy are trademark-adjacent; likely face suspension or C&D at traction; safer alternatives: TheAlgorithmButWhy, YourFeedButWhy
  - These are the execution layer of the villain narrative — concrete shareable proof points, not abstract claims
  - Connects to acquisition strategy: accounts build top-of-funnel; extension is the conversion mechanism
- Document full GTM concept in `strategy/gtm.md`

### Visual / UX
- **Is/ought color spectrum:** Blue (fact) → amber (opinion). Red/yellow/green is exclusively credibility score language.
- **User-facing language:** "Fact / Opinion" replaces "Is / Normative". "Is/Ought" stays as internal/technical term.
- **Ambiguous/mixed claims:** Rendered as intermediate color on the blue→amber spectrum (confirmed via demo 2026-04-18); no third category needed.
- **Cred score display:** Circular progress ring, clockwise from 12 o'clock, proportional to score; faint full-circle track; ring color matches persona color
- **Avg reposter cred:** Same ring treatment at smaller size; label "avg reposter cred" confirmed
- **Score interaction:** Clicking the score ring swaps it in-place with the spider chart. Click again to restore.
- **Engagement display:** Avg reposter cred ring (not liker avg).
- **Badges are confirmed default features:** Bridge Builder, First Principles, Wide Lens.
- **Hover tooltips locked:**
  - Persona (avatar / badge / cred ring / large spider): short pithy blurbs per archetype
  - Text segments: Option A — "Likely a factual claim — verifiable against evidence." / "Likely a normative claim — reflects a value or judgment."
  - Dimension bars: Option C — FG: "Opinions backed by facts"; CV: "Validated by people who disagree"; SD: "Breadth and independence of sources"; CI: "Sources honestly represented"

### Cooling Period & Post Visibility
- **Posts are live in feeds immediately.**
- **Perspective panels appear immediately** when matches are identified.
- **Full engagement data visible to poster at 12 hours.**
- **Edit window:** 30 minutes from post time. Closes early on first repost.

### Credibility Score — Dimension Definitions (confirmed)

| Dimension | Weight | Core definition |
|---|---|---|
| Factual Grounding | 30% | Grounding as *presence*, not *order* |
| Cross-Viewpoint Validation | 30% | Four axes: political lean, epistemic tribe, geographic/cultural, information diet distance |
| Source Diversity | 25% | Format tier ranking + geographic diversity + political lean as one input |
| Claim Integrity | 15% | Sub-components: factual accuracy (~50%), steelmanning score (~30%), asymmetric rigor (~20%) |

### Steelmanning Compounding (locked 2026-04-10)
- `CV_effective = CV_base × (1 + steelmanning_bonus)`, bonus 0.0–0.3
- Adversarial citation = zero multiplier; steelmanned citation amplifies CV payoff
- Full spec: `product/steelmanning-spec.md`

### Cred Score Primary Function (clarified 2026-04-10)
- **Primary:** Discovery primitive — rapid epistemic assessment of strangers in feed
- **Secondary:** Post-level trust signal
- Spider avatar legibility at 44px is the active open design question

### Spider Shape as Epistemic Fingerprint
- **"Someone Like You" = similar spider shape** (cosine similarity of normalized vectors)
- **"Someone Unlike You" = different political lean + similar spider shape**
- **Five archetypes confirmed:** Bubble Scholar, Vibes Merchant, Magpie, Persuader, Radical Moderate

### Spider Profile Privacy Model (locked 2026-04-13)
- **Spider profile is private by default.** User owns and controls visibility. RadMo does not publish user scores — users do, if they choose to. Meaningful legal distinction.
- **Post-level spider/persona characterization for the feed** — simplified/broad version of the spider signal shown at post level for scroll legibility; not the full accumulated user profile.
- **Two-tier data model** — what users see (broad/simplified) vs. what RadMo holds internally (rich, full-dimensional); internal data is the scoring engine and matching primitive.
- **Voluntary public profile incentivization** — users who opt in to making spider chart public get something in return; mechanic TBD; see TODO.
- **Legal rationale** — user-level scoring is defamation-adjacent; post-level scoring is editorial judgment about content (Section 230 territory); private-by-default reduces exposure materially.

### GTM & Build Sequencing
- **Extension → PWA (Phase 1.5) → web platform → native mobile app**
- Outlet incentive = audience signal play, not credibility play
- Passive presence (outlet as citable source) accrues citation graph data without outlet participation

### Technical Build Order — Dimensions (confirmed 2026-04-13)
1. **Source Diversity** — lookup problem; outlet database + entropy math; no model training; buildable in weeks
2. **Cross-Viewpoint Validation** — Community Notes matrix factorization as foundation (open source); multi-axis expansion harder but well-precedented; 3–6 months for credible v1
3. **Claim Integrity** — RAG pipeline: fetch linked content → structured LLM prompt → categorical judgment → aggregate over time; Factiverse API candidate for factual accuracy sub-component; 3–6 months
4. **Factual Grounding** — research frontier; no clean productized solution exists; custom ML eventually; v1 will be directionally noisy; be honest with users

### LLM Integration Pattern for Claim Integrity (confirmed 2026-04-13)
RAG pipeline architecture:
- User submits post → backend extracts claims + links → fetches linked content → formats structured prompt → calls LLM API → parses structured categorical response → stores sub-scores in DB → aggregates into CI dimension score → updates overall credibility score
- LLM used as reasoning engine, not trained classifier; structured prompts return categorical judgments (supported / partially supported / unsupported / misrepresented)
- Asymmetric rigor requires batch job across post history, not single-post analysis
- Grok is doing the easy stateless version of this (single-post, user-initiated, no behavioral history); RadMo's version is fundamentally different — behavioral history across hundreds of posts is the moat

### Fact/Opinion Demo — Technical Notes (2026-04-18)
- Model: `claude-haiku-4-5-20251001` — cheap, fast, sufficient for span classification
- Prompt: segment text → return JSON array of `{text, score}` spans; score 0.0–1.0
- Required header for direct browser calls: `anthropic-dangerous-direct-browser-access: true`
- Cost: ~$0.0001–0.0003 per analysis; negligible
- Span coloring: linear interpolation between `rgb(55,138,221)` (fact) and `rgb(239,159,39)` (opinion)
- Hover interaction: fades other spans to 0.3 opacity; shows label + description + raw score

### Chrome Extension — Technical Notes (2026-04-27)
- **Architecture:** manifest v3; content script + popup only (no background service worker needed for v0.1)
- **DOM reading:** content script reads X's DOM directly — zero X API dependency; no auth needed
- **Tweet selector:** `article[data-testid="tweet"]` confirmed stable; tweet text via `[data-testid="tweetText"]`
- **SPA navigation:** X does not reload on navigation; handled via 500ms URL polling + observer restart with 1s delay
- **React virtual DOM:** X unmounts/remounts tweet elements on scroll; handled by checking `[data-radmo-spans]` presence on every scan; re-queues wiped tweets
- **Result caching:** Map keyed by tweet text; re-appearing tweets re-colored instantly from cache; no repeat API calls
- **Queue:** serial processing with 300ms gap between calls; try/catch per item prevents stall on error
- **Known bug (v0.1):** queue stalls after ~5 tweets; suspected Haiku rate limiting; fix = exponential backoff + retry logic
- **Local dev install:** load unpacked via `chrome://extensions` developer mode; reload extension after any file change
- **Beta version (planned):** proxy server for API key handling; opt-in telemetry; waitlist CTA in popup; Chrome Web Store submission

### Source Diversity — Database Schema (confirmed 2026-04-14)
Four tables:

**`outlets`** — master outlet database
```
outlet_id        UUID, primary key
domain           VARCHAR, unique (e.g. "nytimes.com")
display_name     VARCHAR
political_lean   FLOAT (-1.0 to 1.0, null if unknown)
lean_confidence  FLOAT (0.0 to 1.0 — AllSides % agreement)
reliability      FLOAT (0.0 to 1.0 — Ad Fontes reliability score)
format_tier      INT (1–7, null if untagged)
country_code     VARCHAR (ISO 3166)
institutional_type VARCHAR
is_tagged        BOOLEAN
created_at / updated_at TIMESTAMP
```

**`citations`** — one row per URL extracted from a post
```
citation_id      UUID, primary key
post_id          UUID, FK → posts (null if imported)
user_id          UUID, FK → users
outlet_id        UUID, FK → outlets (null if unknown)
raw_url          TEXT
resolved_domain  VARCHAR
source           ENUM (radmo_post / imported_twitter / imported_reddit / imported_other)
cited_at         TIMESTAMP
```
`post_id` nullable for imported records. `cited_at` = original post date for imports.

**`user_source_diversity_scores`** — materialized dimension score per user
```
score_id              UUID, primary key
user_id               UUID, FK → users
format_entropy        FLOAT
geo_entropy           FLOAT
lean_spread           FLOAT
dimension_score       FLOAT (0–100)
native_citation_count INT
imported_citation_count INT
calculated_at         TIMESTAMP
```
Updates on schedule (nightly or per citation threshold), not per page load.

**`outlet_tagging_queue`** — unknown domains awaiting classification
```
queue_id       UUID, primary key
domain         VARCHAR, unique
first_seen_at  TIMESTAMP
citation_count INT (prioritization signal)
status         ENUM (pending / in_review / tagged / rejected)
```

**Scoring window decision: PARKED** — all-time vs. rolling 90 days vs. weighted recency unresolved; schema supports any approach; revisit when scoring pipeline is being built.

**Data source decisions:**
- `radmo_post` citations: primary long-term signal
- Imported citations (`imported_twitter` etc.): bootstrap initial score, decays as native history grows; imported path not built yet — field reserved
- Scoring unit is user-level (behavioral history), not per-post

## Open To-Dos (priority order)

See TODO.md — Fundamental Blockers section for current top priorities.

**Immediate next steps for extension:**
1. Add exponential backoff + retry logic to queue drain (fix rate limit stall)
2. Test on a slower scroll pace to confirm rate limit hypothesis
3. Then: Source Diversity layer — domain lookup against AllSides CSV as first proprietary signal

**Immediate next steps for Source Diversity:**
1. **Weight sensitivity analysis** — run SD formula across personas at multiple weight configs (especially lean spread 30% vs. 40%) to find weights that correctly separate Magpie from Radical Moderate
2. Finalize SD sub-score weights based on sensitivity analysis
3. Write scoring math against production data path (Shannon entropy for format + geo, variance for lean spread, weighted composite → 0–100)
4. Add domain column to AllSides CSV (manual mapping for top outlets)
5. Pull and commit GDELT source-country dataset
6. Join AllSides + GDELT on domain → combined political lean + geography
7. Define 7-tier format taxonomy and manually tag top 200 outlets
8. Build outlet_tagging_queue logic for unknown domains

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Radar/spider charts preferred; dark background (#0a0a0a); Palatino serif font
- **Color language:** Green/amber/red = credibility only; blue/amber = fact/opinion only
- **Conciseness:** Named concepts over prose
- **Concrete outputs:** Code, spec docs, named frameworks over abstract discussion
- **Validation:** Expect pushback on elitism or preachiness
- **GitHub:** Single-commit multi-file pushes; always fetch SHA before updating; never replace old files, date and preserve

## Context Notes

- `credibility-score-v2` (radar) is the preferred credibility display direction
- `persona-feed-2026-04-10.jsx` is the current feed mockup; `post-feed.jsx` (v3) preserved as prior version
- Ground News is primary competitive reference AND potential data partner (outlet bias ratings = Source Diversity input); dual framing intentional — see TODO partners section
- Community Notes binary left/right model is the ceiling RadMo evolves beyond; Grok is displacing Community Notes on X (confirmed by Renault et al. 2026 study — 1.67M fact-check requests; partisan asymmetry in usage documented)
- Steelmanning detection adapted from Community Notes bridging logic
- Citation graphs = passive infrastructure for information diet distance; no self-reporting needed
- Public-facing URI enables portable credential; must be architected from day one
- CHT (Center for Humane Technology) = potential legitimizing partner; advocacy not product; currently pivoting to AI focus
- Extension absorption risk flagged — surface-level feed overlay is replicable by browser/platform players; moat is compounding citation graph + spider profile depth; strategy still under construction
- Account-analysis beachhead (ingest social history → generate initial spider chart) — explored, still under construction; constrained by API access hostility
- AllSides data gap: display names only, no domain field — manual domain mapping required before production use
- GDELT source-country dataset (13,155 outlets → country of origin) identified as next data pull
- `anthropic-dangerous-direct-browser-access: true` header required for any direct browser → Anthropic API calls
- `_ButWhy` accounts: trademark risk on platform-name handles; AI slop feed video is strongest content asset; platform-specific accounts preferred
- `@grok is this true` tagline: best to date; slightly platform-specific; durable variant: "You shouldn't need to ask a bot if the post is real"
- **SD scoring note:** Magpie and Radical Moderate converge at current 35/35/30 weights; lean spread weight likely needs to increase to ~40% to correctly differentiate them; sensitivity analysis pending

**Last Updated:** 2026-05-03
**Next Review:** Start of next session
