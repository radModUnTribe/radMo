# RadMo Active Context

## Current Work Focus

**Primary:** Post card reader/poster view — cooling period architecture confirmed, perspective panel mechanics confirmed, epistemic matching via spider shape confirmed.

## What's Committed & Current

### Mockups
- `product/mockups/rm-post.jsx` — post composer with cooling period
- `product/mockups/is-ought.jsx` — letter-by-letter gradient (14KB)
- `product/mockups/credibility-score-v1.jsx` — bar chart (9.5KB)
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (13.5KB)
- `product/mockups/rm-expert-post.jsx` — expert post variant (13.7KB)
- `product/mockups/post-feed.jsx` — **v3 reader view (current)** — post card with is/ought coloring, swappable cred scores, rater cards, badges, perspective check panels

### Documentation
- `product/features.md` — 15 sections, updated this session
- `product/badges.md` — Bridge Builder, First Principles, Wide Lens — confirmed default features, draft earn conditions
- `research/research.md` — 12 topic areas, current
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/what-to-build-now.md` — current
- `TODO.md` — live running to-do list in repo root

## Locked Design Decisions

- **Is/ought color spectrum:** Blue (fact) → amber (opinion). Red/yellow/green is exclusively credibility score language.
- **User-facing language:** "Fact / Opinion" replaces "Is / Normative". "Is/Ought" stays as internal/technical term.
- **Cred score interaction:** Clicking the score swaps it in-place with the spider chart. Not a dropdown. Click again to restore.
- **Engagement display:** Avg reposter cred only (not liker avg). Reposting = higher-conviction signal.
- **Badges are confirmed default features:** Bridge Builder, First Principles, Wide Lens.
- **Cooling period architecture:** Posts are live in feeds immediately. Cooling period governs what the *poster* sees of their own engagement — not the post's distribution. Perspective panels appear immediately when matches are identified. Full engagement data (who liked/reposted, scores, rater cards) visible to poster at 12 hours.
- **Edit window:** 30 minutes from post time. Closes early on first repost. Open questions: typo vs. substantive distinction, reposter notification, retraction mechanic.
- **Perspective panels show immediately:** As soon as "Someone Like You" and "Someone Unlike You" matches are identified, panels appear for the poster. This is the dopamine hook during the cooling window — a named person's perspective, not an aggregate count.
- **Spider shape = epistemic fingerprint (CONFIRMED):** The credibility score spider chart encodes *how* a user thinks (Tim Urban's vertical axis), not just *how well* they score. High sequencing = scientist-mode (evidence-first). High cross-validation = seeks disconfirmation. High source diversity = not siloed. The shape of the polygon is the meaningful signal.
- **"Someone Like You" matching = spider shape similarity:** Matching is done on cosine similarity (or equivalent) between normalized spider dimension vectors — not political lean, not overall score. Shape similarity = epistemic compatibility.
- **"Someone Unlike You" matching:** Different political lean (current placeholder signal) + similar spider shape. The most valuable pairing: scientist-mode conservative and scientist-mode progressive examining the same post — different priors, same methodology.
- **"Same conclusion" proxy (pre-qualifier):** Until the repost intent qualifier (disagree/neutral/agree) is built, conclusion inference uses engagement type: likes = near-certain agreement (strong signal); unqualified reposts = weak-positive signal. UI uses "likely reached the same conclusion" until confirmed.

## Open To-Dos (priority order)

1. **Is/ought scoring redesign** — connection quality between factual and normative claims, not ordering
2. **Viewpoint diversity reach** — Option 1 vs. Option 3; tabled
3. **Badge earn conditions** — thresholds, visual design, loss mechanics
4. **Dopamine gap** — must resolve before MVP
5. **Poster-facing UI** — deferred
6. **Repost intent qualifier** — disagree / neutral / agree mechanic at repost time
7. **Cred score delta rules** — how likes, repost qualifiers, and engagement types update poster's score
8. **Perspective panel identification speed** — active engagement vs. passive view signal
9. **"Same conclusion" vs. "same viewpoint" UI clarification** — post credibility verdict vs. political agreement; must be clearly separated in copy and matching logic
10. **CrossViewpoint weight** — 40% vs. 30%
11. **Hot take spectrum visual** — workshop separately
12. **Avatar shape mirroring spider** — workshop separately

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
- Matrix factorization fully documented — note_intercept is the common ground factor; user/note factors are the political alignment terms
- Spider shape similarity is both a credibility display mechanic AND the epistemic matching engine for perspective panels — dual-purpose system design decision

**Last Updated:** 2026-04-03
**Next Review:** Start of next session
