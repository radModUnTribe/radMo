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
- What "is" (factual claims) is less contested — people can agree on basic facts before disagreeing on values
- Is/ought claims are clearly separated — factual reporting is distinguished from editorial opinion
- Cross-viewpoint exposure happens under conditions that reduce rather than increase polarization
- Less affective polarization (negative emotions toward outgroups) as a measurable outcome

**Positioning:**
- "Radically Moderate" — moderation framed as rebellion, not weakness
- Target: the Quiet Majority — people exhausted by extremism who privately hold more moderate views than they publicly express (More in Common's "hidden tribes" research estimates 67% of Americans)
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
- **Exception:** Some tendencies need active resistance (e.g., the cooling period deliberately introduces friction against impulsive reaction). The platform uses *both* redirect and resist, not just one.
- **Replace the dopamine lever** — tie intellectual honesty to social status and credibility. Make epistemic quality feel like status worth pursuing.

**The dopamine gap problem** *(unresolved — flagged for deeper work)*:
Outrage is a very high-dopamine activity. Intellectual honesty is a slower, lower-intensity reward. The central unsolved product challenge: can we make the redirected version feel as rewarding as the original? The credibility score system is our primary attempt to close this gap.

**Loss function:**
RadMo's algorithm should minimize "epistemically poor interactions" — tribal, low-quality sourced, or emotionally manipulative content. Sentiment analysis, source credibility scoring, and the bridging algorithm are tools for approximating this mathematically.

---

## 3. Posting & Social Layer

**Status:** Mockup built — `product/mockups/rm-post.jsx`

**Core features:**
- Text posting with 280-character limit and countdown
- Post button disabled until content is entered
- "Say what you actually think." as the guiding tagline
- Cooling period activates immediately after posting (see section 4)

**Social mechanics:**
- Following other users
- Cross-viewpoint follows are incentivized (higher credibility weight)
- Cross-cultural follows are a first-class feature — not just left/right but geographic, religious, generational perspectives
- Feed sorted by "viewpoint distance from you" as an option (alongside chronological)

**"Radically Moderate Takes" thread format:**
- Dedicated content type for nuanced positions that resist tribal framing
- Format: "Radically moderate take: X has merit AND Y is also true"
- Rewards intellectual honesty over tribal signaling

---

## 4. Cooling Period

**Status:** Designed and built into post mockup. Architecture confirmed.

**How it works (confirmed architecture):**
- Posts are **live and visible in feeds immediately** after posting
- The cooling period applies to the **poster's view of their own engagement**, not to the post's distribution
- The poster cannot see reaction counts, who liked, who reposted, or their scores for 12 hours after posting
- **Exception — Perspective Panels surface immediately:** As soon as a "Someone Unlike You" and "Someone Like You" match is identified, those panels appear for the poster — this is the dopamine hook during the cooling window (seeing a specific named person's perspective, not an aggregate count)
- At the 12-hour mark, the curtain lifts: poster sees full engagement — who liked, who reposted, rater cards with credibility scores, average reposter cred
- Credibility scores update continuously throughout (visible to readers at all times; poster's own score visible to them)

**Strategic rationale:**
- Breaks the immediate feedback loop that drives outrage posting
- Separates *posting* (expression) from *reaction-watching* (validation-seeking)
- Forces users to post based on conviction rather than anticipated applause
- Post traveling in the meantime is the point — social distribution is not slowed
- The perspective panels give the poster something to think about during the cooling window without revealing popularity signals

**Edit window (confirmed):**
- 30-minute edit window from time of posting
- Window closes early if anyone reposts (manipulation risk: editing after receiving credibility halo from high-cred reposters)
- Open design questions: typo vs. substantive edit distinction; reposter notification on substantive edits; retraction mechanic for reposters

**Open questions:**
- Should cooling period length be fixed or variable? Could it scale with topic sensitivity or post virality?
- Should users be able to opt out of the cooling period (and does that affect their credibility score)?
- Where and how does the countdown display to the poster?

---

## 5. Someone Like You / Someone Unlike You Popup

**Status:** Mockup built in `product/mockups/post-feed.jsx`. Core matching logic confirmed.

**How it works:**
Two panels surface as soon as matching individuals are identified — including during the cooling period. They are the poster's primary feedback signal during the 12-hour window.

- **Panel A — "Someone unlike you, similar conclusion"**: A user with a different political lean who likely reached the same conclusion about a post. Breaks the assumption that your epistemic verdict is tribally determined.

- **Panel B — "Someone like you, different conclusion"**: A user who shares your epistemic style but holds a different view on the topic. Harder to dismiss as "other." Attacks in-group conformity pressure.

**The two axes — confirmed and separated:**

These panels operate on two independent axes that must not be conflated:

1. **Political lean** ("like" or "unlike" you) — current placeholder signal; used for Panel A/B differentiation
2. **Epistemic style** ("how you think", not "what you think") — the deeper matching signal; see below
3. **Post conclusion** ("same" or "different" verdict on a specific post's credibility) — what the panel is surfacing

**Epistemic similarity via spider shape — CONFIRMED MECHANIC:**

The credibility score spider chart is a direct proxy for Tim Urban's vertical axis — *how* someone thinks, not *what* they conclude politically.

- High sequencing score → demands is before ought → scientist-mode behavior
- High cross-validation → actively seeks disconfirming views → low motivated reasoning
- High source diversity → not epistemically siloed
- The *shape* of the spider encodes epistemic style

**"Someone Like You" = similar spider shape, regardless of political lean.**
**"Someone Unlike You" = different political lean, but similar spider shape (same epistemic style, different priors).**

This is the most valuable pairing on the platform: a scientist-mode conservative and a scientist-mode progressive examining the same post. Their priors differ; their methodology converges. If they reach the same conclusion, that's powerful signal.

Matching algorithm: cosine similarity (or equivalent) between normalized spider dimension vectors. Shape similarity — not just overall score — determines the match.

**"Same conclusion" signal — current approach:**
Waiting for explicit agree/disagree qualifier at repost time is too slow for immediacy. Current proxy approach:
- A **like** is near-certain agreement (strong signal)
- A **repost without qualifier** is weak-positive signal (people rarely repost to oppose without context)
- High-sequencing users of different political lean who liked a post → surfaced as predicted skeptic or predicted endorser depending on post type
- UI language: "likely reached the same conclusion" until a qualifier confirms it, then upgrades to "same conclusion"

Once the repost qualifier mechanic (disagree / neutral / agree) is built, this inference gets replaced with explicit signal.

**Geography as secondary signal:**
Geographic proximity is a secondary differentiating signal for "Someone Unlike You — Nearby." Local dissimilar people who share your epistemic verdict are especially valuable: they share your lived context but differ politically, which makes dismissal harder.

**Strategic rationale:**
- Empirically grounded: extended contact hypothesis shows knowing ingroup members have outgroup friends reduces prejudice (Wright et al., 1997)
- Both panels work through *vicarious* contact — no direct interaction required
- Matching on epistemic style rather than just political lean is a genuine product evolution beyond binary left/right framing

**Open design questions** *(flagged in TODO.md)*:
1. Does identification require active engagement (like/repost) or can passive signals (viewed) suffice? Passive is faster but privacy-sensitive.
2. When/where does the popup trigger beyond the poster's own view? (reader view? every post? opinion-gated?)
3. Opt-in vs. proactive surfacing for readers?
4. Passive exposure vs. interactive engagement?

---

## 6. Is/Ought Visualizer

**Status:** Built and committed — `product/mockups/is-ought.jsx`

**How it works:**
- Article text is scored word-by-word on a 0.0 (pure factual) to 1.0 (pure normative) spectrum
- Colors map: **blue (fact) → amber (opinion)** — confirmed color language; red/yellow/green is exclusively credibility score territory
- User-facing language: **"Fact / Opinion"** — "Is/Ought" is internal/technical only
- Per-letter color gradients show transitions between fact and opinion territory as you read
- Hover any word to see its classification label
- Plain view toggle for comparison

**Strategic rationale:**
- The is/ought distinction is a core feature of "better information environment" as defined by RadMo
- Most political conflict is about contested facts (is), not values (ought) — but the two get conflated
- Making this distinction visible is both an educational tool and a bias signal
- Sources that are predominantly "ought" are functionally opinion outlets regardless of branding

**Applications:**
- Applied to user posts → feeds into credibility score (is/ought sequencing dimension)
- Applied to news sources → bias/editorial scoring independent of political lean
- Applied to articles → "Fact / Opinion analysis enabled" as a reading mode

**Future development:**
- Currently hand-scored — needs algorithmic scoring via NLP/LLM
- Is/ought scoring redesign needed: intent is connection *quality* between factual grounding and normative claims, not just ordering

---

## 7. Credibility Score

**Status:** Two mockups built — `product/mockups/credibility-score-v1.jsx` (bar chart), `product/mockups/credibility-score-v2.jsx` (radar/spider chart). Spider (v2) is the confirmed preferred direction.

**Four dimensions (weighted):**

| Dimension | Weight | Description |
|---|---|---|
| Is/Ought Sequencing | 30% | Normative claims follow factual grounding. Measures whether a user establishes facts before making value claims. |
| Cross-Viewpoint Validation | 30% | Percentage of high-rated contributions validated by users with opposing political factors (Community Notes mechanic adapted for RadMo). |
| Source Diversity | 25% | Range of outlet bias ratings cited. Penalizes single-source or single-lean citation patterns. |
| Claim Consistency | 15% | Do cited sources lean the same direction as the user's ought conclusions? Proxy for motivated reasoning detection. |

**Spider shape as epistemic fingerprint — CONFIRMED:**

The spider chart is not only a credibility display — it encodes a user's *epistemic style* (how they think, not what they conclude). This directly maps to Tim Urban's vertical axis:

- A user with a high, balanced spider = scientist-mode thinker (evidence-first, willing to update)
- A user with a lopsided or low spider = lawyer-mode or lower (conclusion-first, evidence recruited)
- The *shape* of the polygon — not just the overall score — is the meaningful signal

**Spider shape similarity is the matching signal for the "Someone Like You" perspective panel.** Two users with similar spider shapes are epistemically compatible — they reason similarly — regardless of where they land politically. Matching algorithm: cosine similarity (or equivalent distance metric) between normalized dimension vectors.

This dual function of the spider chart — credibility display *and* epistemic fingerprint for matching — is a core system design decision.

**Is/Ought posting mix:**
Separate from the credibility score — a behavioral descriptor showing where a user sits on the factual/normative spectrum. Neither end is inherently bad; the score rewards *sequencing*, not ratio.

**Design decisions:**
- Score must be visible and legible — functions like a badge, present in every interaction
- Earned in ways that feel meaningful and are hard to game
- Creates social proof loops — high-credibility users attract high-credibility engagement
- Separate Writing Impact (what you post) and Rating Impact (how you engage with others' content) — borrowed from Community Notes

**Engagement signals and credibility score updates:**
- **Likes** → near-certain agreement signal; carry stronger *directional* weight on poster's cred score
- **Reposts** → editorially ambiguous; weighted by the disagree/neutral/agree qualifier once that mechanic exists; unqualified reposts carry weaker directional weight
- **Agree repost from high-cred user** → positive signal for poster's cred
- **Disagree repost from high-cred user** → negative signal — post spreading because it's wrong
- **Agree repost from low-cred user** → likely negative signal — credibility liability, not asset
- Full mechanic design for cred score delta rules per engagement type is a to-do

**Critical open questions:**
- **Who rates source credibility?** Any centralized bias labeling system will be perceived as biased itself. Need a defensible methodology.
- **Gaming risk:** If rules are legible, users will optimize for the metric rather than the behavior.
- **Demographic skew risk:** The scoring system rewards a specific epistemic style. Emotional or communal communication registers may score lower not because they're less credible but because the system is miscalibrated.
- **CrossViewpoint weight** — 40% vs. 30% still unresolved.

---

## 8. Feed Algorithm

**Prosocial ranking:**
- Downranks content with partisan animosity, antidemocratic attitudes, and outgroup threat framing
- Does NOT remove content — just requires more scrolling (validated by UW/Stanford/Northeastern research)
- Effect equivalent to ~3 years of historical attitude change in 10 days (pre-2024 election experiment)

**Cross-viewpoint incentivization:**
- Following users with different political/cultural factors earns credibility weight
- Cross-ideological citations in posts weighted more heavily than same-lean citations
- "Needs Your Help" mechanic surfaces posts with lopsided engagement for rating by underrepresented perspectives

**Feed sorting options:**
- Chronological
- Credibility-weighted (high credibility posts surface higher)
- Viewpoint distance (shows content furthest from your own factor position)

---

## 9. Source Citation Incentivization

**Status:** Concept stage, not yet designed

**Core ideas:**
- Citing credible sources adds to credibility score (source diversity dimension)
- Cross-ideological citation bonus: if original post is left-leaning and a response cites a left-leaning source to support a right-leaning argument, that citation carries MORE weight than a right-leaning source doing the same
- Rationale: a source corroborating a position it wouldn't be expected to support is more epistemically meaningful

**Open questions:**
- Who rates source credibility?
- Gaming risk: users may spam cross-ideological citations without engaging with the content
- How does citation quality (full article vs. headline cherry-pick) factor in?

---

## 10. Prediction Markets & Underreported Topics

**Status:** Concept stage, research complete

**The illiquid market mechanic:**
- If an important topic has low engagement, it represents an "illiquid market" — less established consensus
- The credibility payoff for engaging with an illiquid topic (with good sourcing and less inherent bias) should be **larger** than engaging with a well-established topic
- This creates a financial-market-style incentive to surface underreported but important stories

**Price of a claim as cross-ideological consensus signal:**
- Rather than left/right framing, prediction market probabilities show what the community collectively believes will happen
- A claim with high cross-ideological agreement has a higher "price" — it's not partisan, it's probable

**Reputation vs. real money:**
- Real-money markets have stronger accuracy signals but face regulatory risk
- Reputation-based markets are legally clean and philosophically aligned
- **Decision pending:** deeper exploration needed

---

## 11. News Consumption Layer

**Status:** Concept stage

**Core features:**
- News aggregation across sources with viewpoint context
- Bias/editorial scoring per article using is/ought analysis (not just political lean)
- Source credibility rating system
- "Blind spot" feature — shows stories you're likely missing based on your reading patterns

**Differentiation from Ground News:**
- Ground News uses human-panel left/center/right ratings — contested and binary
- RadMo's approach: is/ought scoring is objective and measurable, not political

---

## 12. Community Notes Integration

**Status:** Research complete, implementation pending

**The bridging algorithm:**
- Community Notes' matrix factorization separates political bias from genuine helpfulness
- The note intercept — stripped of political bias — is the "common ground factor"
- Algorithm and all data are open source: `github.com/twitter/communitynotes`

**RadMo's evolution beyond Community Notes:**
- Community Notes is limited to a binary left/right axis — known weakness
- RadMo's multi-dimensional model (geographic, cultural, religious, generational) is a genuine product evolution
- Every major platform has copied Community Notes as a *feature* — none has built a platform around the bridging *principle*

---

## 13. Business Model

**Subscription over advertising:**
- Advertising-driven business models create outrage incentives
- RadMo's subscription model means the platform profits when users find it genuinely valuable
- Transparency about this distinction is itself a differentiator and trust signal

---

## 14. Open Design Questions

Flagged items needing dedicated design sessions:

- [ ] **Dopamine gap** — How do we make intellectual honesty feel as rewarding as outrage?
- [ ] **Source credibility rating methodology** — Who decides? How do we avoid the "biased bias rater" problem?
- [ ] **Prediction markets monetary design** — Can real money be incorporated?
- [ ] **Someone Like You / Someone Unlike You — open design questions** (see section 5)
- [ ] **Is/ought scoring operationalization** — Moving from hand-scoring to algorithmic scoring at scale
- [ ] **Repost intent qualifier** — disagree / neutral / agree mechanic at repost time; feeds into cred score delta
- [ ] **Cred score delta rules** — full mechanic for how likes, repost types, and qualifier signals update poster's credibility score
- [ ] **Community Notes code walkthrough** — planned session to read `matrix_factorization.py` and `scoring.py`

---

## 15. Design Principles

**1. Incentives over morality**
Never ask users to be better people. Build a platform where existing human tendencies produce better collective outcomes.

**2. Redirect, don't resist (mostly)**
Work with human psychology rather than against it. Use resistance (friction) sparingly and intentionally.

**3. The binary left/right model is a ceiling**
Community Notes proved bridging works. RadMo's multi-dimensional model is a genuine product evolution.

**4. Transparency as differentiation**
Explicit business model messaging is a trust signal.

**5. Moderation needs an identity**
"Radically moderate" gives the quiet majority a tribe and a posture. Never let RadMo feel like a lecture.

**6. Epistemic quality ≠ rhetorical style**
The credibility system should measure epistemic quality, not academic communication style.

**7. Generational tailwind**
Younger voters show pragmatic, issue-based behavior. RadMo's natural early audience.

---

*Last updated: 2026-04-03*
*Status: Active workshopping — all features subject to change*
