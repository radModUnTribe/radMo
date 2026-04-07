# RadMo — Badge System

Badges are persistent signals of epistemic quality earned through behavioral patterns over time. They appear on user profiles, post cards, and rater cards. They are **default features** — shown automatically when earned, not opt-in.

Badges signal *how someone posts*, not who they are. They describe behavior, not identity.

**Status:** Under construction (Bucket 2). The three confirmed badges are established. Earn conditions are draft thresholds pending scoring operationalization. Additional badge candidates are flagged for future discussion.

---

## Confirmed Badges

### Bridge Builder
**What it signals:** This user consistently produces content that resonates across different viewpoint clusters — not just their own.

**Dimension:** Cross-Viewpoint Validation

**Earn condition (draft):** Cross-Viewpoint Validation score ≥ 75 over a rolling 90-day window, minimum 20 posts analyzed.

**Design rationale:** The most RadMo-native badge. Directly rewards the platform's core mechanic — epistemic quality that bridges perspectives. Hard to game because it requires genuine validation from users with opposing factor vectors, not just volume.

---

### First Principles
**What it signals:** This user grounds normative claims in factual evidence — they show their work.

**Dimension:** Factual Grounding

**Earn condition (draft):** Factual Grounding score ≥ 75 over a rolling 90-day window, minimum 20 posts analyzed.

**Design rationale:** Rewards the epistemic behavior RadMo most wants to reinforce — ensuring normative claims have factual scaffolding somewhere in the user's body of work. Grounding as presence, not order.

---

### Wide Lens
**What it signals:** This user regularly cites sources from across the viewpoint spectrum, not just sources that confirm their perspective.

**Dimension:** Source Diversity

**Earn condition (draft):** Source Diversity score ≥ 75 over a rolling 90-day window, minimum 20 posts analyzed.

**Design rationale:** Rewards intellectual breadth. Harder to game than it appears because the scoring weights cross-lean citations more heavily than same-lean citations — citing a source that cuts against your apparent perspective is worth more than citing one that confirms it.

---

## Design Principles

- **Earn conditions should resist gaming** — optimizing one dimension at the expense of others should not produce a badge; the Claim Integrity dimension exists partly to catch this pattern
- **No negative badges** — the system rewards good epistemic behavior; it does not publicly punish bad behavior (the credibility score handles that signal)
- **Badges are behavioral, not reputational** — they can be lost if scores drop below threshold; they reflect current behavior, not permanent status
- **Claim Integrity has no badge** — intentional; it is a check on gaming the other three dimensions, not a behavior to directly reward on its own

---

## Open Design Questions

- [ ] Exact score thresholds (75 is a working number; needs validation against real distributions)
- [ ] Minimum post count (20 is a working number)
- [ ] Rolling window length (90 days vs. all-time vs. recent N posts)
- [ ] Badge loss — does a badge disappear immediately when score drops, or is there a grace period?
- [ ] Badge display hierarchy — can users hold all three simultaneously? Is one more prestigious than the others?
- [ ] Visual design — current labels are text-only placeholders; icon system not yet designed

---

## Badge Candidates (Bucket 1 — flagged for future discussion)

The following badge types have been mentioned but not yet explored:

- **Mind Changer** — reward grounded position updates (new evidence cited); penalize tribal flips
- **Honest Broker** — possible badge surfacing Claim Integrity behavior if gaming patterns warrant a direct reward signal; currently intentionally absent from confirmed set
- Additional archetypes TBD

---

*Last updated: 2026-04-07*
*Status: Confirmed badges established (Bucket 2); earn conditions under construction; additional candidates flagged (Bucket 1).*
