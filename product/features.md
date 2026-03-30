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

**Status:** Designed and built into post mockup

**How it works:**
- After posting, users cannot see reactions or responses for 24–72 hours
- Deliberately less addictive than traditional social media
- During the cooling period, the platform surfaces the two-person popup (see section 5)
- Users see: "Reactions and responses will be visible in 24 hours. In the meantime, we're finding two people worth knowing about."

**Strategic rationale:**
- Breaks the immediate feedback loop that drives outrage posting
- Separates posting (expression) from reaction-watching (validation-seeking)
- Forces users to post based on conviction rather than anticipated applause
- This is a "resist" feature — deliberately introducing friction

**Open questions:**
- Should the cooling period length be fixed or variable? Could it scale with topic sensitivity?
- Should users be able to opt out of the cooling period (and does that affect their credibility score)?

---

## 5. Someone Like You / Someone Unlike You Popup

**Status:** Concept designed, mockup pending

**How it works:**
Two panels surface after a user posts, during the cooling period:

- **Panel A — "Someone unlike you, similar viewpoint"**: A user from a different demographic/cultural background who reached the same conclusion on the topic, likely via a different path. Breaks the assumption that your opinions are tribal.

- **Panel B — "Someone like you, different viewpoint"**: A user who shares your background or demographic profile but holds a genuinely different view on the topic. Harder to dismiss as "other." Directly attacks in-group conformity pressure.

**Strategic rationale:**
- Empirically grounded: extended contact hypothesis shows that knowing ingroup members have outgroup friends reduces prejudice (Wright et al., 1997)
- Panel B is the more powerful of the two for reducing Silence Tax dynamics
- Both panels work through *vicarious* contact — the user doesn't need to interact, just be exposed

**Open design questions** *(flagged as to-do)*:
1. **What signals define "like" vs. "unlike" you?** Location, age, political lean, cultural background, religion? Richer profile data = more meaningful match, but more privacy-sensitive.
2. **When and where does the popup trigger?** On every post? Only on political/opinion content? After a story? As a daily nudge?
3. **Opt-in vs. proactive surfacing?** Given research showing forced cross-viewpoint exposure can backfire, should this be framed as discovery rather than correction?
4. **Passive exposure vs. interactive engagement?** Does the user just read the other person's view, or can they respond? Interactive is stronger per the research but higher friction.

---

## 6. Is/Ought Visualizer

**Status:** Built and committed — `product/mockups/is-ought.jsx`

**How it works:**
- Article text is scored word-by-word on a 0.0 (pure factual) to 1.0 (pure normative) spectrum
- Colors map: green (is/factual) → yellow (transitional) → red (ought/normative)
- Per-letter color gradients show transitions between is and ought territory as you read
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
- Applied to articles → "Is/Ought analysis enabled" as a reading mode

**Future development:**
- Currently hand-scored — needs algorithmic scoring via NLP/LLM
- Sentiment analysis as one input for distinguishing is/ought
- Should be combinable with source credibility to produce a composite article quality score

---

## 7. Credibility Score

**Status:** Two mockups built — `product/mockups/credibility-score-v1.jsx` (bar chart), `product/mockups/credibility-score-v2.jsx` (radar/spider chart)

**Four dimensions (weighted):**

| Dimension | Weight | Description |
|---|---|---|
| Is/Ought Sequencing | 30% | Normative claims follow factual grounding. Measures whether a user establishes facts before making value claims. |
| Cross-Viewpoint Validation | 30% | Percentage of high-rated contributions validated by users with opposing political factors (Community Notes mechanic adapted for RadMo). |
| Source Diversity | 25% | Range of outlet bias ratings cited. Penalizes single-source or single-lean citation patterns. |
| Claim Consistency | 15% | Do cited sources lean the same direction as the user's ought conclusions? Proxy for motivated reasoning detection. |

**Is/Ought posting mix:**
Separate from the credibility score — a behavioral descriptor showing where a user sits on the factual/normative spectrum. Neither end is inherently bad; the score rewards *sequencing*, not ratio.

**Design decisions:**
- Score must be visible and legible — functions like a badge, present in every interaction
- Earned in ways that feel meaningful and are hard to game
- Creates social proof loops — high-credibility users attract high-credibility engagement
- Separate Writing Impact (what you post) and Rating Impact (how you engage with others' content) — borrowed from Community Notes

**Critical open questions:**
- **Who rates source credibility?** Any centralized bias labeling system will be perceived as biased itself. Need a defensible methodology.
- **Gaming risk:** If rules are legible, users will optimize for the metric rather than the behavior. Cross-ideological citation bonus could produce fake cross-ideological citations at scale.
- **Good faith detection:** "Engaging in good faith" is intuitive but hard to operationalize. What's the measurable signal?
- **Demographic skew risk:** The scoring system rewards a specific epistemic style (formal, evidence-grounded, sequential reasoning). People who communicate more emotionally or in different cultural registers may score lower not because they're less credible but because the system is miscalibrated.

**v1 vs. v2:**
- v1: bar charts per dimension — easier to read individual scores
- v2: radar/spider chart — polygon shape is immediately readable (lopsided = imbalanced, full diamond = strong across all dimensions)

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

**Redirect vs. Resist framework** *(flagged for deeper design work)*:
The feed algorithm uses both approaches. Prosocial downranking is "resist." Cross-viewpoint incentivization is "redirect." Needs a principled framework for deciding which approach to use for which behaviors.

---

## 9. Source Citation Incentivization

**Status:** Concept stage, not yet designed

**Core ideas:**
- Citing credible sources adds to credibility score (source diversity dimension)
- Cross-ideological citation bonus: if original post is left-leaning and a response cites a left-leaning source to support a right-leaning argument, that citation carries MORE weight than a right-leaning source doing the same
- Rationale: a source corroborating a position it wouldn't be expected to support is more epistemically meaningful

**Open questions:**
- Who rates source credibility? (same problem as credibility score)
- Gaming risk: users may spam cross-ideological citations without actually engaging with the content
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
- This cuts through the left/right lens that dominates most political framing

**Reputation vs. real money:**
- Real-money markets (Kalshi, Polymarket) have stronger accuracy signals but face regulatory risk and public opposition (59% of voters oppose political wagering per March 2026 poll)
- Reputation-based markets (Manifold, Metaculus model) are legally clean, philosophically aligned with RadMo's values, and still capture much of the accuracy signal
- **Decision pending:** Deeper exploration of whether monetary incentive can be incorporated at all, and if so, how

**Open questions:**
- What events/claims get a market? Policy outcomes? Verifiable claims in posts? News events?
- How does the UX integrate prediction market data into the social feed without feeling like a trading terminal?
- Minimum viable implementation: reputation-based probability display alongside posts showing community confidence level

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
- A source that's 80% normative language is measurably more editorial than one that's 20% normative — defensible without taking a political position

---

## 12. Community Notes Integration

**Status:** Research complete, implementation pending

**The bridging algorithm:**
- Community Notes' matrix factorization approach separates political bias from genuine helpfulness
- Notes score highly when users with *different* factor vectors both rate them helpful
- The note intercept — stripped of political bias — is the "common ground factor"
- Algorithm and all data are open source: `github.com/twitter/communitynotes`

**RadMo's evolution beyond Community Notes:**
- Community Notes is limited to a binary left/right axis — known weakness
- RadMo's multi-dimensional model (geographic, cultural, religious, generational) is a genuine product evolution
- Every major platform (Meta, TikTok, YouTube) has copied Community Notes as a *feature* — none has built a platform around the bridging *principle*

**Planned session:** Walk through `matrix_factorization.py` and `scoring.py` to understand implementation and identify adaptation points.

---

## 13. Business Model

**Subscription over advertising:**
- Advertising-driven business models create outrage incentives — the platform profits when users are more engaged, which means more outraged
- RadMo's subscription model means the platform profits when users find it genuinely valuable, not when they're angry
- Transparency about this distinction is itself a differentiator and trust signal

**Messaging:**
- Not "we're ethical" (preachy) but "here's why our incentives are aligned with yours and theirs aren't"
- "Most media makes money by keeping you hooked, not informed. Turns out, outrage is profitable. You already suspected something was off. You were right."

---

## 14. Open Design Questions

Flagged items needing dedicated design sessions:

- [ ] **Dopamine gap** — How do we make intellectual honesty feel as rewarding as outrage? Status + credibility is the direction; needs concrete mechanics.
- [ ] **Redirect vs. resist framework** — Principled approach for deciding when to work with human tendencies vs. deliberately introduce friction.
- [ ] **Source credibility rating methodology** — Who decides? How do we avoid the "biased bias rater" problem?
- [ ] **Prediction markets monetary design** — Can real money be incorporated? If so, how and with what guardrails?
- [ ] **Defining "better information environment" with measurable criteria** — What are the metrics? Less affective polarization? More accurate beliefs? More cross-viewpoint exposure? These require different interventions.
- [ ] **Someone Like You / Someone Unlike You — four open design questions** (see section 5)
- [ ] **Sentiment analysis for bias detection** — How does NLP/LLM-based sentiment analysis feed into is/ought scoring? What are its limitations and failure modes?
- [ ] **Is/ought scoring operationalization** — Moving from hand-scoring to algorithmic scoring at scale. What model? What accuracy threshold?
- [ ] **Community Notes code walkthrough** — Planned session to read `matrix_factorization.py` and `scoring.py` together.

---

## 15. Design Principles

Established principles that should govern all product decisions:

**1. Incentives over morality**
Never ask users to be better people. Build a platform where existing human tendencies produce better collective outcomes. Failure mode: civic tech that lectures.

**2. Redirect, don't resist (mostly)**
Work with human psychology (status-seeking, dopamine loops, social proof) rather than against it. Use resistance (friction) sparingly and intentionally, not as a default.

**3. The binary left/right model is a ceiling**
Community Notes proved bridging works. Its limitation is the two-axis constraint. RadMo's multi-dimensional cross-cultural model is a genuine product evolution.

**4. Transparency as differentiation**
Explicit business model messaging (subscription vs. engagement advertising) is a trust signal. Users are increasingly aware of how platforms profit from their attention.

**5. Moderation needs an identity**
"Radically moderate" works because it gives the quiet majority a tribe and a posture. Rebellion framing removes the weakness stigma. Never let RadMo feel like a lecture.

**6. Epistemic quality ≠ rhetorical style**
The credibility system should measure epistemic quality, not academic communication style. Designs that reward formal reasoning over emotional or communal expression will create demographic skew.

**7. Generational tailwind**
Younger voters show pragmatic, issue-based behavior over tribal loyalty. RadMo's positioning has a natural audience in this demographic — they're already skeptical of the outrage machine.

---

*Last updated: 2026-03-30*
*Status: Active workshopping — all features subject to change*
