# RadMo Datasets

This folder contains raw and processed datasets used to build the Source Diversity scoring infrastructure.

## Files

### `allsides_bias_ratings.csv`
**Source:** [AllSideR R package](https://github.com/favstats/AllSideR) — scraped from AllSides.com  
**Retrieved:** 2026-04-13  
**License:** AllSides data is subject to AllSides.com terms of service. This copy is for internal research and development use only.  
**Coverage:** News Media subset of AllSides ratings (~120 outlets); full dataset is 547 sources  
**Key fields:**
- `news_source` — outlet or author name
- `rating` — categorical lean: left / left-center / center / right-center / right / allsides
- `rating_num` — numerical lean: 1 (left) to 5 (right)
- `type` — outlet type: News Media / Think Tank / Policy Group / Author
- `perc_agree` — % of AllSides raters who agreed with the rating (confidence proxy)
- `confidence_level` — AllSides confidence tier: High / Medium / Low or Initial Rating
- `editorial_review`, `blind_survey`, `third_party_analysis`, `independent_research` — methodology flags

**Known gaps:**
- US-centric; minimal international coverage
- No domain field — display names require manual mapping to resolve domains
- Snapshot from ~2019-2020; some ratings may be stale

---

### `test_outlets_extended.csv`
**Source:** Manual extension of AllSides data  
**Created:** 2026-04-14  
**Purpose:** Reference table for scoring test; subset of 29 outlets used in test_post_citations.csv  
**Key fields:**
- `news_source` — join key to allsides_bias_ratings.csv and test_post_citations.csv
- `rating`, `rating_num`, `confidence_level` — from AllSides
- `format_tier` — manually assigned 1–7 (1 = peer-reviewed academic; 7 = partisan blog)
- `format_tier_label` — human-readable tier label
- `country_code` — ISO 3166 country of origin (manually assigned)

**Format tier scale:**
- 1 — Peer-reviewed / academic
- 2 — Research institution / think tank
- 3 — Wire service (AP, Reuters)
- 4 — Major newspaper / longform magazine
- 5 — Major broadcast / public media / large digital
- 6 — Digital news / opinion / data journalism
- 7 — Partisan blog / advocacy outlet

---

### `test_post_citations.csv`
**Source:** Synthetic test data  
**Created:** 2026-04-14  
**Purpose:** Simulated post history for five RadMo personas; used to develop and validate Source Diversity scoring math  
**Coverage:** 111 rows; 5 users × 8 posts each; Jan–Apr 2026 timestamps  
**Key fields:**
- `citation_id` — primary key (format: `{user_abbrev}_p{post_num}_c{citation_num}`)
- `user_id` — persona: bubble_scholar / vibes_merchant / magpie / persuader / radical_moderate
- `post_id` — groups citations from the same post (format: `{user_abbrev}_p{post_num}`)
- `news_source` — join key to test_outlets_extended.csv
- `cited_at` — simulated ISO 8601 timestamp
- `source` — always `radmo_post` for this test dataset
- `post_topic` — topic category (climate_policy, healthcare, economics, etc.)
- `post_summary` — one-line description of the post's argument

**Persona citation fingerprints (designed to produce distinct SD scores):**
- `bubble_scholar` — 21 citations; all US; all left/left-center (rating_num 1–2); tiers 2–6; tight lean cluster; high quality, zero viewpoint diversity
- `vibes_merchant` — 11 citations; all US; all right tier 7 only; zero format or geo diversity
- `magpie` — 23 citations; US/GB/QA; tiers 3–6; wide source variety; moderate lean spread
- `persuader` — 23 citations; mostly US; left-center to right-center; tiers 5–6 only; cross-lean but narrow format range
- `radical_moderate` — 32 citations; US/GB/QA; tiers 2–6; lean spread 1–5; highest diversity on all three sub-scores

**Next step:** write Shannon entropy scoring (format + geo) and lean_spread (variance) against this data to produce a 0–100 Source Diversity score per user.

---

## Planned additions
- `gdelt_source_country.csv` — 13,155 English-language outlets mapped to country of origin (GDELT); next data pull
- `allsides_with_domains.csv` — allsides_bias_ratings.csv with domain column added via manual mapping
- `adfontes_bias_reliability.csv` — bias + reliability scores for 3,400+ outlets (Ad Fontes Media)
- `mbfc_ratings.csv` — bias, factual accuracy, credibility for 2,000+ outlets (Media Bias/Fact Check)
- `outlet_database.csv` — master joined table: domain / display_name / political_lean / lean_confidence / reliability / format_tier / country_code / institutional_type
