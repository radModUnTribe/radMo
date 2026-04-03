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

**The "better information environment" definition:**
See `strategy/information-environment.md` for the full model. Summary:
- Facts and normative claims are clearly separated — readers always know which they're consuming
- Factual claims are grounded, sourced, and updated in real time
- The credibility score surfaces *how* a poster thinks (epistemic method), not *what* they think politically
- The platform gently pushes users toward scientist-mode thinking without preaching

**Positioning:**
- "Radically Moderate" — moderation framed as rebellion, not weakness
- Target: the Quiet Majority — people exhausted by extremism who privately hold more moderate views
- Tone model: Tim Urban — accessible, humorous, non-elitist, anti-preachy
- Reframe: not "left vs. right" but "you vs. institutions profiting from your outrage"

---

## 2. Core Incentive Architecture

**The four primitive brain mechanisms to design around:**
1. Variable reward loops (core of social media addiction)
2. Status signaling (likes, follower counts)
3. Outgroup threat amplification (algorithm rewards fear/anger-inducing content)
4. Identity protection (motivated reasoning when beliefs feel like identity)

**RadMo's approach:**
- **Redirect, don't resist** — work with these tendencies rather than fighting them, but route them toward better outcomes
- **Exception:** Some tendencies need active resistance (e.g., the cooling period deliberately introduces friction). The platform uses *both* redirect and resist.
- **Replace the dopamine lever** — tie intellectual honesty to social status and credibility.

**The dopamine gap problem** *(unresolved)*:
Outrage is a very high-dopamine activity. Intellectual honesty is slower. The credibility score system is our primary attempt to close this gap.

**Loss function:**
RadMo's algorithm should minimize "epistemically poor interactions." Sentiment analysis, source credibility scoring, and the bridging algorithm are tools for approximating this mathematically.

---

## 3. Posting & Social Layer

**Status:** Mockup built — `product/mockups/rm-post.jsx`

**Core features:**
- Text posting with 280-character limit and countdown
- "Say what you actually think." as the guiding tagline
- Cooling period activates immediately after posting (see section 4)

**Social mechanics:**
- Cross-viewpoint follows incentivized (higher credibility weight)
- Cross-cultural follows are a first-class feature
- Feed sorted by "viewpoint distance from you" as an option

---

## 4. Cooling Period

**Status:** Designed and built into post mockup. Architecture confirmed.

**How it works (confirmed architecture):**
- Posts are **live and visible in feeds immediately** after posting
- The cooling period applies to the **poster's view of their own engagement**, not to the post's distribution
- The poster cannot see reaction counts, who liked, who reposted, or their scores for **12 hours** after posting
- **Exception — Perspective Panels surface immediately:** As soon as a "Someone Unlike You" and "Someone Like You" match is identified, those panels appear for the poster — this is the dopamine hook during the cooling window
- At the 12-hour mark, full engagement data becomes visible to the poster
- Credibility scores update continuously and are visible to readers at all times

**Edit window (confirmed):**
- 30-minute edit window from time of posting
- Window closes early if anyone reposts
- Open questions: typo vs. substantive edit distinction; reposter notification; retraction mechanic

**Open questions:**
- Should cooling period length scale with topic sensitivity or virality?
- Should users be able to opt out (and does that affect credibility score)?
- Where and how does the countdown display to the poster?

---

## 5. Someone Like You / Someone Unlike You Popup

**Status:** Mockup built in `product/mockups/post-feed.jsx`. Core matching logic confirmed.

**How it works:**
Two panels surface as soon as matching individuals are identified — including during the cooling period.

- **Panel A — "Someone unlike you, similar conclusion"**: A user with a different political lean who likely reached the same conclusion about a post.
- **Panel B — "Someone like you, different conclusion"**: A user who shares your epistemic style but holds a different view on the topic.

**The two axes — confirmed and separated:**
1. **Political lean** — current placeholder signal for "like" / "unlike"
2. **Epistemic style** — spider shape similarity (see Section 7)
3. **Post conclusion** — same or different verdict on a specific post's credibility

**Epistemic similarity via spider shape — CONFIRMED MECHANIC:**
- "Someone Like You" = similar spider shape, regardless of political lean
- "Someone Unlike You" = different political lean, similar spider shape
- Matching algorithm: cosine similarity between normalized spider dimension vectors
- Most valuable pairing: scientist-mode conservative + scientist-mode progressive examining the same post

**"Same conclusion" signal — current proxy approach:**
- Like = near-certain agreement (strong signal)
- Unqualified repost = weak-positive signal
- UI language: "likely reached the same conclusion" until a qualifier confirms it
- Upgrades to confirmed once the repost intent qualifier (disagree/neutral/agree) is built

**Geography as secondary signal:**
Local dissimilar people who share your epistemic verdict are especially valuable — shared lived context, different politics, same conclusion.

**Open design questions:**
1. Active engagement vs. passive signal for identification speed
2. When/where panels trigger for readers (not just poster)
3. Opt-in vs. proactive surfacing
4. Passive exposure vs. interactive engagement

---

## 6. Is/Ought Visualizer

**Status:** Built and committed — `product/mockups/is-ought.jsx`

**How it works:**
- Text scored word-by-word on a 0.0 (pure factual) to 1.0 (pure normative) spectrum
- Colors: **blue (fact) → amber (opinion)** — confirmed; red/yellow/green is exclusively credibility score territory
- User-facing language: **"Fact / Opinion"** — "Is/Ought" is internal/technical only

**Future development:**
- Currently hand-scored — needs algorithmic scoring via NLP/LLM
- Is/ought scoring redesign needed: intent is connection *quality* between factual grounding and normative claims

---

## 7. Credibility Score

**Status:** Two mockups built — v1 (bar chart), v2 (radar/spider chart). Spider (v2) is the confirmed preferred direction.

**Purpose:**
The credibility score surfaces *how* a poster thinks — their epistemic method and style — not *what* they think politically. It is a "how you think" barometer, not a political alignment signal. The goal is to give readers a fast signal on poster trustworthiness and to gently incentivize scientist-mode thinking across the platform.

**Important distinction:** Poster-level trust (credibility score, built over a body of work) and post-level trust (claim integrity + source grounding on a specific post) are complementary but distinct. A high-cred poster can post a wrong claim on a bad day. The UI should not allow readers to over-extrapolate from poster score to post content.

---

### Four Dimensions

#### Dimension 1: Factual Grounding *(formerly "Is/Ought Sequencing")*
**Weight: 30%**

**What it measures:** What percentage of a user's normative claims have traceable factual support somewhere in their work. Grounding as *presence*, not *order* — the question is not whether facts come before or after a normative claim, but whether factual support exists at all.

**High (→ 100):** Every normative claim in the user's body of work has factual scaffolding somewhere. "We should do Z" is accompanied by "X data shows Y" — even if not adjacent in the same post.

**Low (→ 0):** Pure normative proclamation. "We need to do Z" with no factual basis anywhere. All ought, no is.

**Technical note:** Harder to compute than order-detection. Requires argument structure parsing that links normative claims to supporting factual claims across potentially non-adjacent text — closer to NLP argument mining than simple sentence ordering.

**Tim Urban axis:** High = scientist-mode (builds the case). Low = zealot-mode (the verdict is the starting point).

---

#### Dimension 2: Cross-Viewpoint Validation
**Weight: 30%**

**What it measures:** Whether a user's contributions hold up under adversarial scrutiny — validated by people who have every reason to disagree but don't.

**High (→ 100):** Posts and ratings are validated by users who differ across multiple axes. The argument doesn't collapse when someone who *wants* it to be wrong examines it.

**Low (→ 0):** Only validated by users who already agree. The epistemic bubble is tight — whether by tribal content or simply by never engaging across viewpoints.

**Key insight on signal strength:** Unexpected validation carries more weight than expected validation. Zealot-mode users agreeing across political lines is *stronger* signal than scientist-mode users agreeing — precisely because it's more surprising. The dimension rewards validation from people who had no reason to agree.

**Validation axes (composite — not political spectrum alone):**

1. **Political lean distance** — the baseline axis; still included but not the only one
2. **Epistemic tribe distance** — scientist-to-zealot cross-validation is meaningful signal; a zealot-mode user from the opposing political tribe validating a post is high-surprise, high-signal
3. **Geographic/cultural distance** — validation from users in different countries, regions, or cultural contexts; particularly relevant for international or policy topics
4. **Information diet distance** — validation from users whose citation patterns and reading habits are measurably different; detected from platform behavior (citation graph similarity), no self-reporting required

*Information diet distance — how it works:* Every time a user cites a source, the platform logs outlet name, type, geography, political lean (where available), and publication date. Over 30+ posts, this builds a citation graph per user. Cosine similarity between two users' citation graphs = information diet distance. Users whose graphs look nothing alike are "far apart" even if they vote the same way. Fully detectable from existing platform behavior — no new data collection required beyond what source diversity scoring already needs.

Composite weighting across axes: TBD — needs design work.

---

#### Dimension 3: Source Diversity
**Weight: 25%**

**What it measures:** Whether a user's citations span multiple source types, geographies, and (where available) political leans — or whether they draw from a single epistemic neighborhood.

**High (→ 100):** Citations span format tiers, geographies, and institutional types. The user is seeking truth across different production contexts, not just confirming within one.

**Low (→ 0):** All citations come from a single format tier, single geography, or single political lean. Narrow information diet regardless of whether the sources are individually credible.

**Format diversity — tier ranking (most to least epistemically robust):**

| Tier | Format type | Notes |
|---|---|---|
| 1 | Primary sources | Government documents, transcripts, raw data, court filings, firsthand accounts. The thing itself, not an interpretation. |
| 2 | Peer-reviewed academic research | Methodology-constrained, adversarially reviewed, falsifiable. |
| 3 | Investigative journalism | Primary source-reliant, editor-reviewed, subject to correction. |
| 4 | Government & institutional reports | NGOs, think tanks with disclosed methodology. Incentive-aware but structured. |
| 5 | Quality news reporting | Factual reporting from outlets with editorial standards. |
| 6 | Expert commentary / opinion | Credentialed people giving informed views. Disclosed normative content. |
| 7 | General opinion / editorial | Perspective pieces. Legitimate but lowest factual weight. |

Citing across tiers 1–5 is high format diversity. Citing only tiers 6–7 is low. Citing only a single tier, even tier 1, is medium — narrow even if rigorous.

*Institutional type collapses into format as a tagging dimension* — a think tank report is tagged as tier 4 with institutional subtype, not tracked separately.

**Geographic diversity:** Citations from multiple countries or regions. Detectable from source metadata. Particularly valuable for international topics where single-country information diet is a genuine blind spot.

**Political lean** (where available via AllSides, Ad Fontes, etc.): One input among several — not the definition of source diversity on its own.

**Deprioritized for now:**
- *Temporal diversity* (citing sources across time, not just recent) — noted for future inclusion
- *Claimed vs. independent* (does the source agree with the poster's claim) — overlaps with Claim Integrity; handle there

---

#### Dimension 4: Claim Integrity *(formerly "Claim Consistency")*
**Weight: 15%**

**What it measures:** Whether the sources a user cites actually support the claims they're making — the good faith barometer. Does the source say what the poster claims it says?

**High (→ 100):** Claims are faithfully represented by cited sources. No cherry-picking, no out-of-context quotes, no citing a study for a conclusion it doesn't support.

**Low (→ 0):** Systematic gap between what sources say and what the poster claims they say. Whether deliberate misrepresentation or sloppy reading, the result is the same: the source doesn't support the claim.

**Deliberate vs. sloppy — pattern detection:**
The dimension cannot directly distinguish intent, but pattern analysis can infer it:
- *Random sloppy reading* — errors scatter across topics, directions, and political implications
- *Motivated misrepresentation* — errors cluster: consistently in the same political direction, consistently on the same topic domain, consistently overstating the same type of conclusion
Directionally non-random error patterns are the signal for bad faith. The algorithm doesn't need to read minds — it notices when "mistakes" are suspiciously consistent.

**Tim Urban axis:** High = scientist-mode (evidence used honestly). Low = lawyer-mode (evidence recruited selectively to support a predetermined conclusion).

---

### Spider Shape as Epistemic Fingerprint — CONFIRMED

The spider chart is not only a credibility display — it encodes a user's *epistemic style* (how they think, not what they conclude). This directly maps to Tim Urban's vertical axis:

- **High, balanced spider** = scientist-mode thinker: evidence-first, willing to update, low motivated reasoning
- **Lopsided spider** = strength in one area, weakness in others; readable as a specific epistemic profile
- **Low, collapsed spider** = lawyer or zealot-mode: conclusion-first, evidence recruited, narrow sources

The *shape* of the polygon — not just the overall score — is the meaningful signal for epistemic style matching.

**Dual function:** The spider chart serves as both a credibility display *and* the epistemic fingerprint for perspective panel matching ("Someone Like You" = similar spider shape). This is a core system design decision — one data structure, two uses.

---

### Engagement Signals and Credibility Score Updates

- **Likes** → near-certain agreement; carry stronger directional weight on poster's cred score
- **Reposts (unqualified)** → editorially ambiguous; carry weaker directional weight until qualifier exists
- **Agree repost, high-cred reposter** → positive signal for poster's cred
- **Disagree repost, high-cred reposter** → negative signal — post spreading because it's wrong
- **Agree repost, low-cred reposter** → likely negative — credibility liability, not asset

Full cred score delta rules per engagement type are a to-do.

---

### Future Dimension Candidate: Mind-Changing Quality

Updating on new evidence is scientist-mode behavior and should be *rewarded*, not penalized. The signal is not *whether* a user changed their mind but *why*:
- Change accompanied by a cited factual update → scientist-mode; positive signal
- Unexplained position flip, or flip correlated with tribal/social triggers → lawyer-mode; neutral or negative

Not being added to the current four dimensions — flagged for future inclusion once the core four are stable.

---

### Open Questions
- **CrossViewpoint weight** — 40% vs. 30% still unresolved
- **Composite weighting across validation axes** — how to weight political lean vs. epistemic tribe vs. geographic vs. information diet distance
- **Gaming risk** — legible rules invite optimization for the metric rather than the behavior
- **Demographic skew risk** — system rewards a specific epistemic style; emotional or communal communication registers may score lower not because they're less credible but because the system is miscalibrated
- **Source classification infrastructure** — required for both Source Diversity and information diet distance; shared dependency

---

## 8. Feed Algorithm

**Prosocial ranking:**
- Downranks content with partisan animosity, antidemocratic attitudes, and outgroup threat framing
- Does NOT remove content — just requires more scrolling
- Effect equivalent to ~3 years of historical attitude change in 10 days (pre-2024 election experiment)

**Feed sorting options:**
- Chronological
- Credibility-weighted
- Viewpoint distance

---

## 9. Source Citation Incentivization

**Status:** Concept stage

- Citing credible sources adds to credibility score (source diversity dimension)
- Cross-ideological citation bonus: source corroborating a position it wouldn't be expected to support carries more epistemic weight

---

## 10. Prediction Markets & Underreported Topics

**Status:** Concept stage, research complete

- Illiquid topic mechanic: higher credibility payoff for engaging with underreported topics
- Reputation vs. real money: decision pending

---

## 11. News Consumption Layer

**Status:** Concept stage

- News aggregation with viewpoint context
- Is/ought scoring as bias signal (not just political lean)
- "Blind spot" feature — stories you're likely missing

---

## 12. Community Notes Integration

**Status:** Research complete, implementation pending

- Matrix factorization: note intercept = common ground factor
- RadMo evolution: multi-dimensional model beyond binary left/right
- Planned session: walk through `matrix_factorization.py` and `scoring.py`

---

## 13. Business Model

**Subscription over advertising** — platform profits when users find it genuinely valuable, not when they're outraged. Transparency about this distinction is a trust signal.

---

## 14. Open Design Questions

- [ ] **Dopamine gap** — concrete mechanics needed before MVP
- [ ] **Source credibility rating methodology** — who decides? biased bias rater problem
- [ ] **Repost intent qualifier** — disagree / neutral / agree at repost time
- [ ] **Cred score delta rules** — full mechanic for how engagement types update poster score
- [ ] **Composite weighting for cross-viewpoint axes** — political lean vs. epistemic tribe vs. geographic vs. diet distance
- [ ] **Is/ought scoring operationalization** — argument structure parsing at scale
- [ ] **Mind-changing quality dimension** — future addition; reward updating on evidence
- [ ] **Community Notes code walkthrough** — planned session

---

## 15. Design Principles

**1. Incentives over morality** — never ask users to be better people.

**2. Redirect, don't resist (mostly)** — work with human psychology; use friction sparingly.

**3. The binary left/right model is a ceiling** — multi-dimensional is a genuine product evolution.

**4. Transparency as differentiation** — subscription vs. engagement advertising as trust signal.

**5. Moderation needs an identity** — "radically moderate" gives the quiet majority a tribe. Never lecture.

**6. Epistemic quality ≠ rhetorical style** — credibility system must not reward academic style over substance.

**7. Generational tailwind** — younger voters already skeptical of the outrage machine.

**8. Poster trust ≠ post trust** — credibility score (body of work) and post-level claim integrity are distinct signals. UI must not allow readers to conflate them.

---

*Last updated: 2026-04-03*
*Status: Active workshopping — all features subject to change*
