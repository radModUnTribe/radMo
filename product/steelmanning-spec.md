# Steelmanning Detection — Claim Integrity Extension

**Status:** Design spec — workshopped 2026-04-10  
**Lives in:** Claim Integrity dimension (weight: 15%)  
**Related files:** `product/features.md` §7 (Claim Integrity), `product/features.md` §12 (Community Notes Integration)

---

## Compounding Mechanic — Locked 2026-04-10

**Decision:** Option B — multiplicative multiplier.

When CI steelmanning credit and CV validation come from the same epistemic cluster in the same post, a multiplier applies to the CV score for that post:

```
CV_effective = CV_base × (1 + steelmanning_bonus)
```

- `steelmanning_bonus` ranges 0.0 (dunking / no steelmanning) to ~0.3 (strong steelmanning signal)
- A CV score of 70 from a steelmanned post → effective ~91
- A CV score of 70 from a dunked post → stays 70
- Adversarial citation earns zero multiplier; steelmanned citation amplifies CV payoff

**Rationale:** CI and CV are measuring different things on the same event — one measures how the source was treated, one measures how broadly the post was validated. These are genuinely distinct epistemic signals. Compounding rewards the complete epistemic behavior (engaging honestly AND being validated for it) more than either behavior in isolation. It creates strong incentive toward steelmanning without gating CV entirely when steelmanning is absent.

**Status:** Locked for now — not permanent. Return to this when steelmanning scoring is being operationalized.

**Option C (gating) was considered and rejected:** A post can be adversarial and still earn legitimate cross-viewpoint engagement. Gating would block that valid signal.

---

## Problem Statement

Cross-viewpoint citation is a core credibility mechanic on RadMo. But citation is not monolithic. There are two fundamentally different ways to cite an out-of-bubble source:

**Type A — Adversarial citation (dunking):**  
Citing a source to demonstrate its failures. Selecting the weakest argument, the most embarrassing quote, the most easily refuted claim. The source is a prop.

**Type B — Genuine engagement (steelmanning):**  
Citing a source to engage with its strongest argument — even to rebut it. The source is taken seriously.

The current credibility architecture does not distinguish between these. Source Diversity rewards citation breadth; Cross-Viewpoint Validation rewards being cited by people who disagree; neither dimension detects *how* the citation is used. If Type A earns the same Claim Integrity score as Type B, the platform creates a selection pressure toward adversarial citation — a sophisticated dunking contest.

This is the adversarial citation loop:
> Outlets post maximally dunkable content → RadMo users cite it adversarially → Source Diversity score improves → Outlet gets cross-aisle traffic → Outlet has no incentive to moderate content quality

The fix: Claim Integrity needs to detect citation quality, not just citation accuracy.

---

## What Community Notes Teaches Us

Community Notes' core insight — expressed in its matrix factorization model — is that a note's intercept score (the common ground factor) measures something distinct from the rater's political alignment. The model:

```
rating(rater_i, note_j) ≈ intercept_j + rater_factor_i × note_factor_j
```

- **intercept_j** = the note's baseline helpfulness independent of political tribe — what people across the spectrum agree on
- **rater_factor_i × note_factor_j** = the polarization component — explained by political alignment

A note with a high intercept and near-zero polarization factor is "bridging" content — it earned positive ratings from people who agree on nothing else. That's the signal Community Notes optimizes for.

**The RadMo translation:**  
A citation is "steelmanning" if the *source's own epistemic community* rates the representation as accurate. If the people most likely to care about fair treatment of a source agree it was treated fairly, that's a bridging signal. If only the opposing tribe endorses the citation, it's a dunking signal.

More precisely:
- **Dunking signal:** Citation rated as accurate primarily by users distant from the source's epistemic tribe
- **Steelmanning signal:** Citation rated as accurate by users close to *and* distant from the source's epistemic tribe

This is Community Notes logic applied specifically to source representation rather than general factual claims.

---

## Steelmanning Signal — Definition

**Steelmanning score for a citation:**  
A continuous 0.0–1.0 score measuring whether the cited source's strongest relevant argument was engaged with, rather than a weaker or unrepresentative one.

**Operationally:** A citation scores well if:
1. The characterization of the source is rated as accurate by users from the source's epistemic community
2. The claim made references a central or representative argument from the source, not an outlier or edge case
3. The citation is not selectively clipped — the surrounding context doesn't reverse the meaning

**Operationally:** A citation scores poorly if:
1. Only users hostile to the source endorse the characterization
2. The quote or reference is drawn from a marginal or unrepresentative part of the source
3. The source's epistemic community consistently flags the characterization as misleading

---

## Detection Mechanisms

### Mechanism 1: Cross-tribe accuracy rating (primary signal)

When a user cites Source X, the characterization is rated by other RadMo users for accuracy. The key is *who* rates it:

- Users are mapped to epistemic proximity to the cited source (via information diet distance — citation graph similarity to the source's own readership)
- A citation rated as accurate by users **proximate to the source** earns steelmanning credit
- A citation rated as accurate only by users **distant from the source** earns dunking signal

This is the direct Community Notes bridging adaptation. The "raters who have every reason to disagree but don't" logic applies here at the level of source representation rather than claim truthfulness.

**Implementation dependency:** Requires information diet distance infrastructure (citation graphs per user). Same shared dependency as Cross-Viewpoint Validation Axis 4. Not independent infrastructure — it's a downstream use of the same data.

---

### Mechanism 2: Claim centrality detection (secondary signal)

Dunking typically involves citing a source's weakest or most marginal claim. Steelmanning involves engaging with what the source is actually known for or actually argues.

Proxy signals for claim centrality:
- **Frequency signal:** Is the cited claim representative of the source's typical output, or an outlier? (Cross-reference against other citations of the same source across the platform)
- **Engagement-weighted centrality:** Claims that other users — including source-proximate users — frequently cite from the same source are likely central claims
- **Context completeness:** Does the post include enough surrounding context to make the source's position intelligible, or is it a decontextualized clip?

**Implementation note:** This is an NLP + citation graph problem. Easier to build a weak version (outlier detection via citation frequency) than a strong version (semantic centrality). Start weak, iterate.

---

### Mechanism 3: Directional Claim Integrity (asymmetric rigor signal)

This is the existing asymmetric rigor concept applied specifically to cross-viewpoint citations:

- Track Claim Integrity separately for **ingroup-confirming citations** (citing sources that support your prior position) vs. **outgroup-challenging citations** (citing sources from the opposing viewpoint)
- The *gap* between these scores is the asymmetric rigor signal
- A user who applies rigorous characterization standards to ingroup sources but dunks on outgroup sources gets penalized on this axis

**Formula sketch:**
```
asymmetric_rigor_penalty = max(0, CI_ingroup - CI_outgroup) × weighting_factor
```

A Bubble Scholar who cites ingroup sources accurately and outgroup sources selectively will show a large gap. The penalty scales with the gap.

This is already documented as a future Claim Integrity extension in `product/features.md`. Steelmanning detection makes it concrete.

---

## Integration into Claim Integrity

Claim Integrity currently measures: *do sources actually support the claims being made?*  

Steelmanning extends this to: *are the sources' strongest relevant positions being engaged with?*

These are not the same question. A citation can be technically accurate (the source did say that) but still be adversarial (that's the weakest thing they said, taken out of context).

**Proposed Claim Integrity sub-components:**

| Sub-component | What it measures | Weight within CI |
|---|---|---|
| Factual accuracy | Do cited sources support the claims made? (existing) | ~50% |
| Steelmanning score | Is the source's strongest argument engaged? (new) | ~30% |
| Asymmetric rigor | Is the same accuracy standard applied to ingroup and outgroup sources? (new) | ~20% |

Total Claim Integrity weight in credibility score remains 15%. These are internal sub-components, not new top-level dimensions.

**Why not a new dimension?**  
Steelmanning is a specific form of good faith — whether you're treating the source honestly. That's squarely what Claim Integrity is for. Adding a fifth dimension for this would fragment the spider chart without earning the conceptual separation. The four dimensions cover distinct epistemic behaviors; steelmanning is a refinement of an existing one.

---

## Gaming Risks and Mitigations

**Risk 1: Coordinated rating manipulation**  
A tribe rates each other's adversarial citations as accurate to inflate steelmanning scores.  
*Mitigation:* Ratings only earn steelmanning credit when they come from users proximate to the *cited source's* community — not the poster's community. A conservative rating a conservative's citation of Fox News doesn't help the steelmanning score; a liberal rating it accurately does.

**Risk 2: Performative steelmanning**  
Users learn to include one good-faith line about the source before the dunk.  
*Mitigation:* The cross-tribe rating mechanism is the defense here — a single performative line doesn't change whether source-proximate users rate the overall characterization as fair. The full post is rated, not individual sentences.

**Risk 3: Low participation in rating cross-viewpoint citations**  
Users may not engage with content from outside their bubble enough to generate steelmanning ratings.  
*Mitigation:* This is a platform adoption problem, not a scoring design problem. As scale increases, rating density improves. At low scale, weight the sub-component less in Claim Integrity calculation and rely more on the factual accuracy sub-component.

---

## Build Sequencing

**MVP version (buildable at launch):**
- Factual accuracy sub-component only (existing Claim Integrity definition)
- Flag citations that community rates as misrepresentative (binary, not scored)
- Builds the rating behavior data needed for more sophisticated scoring later

**V2 (post-launch, requires citation graph infrastructure):**
- Cross-tribe accuracy rating with source-proximate weighting
- Asymmetric rigor gap scoring

**V3 (NLP/ML required):**
- Claim centrality detection
- Context completeness scoring
- Automated steelmanning signal without requiring manual ratings

---

## Open Questions

1. **Rating UX for source characterization** — how do you prompt users to rate whether a citation was fair without it feeling like work? (Friction vs. data quality tradeoff)
2. **Source-proximate user identification** — citation graph proximity is the right signal but requires enough user posting history to be accurate. What's the minimum post count before a user's diet distance is reliable?
3. **Performative compliance threshold** — how much steelmanning is "enough"? Is one sentence of genuine engagement sufficient, or does the overall post posture matter?
4. **Interaction with Cross-Viewpoint Validation** — resolved 2026-04-10: Option B compounding adopted. See top of this file.

---

*Created: 2026-04-10*  
*Last updated: 2026-04-10 — compounding mechanic decision added*  
*Status: Spec — pending further workshopping*
