import { useState } from "react";

// Each word scored 0.0 (pure IS/factual) to 1.0 (pure OUGHT/normative)
const paragraphs = [
  [
    { w: "AI", s: 0.05 }, { w: " ", s: 0.05 }, { w: "systems", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "are", s: 0.05 }, { w: " ", s: 0.05 }, { w: "becoming", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "increasingly", s: 0.1 }, { w: " ", s: 0.1 }, { w: "capable.", s: 0.05 }, { w: " ", s: 0.08 },
    { w: "Large", s: 0.05 }, { w: " ", s: 0.05 }, { w: "language", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "models", s: 0.05 }, { w: " ", s: 0.05 }, { w: "can", s: 0.08 }, { w: " ", s: 0.08 },
    { w: "now", s: 0.05 }, { w: " ", s: 0.05 }, { w: "write", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "code,", s: 0.05 }, { w: " ", s: 0.05 }, { w: "analyze", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "medical", s: 0.05 }, { w: " ", s: 0.05 }, { w: "images,", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "and", s: 0.08 }, { w: " ", s: 0.08 }, { w: "engage", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "in", s: 0.05 }, { w: " ", s: 0.05 }, { w: "complex", s: 0.08 }, { w: " ", s: 0.08 },
    { w: "reasoning", s: 0.05 }, { w: " ", s: 0.05 }, { w: "tasks.", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "In", s: 0.05 }, { w: " ", s: 0.05 }, { w: "2023,", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "GPT-4", s: 0.0 }, { w: " ", s: 0.0 }, { w: "passed", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "the", s: 0.05 }, { w: " ", s: 0.05 }, { w: "bar", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "exam", s: 0.05 }, { w: " ", s: 0.05 }, { w: "scoring", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "in", s: 0.05 }, { w: " ", s: 0.05 }, { w: "the", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "90th", s: 0.0 }, { w: " ", s: 0.0 }, { w: "percentile.", s: 0.0 }, { w: " ", s: 0.05 },
    { w: "DeepMind's", s: 0.05 }, { w: " ", s: 0.05 }, { w: "AlphaFold", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "solved", s: 0.05 }, { w: " ", s: 0.05 }, { w: "a", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "fifty-year-old", s: 0.0 }, { w: " ", s: 0.0 }, { w: "protein", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "folding", s: 0.0 }, { w: " ", s: 0.0 }, { w: "problem.", s: 0.0 }, { w: " ", s: 0.05 },
    { w: "These", s: 0.05 }, { w: " ", s: 0.05 }, { w: "systems", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "process", s: 0.05 }, { w: " ", s: 0.05 }, { w: "billions", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "of", s: 0.05 }, { w: " ", s: 0.05 }, { w: "parameters", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "and", s: 0.08 }, { w: " ", s: 0.08 }, { w: "generate", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "outputs", s: 0.05 }, { w: " ", s: 0.05 }, { w: "that", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "human", s: 0.05 }, { w: " ", s: 0.05 }, { w: "experts", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "often", s: 0.08 }, { w: " ", s: 0.08 }, { w: "cannot", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "distinguish", s: 0.05 }, { w: " ", s: 0.05 }, { w: "from", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "their", s: 0.05 }, { w: " ", s: 0.05 }, { w: "own", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "work.", s: 0.05 },
  ],
  [
    { w: "This", s: 0.3 }, { w: " ", s: 0.35 }, { w: "trajectory", s: 0.3 }, { w: " ", s: 0.4 },
    { w: "should", s: 0.8 }, { w: " ", s: 0.75 }, { w: "concern", s: 0.65 }, { w: " ", s: 0.6 },
    { w: "us.", s: 0.5 }, { w: " ", s: 0.45 }, { w: "As", s: 0.3 }, { w: " ", s: 0.3 },
    { w: "AI", s: 0.15 }, { w: " ", s: 0.15 }, { w: "capabilities", s: 0.15 }, { w: " ", s: 0.2 },
    { w: "advance", s: 0.15 }, { w: " ", s: 0.2 }, { w: "faster", s: 0.2 }, { w: " ", s: 0.25 },
    { w: "than", s: 0.2 }, { w: " ", s: 0.25 }, { w: "our", s: 0.3 }, { w: " ", s: 0.3 },
    { w: "ability", s: 0.3 }, { w: " ", s: 0.3 }, { w: "to", s: 0.3 }, { w: " ", s: 0.3 },
    { w: "oversee", s: 0.35 }, { w: " ", s: 0.35 }, { w: "them,", s: 0.35 }, { w: " ", s: 0.4 },
    { w: "we", s: 0.4 }, { w: " ", s: 0.45 }, { w: "risk", s: 0.5 }, { w: " ", s: 0.5 },
    { w: "deploying", s: 0.45 }, { w: " ", s: 0.45 }, { w: "systems", s: 0.35 }, { w: " ", s: 0.35 },
    { w: "whose", s: 0.35 }, { w: " ", s: 0.38 }, { w: "goals", s: 0.4 }, { w: " ", s: 0.42 },
    { w: "may", s: 0.45 }, { w: " ", s: 0.45 }, { w: "diverge", s: 0.45 }, { w: " ", s: 0.45 },
    { w: "from", s: 0.4 }, { w: " ", s: 0.42 }, { w: "human", s: 0.4 }, { w: " ", s: 0.42 },
    { w: "values.", s: 0.5 }, { w: " ", s: 0.55 }, { w: "Researchers", s: 0.55 }, { w: " ", s: 0.6 },
    { w: "must", s: 0.92 }, { w: " ", s: 0.9 }, { w: "prioritize", s: 0.87 }, { w: " ", s: 0.85 },
    { w: "alignment", s: 0.75 }, { w: " ", s: 0.72 }, { w: "before", s: 0.7 }, { w: " ", s: 0.68 },
    { w: "capability.", s: 0.6 }, { w: " ", s: 0.62 }, { w: "Governments", s: 0.55 }, { w: " ", s: 0.65 },
    { w: "ought", s: 1.0 }, { w: " ", s: 0.95 }, { w: "to", s: 0.9 }, { w: " ", s: 0.9 },
    { w: "establish", s: 0.87 }, { w: " ", s: 0.85 }, { w: "clear", s: 0.82 }, { w: " ", s: 0.8 },
    { w: "regulatory", s: 0.78 }, { w: " ", s: 0.75 }, { w: "frameworks", s: 0.72 }, { w: " ", s: 0.7 },
    { w: "now,", s: 0.68 }, { w: " ", s: 0.65 }, { w: "before", s: 0.62 }, { w: " ", s: 0.58 },
    { w: "the", s: 0.5 }, { w: " ", s: 0.48 }, { w: "technology", s: 0.4 }, { w: " ", s: 0.42 },
    { w: "outpaces", s: 0.45 }, { w: " ", s: 0.47 }, { w: "governance.", s: 0.5 }, { w: " ", s: 0.55 },
    { w: "Companies", s: 0.6 }, { w: " ", s: 0.62 }, { w: "have", s: 0.65 }, { w: " ", s: 0.67 },
    { w: "a", s: 0.65 }, { w: " ", s: 0.67 }, { w: "responsibility", s: 0.82 }, { w: " ", s: 0.8 },
    { w: "to", s: 0.78 }, { w: " ", s: 0.78 }, { w: "pause", s: 0.82 }, { w: " ", s: 0.8 },
    { w: "development", s: 0.72 }, { w: " ", s: 0.65 }, { w: "when", s: 0.5 }, { w: " ", s: 0.48 },
    { w: "safety", s: 0.5 }, { w: " ", s: 0.47 }, { w: "evaluations", s: 0.4 }, { w: " ", s: 0.38 },
    { w: "reveal", s: 0.35 }, { w: " ", s: 0.38 }, { w: "unexpected", s: 0.45 }, { w: " ", s: 0.45 },
    { w: "behaviors.", s: 0.42 },
  ],
  [
    { w: "The", s: 0.2 }, { w: " ", s: 0.2 }, { w: "current", s: 0.15 }, { w: " ", s: 0.15 },
    { w: "approach", s: 0.15 }, { w: " ", s: 0.15 }, { w: "to", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "AI", s: 0.1 }, { w: " ", s: 0.1 }, { w: "development", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "is", s: 0.05 }, { w: " ", s: 0.08 }, { w: "fragmented.", s: 0.1 }, { w: " ", s: 0.1 },
    { w: "Some", s: 0.08 }, { w: " ", s: 0.08 }, { w: "labs", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "conduct", s: 0.05 }, { w: " ", s: 0.05 }, { w: "safety", s: 0.15 }, { w: " ", s: 0.12 },
    { w: "research;", s: 0.08 }, { w: " ", s: 0.08 }, { w: "many", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "do", s: 0.05 }, { w: " ", s: 0.05 }, { w: "not.", s: 0.05 }, { w: " ", s: 0.08 },
    { w: "Funding", s: 0.05 }, { w: " ", s: 0.05 }, { w: "for", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "alignment", s: 0.1 }, { w: " ", s: 0.08 }, { w: "work", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "represents", s: 0.05 }, { w: " ", s: 0.05 }, { w: "a", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "small", s: 0.05 }, { w: " ", s: 0.05 }, { w: "fraction", s: 0.0 }, { w: " ", s: 0.0 },
    { w: "of", s: 0.05 }, { w: " ", s: 0.05 }, { w: "total", s: 0.05 }, { w: " ", s: 0.05 },
    { w: "AI", s: 0.05 }, { w: " ", s: 0.05 }, { w: "investment.", s: 0.0 }, { w: " ", s: 0.08 },
    { w: "The", s: 0.08 }, { w: " ", s: 0.08 }, { w: "field", s: 0.08 }, { w: " ", s: 0.1 },
    { w: "lacks", s: 0.15 }, { w: " ", s: 0.18 }, { w: "agreed-upon", s: 0.2 }, { w: " ", s: 0.22 },
    { w: "standards", s: 0.2 }, { w: " ", s: 0.2 }, { w: "for", s: 0.15 }, { w: " ", s: 0.15 },
    { w: "what", s: 0.15 }, { w: " ", s: 0.15 }, { w: "constitutes", s: 0.1 }, { w: " ", s: 0.12 },
    { w: "a", s: 0.1 }, { w: " ", s: 0.12 }, { w: "\"safe\"", s: 0.25 }, { w: " ", s: 0.2 },
    { w: "system.", s: 0.1 },
  ],
  [
    { w: "We", s: 0.72 }, { w: " ", s: 0.78 }, { w: "need", s: 0.92 }, { w: " ", s: 0.9 },
    { w: "international", s: 0.8 }, { w: " ", s: 0.8 }, { w: "coordination.", s: 0.78 }, { w: " ", s: 0.8 },
    { w: "We", s: 0.72 }, { w: " ", s: 0.78 }, { w: "need", s: 0.92 }, { w: " ", s: 0.9 },
    { w: "binding", s: 0.87 }, { w: " ", s: 0.87 }, { w: "agreements.", s: 0.85 }, { w: " ", s: 0.82 },
    { w: "We", s: 0.72 }, { w: " ", s: 0.78 }, { w: "need", s: 0.92 }, { w: " ", s: 0.9 },
    { w: "independent", s: 0.82 }, { w: " ", s: 0.82 }, { w: "auditing", s: 0.82 }, { w: " ", s: 0.8 },
    { w: "bodies", s: 0.78 }, { w: " ", s: 0.75 }, { w: "with", s: 0.72 }, { w: " ", s: 0.7 },
    { w: "real", s: 0.68 }, { w: " ", s: 0.68 }, { w: "authority.", s: 0.72 }, { w: " ", s: 0.68 },
    { w: "The", s: 0.6 }, { w: " ", s: 0.58 }, { w: "cost", s: 0.52 }, { w: " ", s: 0.5 },
    { w: "of", s: 0.48 }, { w: " ", s: 0.5 }, { w: "getting", s: 0.52 }, { w: " ", s: 0.54 },
    { w: "this", s: 0.5 }, { w: " ", s: 0.52 }, { w: "wrong", s: 0.65 }, { w: " ", s: 0.62 },
    { w: "is", s: 0.48 }, { w: " ", s: 0.5 }, { w: "not", s: 0.55 }, { w: " ", s: 0.55 },
    { w: "recoverable.", s: 0.62 },
  ],
];

function scoreToColor(score) {
  const green = [34, 197, 94];
  const yellow = [250, 204, 21];
  const red = [239, 68, 68];
  let r, g, b;
  if (score <= 0.5) {
    const t = score * 2;
    r = Math.round(green[0] + (yellow[0] - green[0]) * t);
    g = Math.round(green[1] + (yellow[1] - green[1]) * t);
    b = Math.round(green[2] + (yellow[2] - green[2]) * t);
  } else {
    const t = (score - 0.5) * 2;
    r = Math.round(yellow[0] + (red[0] - yellow[0]) * t);
    g = Math.round(yellow[1] + (red[1] - yellow[1]) * t);
    b = Math.round(yellow[2] + (red[2] - yellow[2]) * t);
  }
  return `rgb(${r},${g},${b})`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function ColorWord({ word, score, prevScore, nextScore, mode }) {
  if (word === " ") return <span> </span>;
  if (mode === "plain") return <span>{word}</span>;

  const letters = word.split("");
  const n = letters.length;

  return (
    <span>
      {letters.map((letter, i) => {
        const t = n === 1 ? 0.5 : i / (n - 1);
        let letterScore;
        if (t <= 0.5) {
          letterScore = lerp(prevScore, score, t * 2);
        } else {
          letterScore = lerp(score, nextScore, (t - 0.5) * 2);
        }
        return (
          <span key={i} style={{ color: scoreToColor(letterScore), transition: "color 0.3s" }}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default function IsOught() {
  const [mode, setMode] = useState("color");
  const [hoveredScore, setHoveredScore] = useState(null);
  const allWords = paragraphs.flat();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#d0d0d0", fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ maxWidth: "680px", width: "100%" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#444", marginBottom: "8px" }}>Radical Moderate · AI Safety</div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "normal", color: "#e8e8e8", margin: "0 0 6px", lineHeight: 1.25, letterSpacing: "-0.01em" }}>The Calculus of Machine Intelligence</h1>
          <div style={{ fontSize: "12px", color: "#444", fontStyle: "italic" }}>Is/Ought analysis enabled</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "28px", padding: "14px 18px", background: "#111", border: "1px solid #1e1e1e", borderRadius: "4px" }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[{ label: "Factual (Is)", color: scoreToColor(0.0) }, { label: "Transitional", color: scoreToColor(0.5) }, { label: "Normative (Ought)", color: scoreToColor(1.0) }].map(({ label, color }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{ fontSize: "11px", color: "#666", fontStyle: "italic" }}>{label}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setMode(m => m === "color" ? "plain" : "color")} style={{ background: "transparent", border: "1px solid #2a2a2a", color: "#555", padding: "5px 14px", borderRadius: "3px", fontSize: "11px", fontFamily: "inherit", fontStyle: "italic", cursor: "pointer" }}>
            {mode === "color" ? "Plain view" : "Is/Ought view"}
          </button>
        </div>

        <div style={{ height: "20px", marginBottom: "16px", fontSize: "11px", color: hoveredScore !== null ? scoreToColor(hoveredScore) : "transparent", fontStyle: "italic", transition: "color 0.2s" }}>
          {hoveredScore !== null && (hoveredScore < 0.2 ? "Factual claim" : hoveredScore < 0.4 ? "Mostly factual" : hoveredScore < 0.6 ? "Transitional" : hoveredScore < 0.8 ? "Mostly normative" : "Normative claim")}
        </div>

        <div style={{ fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: "1.8", letterSpacing: "0.01em" }}>
          {paragraphs.map((para, pi) => {
            let globalOffset = 0;
            for (let i = 0; i < pi; i++) globalOffset += paragraphs[i].length;
            return (
              <p key={pi} style={{ margin: "0 0 1.6em" }}>
                {para.map((token, wi) => {
                  const gi = globalOffset + wi;
                  const prevScore = gi > 0 ? allWords[gi - 1].s : token.s;
                  const nextScore = gi < allWords.length - 1 ? allWords[gi + 1].s : token.s;
                  if (token.w === " ") return <span key={wi}> </span>;
                  return (
                    <span key={wi} onMouseEnter={() => setHoveredScore(token.s)} onMouseLeave={() => setHoveredScore(null)} style={{ cursor: "default" }}>
                      <ColorWord word={token.w} score={token.s} prevScore={prevScore} nextScore={nextScore} mode={mode} />
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #1a1a1a", fontSize: "11px", color: "#333", fontStyle: "italic", lineHeight: 1.6 }}>
          Is/Ought scoring is experimental. Letter-level color gradients show transitions between factual and normative language. Hover any word to see its classification.
        </div>
      </div>
    </div>
  );
}
