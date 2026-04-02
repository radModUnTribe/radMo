# RadMo Active Context

## Current Work Focus

**Primary:** Post card reader view is the active design surface. Three open threads from this session:
1. Viewpoint diversity reach display — tabled (Option 1 vs. Option 3 visualized, decision deferred)
2. Dopamine gap — highest-risk unsolved design problem
3. "Someone Like You / Someone Unlike You" — geography direction identified, 4 sub-questions still open

## What's Committed & Current

### Mockups
- `product/mockups/rm-post.jsx` — post composer with cooling period
- `product/mockups/is-ought.jsx` — letter-by-letter gradient (14KB)
- `product/mockups/credibility-score-v1.jsx` — bar chart (9.5KB)
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (13.5KB)
- `product/mockups/rm-expert-post.jsx` — expert post variant (13.7KB)
- `product/mockups/post-feed.jsx` — **v3 reader view (current)** — post card with is/ought coloring, swappable cred scores, rater cards, badges, perspective check panels

### Documentation
- `product/features.md` — 15 sections, current
- `product/badges.md` — NEW: Bridge Builder, First Principles, Wide Lens — confirmed default features, draft earn conditions
- `research/research.md` — 12 topic areas, current
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/what-to-build-now.md` — current
- `TODO.md` — NEW: live running to-do list in repo root

## Locked Design Decisions (this session)

- **Is/ought color spectrum:** Blue (fact) → amber (opinion). Red/yellow/green is exclusively credibility score language.
- **User-facing language:** "Fact / Opinion" replaces "Is / Normative". "Is/Ought" stays as internal/technical term.
- **Cred score interaction:** Clicking the score swaps it in-place with the spider chart. Not a dropdown. Click again to restore.
- **Engagement display:** Avg reposter cred only (not liker avg). Reposting = higher-conviction signal.
- **Viewpoint reach removed** from post card for now — tabled pending Option 1 vs. Option 3 decision.
- **Badges are confirmed default features:** Bridge Builder, First Principles, Wide Lens. Documented in `product/badges.md`.
- **"Someone Unlike You — Nearby":** Geography as primary signal for the unlike-you panel. Hypothesis: local dissimilar people who share your viewpoint on a topic are the most valuable connection to surface. Links to genuine-connection and local-community-building goals.

## Open To-Dos (priority order)

1. **Is/ought scoring redesign** — connection quality between factual and normative claims, not ordering
2. **Viewpoint diversity reach** — Option 1 (similarity index) vs. Option 3 (cluster count); tabled
3. **Badge earn conditions** — thresholds, visual design, loss mechanics
4. **Dopamine gap** — no solution yet; must resolve before MVP
5. **Poster-facing UI** — deferred
6. **Reposter/poster cred tension** — high-cred reposters + low-cred poster is a meaningful signal; feed algorithm implications
7. **"Someone Unlike You" — 4 sub-questions** (signals, trigger, opt-in vs. proactive, passive vs. interactive)
8. **CrossViewpoint weight** — 40% vs. 30%
9. **Hot take spectrum visual** — workshop separately
10. **Avatar shape mirroring spider** — workshop separately

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Radar/spider charts preferred; dark background (#0a0a0a); Palatino serif font
- **Color language:** Green/amber/red = credibility only; blue/amber = fact/opinion only
- **Conciseness:** Named concepts over prose (Silence Tax, cooling period, is/ought)
- **Concrete outputs:** Code, spec docs, named frameworks over abstract discussion
- **Validation:** Expect pushback on elitism or preachiness
- **GitHub:** Single-commit multi-file pushes preferred; always fetch SHA before updating

## Context Notes

- `TODO.md` in repo root is the live running to-do list — update every session
- `credibility-score-v2` (radar) is the preferred credibility display direction
- `what-to-build-now.md` argues browser extension before full platform (Phase 1 → 2 → 3)
- Ground News is primary competitive reference; RadMo differentiates on social layer + multi-dimensional scoring
- Community Notes binary left/right model is the ceiling RadMo evolves beyond
- Matrix factorization fully documented this session — note_intercept is the common ground factor; user/note factors are the political alignment terms

**Last Updated:** 2026-04-02
**Next Review:** Start of next session
