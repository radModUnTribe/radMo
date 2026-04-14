# RadMo Datasets

This folder contains raw and processed datasets used to build the Source Diversity scoring infrastructure.

## Files

### `allsides_bias_ratings.csv`
**Source:** [AllSideR R package](https://github.com/favstats/AllSideR) — scraped from AllSides.com  
**Retrieved:** 2026-04-13  
**License:** AllSides data is subject to AllSides.com terms of service. This copy is for internal research and development use only.  
**Coverage:** 547 US news sources and authors  
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
- No domain field — display names require fuzzy matching to resolve domains
- Includes authors and think tanks alongside news outlets (filter by `type` for outlet-only)
- Snapshot from ~2019-2020; some ratings may be stale

**Next steps:**
- Add domain column via manual mapping or fuzzy match against known outlet list
- Join with GDELT source-country dataset on domain for geographic coverage
- Supplement with Ad Fontes reliability scores for format tier proxy

---

## Planned additions
- `gdelt_source_country.csv` — 13,155 English-language outlets mapped to country of origin (GDELT)
- `adfontes_bias_reliability.csv` — bias + reliability scores for 3,400+ outlets (Ad Fontes Media)
- `mbfc_ratings.csv` — bias, factual accuracy, credibility for 2,000+ outlets (Media Bias/Fact Check)
- `outlet_database.csv` — master joined table: domain / display_name / political_lean / lean_confidence / reliability / format_tier / country_code / institutional_type
