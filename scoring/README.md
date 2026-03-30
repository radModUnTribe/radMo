# RadMo Scoring Module

This directory contains the core scoring algorithm, adapted from Twitter/X's open-source Community Notes algorithm.

**Source:** https://github.com/twitter/communitynotes (Apache 2.0 License)
**Last synced:** 2026-03-30

---

## What's Here

| File | Description |
|---|---|
| `matrix_factorization/model.py` | Core PyTorch model — `BiasedMatrixFactorization` |
| `matrix_factorization/matrix_factorization.py` | Training loop, gradient descent, parameter extraction |
| `helpfulness_scores.py` | Contributor reputation scoring (author + rater helpfulness) |
| `mf_core_scorer.py` | Core scoring pipeline with key thresholds |

## Key Concepts

### The BiasedMatrixFactorization model

Each rating prediction is decomposed into four components:

```
pred = global_intercept       # system-wide tendency
     + user_intercept         # how lenient this specific rater is
     + note_intercept         # ← THE COMMON GROUND FACTOR
     + (user_factor * note_factor)  # the political/ideological bias component
```

The **note_intercept** is the key signal. It captures genuine helpfulness *after* political bias is cancelled out. A note gets a high intercept only when users with *opposing* factor values both rate it helpful. This is the "bridging" mechanic.

### Key thresholds (from `mf_core_scorer.py`)

- `captureThreshold=0.5` — minimum score for a note to be "helpful"
- `firmRejectThreshold=0.3` — notes below this are firmly rejected
- `minMinorityNetHelpfulRatings=4` — at least 4 absolute ratings from the minority side
- `minMinorityNetHelpfulRatio=0.05` — at least 5% of ratings from the opposing factor side

Both minority thresholds must be met. This double gate prevents gaming — you can't satisfy the ratio with only a handful of minority ratings.

### The two-stage pipeline

1. **Round 1:** Run MF on all ratings, score all notes, compute contributor helpfulness scores
2. **Filter:** Keep only raters who pass the helpfulness threshold (track record of good-faith bridging)
3. **Round 2:** Re-run MF using only filtered, high-quality raters

This bootstraps quality — later rounds use raters who have demonstrated they can identify notes that bridge perspectives.

---

## RadMo Adaptation Plan

### What we keep as-is
- The `BiasedMatrixFactorization` model architecture
- The two-stage scoring pipeline
- The helpfulness/reputation scoring system
- The minority participation thresholds concept

### What we adapt
- **Factor dimensions:** Community Notes uses a single factor (1D left/right spectrum). RadMo will use multiple factors — geographic, cultural, generational, religious — to escape the binary left/right limitation.
- **Input signals:** Community Notes scores fact-check notes. RadMo will score posts and credibility dimensions (is/ought sequencing, source diversity, cross-viewpoint validation, claim consistency).
- **Accountability model:** Rather than named identity, RadMo uses behavioral track record as the accountability signal. New/unverified accounts have low weight; accounts with rich positive rating history have high weight. See `scoring/ANONYMITY_NOTES.md`.

---

*Files copied from `twitter/communitynotes` under Apache 2.0 license. Attribution maintained.*
