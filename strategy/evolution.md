# RadMo: Evolution of the Project

This document traces how the thinking behind Radical Moderate has developed — what we started with, what changed, and why.

---

## Stage 1: The Original Frame — "Fix Incentives"

**Starting thesis:** Existing social media platforms are incentivized to maximize engagement, and engagement is driven by outrage. The fix is to invert the incentive structure — reward cross-viewpoint interaction instead of tribal reinforcement.

This was the kernel. It was correct but underdeveloped. The problems:
- "Reduce polarization" framed RadMo as a do-gooder project, not a product people would choose
- "Invert the incentive structure" implied you could flip human psychology, which is the resist model — and the resist model doesn't work
- No clear answer to: *why would anyone open this instead of Twitter?*

---

## Stage 2: Redirect, Don't Resist

**The key reframe:** You can't ask people to be better. Platforms that try to moralize users into healthier behavior fail because they're fighting the current. RadMo succeeds by *redirecting* the current — the same status-seeking, dopamine loops, and social comparison drives that fuel outrage can fuel epistemic quality if the reward structure points that way.

This produced the shift from "invert" to "redirect" — a small word change with large design implications. Every feature now gets tested against: *does this redirect an existing human tendency, or does it ask people to resist one?*

---

## Stage 3: The Identity Problem — Moderation Needs a Tribe

One of the clearest early insights: **moderation has a branding problem.** "Centrist" reads as weak, wishy-washy, unprincipled. The people most likely to benefit from RadMo were not going to self-identify into something that felt like surrendering.

The solution: **Radical Moderate as rebellion.** The framing shifts from "calm down" to "you've been played." The adversary isn't the other political tribe — it's the institutions (platforms, media, political parties) that profit from keeping you angry and sorted. This reframe does several things:
- Gives the quiet majority a posture and an identity they can feel good about
- Converts moderation from weakness to insight
- Creates in-group/out-group dynamics that don't map onto left/right
- Opens up a "you vs. the machine" narrative that's more compelling than "let's find common ground"

Tone model: Tim Urban — accessible, humorous, non-elitist, willing to be weird.

---

## Stage 4: The Credibility Score as Core Product

The credibility meter emerged as the central product feature — the mechanism that makes all the incentive redesign concrete. Key dimensions:

- **Factual Grounding (30%)** *(originally Is/Ought Sequencing)* — does this person's normative content have factual scaffolding behind it?
- **Cross-viewpoint validation (30%)** — are their claims confirmed by sources they'd normally disagree with?
- **Source diversity (25%)** — do they cite across the ideological spectrum?
- **Claim Integrity (15%)** *(originally Claim Consistency)* — do their sources actually support the claims being made?

The score is tied to social status within the platform. Being epistemically rigorous becomes the path to credibility, visibility, and influence — the same rewards outrage currently provides, pointed at better behavior.

Supporting mechanism: **cross-ideological citation bonuses** — same-lean citations carry less weight, incentivizing users to actually engage with sources outside their bubble.

---

## Stage 5: Community Notes as Foundation — and Ceiling

Community Notes (Twitter/X) proved that bridging algorithms work at scale. Its core insight — surface content that gets agreement across ideological divides — is validated. Every major platform has since copied it as a feature.

But Community Notes has a structural ceiling: it operates on a binary left/right axis. RadMo's core evolution is escaping that binary. A multi-dimensional model (political, cultural, geographic, generational) gets closer to how people actually differ. No major platform has built around this — they've bolted it on as a moderation feature. The opportunity is building the whole product around bridging logic from the start.

The Community Notes codebase (especially `matrix_factorization.py` and `scoring.py`) is a technical reference and starting point.

---

## Stage 6: The Authenticity Angle — Proof of Humanity

A newer and potentially major differentiator. The rise of AI-generated synthetic content has eroded trust in online discourse in ways users feel viscerally but can't always articulate. Reddit users routinely "bot-check" suspicious commenters — verifying account age and history — as an informal authenticity heuristic.

RadMo's behavioral credibility score is also, implicitly, **proof of humanity**. A meaningful credibility history is hard to fake synthetically. The platform positioning: *a place where the people you're arguing with are real.* This is a trust signal that no incumbent platform can easily claim, and it becomes more valuable as synthetic content proliferates.

This is worth research investment — the synthetic content trust erosion problem is accelerating.

---

## Stage 7: Retention Design — The Dopamine Gap

The cooling period (deliberate delay before seeing post reactions) was an early design choice. It's right in principle — it reduces the compulsive checking loop — but it creates a design challenge: **if RadMo is less addictive by design, what brings people back?**

Open questions now driving design:
- **Expert loop vs. seeker loop:** Users who come to demonstrate expertise (credibility-building) vs. users who come to learn (insight-seeking) — how do these feed each other?
- **Time to insight as loss function:** The goal isn't maximizing time on platform — it's minimizing the distance between opening the app and reaching a genuine understanding of something. Shorter paths to real insight are the product.
- **Why open RadMo vs. X/Reddit:** The primary motivation hasn't been fully designed. Variable reward mechanics need a RadMo-native substitute.
- **Humor and virality:** The platform needs to be fun. Memes, wit, and shareable moments matter — not just epistemic rigor.

---

## Stage 8: Media Fragmentation and the Personality Problem

An open research question: audiences are increasingly organized around trusted personalities (Rogan, Carlson, specific newsletter writers) rather than institutions. RadMo may have a role as an aggregator or temperature gauge for these persona-based information tribes — a place to see how different personality audiences are processing the same event.

This hasn't been designed yet but it's a real strategic surface worth exploring.

---

## What Hasn't Changed

- The core incentive thesis is intact
- The target audience (people exhausted by outrage, looking for signal) is the same
- The Community Notes bridging algorithm as a technical and conceptual foundation
- Transparency as a product differentiator (explicit business model, no engagement-driven advertising)

## What's Been Discarded or Refined

- **"Reduce polarization"** as mission framing → replaced with adversarial framing against institutions
- **"Invert" the incentive structure** → replaced with "redirect"
- **Moralism as a design lever** → explicitly off the table; RadMo doesn't ask users to be better people
- **Is/Ought Sequencing** → renamed Factual Grounding; redefined as presence-based, not order-based
- **Claim Consistency** → renamed Claim Integrity; refocused on source accuracy and bad-faith pattern detection

---

*Last updated: 2026-04-07*
