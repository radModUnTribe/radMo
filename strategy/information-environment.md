# RadMo — Defining the Information Environment

This document captures RadMo's working definition of a "perfect information environment" and the platform's explicit lane within it. It is meant to be a stable north star — consulted when product decisions need grounding in first principles.

---

## Why Define This

Throughout the design process it became clear that "better information environment" was doing a lot of work without being precisely defined. Before building the credibility score, the perspective panels, or the is/ought visualizer, we need to be explicit about what we're optimizing toward — and equally explicit about what we're *not* trying to do.

---

## The Core Diagnosis

The current information environment fails at the most basic level: **we cannot agree on facts**. Most public discourse is presented as a values disagreement (ought vs. ought), but underneath it is usually a facts disagreement (is vs. is) that nobody has resolved. The values debate happens on top of a contested factual layer, which makes it intractable.

RadMo's primary intervention is one level below the values debate: **build the infrastructure for a shared factual layer**.

This is not a neutral act — which facts get surfaced, amplified, and treated as settled are all editorial decisions with normative implications. But it is a more defensible and more tractable problem than adjudicating values.

---

## A Model of a Perfect Information Environment

### The Seven Layers (bottom-up)

**Layer 1 — Facts disseminate without normative framing**
Information is reported and shared in "is" language first. What happened, when, where, to whom. No ought framing embedded in the initial dissemination.

**Layer 2 — Facts update in real time**
As circumstances change, the factual record updates. Yesterday's confident claim gets revised when new information arrives. The information environment treats updating as normal, not as weakness or betrayal.

**Layer 3 — People ingest facts as shared base reality**
There exists a factual layer that most participants accept as the starting point for any further discussion. Contested claims are flagged as contested. Settled claims are treated as settled.

**Layer 4 — Domain knowledge is distributed and acknowledged**
Not everyone knows everything equally. People have genuine expertise in narrow domains and near-zero knowledge in others. A good information environment routes factual claims through people with the deepest relevant knowledge — not the loudest voices.

**Layer 5 — Normative claims are built on factual foundations and are transparent about their value premises**
Those with deep domain knowledge add "ought" language to the shared factual base: "given what we know about X, here are the options and their tradeoffs." Crucially, the value premises driving normative conclusions are made explicit — "given that we prioritize Y, we should do Z" — rather than presenting ought-conclusions as if they were facts.

**Layer 6 — The decision space is mapped, not collapsed**
A good information environment does not necessarily produce consensus on what to do. It produces a clearly mapped decision space: here are the options, here are the tradeoffs, here is where the genuine value disagreements lie. People with the same facts can legitimately reach different ought-conclusions because they hold different values — and that is okay. The goal is to relocate disagreement from "we can't agree on what is true" to "we agree on what is true but disagree on what to value" — the second type is more honest and more resolvable through deliberation.

**Layer 7 — The best arguments surface through quality-weighted engagement**
The hive mind engages with the strongest normative arguments and these rise based on epistemic quality, not tribal amplification. This requires the engagement signal to be clean — bot-resistant, credibility-weighted, manipulation-resistant.

---

## What RadMo Can and Cannot Do

### RadMo's explicit lane

RadMo directly addresses Layers 1, 2, 4, 5 (partially), and 7 through product design:

- **Fact/Opinion separation** (Layers 1, 5) — the is/ought visualizer makes it obvious which territory the reader is in at any moment; RadMo does not adjudicate normative claims, it surfaces them as normative
- **Credibility score as epistemic method barometer** (Layer 4) — surfaces *how* a poster thinks (scientist vs. lawyer vs. zealot) so readers can calibrate their trust; poster-level trust and post-level trust are distinct signals
- **Source grounding and claim integrity** (Layers 1, 3) — Factual Grounding and Claim Integrity dimensions flag ungrounded normative claims and source misrepresentation
- **Quality-weighted engagement** (Layer 7) — credibility-weighted feed algorithm; repost qualifier mechanic; cross-viewpoint validation
- **Updating destigmatized** (Layer 2) — platform explicitly rewards updating on evidence as scientist-mode behavior

### What RadMo does not do

- Adjudicate values disputes — RadMo is not a truth arbiter for normative claims
- Enforce consensus — disagreement on values is legitimate and expected; the platform maps the decision space, it does not collapse it
- Guarantee a clean factual layer — the factual layer is itself contested terrain; RadMo can flag weak sourcing and contested claims but cannot fully solve the epistemics-at-scale problem

---

## The Platform's Gently Directive Role

RadMo's goal is to gently push users toward scientist-mode thinking and away from zealot-mode, without preaching. The mechanism is incentives, not lectures:

- Scientist-mode behavior (grounded claims, diverse sources, cross-viewpoint engagement, updating on evidence) earns higher credibility scores
- Higher credibility scores earn status, visibility, and more meaningful engagement
- The platform never tells users their thinking is wrong — it shows them what kind of thinking earns respect here

---

## Key Distinctions

**Poster-level trust vs. post-level trust**
The credibility score measures the poster's epistemic style over time. It does not guarantee any individual post is accurate. A high-cred poster can post a wrong claim; a low-cred poster can accidentally post something true. The UI must not allow readers to over-extrapolate from poster score to post content. Both signals exist and both matter.

**The factual layer is not neutral**
Which facts get surfaced, amplified, and treated as settled are editorial decisions with normative implications. Iran guy's post is almost entirely "is" language, but the *selection* of the claim, the urgency framing, and the "insider sources" assertion are soft ought moves dressed as is. RadMo's credibility infrastructure must flag not just explicit opinion but contested factual claims, weak sourcing, and is-dressed-as-ought.

**Changing your mind is scientist-mode**
Updating a position in response to new evidence should be explicitly rewarded and destigmatized. Consistency for its own sake — holding a position to avoid appearing "wishy-washy" — is lawyer-mode. The platform's messaging and incentive design should make this distinction legible to users.

---

*Last updated: 2026-04-03*
