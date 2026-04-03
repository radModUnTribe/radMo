# RadMo Active Context

## Current Work Focus

**Primary:** Credibility score dimension redefinitions complete. Information environment formally defined. Spider shape as epistemic fingerprint confirmed. Next: persona mapping for spider shapes, then mockup updates.

## What's Committed & Current

### Mockups
- `product/mockups/rm-post.jsx` — post composer with cooling period
- `product/mockups/is-ought.jsx` — letter-by-letter gradient
- `product/mockups/credibility-score-v1.jsx` — bar chart
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (preferred direction)
- `product/mockups/rm-expert-post.jsx` — expert post variant
- `product/mockups/post-feed.jsx` — **v3 reader view (current)**

### Documentation
- `product/features.md` — updated this session; Section 7 fully redefined
- `product/badges.md` — Bridge Builder, First Principles, Wide Lens
- `research/research.md` — 12 topic areas
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/what-to-build-now.md`
- `strategy/information-environment.md` — **NEW this session**
- `memory-bank/TODO.md` — live running to-do list (moved from repo root)

## Locked Design Decisions

### Visual / Interaction
- **Is/ought color:** Blue (fact) → amber (opinion); red/yellow/green = credibility only
- **User-facing language:** "Fact / Opinion"; "Is/Ought" is internal
- **Cred score interaction:** Click swaps in-place with spider chart
- **Engagement display:** Avg reposter cred only
- **Badges:** Bridge Builder, First Principles, Wide Lens — confirmed defaults

### Cooling Period Architecture
- Posts live in feeds immediately; cooling period governs poster's view of engagement
- Poster cannot see counts/rater cards for 12 hours
- Perspective panels surface immediately when matches identified
- Edit window: 30 minutes from post time; closes early on first repost

### Perspective Panel Matching
- Spider shape similarity (cosine distance between normalized dimension vectors) = "Someone Like You" matching signal
- "Someone Unlike You" = different political lean + similar spider shape
- "Same conclusion" proxied by engagement type pre-qualifier; "likely reached" language until confirmed
- Geography as secondary signal for "Someone Unlike You — Nearby"

### Credibility Score — Dimension Definitions (updated this session)

**1. Factual Grounding (30%)** *(formerly Is/Ought Sequencing)*
- Grounding as *presence*, not *order*
- % of normative claims with traceable factual support in user's body of work
- Renamed to avoid penalizing rhetorical style over epistemic substance

**2. Cross-Viewpoint Validation (30%)**
- Expanded beyond political spectrum to composite of: political lean, epistemic tribe distance (zealot-to-zealot cross-political = stronger signal than scientist-to-scientist), geographic/cultural distance, information diet distance (citation graph similarity — no self-reporting needed)
- Validation from multiple difference axes carries more weight

**3. Source Diversity (25%)**
- Expanded beyond political bias ratings to: format diversity (7-tier ranking: primary sources → peer-reviewed → investigative → institutional reports → quality news → expert commentary → opinion), geographic diversity, political lean (one input among several)
- Institutional type collapses into format as a tagging dimension
- Temporal diversity: noted, deprioritized for now

**4. Claim Integrity (15%)** *(formerly Claim Consistency)*
- Does source actually support what poster claims it says?
- Good faith barometer; hardest dimension to game
- Pattern detection: clustered directional errors = motivated misrepresentation; random errors = sloppy reading

**Future dimension (not yet built):** Updating on Evidence — rewards position changes accompanied by cited factual updates; penalizes unexplained flips or tribal tracking

### Information Environment Model (confirmed)
- RadMo's lane: build factual layer infrastructure; separate is from ought visually; surface epistemic method
- Platform does not adjudicate values disputes
- Poster-level trust (cred score) and post-level trust (claim integrity + source grounding) are distinct — UI must not allow over-extrapolation
- Factual layer is itself contested; RadMo flags weak sourcing and contested claims, not just opinions
- Updating on evidence = scientist-mode; platform destigmatizes this explicitly

### Spider Shape as Epistemic Fingerprint
- Spider shape = Tim Urban's vertical axis quantified
- High balanced shape = scientist-mode; lopsided/low = lawyer/zealot-mode
- Dual purpose: credibility display AND epistemic matching engine
- Persona mapping for spider shapes: **next design task**

## Open To-Dos (priority order)

1. **Spider shape persona mapping** — give named archetypes to recognizable spider shapes (in progress this session)
2. **Is/ought scoring redesign** — NLP pipeline for factual grounding detection
3. **Viewpoint diversity reach** — Option 1 vs. Option 3; tabled
4. **Badge earn conditions** — thresholds, visual design, loss mechanics
5. **Dopamine gap** — must resolve before MVP
6. **Poster-facing UI** — deferred
7. **Repost intent qualifier** — disagree / neutral / agree mechanic
8. **Cred score delta rules** — full mechanic per engagement type
9. **Perspective panel identification speed** — active vs. passive signal
10. **"Same conclusion" vs. "same viewpoint" UI copy** — must be clearly separated
11. **CrossViewpoint weight** — 40% vs. 30%
12. **Hot take spectrum visual** — workshop separately
13. **Avatar shape mirroring spider** — workshop separately

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Spider charts; dark background (#0a0a0a); Palatino serif
- **Color language:** Green/amber/red = credibility; blue/amber = fact/opinion
- **Conciseness:** Named concepts over prose
- **GitHub:** Single-commit multi-file pushes; always fetch SHA before updating
- **TODO location:** `memory-bank/TODO.md`

**Last Updated:** 2026-04-03
**Next Review:** Start of next session
