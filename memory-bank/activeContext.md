# RadMo Active Context

## Current Work Focus

**Primary (2026-04-13):** Preparing for technical implementation starting with Source Diversity. However, session identified ten investor-level fundamental blockers that must be prioritized above technical build work. See TODO.md — Fundamental Blockers section.

**Previous session (2026-04-10):** GTM strategy thought experiment — investor narrative, browser extension economics, mobile/PWA sequencing, citation graphs, public-facing URI architecture.

**This session (2026-04-13):** GTM deep dive — extension absorption risk, account-analysis beachhead, Grok/fact-checking landscape, technical build order for dimensions, LLM integration architecture, legal exposure from user scoring, spider profile privacy model, investor red flags audit, partners & collaborators.

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

## Open To-Dos (priority order)

See TODO.md — Fundamental Blockers section for current top priorities.

Previous priority list preserved for reference:
1. Avatar legibility at 44px
2. Persona illustrations
3. News outlet incentive mechanic
4. Factual Grounding scoring
5. Cross-viewpoint composite weighting
6. Source classification infrastructure
7. Repost intent qualifier
8. Cred score delta rules
9. Badge earn conditions
10. Dopamine gap
11. Perspective panel identification speed
12. Post-feed mockup updates
13. CrossViewpoint weight
14. PWA design
15. Poster-facing UI
16. Hot take spectrum visual

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

**Last Updated:** 2026-04-13
**Next Review:** Start of next session
