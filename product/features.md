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
8. [Feed Algorithm & Audience Capture](#8-feed-algorithm--audience-capture)
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

**Primary function clarified (2026-04-10):** The cred score's most important job is as a **discovery primitive** — enabling readers to quickly assess a stranger who appears in their feed and decide whether they're worth following. Secondary job: post-level trust signal. The spider shape needs to be legible at scroll speed, not just on profile.

**Important distinction:** Poster-level trust (credibility score, built over a body of work) and post-level trust (claim integrity + source grounding on a specific post) are complementary but distinct. The UI should not allow readers to over-extrapolate from poster score to post content.

**Spider shape personas:** See `product/personas.md` for the five named archetypes (Bubble Scholar, Vibes Merchant, Magpie, Persuader, Radical Moderate) with real-world examples and evolution cases.

**UI locks (2026-04-10):**
- Cred score displayed as circular progress ring, clockwise from 12 o'clock, proportional to score
- Ring color matches persona color; faint full-circle track shows incomplete ring clearly
- "Avg reposter cred" label confirmed (replaces "reposted by" — raw number was ambiguous)
- Avg reposter cred gets same ring treatment at smaller size
- Persona hover blurbs locked — see `product/personas.md`
- Dimension bar tooltips locked (Option C): FG = "Opinions backed by facts"; CV = "Validated by people who disagree"; SD = "Breadth and independence of sources"; CI = "Sources honestly represented"
- Fact/opinion segment tooltips locked (Option A): Fact = "Likely a factual claim — verifiable against evidence."; Opinion = "Likely a normative claim — reflects a value or judgment."

---

### Four Dimensions

#### Dimension 1: Factual Grounding *(formerly "Is/Ought Sequencing")*
**Weight: 30%**

**What it measures:** What percentage of a user's normative claims have traceable factual support somewhere in their work. Grounding as *presence*, not *order*.

**High (→ 100):** Every normative claim has factual scaffolding somewhere in the user's body of work.
**Low (→ 0):** Pure normative proclamation. All ought, no is.

**Technical note:** Requires argument structure parsing (NLP argument mining) to link normative claims to supporting factual claims across potentially non-adjacent text.

**Tim Urban axis:** High = scientist-mode. Low = zealot-mode.

---

#### Dimension 2: Cross-Viewpoint Validation
**Weight: 30%**

**What it measures:** Whether a user's contributions hold up under adversarial scrutiny — validated by people who have every reason to disagree but don't. Unexpected validation is the signal.

**High (→ 100):** Validated by users who differ across multiple axes.
**Low (→ 0):** Only validated by users who already agree.

**Key insight on signal strength:** Zealot-mode users agreeing across political lines is *stronger* signal than scientist-mode users agreeing — it's more surprising. The dimension rewards validation from people who had no reason to agree.

**Validation axes (composite):**
1. **Political lean distance** — baseline; still included but not sole axis
2. **Epistemic tribe distance** — scientist-to-zealot cross-validation; surprise = signal
3. **Geographic/cultural distance** — validation from users in different countries or cultural contexts
4. **Information diet distance** — validation from users whose citation graphs are measurably different; detected from platform behavior, no self-reporting required

*Information diet distance:* Platform logs every citation (outlet, type, geography, political lean, publication date). Citation graph per user built over 30+ posts. Cosine similarity between graphs = diet distance. Buildable from existing source diversity infrastructure.

**Steelmanning compounding (locked 2026-04-10):** When CI steelmanning credit and CV validation come from the same epistemic cluster in the same post: `CV_effective = CV_base × (1 + steelmanning_bonus)`, bonus 0.0–0.3. See `product/steelmanning-spec.md`.

---

#### Dimension 3: Source Diversity
**Weight: 25%**

**What it measures:** Whether a user's citations span multiple source types, geographies, and (where available) political leans.

**Format diversity — tier ranking (most to least epistemically robust):**

| Tier | Format type |
|---|---|
| 1 | Primary sources — government documents, transcripts, raw data, court filings |
| 2 | Peer-reviewed academic research |
| 3 | Investigative journalism |
| 4 | Government & institutional reports (NGOs, think tanks with disclosed methodology) |
| 5 | Quality news reporting |
| 6 | Expert commentary / opinion |
| 7 | General opinion / editorial |

Institutional type collapses into format as a tagging dimension (not tracked separately).

**Geographic diversity:** Citations from multiple countries or regions. Single-country information diet is a measurable blind spot.

**Political lean** (AllSides, Ad Fontes, etc.): One input among several — not the definition.

**Deprioritized for now:** Temporal diversity (citing sources across time periods) — noted for future inclusion.

---

#### Dimension 4: Claim Integrity *(formerly "Claim Consistency")*
**Weight: 15%**

**What it measures:** Whether sources actually support the claims being made. The good faith barometer.

**High (→ 100):** Claims faithfully represented by cited sources.
**Low (→ 0):** Systematic gap between what sources say and what poster claims.

**Pattern detection for bad faith:** Random errors scatter across topics and directions. Motivated misrepresentation clusters — consistently same political direction, same topic domain, same type of overstatement. Non-random error patterns = bad faith signal.

**Tim Urban axis:** High = scientist-mode (evidence used honestly). Low = lawyer-mode (evidence recruited selectively).

**Sub-components (locked 2026-04-10):**

| Sub-component | What it measures | Weight within CI |
|---|---|---|
| Factual accuracy | Do cited sources support the claims made? (existing) | ~50% |
| Steelmanning score | Is the source's strongest argument engaged? (new) | ~30% |
| Asymmetric rigor | Same accuracy standard applied to ingroup and outgroup sources? (new) | ~20% |

See `product/steelmanning-spec.md` for full spec.

---

### Spider Shape as Epistemic Fingerprint — CONFIRMED

- High, balanced spider = scientist-mode
- Lopsided spider = specific epistemic profile readable at a glance
- Collapsed spider = lawyer or zealot-mode

**Dual function:** Credibility display AND epistemic matching engine for perspective panels. One data structure, two uses. See `product/personas.md` for the five named archetypes.

**Avatar-as-spider (elevated priority 2026-04-10):** Spider shape serves as the user avatar. Core design question: are the five shapes sufficiently distinct at 44px without a legend? Open — see `product/mockups/persona-feed-2026-04-10.jsx` for current state.

---

### Engagement Signals and Credibility Score Updates

- **Likes** → near-certain agreement; stronger directional weight
- **Reposts (unqualified)** → editorially ambiguous; weaker weight until qualifier exists
- **Agree repost, high-cred** → positive signal
- **Disagree repost, high-cred** → negative signal — post spreading because it's wrong
- **Agree repost, low-cred** → likely negative — credibility liability

Full delta rules per engagement type: to-do.

---

### Future Dimension Candidates

**Mind-Changing Quality:** Reward position changes accompanied by cited factual updates. Penalize tribal flips. Signal = whether + why someone changed their mind. Deferred until core four stable.

**Directional Claim Integrity (Asymmetric Rigor):** Track CI separately for ingroup-confirming vs. ingroup-challenging sources. The *gap* between those scores is the asymmetric rigor signal. See Section 8 and `product/personas.md`.

---

### Open Questions
- **CrossViewpoint weight** — 40% vs. 30% still unresolved
- **Composite weighting across validation axes** — political lean vs. epistemic tribe vs. geographic vs. information diet
- **Gaming risk** — legible rules invite optimization for the metric
- **Demographic skew risk** — system rewards a specific epistemic style
- **Source classification infrastructure** — shared dependency for Source Diversity and information diet distance

---

## 8. Feed Algorithm & Audience Capture

**Prosocial ranking:**
- Downranks content with partisan animosity, antidemocratic attitudes, and outgroup threat framing
- Does NOT remove content — just requires more scrolling
- Effect equivalent to ~3 years of historical attitude change in 10 days (pre-2024 election experiment)

**Feed sorting options:**
- Chronological
- Credibility-weighted
- Viewpoint distance

---

### Inverse Audience Capture Payout Structure

**The problem:** Audience capture is financially self-reinforcing. Attention-based media pays more as tribal intensity increases. Sam Harris, Rogan, Weinstein all demonstrate spider drift toward narrower, more captive audiences because the financial signal rewards it. This is the mechanism by which asymmetric rigor becomes the norm.

**The thesis:** If the platform's credibility score and visibility mechanics are inversely correlated with audience homogeneity, it creates a financial incentive to seek adversarial validation rather than tribal applause.

**Proposed mechanics:**

1. **Decay function on homogeneous engagement** — if 90%+ of a user's likes come from users with similar spider shapes, their effective score gets discounted. The platform detects audience capture algorithmically. Score recovers as engagement diversifies.

2. **Bonus multiplier for adversarial validation** — a high-CV post from a user with historically low CV scores gets a multiplier. The *first* time a Bubble Scholar gets validated from outside their bubble counts more than the hundredth same-bubble validation. Rewards breakout moments explicitly.

3. **Visibility inversely correlated with audience homogeneity** — posts that only travel within one epistemic cluster get deprioritized regardless of engagement volume. Most aggressive version; highest friction.

**The tension:** These mechanics fight the dopamine loop directly. They require cross-viewpoint respect to *feel* like status — which is what the credibility score, badge system, and Radical Moderate identity are designed to manufacture culturally. The mechanics only work if the platform has successfully made epistemic quality feel like status worth pursuing.

**Status:** Concept stage — needs deeper design work before implementation spec.

---

## 9. Source Citation Incentivization

**Status:** Concept stage — expanded 2026-04-10

- Citing credible sources adds to credibility score (source diversity dimension)
- Cross-ideological citation bonus: source corroborating a position it wouldn't be expected to support carries more epistemic weight

**News outlet cross-aisle audience signal (2026-04-10):**
RadMo is the only platform where an outlet like Fox News can observe genuine cross-aisle readership and citation data — who on the left is citing their content, and in what context. This is audience data unavailable on their own platform or on X/YouTube.

- **Passive presence** (outlet as citable source): No outlet participation required. Citation graphs build around them from user behavior alone. Cross-aisle citation data accrues automatically. Clean and immediately valuable.
- **Active participation** (outlet posts on RadMo): Requires the outlet to optimize for RadMo's cred score mechanic. The incentive is audience reach, not cred score directly — RadMo is where they find readers they can't reach elsewhere.
- **GTM angle:** Pitch to outlets as an audience signal play, not a credibility play. "This is where you learn what the other side actually engages with from you."
- **Adversarial citation risk:** Outlets may optimize for dunkable content if adversarial citation generates traffic. Steelmanning mechanic in Claim Integrity is the structural defense. See `product/steelmanning-spec.md`.

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
- Steelmanning detection adapted from Community Notes bridging logic — see `product/steelmanning-spec.md`
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
- [ ] **Composite weighting for cross-viewpoint axes**
- [ ] **Is/ought scoring operationalization** — argument structure parsing at scale
- [ ] **Directional Claim Integrity (asymmetric rigor)** — track CI separately for ingroup-confirming vs. ingroup-challenging sources; gap = asymmetric rigor score
- [ ] **Inverse audience capture payout structure** — decay function, adversarial validation multiplier, visibility gating; needs full design spec
- [ ] **Spider shape trajectory** — show a user's shape evolution over time, not just current snapshot
- [ ] **Mind-changing quality dimension** — future addition; reward updating on evidence
- [ ] **Community Notes code walkthrough** — planned session
- [ ] **Avatar legibility at 44px** — are the five spider shapes distinct enough at avatar size without a legend? See persona-feed mockup.
- [ ] **Persona illustrations** — original IP-safe characters for each archetype; art direction brief exists, designer needed
- [ ] **News outlet incentive mechanic** — GTM angle development; passive presence vs. active participation framing

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

**9. Audience capture is the enemy** — the platform's mechanics must actively counteract the financial incentives that drive spider drift and asymmetric rigor. Credibility status must feel more valuable than tribal loyalty.

---

*Last updated: 2026-04-10*
*Status: Active workshopping — all features subject to change*
