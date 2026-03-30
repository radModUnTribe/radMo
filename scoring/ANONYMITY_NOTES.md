# RadMo Accountability Model

Notes on anonymity, accountability, and manipulation resistance.

---

## The Research

The academic literature is clear: anonymity increases bad-faith behavior through the **online disinhibition effect**. Users in anonymous conditions troll measurably more than identifiable users (Nitschinsk et al., 2022). The mechanism: online environments remove the real-time social feedback cues (facial expressions, body language, social consequences) that suppress antisocial behavior in person.

However, the relationship is more nuanced than "anonymity = bad":

- **Context matters more than anonymity itself.** Reddit research shows that outcomes depend significantly on community norms and moderation practices, not just whether users are named.
- **Not all anonymity is the same.** Non-disclosure of personal details, invisibility, and lack of eye-contact are three distinct components — each has different effects.
- **Benign disinhibition exists.** The same anonymity that enables trolling also enables whistleblowers, abuse survivors, and people in politically repressive contexts to speak safely.

---

## The Design Problem

A raw "anonymous users get penalized" approach has three problems:

1. **It's exploitable.** Bad actors can trivially create real-seeming named profiles. A legal name is not accountability.
2. **It's unjust.** It structurally disadvantages users who need anonymity for legitimate safety reasons.
3. **It's the wrong variable.** The root cause of bad-faith behavior is *lack of accountability*, not lack of a name. Accountability comes from behavioral track record, not identity.

---

## RadMo's Accountability Model

Instead of identity-based accountability, RadMo uses **behavioral track record** as the accountability signal. This is what Community Notes does, and it's more manipulation-resistant than identity verification.

### Account weight tiers

| Tier | Criteria | Weight in scoring |
|---|---|---|
| New / unverified | Account < 30 days old, no verified phone | Very low — cannot move scores significantly |
| Verified | Phone verification (like Community Notes) | Standard weight |
| Established | 90+ days, 50+ interactions, no flag history | Full weight |
| High credibility | High credibility score, track record of bridging | Elevated weight |
| Flagged | Suspicious correlation with other accounts (clique detection) | Downweighted or suspended |

### Quasi-clique detection

Community Notes' `quasi_clique_detection.py` detects coordinated manipulation by looking for accounts whose rating patterns are suspiciously correlated — even if those accounts appear independent. RadMo should implement an equivalent.

The key insight: a bot farm can generate 10,000 named accounts, but it cannot generate 10,000 accounts with *independent, authentic-looking behavioral histories* that pass correlation analysis. Behavioral accountability is harder to spoof than identity.

### What this means for anonymous users

- Anonymous users are not penalized directly
- They are, however, *new* by definition — and new accounts have low weight
- The path to influence is through demonstrated good-faith behavior over time
- A high-credibility pseudonymous account with 2 years of bridge-building history has more influence than a low-credibility named account created yesterday

---

## Open Questions

- [ ] What is the right verified phone requirement? Too high a bar reduces participation; too low enables sock puppets.
- [ ] How long should the "new account" low-weight period last? Community Notes doesn't specify.
- [ ] Should the clique detection be transparent to users? Knowing you've been flagged could allow gaming, but transparency is a core RadMo value.
- [ ] How do we handle users who legitimately need anonymity for safety? Could verified-but-anonymous be implemented (verification proves real personhood without revealing identity)?

---

## References

- Nitschinsk et al. (2022). "The Disinhibiting Effects of Anonymity Increase Online Trolling." *Cyberpsychology, Behavior, and Social Networking.* https://pubmed.ncbi.nlm.nih.gov/35594292/
- Lapidot-Lefler & Barak (2012). "Effects of anonymity, invisibility, and lack of eye-contact on toxic online disinhibition." *Computers in Human Behavior.* https://www.sciencedirect.com/science/article/abs/pii/S0747563211002317
- Pew Research (2017). "The Future of Free Speech, Trolls, Anonymity and Fake News Online." https://www.pewresearch.org/internet/2017/03/29/the-future-of-free-speech-trolls-anonymity-and-fake-news-online/
- Frontiers in Psychology (2023). "A functionalist approach to online trolling." https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1211023/full
