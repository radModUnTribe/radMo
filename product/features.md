# RadMo — Product Features & Decisions

Running document of all product features discussed, decisions made, and open questions. Each feature includes its strategic rationale, current status, and unresolved design questions.

---

## Table of Contents

1. [Platform Vision](#1-platform-vision)
2. [Core Incentive Architecture](#2-core-incentive-architecture)
3. [Posting & Social Layer](#3-posting--social-layer)
4. [Cooling Period](#4-cooling-period)
5. [Someone Like You / Someone Unlike You Popup](#5-someone-like-you--someone-unlike-you-popup)
6. [Is/Ought Visualizer](#6-isought-visualizer)
7. [Credibility Score](#7-credibility-score)
8. [Feed Algorithm](#8-feed-algorithm)
9. [Source Citation Incentivization](#9-source-citation-incentivization)
10. [Prediction Markets & Underreported Topics](#10-prediction-markets--underreported-topics)
11. [News Consumption Layer](#11-news-consumption-layer)
12. [Community Notes Integration](#12-community-notes-integration)
13. [Business Model](#13-business-model)
14. [Open Design Questions](#14-open-design-questions)
15. [Design Principles](#15-design-principles)

---

## 1. Platform Vision

**What RadMo is:**
A hybrid social media and news consumption platform designed to create a better information environment by rewiring incentive structures. The core thesis: existing platforms followed engagement metrics that happened to reward outrage and tribalism — not by malicious intent but as an emergent property of their loss function. RadMo proposes a different loss function.

**The goal:**
Create a platform where existing human tendencies (status-seeking, tribal identity, dopamine loops) produce better collective epistemic outcomes — not by fighting human nature but by redirecting it.

**Positioning:**
- "Radically Moderate" — moderation framed as rebellion, not weakness
- Target: the Quiet Majority — people exhausted by extremism who privately hold more moderate views than they publicly express
- Tone model: Tim Urban — accessible, humorous, non-elitist, anti-preachy
- Reframe: not "left vs. right" but "you vs. institutions profiting from your outrage"

---

## 2. Core Incentive Architecture

**The four primitive brain mechanisms to design around:**
1. Variable reward loops
2. Status signaling
3. Outgroup threat amplification
4. Identity protection

**RadMo's approach:**
- **Redirect, don't resist** — work with human tendencies, route them toward better outcomes
- Use resistance (friction) sparingly and intentionally — the cooling period is the primary example
- **Replace the dopamine lever** — tie epistemic quality to social status and credibility

**The dopamine gap problem** *(unresolved)*:
Outrage is high-dopamine. Intellectual honesty is slower. Can we make the redirected version feel as rewarding? Credibility score system is the primary attempt.

---

## 3. Posting & Social Layer

**Status:** Mockup built — `product/mockups/rm-post.jsx`

**Core features:**
- Text posting with 280-character limit
- "Say what you actually think." as guiding tagline
- Cooling period activates immediately after posting

**Social mechanics:**
- Cross-viewpoint and cross-cultural follows incentivized
- Feed sorting: chronological, credibility-weighted, viewpoint-distance
- "Radically Moderate Takes" thread format for nuanced positions

---

## 4. Cooling Period

**Status:** Architecture confirmed.

**How it works:**
- Posts are **live and visible in feeds immediately** after posting
- Cooling period governs the **poster's view of their own engagement** — not the post's distribution
- Poster cannot see reaction counts, who liked/reposted, or scores for **12 hours**
- **Perspective Panels surface immediately** as soon as matches are identified — this is the dopamine hook during the window
- At 12 hours: full engagement data unlocks (rater cards, avg reposter cred, who liked/reposted)
- Credibility scores update continuously and are always visible to readers

**Edit window (confirmed):**
- 30-minute window from time of posting
- Closes early if anyone reposts (manipulation risk)
- Open questions: typo vs. substantive edit distinction; reposter notification; retraction mechanic

**Open questions:**
- Fixed vs. variable cooling period length?
- Can users opt out, and does that affect credibility score?
- Where/how does the countdown display to the poster?

---

## 5. Someone Like You / Someone Unlike You

**Status:** Mockup built in `product/mockups/post-feed.jsx`. Core matching logic confirmed.

**Two panels, two axes — confirmed and separated:**

- **Panel A — "Someone unlike you, similar conclusion"**: Different political lean, likely same post verdict. Breaks the assumption that your epistemic judgment is tribally determined.
- **Panel B — "Someone like you, different conclusion"**: Similar epistemic style, different view on this post. Attacks in-group conformity pressure.

The panels operate on independent axes that must not be conflated:
1. **Political lean** — like/unlike you; current placeholder differentiator
2. **Epistemic style** — how you think, not what you think; spider shape similarity
3. **Post conclusion** — same/different verdict on this specific post's credibility

**Epistemic similarity via spider shape — CONFIRMED:**
Spider shape = Tim Urban's vertical axis in quantified form. Similar shape = similar epistemic method regardless of political lean. Matching via cosine similarity between normalized dimension vectors.

**"Same conclusion" proxy (pre-qualifier):**
- Like = near-certain agreement (strong signal)
- Unqualified repost = weak-positive signal
- UI language: "likely reached the same conclusion" until qualifier confirms

**Geography as secondary signal:** Proximity for "Someone Unlike You — Nearby."

**Open questions:** Identification speed (active vs. passive signal); opt-in vs. proactive for readers; passive vs. interactive engagement.

---

## 6. Is/Ought Visualizer

**Status:** Built — `product/mockups/is-ought.jsx`

- Word-by-word scoring: 0.0 (fact) → 1.0 (opinion)
- Color: **blue (fact) → amber (opinion)**; red/yellow/green reserved for credibility scores
- User-facing language: **"Fact / Opinion"**; "Is/Ought" is internal only
- Currently hand-scored; NLP/LLM automation needed

---

## 7. Credibility Score

**Status:** Spider chart (v2) is the confirmed display direction. Four dimensions redefined this session.

**The platform's job re: is/ought:** Make it obvious which territory the reader is in. RadMo does not adjudicate normative claims — it surfaces epistemic method and separates fact from opinion so readers can do their own evaluation. The credibility score is a "how they think" barometer, not a "what they think" verdict.

---

### The Four Dimensions (confirmed definitions)

#### 1. Factual Grounding — 30%
*Formerly: Is/Ought Sequencing*

**What it measures:** The degree to which a user's normative claims are supported by factual claims somewhere in their work. Grounding as *presence*, not *order* — it doesn't matter whether the opinion arrives before or after the facts rhetorically; what matters is whether the facts exist at all.

- **100:** Every normative claim the user makes has traceable factual support in their body of work
- **0:** Pure proclamation — normative claims with no factual scaffolding, ever

**Technical note:** Harder to compute than order-detection. Requires argument structure parsing to link normative claims to supporting factual claims across potentially non-adjacent text — an NLP challenge closer to claim extraction than sentiment analysis.

**Why the rename matters:** Penalizing *order* creates demographic skew — academic writing style (conclusion last) is rewarded over other legitimate rhetorical structures. Penalizing *absence* of grounding targets the actual epistemic failure.

---

#### 2. Cross-Viewpoint Validation — 30%
*Unchanged name; definition expanded*

**What it measures:** Whether a user's contributions are validated by people who have every reason to disagree with them. Unexpected validation is the signal — the more different the validator, the more meaningful the endorsement.

- **100:** Contributions consistently validated across multiple difference axes
- **0:** Only validated by users who already agree — epistemic bubble is tight

**Validation axes (composite):**
- **Political lean** — still included but no longer the only axis
- **Epistemic tribe** — zealot-to-zealot cross-political validation is *stronger* signal than scientist-to-scientist, because it's more surprising; scientists are expected to follow evidence, zealots are not
- **Geographic/cultural distance** — validation from users in different countries, regions, or cultural contexts; especially meaningful for international or policy topics
- **Information diet distance** — validation from users whose citation graphs look measurably different from yours (see below)

**Information diet distance — how it works:**
Every citation a user makes is logged: outlet name, outlet type, outlet geography, publication date. Over 30+ posts, this builds a citation graph per user. Cosine similarity between two users' citation graphs = information diet distance. Two users whose reading patterns look nothing alike are "far apart" even if they vote the same way. Detectable entirely from platform behavior — no self-reporting required.

**Composite weighting across axes:** TBD — validation from users who differ on multiple axes simultaneously carries more weight than single-axis difference.

---

#### 3. Source Diversity — 25%
*Unchanged name; definition expanded beyond political bias ratings*

**What it measures:** Whether a user draws from a genuinely diverse range of sources — across format, geography, and institutional type — rather than a single-neighborhood information diet.

- **100:** Citations span multiple formats, geographies, and outlet types, including sources adversarial to the user's typical conclusions
- **0:** All citations from the same type, same geography, same ideological neighborhood

**Format diversity — tier ranking (highest to lowest epistemic weight):**
1. Primary sources — government documents, transcripts, raw data, court filings, firsthand accounts
2. Peer-reviewed academic research — methodology-constrained, adversarially reviewed
3. Investigative journalism — primary source-reliant, editor-reviewed
4. Government and institutional reports — NGOs, think tanks with disclosed methodology
5. Quality news reporting — factual reporting from outlets with editorial standards
6. Expert commentary/opinion — credentialed perspective, clearly normative but grounded
7. General opinion/editorial — disclosed perspective pieces

Citing across tiers 1–5 = high format diversity. Citing only tiers 6–7 = low. Institutional type is a tagging dimension *within* this format system, not a separate axis.

**Geographic diversity:** Citations from multiple countries or regions. Single-country information diet is a measurable blind spot, especially for global or policy topics.

**Political bias rating:** Still included as one input (AllSides, Ad Fontes, etc.) but no longer the whole definition. One signal among several.

**Deprioritized for now:**
- *Temporal diversity* (citing across time periods, not just recent news) — noted for future inclusion
- *Claimed vs. independent* (does source agree or disagree with poster's conclusion) — overlaps with Claim Integrity; deprioritized here

---

#### 4. Claim Integrity — 15%
*Formerly: Claim Consistency*

**What it measures:** Whether the user's cited sources actually say what the user claims they say. The gap between source content and claimed source content.

- **100:** Cited sources faithfully support the claims attributed to them — no cherry-picking, no out-of-context quotes, no misrepresented findings
- **0:** Systematic gap between what sources say and what the user claims they show

**Two failure modes:**
- *Deliberate misrepresentation* — knows the source doesn't support the claim; intellectual dishonesty
- *Sloppy reading* — genuinely misunderstands the source; epistemic weakness, not necessarily bad faith

Algorithmically indistinguishable at the individual claim level. Distinguishable by *pattern*: random errors scatter across topics and directions; motivated misreading clusters — always the same political direction, always the same topic domain, always overstating the same type of conclusion. Non-random error patterns are the bad-faith signal.

This dimension functions as a **good faith barometer** — the hardest of the four to game, because it requires the system to compare claimed source meaning against actual source content.

---

### Future Dimension: Updating on Evidence
*Not in the current four — flagged for later*

Changing your mind in response to new evidence is scientist-mode behavior and should be rewarded, not penalized. The platform should explicitly destigmatize updating.

The signal isn't *whether* you changed your mind — it's *why*. A position change accompanied by a cited factual update ("new data from X suggests Y, revising earlier position") is scientist-mode. An unexplained flip or a change tracking with tribal movement is lawyer-mode.

This is hard to operationalize cleanly alongside the current four dimensions and is deferred until the core system is stable.

---

### Spider Shape as Epistemic Fingerprint — CONFIRMED

The spider chart encodes *how* a user thinks, not just *how well* they score overall:
- High, balanced shape = scientist-mode (evidence-first, willing to update)
- Lopsided or low shape = lawyer-mode or zealot-mode (conclusion-first, evidence recruited)
- Shape, not score, is the meaningful signal

Spider shape similarity (cosine distance between normalized dimension vectors) is the matching engine for the "Someone Like You" perspective panel. This is a core dual-purpose system design decision — same infrastructure serves both credibility display and epistemic matching.

---

### Engagement Signals and Credibility Score Updates

- **Likes** → near-certain agreement; stronger directional weight on poster's cred score
- **Unqualified reposts** → editorially ambiguous; weak directional weight until qualifier exists
- **Agree repost, high-cred user** → positive signal
- **Disagree repost, high-cred user** → negative signal (post spreading because it's wrong)
- **Agree repost, low-cred user** → likely negative signal (credibility liability)
- Full cred score delta rules per engagement type: to-do

---

### Open Questions
- CrossViewpoint dimension weight: 40% vs. 30%
- Gaming resistance: legible rules create optimization pressure
- Demographic skew: system rewards a specific epistemic style; emotional/communal registers may be penalized unfairly
- Source credibility rating methodology: who decides?

---

## 8. Feed Algorithm

**Prosocial ranking:**
- Downranks partisan animosity, outgroup threat framing, antidemocratic content
- Does NOT remove content — requires more scrolling
- Cross-viewpoint citations weighted more heavily
- "Needs Your Help" surfaces lopsided-engagement posts for rating by underrepresented perspectives

**Feed sorting options:** Chronological, credibility-weighted, viewpoint-distance

---

## 9. Source Citation Incentivization

**Status:** Concept stage

- Citing credible sources adds to Source Diversity score
- Cross-ideological citation bonus: adversarial source supporting your argument carries more weight than expected-ally source
- Open questions: who rates sources; gaming risk; citation quality (full article vs. headline)

---

## 10. Prediction Markets & Underreported Topics

**Status:** Concept stage, research complete

- Illiquid topic = higher credibility payoff for quality engagement
- Prediction market price as cross-ideological consensus signal (not partisan framing)
- Reputation-based preferred over real money (regulatory, philosophical alignment)
- Decision pending on monetary component

---

## 11. News Consumption Layer

**Status:** Concept stage

- News aggregation with viewpoint context
- Is/ought scoring for bias detection (not just political lean)
- "Blind spot" feature based on reading patterns
- Differentiation from Ground News: is/ought scoring is measurable; political lean ratings are contested

---

## 12. Community Notes Integration

**Status:** Research complete, implementation pending

- Matrix factorization separates political bias from genuine helpfulness
- note_intercept = common ground factor
- RadMo evolution: multi-dimensional beyond binary left/right
- Planned: walk through `matrix_factorization.py` and `scoring.py`

---

## 13. Business Model

Subscription over advertising. Platform profits when users find it valuable, not when they're outraged. Transparency about this is itself a trust signal.

---

## 14. Open Design Questions

- [ ] Dopamine gap — credibility status + insight velocity is the hypothesis
- [ ] Source credibility rating methodology — who decides?
- [ ] Prediction markets monetary design
- [ ] Repost intent qualifier — disagree / neutral / agree at repost time
- [ ] Cred score delta rules — full mechanic per engagement type
- [ ] Is/ought scoring operationalization — NLP/LLM pipeline
- [ ] Community Notes code walkthrough
- [ ] CrossViewpoint weight — 40% vs. 30%
- [ ] Updating-on-evidence dimension — future addition

---

## 15. Design Principles

1. **Incentives over morality** — never ask users to be better people
2. **Redirect, don't resist (mostly)** — use friction sparingly and intentionally
3. **The binary left/right model is a ceiling** — multi-dimensional is the evolution
4. **Transparency as differentiation** — business model alignment is a trust signal
5. **Moderation needs an identity** — rebellion framing, never a lecture
6. **Epistemic quality ≠ rhetorical style** — don't penalize non-academic communication registers
7. **Generational tailwind** — pragmatic younger voters are the natural early audience

---

*Last updated: 2026-04-03*
*Status: Active workshopping — all features subject to change*
