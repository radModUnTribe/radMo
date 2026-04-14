# RadMo Active Context

## Current Work Focus

**Primary (2026-04-14):** Source Diversity v1 implementation underway. Schema designed, test datasets committed. Next step: write scoring math against test data, then add domain column to AllSides data and pull GDELT.

**Previous session focus (2026-04-13):** Investor red flags audit, spider profile privacy model, technical build order, LLM integration architecture, partners & collaborators section established.

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

### Documentation
- `product/features.md` — updated 2026-04-10
- `product/badges.md` — Bridge Builder, First Principles, Wide Lens
- `product/personas.md` — five spider shape archetypes with real-world examples
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

### Visual / UX
- **Is/ought color spectrum:** Blue (fact) → amber (opinion). Red/yellow/green is exclusively credibility score language.
- **User-facing language:** "Fact / Opinion" replaces "Is / Normative". "Is/Ought" stays as internal/technical term.
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

**Immediate next steps for Source Diversity:**
1. Write scoring math against test data (Shannon entropy for format + geo, variance for lean spread, weighted composite → 0–100)
2. Add domain column to AllSides CSV (manual mapping for top outlets)
3. Pull and commit GDELT source-country dataset
4. Join AllSides + GDELT on domain → combined political lean + geography
5. Define 7-tier format taxonomy and manually tag top 200 outlets
6. Build outlet_tagging_queue logic for unknown domains

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

**Last Updated:** 2026-04-14
**Next Review:** Start of next session
