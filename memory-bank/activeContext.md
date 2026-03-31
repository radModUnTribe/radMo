# RadMo Active Context

## Current Work Focus

**Primary:** Finalizing credibility score design and is/ought visualization as foundational UI patterns

**Scope:** Design → React artifact → integration readiness (backend hookup deferred)

## Recent Changes & Decisions

### Artifacts Completed
- `rm-post.jsx` — Post composer mock with cooling period state management
- `is-ought.jsx` — Letter-by-letter gradient visualization (green→yellow→red for is→mixed→ought)
- `credibility-score-v1.jsx` — Bar chart UI for five credibility dimensions
- `credibility-score-v2.jsx` — Animated radar chart (stakeholder preference: clearer visual hierarchy)

### Framework Refinements
- **Dopamine Gap Problem:** Identified critical design tension—cooling period removes engagement reward; must compensate via credibility status/insight velocity
- **Behavioral Credibility:** Reddit insight validated—users actively verify account legitimacy; RadMo should make this transparent as credibility signal
- **Platform Differentiation:** Ground News comparison clarified; RadMo's advantage is multi-dimensional credibility + first-party content, not aggregation

### Active Design Questions
**"Someone Like You / Someone Unlike You" Popup:**
1. What signals define "like" vs. "unlike"? (viewpoint alignment? claim-checking behavior? expertise markers?)
2. When/where does popup trigger? (during reading? on submission? modal vs. inline?)
3. Opt-in vs. proactive surfacing?
4. Passive exposure vs. interactive engagement?

## Next Immediate Steps

### Pending Commits (Windows Desktop)
1. Push full versions of three credibility score JSX files (currently stubs)
2. Create `research/research.md` with annotated links (Community Notes, sentiment analysis candidates)
3. Create `product/features.md` with formal feature specs

### Design Work
1. Resolve "Someone Like You" popup design (all four questions above)
2. Operationalize is/ought scoring (move from visual design to algorithmic spec)
3. Cooling period UX — where does 24-72hr countdown appear? How is user made aware of delay?
4. Credibility score weighting — validate 30/30/25/15 split with domain experts

### Research & Deep Dives Queued
- Community Notes source code walkthrough (`matrix_factorization.py`, `scoring.py`)
- Redirect-vs-resist framework formalization
- Dopamine gap solution patterns (what keeps users engaged without outrage loops?)
- Sentiment analysis for bias detection (which models, cost/accuracy)
- Prediction market monetary incentive design
- "Better information environment" operationalization (measurable criteria)

## Active Preferences & Patterns

- **Tone:** Accessible, humorous, non-elitist (Tim Urban model)
- **Artifact style:** Prefer radar/spider charts over bar charts for multi-dimensional display
- **Conciseness:** Named concepts over prose explanations (Silence Tax > "the quiet majority problem")
- **Concrete outputs:** Code, spec docs, named frameworks preferred over abstract discussion
- **Validation:** Expect challenge/pushback on elitism or preachiness in messaging

## Context Notes for Next Session

- This Memory Bank replaces scattered conversation history; always load it at session start
- Credibility score v2 (radar) appears to be the preferred direction; v1 (bars) is archived but may be useful for comparison UX
- Dopamine gap is the highest-risk design question; may need behavioral psychology research or A/B testing framework
- Ground News is the competitive reference case; subtle differences matter for positioning
- Sean's leadership style: collaborative builder with strong opinions on incentive design and accessibility