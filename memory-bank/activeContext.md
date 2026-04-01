# RadMo Active Context

## Current Work Focus

**Primary:** Two genuinely open design problems remain before MVP readiness:
1. "Someone Like You / Someone Unlike You" popup — four unresolved design questions
2. Dopamine gap — how to retain users when cooling period removes the standard reward loop

## What's Actually Done (Memory Bank Was Stale)

### Committed & Full (not stubs)
- `product/mockups/rm-post.jsx` — post composer with cooling period state
- `product/mockups/is-ought.jsx` — letter-by-letter gradient visualization (14KB, full)
- `product/mockups/credibility-score-v1.jsx` — bar chart UI (9.5KB, full)
- `product/mockups/credibility-score-v2.jsx` — animated radar chart (13.5KB, full)
- `product/mockups/rm-expert-post.jsx` — expert post variant (13.7KB, full)

### Documentation Complete
- `product/features.md` — 15 sections, comprehensive, last updated 2026-03-30
- `research/research.md` — 12 topic areas, fully annotated, last updated 2026-03-31
- `strategy/strategy.md`, `strategy/evolution.md`, `strategy/what-to-build-now.md`

## Genuine Open To-Dos

### Design Work (Priority)
1. **"Someone Like You / Someone Unlike You" popup** — elevated to #1 on critical path; research confirms causal depolarization via meta-perception correction. Four open questions:
   - What signals define "like" vs. "unlike"? (viewpoint alignment, demographics, claim-checking behavior?)
   - When/where does popup trigger? (every post? opinion content only? daily nudge?)
   - Opt-in vs. proactive surfacing?
   - Passive exposure vs. interactive engagement?

2. **Dopamine gap** — highest-risk design problem. Cooling period removes the reward loop. Credibility status + insight velocity are the working hypothesis as substitutes. Needs concrete mechanic design and potentially behavioral psychology research.

### Research & Deep Dives Queued
- Community Notes source code walkthrough (`matrix_factorization.py`, `scoring.py` at github.com/twitter/communitynotes)
- Redirect-vs-resist framework formalization
- Sentiment analysis for bias detection (model selection, cost/accuracy tradeoffs)
- Prediction market monetary incentive design
- Is/ought scoring operationalization (algorithmic spec, not just visual)
- "Better information environment" — measurable criteria definition

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Radar/spider charts preferred over bar charts for multi-dimensional display
- **Conciseness:** Named concepts over prose (Silence Tax, cooling period, is/ought)
- **Concrete outputs:** Code, spec docs, named frameworks over abstract discussion
- **Validation:** Expect pushback on elitism or preachiness in any messaging

## Context Notes

- Memory bank replaces scattered conversation history; load at session start
- `credibility-score-v2` (radar) is the preferred direction; v1 archived for comparison UX
- `what-to-build-now.md` argues for browser extension (feed reranker) before full platform — Phase 1 → Phase 2 (community) → Phase 3 (platform)
- Ground News is the primary competitive reference; differentiation is social layer + multi-dimensional credibility scoring
- Community Notes binary left/right model is the known ceiling RadMo evolves beyond with multi-dimensional cross-cultural model

**Last Updated:** 2026-04-01
**Next Review:** After "Someone Like You" design decisions resolved
