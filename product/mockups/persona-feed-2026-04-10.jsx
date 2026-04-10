// RadMo — Persona Feed Mockup v6
// Created: 2026-04-10
// Latest version as of 2026-04-10
//
// Features:
// - Spider chart as user avatar (44px) — epistemic fingerprint at scroll speed
// - Five persona archetypes with distinct spider shapes and persona colors
// - Credibility score rendered as circular progress ring (clockwise from 12 o'clock)
// - Fact/opinion text coloring: blue (#7dd3fc) = fact, amber (#fbbf24) = opinion
// - Avg reposter cred ring (replaces raw number) — same ring treatment, smaller size
// - Full hover tooltip system:
//     avatar, persona badge, cred ring, large spider → persona blurb
//     text segments → fact/opinion classification tooltip
//     dimension bars → single-phrase dimension description
// - Persona hover blurbs (locked 2026-04-10):
//     Bubble Scholar: "Rigorous, well-sourced, never leaves the bubble."
//     Vibes Merchant: "All assertion, zero evidence, high volume."
//     Magpie: "Reads widely, synthesizes loosely, cites everything."
//     Persuader: "Cross-partisan appeal, charisma-forward, light on rigor."
//     Radical Moderate: "Grounded, cross-validated, intellectually honest."
// - Dimension bar tooltips (Option C, locked 2026-04-10):
//     FG: "Opinions backed by facts"
//     CV: "Validated by people who disagree"
//     SD: "Breadth and independence of sources"
//     CI: "Sources honestly represented"
// - Fact/opinion segment tooltips (Option A, locked 2026-04-10):
//     Fact: "Likely a factual claim — verifiable against evidence."
//     Opinion: "Likely a normative claim — reflects a value or judgment."
//
// Open design questions surfaced this session:
// - Avatar legibility: are the 5 spider shapes distinct enough at 44px without the legend?
// - Persona illustration direction: original IP-safe characters inspired by archetype refs
//   (The Dude, professor-lecturing-to-clones, conspiracy board, TED Talk guy, referee)
// - News outlet incentive mechanic: GTM angle needs development
//
// See also: product/steelmanning-spec.md, product/features.md §7, §9

// [JSX source preserved in chat history — 2026-04-10]
// Full widget code lives in conversation artifact radmo_persona_feed_v6
