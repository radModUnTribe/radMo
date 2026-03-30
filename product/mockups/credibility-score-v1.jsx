import { useState, useEffect } from "react";

const USERS = [
  {
    name: "Maya R.",
    handle: "@maya_r",
    avatar: "MR",
    location: "Portland, OR",
    overall: 84,
    dimensions: {
      sequencing: { score: 91, label: "Is/Ought Sequencing", desc: "Normative claims follow factual grounding 91% of the time" },
      diversity: { score: 78, label: "Source Diversity", desc: "Cites across 6 outlet categories, moderate left lean" },
      crossValidation: { score: 88, label: "Cross-Viewpoint Validation", desc: "72% of top-rated contributions validated by opposing-factor users" },
      consistency: { score: 79, label: "Claim Consistency", desc: "Sources cited generally support stated conclusions" },
    },
    isOughtRatio: 0.38,
    postsAnalyzed: 142,
    trend: +6,
  },
  {
    name: "Derek T.",
    handle: "@derek_t",
    avatar: "DT",
    location: "Nashville, TN",
    overall: 51,
    dimensions: {
      sequencing: { score: 44, label: "Is/Ought Sequencing", desc: "Normative claims often appear without factual grounding" },
      diversity: { score: 31, label: "Source Diversity", desc: "Sources cluster heavily in one outlet category" },
      crossValidation: { score: 67, label: "Cross-Viewpoint Validation", desc: "38% of contributions validated by opposing-factor users" },
      consistency: { score: 62, label: "Claim Consistency", desc: "Some divergence between cited sources and conclusions" },
    },
    isOughtRatio: 0.71,
    postsAnalyzed: 89,
    trend: +2,
  },
  {
    name: "Priya S.",
    handle: "@priya_s",
    avatar: "PS",
    location: "Chicago, IL",
    overall: 67,
    dimensions: {
      sequencing: { score: 73, label: "Is/Ought Sequencing", desc: "Factual grounding present in most normative posts" },
      diversity: { score: 82, label: "Source Diversity", desc: "Wide range of outlet types cited across the spectrum" },
      crossValidation: { score: 55, label: "Cross-Viewpoint Validation", desc: "51% of contributions validated by opposing-factor users" },
      consistency: { score: 58, label: "Claim Consistency", desc: "Some motivated reasoning patterns detected" },
    },
    isOughtRatio: 0.52,
    postsAnalyzed: 217,
    trend: -3,
  },
];

function scoreColor(score) {
  if (score >= 75) return "#4ade80";
  if (score >= 50) return "#c8a96e";
  return "#f87171";
}

function Arc({ score, size = 120 }) {
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(score), 100);
    return () => clearTimeout(timeout);
  }, [score]);

  const r = size * 0.38;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = Math.PI * r;
  const dashOffset = circumference * (1 - animated / 100);
  const color = scoreColor(score);

  return (
    <svg width={size} height={size * 0.6} viewBox={`0 0 ${size} ${size * 0.6}`} style={{ overflow: "visible" }}>
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#1e1e1e" strokeWidth={size * 0.07} strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={color} strokeWidth={size * 0.07} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset} style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1), stroke 0.3s" }} />
      <text x={cx} y={cy - 4} textAnchor="middle" fill={color} fontSize={size * 0.22} fontFamily="Palatino, serif" style={{ transition: "fill 0.3s" }}>{score}</text>
      <text x={cx} y={cy + size * 0.12} textAnchor="middle" fill="#444" fontSize={size * 0.09} fontFamily="Palatino, serif" fontStyle="italic">credibility</text>
    </svg>
  );
}

function DimBar({ label, score, desc }) {
  const [animated, setAnimated] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(score), 200);
    return () => clearTimeout(t);
  }, [score]);

  const color = scoreColor(score);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ marginBottom: "14px", cursor: "default" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "11px", color: "#666", fontStyle: "italic", letterSpacing: "0.04em" }}>{label}</span>
        <span style={{ fontSize: "11px", color, fontFamily: "Palatino, serif" }}>{score}</span>
      </div>
      <div style={{ height: "3px", background: "#1a1a1a", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${animated}%`, background: color, borderRadius: "2px", transition: "width 1s cubic-bezier(0.4,0,0.2,1), background 0.3s" }} />
      </div>
      {hovered && <div style={{ marginTop: "6px", fontSize: "10px", color: "#555", fontStyle: "italic", lineHeight: 1.5 }}>{desc}</div>}
    </div>
  );
}

function IsOughtBar({ ratio }) {
  const [animated, setAnimated] = useState(0.5);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(ratio), 300);
    return () => clearTimeout(t);
  }, [ratio]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "10px", color: "#4ade80", fontStyle: "italic" }}>Is (factual)</span>
        <span style={{ fontSize: "10px", color: "#666", fontStyle: "italic" }}>posting mix</span>
        <span style={{ fontSize: "10px", color: "#f87171", fontStyle: "italic" }}>Ought (normative)</span>
      </div>
      <div style={{ height: "6px", background: "linear-gradient(to right, #4ade80, #c8a96e, #f87171)", borderRadius: "3px", position: "relative" }}>
        <div style={{ position: "absolute", top: "-3px", left: `${animated * 100}%`, transform: "translateX(-50%)", width: "12px", height: "12px", borderRadius: "50%", background: "#0a0a0a", border: "2px solid #c8a96e", transition: "left 1s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function CredibilityScore() {
  const [selected, setSelected] = useState(0);
  const user = USERS[selected];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "Palatino, 'Book Antiqua', serif", padding: "32px 20px" }}>
      <div style={{ width: "100%", maxWidth: "520px" }}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#333", marginBottom: "4px" }}>Radical Moderate · Credibility</div>
          <div style={{ fontSize: "12px", color: "#3a3a3a", fontStyle: "italic" }}>Epistemic reputation score</div>
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
          {USERS.map((u, i) => (
            <button key={i} onClick={() => setSelected(i)} style={{ background: selected === i ? "#161616" : "transparent", border: `1px solid ${selected === i ? "#2a2a2a" : "#1a1a1a"}`, color: selected === i ? "#c8a96e" : "#444", padding: "6px 14px", borderRadius: "3px", fontSize: "12px", fontFamily: "Palatino, serif", fontStyle: "italic", cursor: "pointer", transition: "all 0.2s" }}>{u.name}</button>
          ))}
        </div>

        <div style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", borderRadius: "4px", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "24px 24px 16px", borderBottom: "1px solid #161616", gap: "20px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#c8a96e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "bold", color: "#0a0a0a", flexShrink: 0 }}>{user.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#e0e0e0", fontSize: "15px", marginBottom: "2px" }}>{user.name}</div>
              <div style={{ color: "#444", fontSize: "11px", fontStyle: "italic" }}>{user.handle} · {user.location}</div>
              <div style={{ color: "#333", fontSize: "10px", marginTop: "4px" }}>
                {user.postsAnalyzed} posts analyzed · <span style={{ color: user.trend >= 0 ? "#4ade80" : "#f87171" }}>{user.trend >= 0 ? "+" : ""}{user.trend} this month</span>
              </div>
            </div>
            <div style={{ flexShrink: 0 }}><Arc score={user.overall} size={100} /></div>
          </div>
          <div style={{ padding: "20px 24px 8px" }}><IsOughtBar ratio={user.isOughtRatio} /></div>
          <div style={{ padding: "8px 24px 24px" }}>
            {Object.values(user.dimensions).map((dim) => <DimBar key={dim.label} {...dim} />)}
          </div>
        </div>

        <div style={{ padding: "14px 18px", background: "#0e0e0e", border: "1px solid #161616", borderLeft: "3px solid #1e1e1e", borderRadius: "4px" }}>
          <div style={{ fontSize: "10px", color: "#333", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>How this is calculated</div>
          <div style={{ fontSize: "11px", color: "#3a3a3a", fontStyle: "italic", lineHeight: 1.7 }}>
            Credibility scores are derived from four weighted dimensions: is/ought sequencing (30%), source diversity (25%), cross-viewpoint validation (30%), and claim consistency (15%). Scores update as new posts are analyzed. Hover any dimension for details.
          </div>
        </div>
      </div>
    </div>
  );
}
