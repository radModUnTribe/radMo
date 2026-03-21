# Feature Concept: Cross-Viewpoint Popups
## Psychological Analysis and Design Notes

> **Status:** Pre-design research note. No implementation decisions made. This document records the psychological analysis from the initial research conversation and the open design questions it surfaces.
>
> *Created: 2026-03-21*

---

## The Feature Concept

After a user publishes a prescriptive post — "here's the problem and here's what we should do about it" — two contextual cards are surfaced. Each attacks polarization from a different psychological angle:

- **Popup A:** *"Here's someone unlike you with a similar viewpoint"*
  An outgroup member who holds the same position as the poster.

- **Popup B:** *"Here's someone like you with a different viewpoint"*
  An ingroup member who holds a different position from the poster.

Key open design decisions not yet resolved (documented here for future sessions):
1. **Signal definition** — what data points define "like" vs. "unlike" you?
2. **Trigger logic** — when and where do the popups surface?
3. **Opt-in vs. proactive** — does the user choose this experience, or is it ambient?
4. **Passive vs. interactive** — does the user just see the person, or engage with them?
5. **Visibility** — private reflection prompt shown only to the poster, or public annotation attached to the post and visible to others?

---

## Why the Poster's Perspective Is the Right Focus

Most cross-viewpoint research looks at the *reader* encountering someone else's content. This feature's most important psychological interaction may be with the *person who posted* — a dynamic that is underexplored in the literature and analytically distinct.

The poster has a different psychological profile from a passive reader:
- They have just made a **public commitment**, which strengthens attachment to the stated position
- They are in **"lawyer mode"** (Tim Urban's framing) — brief filed, now defending
- **Identity salience is elevated** — making a prescriptive political statement activates group membership
- They are facing an audience, which adds social stakes

These conditions collectively make the post-publication moment one of the **least receptive windows** for introducing challenge or complexity — and one of the **most receptive** for validation. This asymmetry is the central design challenge for this feature.

---

## Popup A: "Someone Unlike You With a Similar Viewpoint"

### What This Is Psychologically
An unexpected ally. An outgroup member who publicly agrees with the poster's position.

### Identity Threat Level for the Poster: LOW

This popup does not challenge the poster's position — it validates it. The threat response that produces backfire effects (Bail et al., 2018) is not triggered because the poster isn't being told they're wrong.

### Predicted Effects on the Poster

**Immediate:** Validation. "Even someone from the other side sees this." This is psychologically rewarding and reduces, rather than triggers, defensiveness.

**Secondary (more important):** A subtle update to the poster's model of the outgroup. Seeing an outgroup member agree with them fractionally undermines the assumption that "everyone on that side thinks X." This is the preference falsification mechanism working gently — it demonstrates that the outgroup is more heterogeneous than the tribal narrative suggests. Over time, repeated exposure to unexpected allies chips away at the meta-perception of outgroup uniformity.

Research anchor: Lees & Cikara's work on meta-perceptions found that people systematically overestimate outgroup hostility. Correcting this misperception made participants less likely to attribute obstructionism to the opposition. Popup A is a lightweight, low-resistance mechanism for delivering exactly this correction.

### Risk: Position Entrenchment
Validation can harden a view rather than open it. The poster may interpret the unexpected ally as confirmation — "I was right, and even *they* know it" — which isn't depolarizing, it's just confirming from a new direction. This is a real but manageable risk. The feature's value is not in changing the poster's mind on the specific issue but in humanizing the outgroup and disrupting the "they all think X" assumption.

### Overall Assessment
Mostly safe, mildly beneficial, elegant. Low identity threat, positive valence, opens a small window to outgroup humanization without demanding anything cognitively difficult from the poster. The right first move in the sequence.

---

## Popup B: "Someone Like You With a Different Viewpoint"

### What This Is Psychologically
An ingroup dissenter. Someone who shares the poster's demographic or ideological profile but disagrees with their stated position.

### Identity Threat Level for the Poster: MODERATE TO HIGH — and highly context-dependent

This is where the research gets complicated.

### The Ingroup Advantage — and Its Limits

The **Intergroup Sensitivity Effect** (Hornsey et al., 2002; replicated extensively) establishes that people are generally *more* open to criticism from ingroup members than outgroup members. An ingroup critic is assumed to have the group's interests at heart, making their dissent feel more legitimate and less threatening than the same criticism from an outgroup member.

This gives Popup B a structural advantage: it is potentially the most *persuasive* cross-viewpoint exposure the platform could offer.

**But the critical caveat (Adelman & Dasgupta, 2019, SAGE):** This ingroup advantage is *erased* under threat conditions. When people feel their group or identity is under threat, they become *more suspicious* of ingroup critics — not less. The mechanism is attributional: threat makes people ask "why would someone like me say this?" The answer the threatened mind generates is not "maybe they have a point" but "they must have bad motives, or they've been compromised." The ingroup dissenter gets reinterpreted as a traitor rather than a trusted voice.

The question for RadMo's design is whether publicly posting a prescriptive opinion constitutes a "threat condition" for the purposes of this effect.

**The answer is: partially yes, for two reasons:**
1. The public commitment effect means the poster's position — and by extension their identity — is now on the line
2. Prescriptive political content inherently activates group identity and intergroup comparison

This means Popup B carries real backfire risk if delivered immediately after posting, in the high-commitment, high-identity-salience window.

### The Potential Upside Is Also Real

When conditions are right, Popup B is doing something more powerful than Popup A: it's demonstrating **ingroup diversity**. It shows the poster that their tribe doesn't think uniformly — that the "my side believes X" assumption has cracks in it. This is a direct application of the preference falsification insight (Kuran, 1997): making hidden ingroup dissent *visible* is how you start to shift perceived norms.

If a poster sees that someone demographically similar to them — same region, similar age, similar background — holds a meaningfully different view on the issue, it disrupts the tribal script in a way that outgroup exposure cannot. The poster can't easily dismiss the dissenter as "one of them." They have to do more cognitive work to account for the disagreement.

### Overall Assessment
High potential impact, meaningful risk. The intervention is more powerful than Popup A but requires more careful conditions to work. The primary variable is whether the identity threat response is activated or bypassed at the moment of delivery.

---

## The Combination Is the Clever Part

The most important insight from analyzing both popups together is that **their order and combination may matter more than either individually.**

### Sequence Hypothesis: Validate First, Challenge Second

If Popup A fires first — "someone unlike you agrees with you" — it does something critical before Popup B arrives: it **pre-validates the poster's judgment**. The poster receives a small dose of reassurance before the challenge comes. Their identity is slightly less threatened when Popup B lands because they've already been shown their view has unexpected breadth.

This is a structural application of **self-affirmation theory** (Sherman & Cohen, 2006): affirming people's core sense of being correct before presenting threatening information consistently reduces defensive processing and increases openness to the challenging content. Popup A effectively functions as a soft self-affirmation of the poster's *judgment* before Popup B introduces friction.

The sequence maps onto what the persuasion literature recommends for reducing psychological reactance:
1. Establish rapport and validate the person's autonomy
2. Introduce complexity or challenge from a position of goodwill

This is also the structural logic of how Tim Urban's writing works — he builds agreement and rapport before introducing the uncomfortable reframe. The popup sequence can be thought of as a micro-version of that rhetorical pattern.

### What the Two Popups Attack Together

| Popup | Psychological Target | Mechanism |
|-------|---------------------|------------|
| A (unlike you, agrees) | Outgroup uniformity assumption | Shows the other side is heterogeneous |
| B (like you, disagrees) | Ingroup uniformity assumption | Shows your own side is heterogeneous |

Together they attack the core cognitive distortion driving affective polarization: **the overestimation of ideological homogeneity within groups and the overestimation of difference between groups**. Neither popup alone addresses both distortions. The combination does.

Research anchor: Levendusky & Malhotra (2016) found that media narratives presenting parties as uniformly extreme directly increases affective polarization. These popups are a structural counter to that distortion — they inject evidence of within-group and cross-group heterogeneity at the individual level.

---

## The Timing Problem

This is the most important design constraint surfaced by the analysis.

**The paradox:** Both popups are most *informative* immediately after posting — you have the clearest signal of what was said and can match it most precisely. But the poster is psychologically most *resistant* at exactly that moment.

### The Post-Commitment Window Is the Wrong Window

Immediately after posting, the poster is in peak commitment mode. Festinger's post-decision dissonance theory predicts that people become *more* attached to positions after publicly stating them, not less. Introducing Popup B in this window is like arguing with someone immediately after they've just declared their position in front of an audience — the social stakes make openness nearly impossible.

### The Cooling Period Insight

The "cooling period" concept (previously discussed for reactions/engagement features) applies directly here. If these popups were delivered with a delay — 12-24 hours after the original post — several things change:
- The acute post-decision commitment effect has partially worn off
- Identity salience has dropped back toward baseline
- The poster has had time to exist outside the tribal context of the posting moment
- The poster is no longer actively defending in real-time

The same content will land on a qualitatively different cognitive state 24 hours later versus 30 seconds later. This is not a marginal difference — it may be the variable that determines whether Popup B opens the poster up or entrences them further.

### Design Option: Delayed Private Reflection

One design approach consistent with the research: both popups are delivered as a **private, delayed notification** to the poster only — perhaps framed as "Since you posted about X, here's something we thought you'd find interesting" — rather than as an immediate, publicly visible annotation on the post.

This approach:
- Removes the public social stakes that elevate identity threat
- Allows delivery at a lower-arousal moment
- Frames the feature as a service to the poster (expanding their perspective) rather than a challenge to their post (questioning their judgment)
- Maintains the poster's autonomy — they can engage or not

The tradeoff: delayed private delivery reduces the feature's visibility and potential viral/social mechanics. A publicly attached annotation would be seen by everyone who reads the post, potentially normalizing heterogeneity-of-viewpoint as a platform norm. That's a different and potentially more powerful effect — but it trades higher social stakes for the original poster.

---

## Risk Matrix for the Original Poster

| Condition | Popup A Risk | Popup B Risk |
|-----------|-------------|-------------|
| Immediate delivery, public | Low | High — identity threat activated |
| Immediate delivery, private | Low | Moderate |
| Delayed delivery (12-24h), public | Low | Moderate |
| Delayed delivery (12-24h), private | Very Low | Low-Moderate |
| Popup A delivered first, then B | Low | Reduced by A's prior validation |

---

## Open Design Questions

These questions need resolution before this feature can be designed with confidence. They are ranked by how much the answer would change the design:

1. **Timing:** Immediate vs. delayed delivery — which matters more for Popup B's effectiveness? This could be tested with a small qualitative study before any build.

2. **Visibility:** Private reflection tool vs. public annotation — what is the primary goal? If the goal is to change the *poster's* attitudes, private is probably more effective. If the goal is to change the *platform's* norms around viewpoint diversity, public is more powerful.

3. **Signal definition for "like" and "unlike":** Demographic similarity? Political identity? Issue-specific position history? Geographic? The more precise the matching, the more powerful the intervention — but also the more data it requires and the more algorithmically complex it becomes.

4. **Sequence enforcement:** Should A always precede B? Or are these independent features that can appear separately? The combination case is theoretically stronger; the separate cases are more flexible.

5. **Framing of Popup B:** The wording matters enormously for reactance. "Someone like you disagrees" activates more identity threat than "Someone with a similar background has thought about this differently." The autonomy-supportive framing from the reactance literature should be applied deliberately here.

6. **Post type specificity:** Does this feature apply to all prescriptive posts, or only certain types? Political identity posts carry higher identity salience than, say, policy wonk posts. The risk profile differs by post type.

---

## Key Research Sources

| Finding | Source | Relevance |
|---------|--------|----------|
| Ingroup critics generally more persuasive than outgroup critics | Hornsey et al. (2002); Jetten & Hornsey (2014) | Theoretical basis for Popup B's potential |
| Ingroup advantage erased under threat conditions — via suspicion of motives | Adelman & Dasgupta (2019), SAGE | Primary risk factor for Popup B |
| Cross-partisan conversations about agreement reduce polarization; about disagreement do not | Santoro & Broockman (2022), *Science Advances* | Supports Popup A framing; informs sequencing |
| Self-affirmation before threat reduces defensive processing | Sherman & Cohen (2006) | Theoretical basis for A-before-B sequencing |
| Public commitment strengthens position attachment post-decision | Festinger (1957), dissonance theory | Explains why immediate delivery is the wrong window |
| People overestimate outgroup animosity; correcting this reduces hostility | Lees & Cikara; Ruggeri et al. (2021) | Explains Popup A's secondary mechanism |
| Autonomy-supportive language reduces psychological reactance | Brehm (1966); Quick et al. (2013); meta-analyses | Informs framing of both popups |
| Media narratives of party uniformity directly increase affective polarization | Levendusky & Malhotra (2016) | Why heterogeneity-surfacing features matter |

---

## Connection to Core Thesis

This feature is a direct product implementation of Theory 3 from the [Core Thesis document](../CORE-THESIS.md): *"Cross-viewpoint exposure can be designed to work — the how matters more than the whether."*

The feature's design choices — sequence, timing, framing, visibility — are not aesthetic preferences. They are the variables the research says determine whether this intervention opens people up or closes them down. The contact hypothesis conditions (equal status, cooperative framing, identity safety) have to be engineered structurally into the feature, not assumed.

The backfire risk (Trend 03) is real. The research above suggests it's manageable, but it requires:
- Correct sequencing (A before B)
- Appropriate timing (delayed where possible)
- Autonomy-preserving framing ("here's something interesting" not "here's why you might be wrong")
- Private delivery as the lower-risk default, with public annotation as an opt-in or later-stage feature

---

*This document should be updated as product decisions are made and as any relevant new research is found. Link any A/B test design back here when testing begins.*
