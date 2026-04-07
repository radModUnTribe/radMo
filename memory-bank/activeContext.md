# RadMo Active Context

## Current Work Focus

**Primary:** Credibility score dimension definitions, spider shape personas, and information environment model — all confirmed and documented this session.

## What's Committed & Current

### Mockups
- `product/mockups/rm-post.jsx` — post composer with cooling period
- `product/mockups/is-ought.jsx` — letter-by-letter gradient (14KB)
- `product/mockups/credibility-score-v1.jsx` — bar chart (9.5KB)
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (13.5KB)
- `product/mockups/rm-expert-post.jsx` — expert post variant (13.7KB)
- `product/mockups/post-feed.jsx` — **v3 reader view (current)** — post card with is/ought coloring, swappable cred scores, rater cards, badges, perspective check panels

### Documentation
- `product/features.md` — 15 sections, updated this session (dimension renames, full definitions, spider persona note)
- `product/badges.md` — Bridge Builder, First Principles, Wide Lens — confirmed default features
- `product/personas.md` — five spider shape archetypes with real-world examples; confirmed
- `research/research.md` — primary research reference; also see `research/CORE-THESIS.md` and `research/THESIS-EVIDENCE-SUMMARY.md`
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/what-to-build-now.md` — current
- `strategy/information-environment.md` — **NEW this session** — perfect information environment model, RadMo's lane, is/ought triage logic, poster vs. post trust distinction
- `memory-bank/TODO.md` — **moved from repo root** — live running to-do list now lives in memory-bank

## Locked Design Decisions

### Visual / UX
- **Is/ought color spectrum:** Blue (fact) → amber (opinion). Red/yellow/green is exclusively credibility score language.
- **User-facing language:** "Fact / Opinion" replaces "Is / Normative". "Is/Ought" stays as internal/technical term.
- **Cred score interaction:** Clicking the score swaps it in-place with the spider chart. Not a dropdown. Click again to restore.
- **Engagement display:** Avg reposter cred only (not liker avg).
- **Badges are confirmed default features:** Bridge Builder, First Principles, Wide Lens.

### Cooling Period & Post Visibility
- **Posts are live in feeds immediately.** Cooling period governs what the *poster* sees of their own engagement — not the post's distribution.
- **Perspective panels appear immediately** when matches are identified — dopamine hook during cooling window.
- **Full engagement data visible to poster at 12 hours** (who liked/reposted, scores, rater cards).
- **Edit window:** 30 minutes from post time. Closes early on first repost.

### Credibility Score — Dimension Definitions (confirmed this session)

| Old name | New name | Weight | Core change |
|---|---|---|---|
| Is/Ought Sequencing | **Factual Grounding** | 30% | Grounding as *presence*, not *order* — does a factual basis exist for normative claims? |
| Cross-Viewpoint Validation | Cross-Viewpoint Validation | 30% | Expanded to four axes: political lean, epistemic tribe, geographic/cultural, information diet distance |
| Source Diversity | Source Diversity | 25% | Format tier ranking added; geographic diversity added; institutional collapses into format |
| Claim Consistency | **Claim Integrity** | 15% | Rename only; pattern detection (directionally clustered errors = motivated misrepresentation) |

- **Zealot-to-zealot cross-political agreement = stronger signal** than scientist-to-scientist, because it is more surprising
- **Information diet distance** detected from citation graph similarity — no self-reporting; built on same source classification infrastructure as Source Diversity
- **Format diversity tier ranking:** Primary sources → Peer-reviewed → Investigative journalism → Institutional reports → Quality news → Expert commentary → General opinion
- **Temporal source diversity** — noted, deprioritized for now

### Spider Shape as Epistemic Fingerprint
- Spider shape = Tim Urban's vertical axis (*how* you think, not *what* you think)
- **"Someone Like You" matching = cosine similarity between normalized spider dimension vectors** — shape, not overall score
- **"Someone Unlike You" = different political lean + similar spider shape** (same epistemic method, different priors)
- Spider chart is dual-purpose: credibility display AND epistemic matching engine for perspective panels
- **Five archetypes confirmed:** Bubble Scholar, Vibes Merchant, Magpie, Persuader, Radical Moderate — documented in `product/personas.md`

### Perspective Panels
- **"Same conclusion" proxy (pre-qualifier):** likes = near-certain agreement; unqualified reposts = weak-positive; UI says "likely reached the same conclusion" until confirmed
- Two axes must not be conflated in UI: political lean (like/unlike) and post credibility verdict (same/different conclusion)

### Information Environment Model (confirmed this session)
- **RadMo's lane:** build the factual layer infrastructure; separate is from ought visually; surface epistemic method via credibility score; gently push scientist-mode without preaching
- **Not RadMo's job:** adjudicate values, force consensus, eliminate disagreement
- **Goal:** relocate disagreement from factual disputes to honest value disputes
- **Poster trust ≠ post trust** — credibility score is a prior over body of work; post-level claim integrity is a separate signal; UI must not allow conflation
- **Changing your mind on new evidence = scientist-mode = rewarded.** Platform explicitly destigmatizes position updates.
- Full model in `strategy/information-environment.md`

## Open To-Dos (priority order)

1. **Factual Grounding scoring** — argument structure parsing; NLP/argument mining spec
2. **Cross-viewpoint composite weighting** — four axes, weighting TBD
3. **Source classification infrastructure** — shared dependency for Source Diversity + info diet distance
4. **Repost intent qualifier** — disagree / neutral / agree at repost time
5. **Cred score delta rules** — full engagement signal → score update mechanic
6. **Badge earn conditions** — thresholds, visual design, loss mechanics
7. **Dopamine gap** — must resolve before MVP
8. **Perspective panel identification speed** — active vs. passive signal
9. **Post-feed mockup updates** — perspective panels always visible; edit button
10. **CrossViewpoint weight** — 40% vs. 30%
11. **Poster-facing UI** — deferred
12. **Hot take spectrum visual** — workshop separately
13. **Avatar shape mirroring spider** — workshop separately

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Radar/spider charts preferred; dark background (#0a0a0a); Palatino serif font
- **Color language:** Green/amber/red = credibility only; blue/amber = fact/opinion only
- **Conciseness:** Named concepts over prose
- **Concrete outputs:** Code, spec docs, named frameworks over abstract discussion
- **Validation:** Expect pushback on elitism or preachiness
- **GitHub:** Single-commit multi-file pushes; always fetch SHA before updating

## Context Notes

- `memory-bank/TODO.md` is the live running to-do list — root `TODO.md` is now a redirect pointer
- `credibility-score-v2` (radar) is the preferred credibility display direction
- `what-to-build-now.md` argues browser extension before full platform (Phase 1 → 2 → 3)
- Ground News is primary competitive reference
- Community Notes binary left/right model is the ceiling RadMo evolves beyond
- Matrix factorization: note_intercept = common ground factor; user/note factors = political alignment terms
- Spider shape is dual-purpose: credibility display + epistemic fingerprint for perspective panel matching
- Dimension rename summary: Is/Ought Sequencing → Factual Grounding; Claim Consistency → Claim Integrity

**Last Updated:** 2026-04-07
**Next Review:** Start of next session
