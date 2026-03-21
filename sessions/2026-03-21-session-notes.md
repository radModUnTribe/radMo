# Session Notes — 2026-03-21

## What We Did

Full research build-out session. Started with an empty repo (just README.md) and ended with a structured research foundation.

---

## Files Created This Session

### Research Trends (8 files)
- `research/trends/01-affective-polarization.md`
- `research/trends/02-platform-outrage-amplification.md`
- `research/trends/03-cross-viewpoint-backfire.md`
- `research/trends/04-algorithmic-reranking-works.md`
- `research/trends/05-institutional-trust-decline.md`
- `research/trends/06-preference-falsification.md`
- `research/trends/07-news-consumption-shifts.md`
- `research/trends/08-negativity-bias-loss-aversion.md`

### Reference
- `research/reference/tim-urban-concepts.md` — 8 concepts from *What's Our Problem?* with RadMo relevance mapped for each

### Strategy Documents
- `research/THESIS-EVIDENCE-SUMMARY.md` — stress-test of "people want the actual truth" thesis; what evidence supports/doesn't settle
- `research/CORE-THESIS.md` — the main working document; core thesis statement, five supporting theories each with conviction level + strengths/weaknesses, open questions

### Concept Notes
- `research/concepts/cross-viewpoint-popup-feature.md` — psychological analysis of the two-popup feature ("someone unlike you / someone like you"); timing problem, sequencing insight, risk matrix, open design questions

---

## The Core Thesis (current working version)

> *"A meaningful segment of people are getting an information experience that is worse than what they actually want — and the gap is structural, not personal. RadMo is designed to close that gap."*

---

## The Five Theories (summary)

| # | Theory | Conviction |
|---|--------|------------|
| 1 | The incentive structure is the problem, not the users | HIGH |
| 2 | The Quiet Majority is real (preference falsification) | MODERATE-HIGH |
| 3 | Cross-viewpoint exposure can be designed to work | MODERATE |
| 4 | Algorithmic intervention produces measurable attitude change | MODERATE-HIGH |
| 5 | Overton Window — cultural visibility eventually shifts political norms | LOW-MODERATE |

---

## Where We Left Off

**Last topic:** The cross-viewpoint popup feature — psychological analysis of both popups from the *poster's* perspective specifically.

**Key insights from that analysis:**
- Popup A (unlike you, agrees) = low identity threat, works as pre-validation
- Popup B (like you, disagrees) = moderate-high identity threat, powerful but risky
- Sequencing matters: A before B reduces defensive response to B (self-affirmation mechanism)
- **Timing is the critical variable:** immediate post-publication is the worst window for Popup B; delayed delivery (12-24h) likely more effective
- The feature connects directly to the cooling period concept
- Risk matrix committed to the concept doc

---

## Open Threads for Next Session

In rough priority order:

1. **Addressable market sizing** — how large is the Quiet Majority sub-segment that would actually use/pay for RadMo? Pew, PRRI, academic political behavior data to pull.
2. **Contact hypothesis at platform scale** — what does the deliberative polling / citizen assembly literature say about whether contact hypothesis conditions can be implemented at scale?
3. **Solutions journalism research** — the positive/solution content upranking concept needs its own research base. Robertson et al. (2023) + Soroka individual variation is a start but solutions journalism has a dedicated literature.
4. **Popup feature design decisions** — the six open questions in the concept doc need working through before feature design can begin: timing, visibility, signal definition, sequence enforcement, framing, post type specificity.
5. **Humor and political identity** — is there research specific to humor reducing identity threat in *political* contexts specifically (vs. health communication, where most reactance+humor research lives)?
6. **The 3.8% problem** — the Carnegie finding that only 3.8% of the electorate holds genuinely cross-cutting centrist ideology deserves its own closer look. Who are these people and are they the right target?

---

## Repo State

```
radMo/
├── README.md
├── research/
│   ├── README.md (index + source quality standards)
│   ├── THESIS-EVIDENCE-SUMMARY.md
│   ├── CORE-THESIS.md
│   ├── trends/
│   │   ├── 01-affective-polarization.md
│   │   ├── 02-platform-outrage-amplification.md
│   │   ├── 03-cross-viewpoint-backfire.md
│   │   ├── 04-algorithmic-reranking-works.md
│   │   ├── 05-institutional-trust-decline.md
│   │   ├── 06-preference-falsification.md
│   │   ├── 07-news-consumption-shifts.md
│   │   └── 08-negativity-bias-loss-aversion.md
│   ├── reference/
│   │   └── tim-urban-concepts.md
│   └── concepts/
│       └── cross-viewpoint-popup-feature.md
├── product/  (empty — not started)
├── strategy/ (empty — not started)
└── sessions/
    └── 2026-03-21-session-notes.md
```
