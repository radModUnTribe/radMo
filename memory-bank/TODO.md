# RadMo — Running To-Do List

Live document. Updated each session. Items graduate to `memory-bank/progress.md` when resolved.

*Moved from repo root to `memory-bank/` so it is loaded automatically at session start.*

---

## Design Decisions Needed (high priority)

- [ ] **Spider shape persona mapping** — give named archetypes to recognizable spider shapes; in progress; connects to Tim Urban thinker typology and the epistemic fingerprint mechanic
- [ ] **Is/ought scoring redesign (now: Factual Grounding)** — NLP/LLM pipeline for detecting whether normative claims have factual support; argument structure parsing across non-adjacent text; harder than order-detection
- [ ] **Viewpoint diversity reach display** — TABLED; Option 1 (similarity index) vs. Option 3 (cluster count); polarized case is key test; decision deferred
- [ ] **Badge system** — earn conditions, visual design, loss mechanics; see `product/badges.md`
- [ ] **CrossViewpoint dimension weight** — 40% vs. 30%; evaluate tradeoffs
- [ ] **Dopamine gap** — why stay on RadMo? Credibility status + insight velocity is hypothesis; needs concrete mechanic and behavioral research
- [ ] **Poster-facing UI** — how does the poster see their post's performance? Reader view built first; deferred
- [ ] **Reposter avg cred vs. poster cred tension** — high-quality reposters amplifying low-quality posts; feed algorithm implications
- [ ] **Updating-on-evidence dimension** — future credibility score dimension; rewards cited position changes; penalizes tribal flips; deferred until core four are stable

---

## Engagement Mechanics

- [ ] **Repost intent qualifier — disagree / neutral / agree** — required or optional at repost time; feeds into poster cred score delta; reduces ambiguity of repost as engagement signal
- [ ] **Cred score delta rules** — full mechanic: how likes, repost qualifiers, and engagement types update poster's credibility score; likes = stronger directional weight; reposts weighted by qualifier once built
- [ ] **Edit button** — DECIDED: 30-minute window from post time; closes on first repost; open questions: typo vs. substantive distinction; reposter notification; retraction mechanic for reposters

---

## Perspective Check — Open Design Questions

- [ ] **Perspective panels show immediately (DECIDED)** — surface as soon as matches identified; reaction counts still hidden during cooling period; add to mockup
- [ ] **Identification speed** — active engagement (like/repost) vs. passive signal (viewed); passive is faster but privacy-sensitive
- [ ] **"Same conclusion" vs. "same viewpoint" UI copy** — post credibility verdict vs. political agreement; must be clearly separated in copy and matching logic; "likely reached the same conclusion" until qualifier confirms
- [ ] **"Someone Unlike You" — 4 sub-questions**
  1. What signals define "like" vs. "unlike"? (spider shape + political lean confirmed; other axes TBD)
  2. When/where does popup trigger for readers? (every post? opinion-gated? daily nudge?)
  3. Opt-in vs. proactive surfacing for readers?
  4. Passive exposure vs. interactive engagement?

---

## Visual / UX To-Do

- [ ] **Mockup updates needed** — perspective panels always visible (not gated); edit button in poster header area
- [ ] **"Hot take" spectrum visual** — bar from hot take to Radically Moderate; workshop separately
- [ ] **Avatar shape mirroring spider chart** — polygon avatar matching credibility profile; workshop separately

---

## Research Needed

- [ ] **News outlet bias rating landscape** — Ground News, AllSides, Ad Fontes, Media Bias/Fact Check; needed for Source Diversity scoring
- [ ] **Community Notes code walkthrough** — `matrix_factorization.py` and `scoring.py`; identify RadMo adaptation points
- [ ] **Sentiment analysis for bias detection** — NLP/LLM model selection; cost/accuracy tradeoffs; failure modes
- [ ] **Prediction market monetary incentive design** — real money vs. reputation; post-Kalshi regulatory landscape; Polymarket/Manifold/Metaculus reference models
- [ ] **Information diet distance infrastructure** — citation graph logging and similarity scoring; dependency of Cross-Viewpoint Validation expanded definition

---

## Product Features (post-MVP)

- [ ] Prediction markets + reputation system
- [ ] Automated sentiment/bias detection via NLP
- [ ] Claim extraction and cross-reference scoring
- [ ] Multi-dimensional viewpoint mapping (geographic, cultural, generational, religious)
- [ ] Mobile-first design
- [ ] Ingroup norm surfacing — "most people in this discussion feel X"
- [ ] Cooling period UX — countdown display design
- [ ] Temporal source diversity — citing across time periods; deprioritized for now, noted for later

---

## Technical / Documentation

- [ ] Decision log for design tradeoffs
- [ ] Testing strategy (unit, integration, A/B)
- [ ] Backend architecture (API design, database schema)
- [ ] Content submission flow
- [ ] Community Notes integration (fork + multi-dimensional adaptation)

---

*Last updated: 2026-04-03*
