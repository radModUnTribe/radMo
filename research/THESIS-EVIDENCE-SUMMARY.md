# Thesis Evidence Summary
## Does RadMo Have Legs?

> **The Thesis Under Examination:**
> *"People want the 'actual' truth, not 'their' truth."*
>
> **Conviction level:** Uncertain. This is a large, optimistic claim. The research below is being assembled specifically to stress-test it — to find where the evidence supports it, where it cuts against it, and what conditions need to be true for it to hold.

---

## Why This Summary Exists

RadMo is being built on a thesis: that a meaningful market of people would prefer a platform optimized for epistemic quality over one optimized for tribal validation, if such a platform existed and was accessible. Before committing to product decisions on that basis, we need to examine what the evidence actually says — including the uncomfortable findings.

This file does not cherry-pick. Each trend entry below notes both the supporting evidence and the principal caveats.

---

## The Trends

### Trend 01 — Affective Polarization Is Rising
📄 [Full file](trends/01-affective-polarization.md)

**One-line summary:** Americans increasingly dislike and distrust people from the other political party — not because policy views have diverged dramatically, but because the social and emotional experience of political identity has intensified.

**Supports the thesis?** Partially. The fact that affective polarization is driven by *emotion and identity* rather than genuine policy disagreement suggests there's a gap between what people actually believe and how they express it politically. That gap is the space RadMo is trying to occupy. However, affective polarization also correlates with increased political participation — meaning some people *like* being polarized, at least in certain contexts.

**Key stat:** US affective polarization has grown more steeply than any other comparable democracy.

---

### Trend 02 — Engagement Algorithms Systematically Amplify Outrage
📄 [Full file](trends/02-platform-outrage-amplification.md)

**One-line summary:** Social media platforms are not neutral pipes — their ranking algorithms select for emotionally charged, out-group hostile content because that content drives engagement, regardless of whether users want it.

**Supports the thesis?** Strongly, but with a nuance. The key finding (Milli et al., 2025) is that users *do not prefer* the outrage-amplified content the algorithm serves them — their stated preferences diverge from their revealed engagement behavior. This is direct evidence that people's revealed behavior on existing platforms does not reflect what they actually want. The thesis that "people want the actual truth" becomes more plausible if their current behavior is being distorted by an adversarial system.

**Key stat:** Twitter's algorithm amplifies anger by 0.47 standard deviations over reverse-chronological baseline (PNAS Nexus, 2025).

**Critical caveat:** Revealed vs. stated preferences are genuinely different things. Even if people *say* they want less outrage, they may still be addicted to it in practice. RadMo has to solve for behavior, not just preference.

---

### Trend 03 — Naive Cross-Viewpoint Exposure Often Backfires
📄 [Full file](trends/03-cross-viewpoint-backfire.md)

**One-line summary:** Simply showing people content from the other side is not only insufficient — under the wrong conditions, it makes polarization worse.

**Supports the thesis?** This is the most important *complicating* finding for RadMo's thesis. If "people want the actual truth," why does giving them cross-viewpoint exposure increase their polarization? The answer from the literature: the *delivery mechanism* triggers identity threat rather than curiosity. This doesn't disprove the thesis — it constrains the *how* severely. It means RadMo's product design, not just its mission statement, is doing the heavy lifting.

**Key stat:** Republicans following a liberal Twitter bot became significantly more conservative (Bail et al., PNAS 2018).

**Critical caveat:** This is the single most important finding to hold in mind during feature design. Any feature that exposes users to opposing viewpoints must be designed to satisfy contact hypothesis conditions, not just deliver exposure.

---

### Trend 04 — Downranking Outrage Produces Measurable Attitude Change
📄 [Full file](trends/04-algorithmic-reranking-works.md)

**One-line summary:** A preregistered field experiment showed that reducing outrage content in social media feeds causally shifts attitudes toward less partisan animosity — in both directions, across party lines.

**Supports the thesis?** Yes, and this is the most actionable finding. It establishes proof of concept: algorithmic intervention in the direction of less outrage *works*. People's attitudes demonstrably change when the information environment changes. This supports the idea that current polarized behavior is environmentally induced, not intrinsic — which is exactly what the thesis requires to be true.

**Key stat:** Reducing antidemocratic/partisan animosity content shifted out-party animosity by 2+ points on a 100-point scale (Science, 2025).

---

### Trend 05 — Institutional Trust Is at Historic Lows
📄 [Full file](trends/05-institutional-trust-decline.md)

**One-line summary:** Trust in media, government, and major institutions has eroded significantly, replaced by grievance — a belief that the system is rigged against regular people.

**Supports the thesis?** Directionally yes. The fact that people distrust existing media suggests appetite for an alternative they can trust. But it also creates a significant headwind: a new platform enters a landscape where trust is the scarcest commodity. RadMo must earn trust rather than assuming it.

**Key stat:** 61% globally report moderate-to-high institutional grievance; media has been the least-trusted major institution since 2020 (Edelman, 2025).

**Critical caveat:** Low trust in existing media doesn't automatically translate into openness to a new platform. People may have responded to distrust by retreating to smaller, more tribal information sources — the opposite of what RadMo needs.

---

### Trend 06 — Preference Falsification Is Widespread
📄 [Full file](trends/06-preference-falsification.md)

**One-line summary:** People routinely misrepresent their political beliefs under perceived social pressure. Public opinion diverges significantly from private opinion — meaning the "Quiet Majority" is real, not aspirational.

**Supports the thesis?** This is the most direct empirical support for the thesis. If people's expressed political positions are distorted by social pressure rather than representing genuine belief, then the gap between "their truth" (publicly expressed) and "actual truth" (privately held) is real and measurable. The Saudi Arabia study (Bursztyn et al., 2020) is particularly striking: once men learned that other men privately agreed with them, their *behavior* changed — not just their expressed opinion.

**Key insight:** The thesis may be better stated as: *"People want a space where the social cost of expressing the actual truth is lower."* That is a more defensible and more actionable claim than the abstract version.

**Key stat:** Saudi Arabia study: vast majority of men privately supported women working outside the home, but substantially underestimated peer support; once informed, behavior changed (AER, 2020).

---

### Trend 07 — News Audiences Are Fragmenting and Fatiguing
📄 [Full file](trends/07-news-consumption-shifts.md)

**One-line summary:** 40% of global audiences sometimes or often avoid news (a record high), trust in news is flat at 40%, and younger audiences are replacing legacy media with social media and personality-led commentary.

**Supports the thesis?** Partially. News avoidance and fatigue is consistent with the thesis that people don't want "their truth" delivered at high emotional intensity indefinitely — there's a ceiling on how much tribal information warfare people can sustain. The fact that avoidance is driven by mood impact (48% in Germany study) suggests a latent demand for less-stressful engagement with information. However, "people are avoiding news" is not the same as "people want more accurate news" — some avoiders may simply want *less* news of any kind.

**Key stat:** 40% of global audiences avoid news sometimes or often, up from 29% in 2017; top reason is negative mood impact (Reuters Institute, 2025).

---

## Synthesis: Where Does the Evidence Land?

### What the evidence supports:
1. **The current environment is adversarially designed** — engagement algorithms systematically distort users' information diet toward outrage, and users' behavior does not reflect their stated preferences. This creates space for an alternative.
2. **The Quiet Majority is real** — preference falsification research suggests a significant segment of people hold more moderate private views than they express publicly. This is the addressable market.
3. **Algorithmic intervention works** — reducing outrage in feeds demonstrably shifts attitudes. The platform's design *matters* and can produce measurable effects.
4. **There is a trust vacuum** — institutional trust is low and declining, creating appetite for something new and more credible.

### What the evidence does not (yet) settle:
1. **Whether people will choose accuracy over tribal validation when given a real choice** — the preference falsification research shows the gap exists; it doesn't show that people will actively seek out platforms that widen that gap.
2. **Whether the backfire effect can be engineered around** — Trend 03 is the biggest unsolved design problem. The mechanism of identity threat is real and must be addressed structurally.
3. **Scale of the addressable market** — the Quiet Majority is real but not quantified. How large is the segment of people who (a) privately hold moderate views, (b) are sufficiently frustrated with current options, and (c) would pay for or regularly use a platform like RadMo?
4. **Whether "truth-seeking" is the right framing** — people may want comfort, community, or reduced stress more than accuracy per se. RadMo needs to meet them where they are emotionally, not just intellectually.

### The most defensible version of the thesis:
> *"A meaningful and underserved segment of people privately want to reason at a higher epistemic standard than existing platforms reward — and they are willing to engage with a platform that lowers the social cost of doing so."*

This version is more modest than "people want the actual truth," but it is better supported by the evidence and more actionable as a product thesis.

---

## What Research Would Increase Conviction

To raise the conviction level on the core thesis, the following research gaps should be filled:

1. **Contact hypothesis applied to social media** — Under what conditions does structured cross-viewpoint exposure reduce rather than increase polarization? This determines whether RadMo's core product mechanics can work.
2. **Gamification in civic/political contexts** — Is there evidence that reward systems can change epistemic behavior (not just content consumption)? What mechanics have been tried?
3. **Size of the persuadable/centrist segment** — Pew, PRRI, and academic political science have data on ideologically moderate but disengaged voters. This is the quantification of the addressable market.
4. **User experience research on news fatigue** — What do the news avoiders actually want? Is it less news, different news, or a different delivery mechanism?
5. **Platform switching behavior** — What has caused people to leave existing platforms, and what do they say they're looking for? (e.g., Mastodon/Bluesky migration data after Twitter/X changes)

---
*Last updated: 2026-03-21*
