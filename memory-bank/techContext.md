# RadMo Tech Context

## Tech Stack

**Frontend:**
- React (artifacts, component design)
- Tailwind CSS (styling)
- Visualizations: Recharts, D3, Three.js (for complex data viz)

**Backend:** (Planned)
- TBD (Node.js/Python candidate)

**APIs & Libraries:**
- Sentiment analysis (for bias detection)
- Community Notes algorithm (matrix factorization at github.com/twitter/communitynotes)

## Development Setup

**Primary Environment:** Windows desktop with Claude desktop app

**GitHub Access:**
- Repository: `radModUnTribe/radMo`
- MCP Server: `@modelcontextprotocol/server-github` (Windows desktop only)
- Fine-grained PAT: Contents (read/write), Metadata (read-only, all repos)
- Config: `%APPDATA%\Claude\claude_desktop_config.json`

**Secondary Environment:** iPad with raw GitHub URL workaround
- Access files via `raw.githubusercontent.com/radModUnTribe/radMo/main/...`

## Repository Structure

```
radMo/
├── memory-bank/          # This structure
├── src/
│   ├── components/       # React components
│   └── artifacts/        # UI mockups & prototypes
├── research/             # Analysis, frameworks, learning
├── product/              # Feature specs, PRD
├── scripts/              # Build tools
└── .clinerules           # Cline project intelligence
```

## React Artifacts (In Development)

**Active/Saved Locally:**
- `rm-post.jsx` — Post composer with cooling period state
- `is-ought.jsx` — Article visualizer with per-letter color gradients
- `credibility-score-v1.jsx` — Bar chart version
- `credibility-score-v2.jsx` — Animated radar chart version

**Status:** Full versions of three score artifacts are stub commits pending; need completion and finalization

## Key Dependencies & References

**Community Notes (Twitter Open Source):**
- Matrix factorization implementation: `matrix_factorization.py`
- Scoring logic: `scoring.py`
- Location: github.com/twitter/communitynotes

**Sentiment Analysis Tools:** (Candidate research needed)
- Named entity recognition for claim extraction
- Bias signal detection

## Technical Constraints

- GitHub MCP unavailable on iPad (workaround: raw.githubusercontent.com URLs)
- React artifact context limitations (keep individual components <200 lines for clarity)
- Backend infrastructure not yet defined (impacts scaling for prediction markets)

## Build & Testing

**Current:** Manual artifact creation and local testing in Claude desktop

**Next phase:** 
- Automated component testing
- Integration test for credibility calculation
- Backend API design

## Knowledge Base

**Community Notes Source Analysis:** (Pending deep dive)
- Study matrix factorization approach for cross-viewpoint identification
- Identify where binary model limits bridging effectiveness
- Design RadMo's multi-dimensional evolution

**Sentiment & Bias Detection Research:** (Pending)
- Evaluate existing NLP models for is/ought separation
- Cost/accuracy trade-offs for real-time scoring