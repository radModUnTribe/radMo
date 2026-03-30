import { useState, useEffect } from "react";

const USERS = [
  {
    name: "Maya R.",
    handle: "@maya_r",
    avatar: "MR",
    location: "Portland, OR",
    overall: 84,
    dimensions: {
      sequencing: { score: 91, label: "Sequencing", desc: "Normative claims follow factual grounding 91% of the time" },
      diversity: { score: 78, label: "Source Diversity", desc: "Cites across 6 outlet categories, moderate left lean" },
      crossValidation: { score: 88, label: "Cross-Viewpoint", desc: "72% of top-rated contributions validated by opposing-factor users" },
      consistency: { score: 79, label: "Consistency", desc: "Sources cited generally support stated conclusions" },
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
      sequencing: { score: 44, label: "Sequencing", desc: "Normative claims often appear without factual grounding" },
      diversity: { score: 31, label: "Source Diversity", desc: "Sources cluster heavily in one outlet category" },
      crossValidation: { score: 67, label: "Cross-Viewpoint", desc: "38% of contributions validated by opposing-factor users" },
      consistency: { score: 62, label: "Consistency", desc: "Some divergence between cited sources and conclusions" },
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
      sequencing: { score: 73, label: "Sequencing", desc: "Factual grounding present in most normative posts" },
      diversity: { score: 82, label: "Source Diversity", desc: "Wide range of outlet types cited across the spectrum" },
      crossValidation: { score: 55, label: "Cross-Viewpoint", desc: "51% of contributions validated by opposing-factor users" },
      consistency: { score: 58, label: "Consistency", desc: "Some motivated reasoning patterns detected" },
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

function Arc({ score, size = 100 }) {
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
      <text x={cx} y={cy + size * 0.12} textAnchor="middle" fill="#888" fontSize={size * 0.15} fontFamily="Palatino, serif" fontStyle="italic">credibility</text>
    </svg>
  );
}

function RadarChart({ dimensions, size = 260 }) {
  const keys = Object.keys(dimensions);
  const n = keys.length;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.36;
  const levels = 4;
  const [animated, setAnimated] = useState(keys.reduce((acc, k) => ({ ...acc, [k]: 0 }), {}));
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimated(keys.reduce((acc, k) => ({ ...acc, [k]: dimensions[k].score }), {}));
    }, 150);
    return () => clearTimeout(t);
  }, [dimensions]);
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i, value) => {
    const r = (value / 100) * maxR;
    return { x: cx + r * Math.cos(angle(i)), y: cy + r * Math.sin(angle(i)) };
  };
  const ringPath = (level) => {
    const r = (level / levels) * maxR;
    return keys.map((_, i) => {
      const a = angle(i);
      return `${i === 0 ? "M" : "L"} ${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}`;
    }).join(" ") + " Z";
  };
  const polygonPoints = keys.map((k, i) => {
    const p = point(i, animated[k]);
    return `${p.x},${p.y}`;
  }).join(" ");
  const labelPoint = (i) => {
    const r = maxR + 68;
    return { x: cx + r * Math.cos(angle(i)), y: cy + r * Math.sin(angle(i)) };
  };
  const padding = 80;
  const vbSize = size + padding * 2;
  const vbOffset = -padding;
  const [hoveredDim, setHoveredDim] = useState(null);
  return (
    <div style={{ position: "relative", display: "inline-block", width: size }}>
      <svg width={size} height={size} viewBox={`${vbOffset} ${vbOffset} ${vbSize} ${vbSize}`} style={{ overflow: "visible" }}>
        {Array.from({ length: levels }).map((_, li) => (
          <path key={li} d={ringPath(li + 1)} fill="none" stroke="#1a1a1a" strokeWidth="1" />
        ))}
        {keys.map((_, i) => {
          const outer = point(i, 100);
          return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#1e1e1e" strokeWidth="1" />;
        })}
        <polygon points={polygonPoints} fill={`${scoreColor(Object.values(dimensions).reduce((s, d) => s + d.score, 0) / n)}22`} stroke="none" style={{ transition: "points 1s cubic-bezier(0.4,0,0.2,1)" }} />
        <polygon points={polygonPoints} fill="none" stroke={scoreColor(Object.values(dimensions).reduce((s, d) => s + d.score, 0) / n)} strokeWidth="1.5" strokeOpacity="0.8" style={{ transition: "points 1s cubic-bezier(0.4,0,0.2,1)" }} />
        {keys.map((k, i) => {
          const p = point(i, animated[k]);
          const color = scoreColor(dimensions[k].score);
          return <circle key={k} cx={p.x} cy={p.y} r="4" fill={color} stroke="#0a0a0a" strokeWidth="2" style={{ transition: "cx 1s cubic-bezier(0.4,0,0.2,1), cy 1s cubic-bezier(0.4,0,0.2,1)", cursor: "pointer" }} onMouseEnter={() => setHoveredDim(k)} onMouseLeave={() => setHoveredDim(null)} />;
        })}
        {Array.from({ length: levels }).map((_, li) => (
          <text key={li} x={cx + 4} y={cy - ((li + 1) / levels) * maxR + 3} fontSize="11" fill="#3a3a3a" fontFamily="Palatino, serif">{((li + 1) * 25)}</text>
        ))}
        {keys.map((k, i) => {
          const lp = labelPoint(i);
          const dim = dimensions[k];
          const isHovered = hoveredDim === k;
          return (
            <g key={k} onMouseEnter={() => setHoveredDim(k)} onMouseLeave={() => setHoveredDim(null)} style={{ cursor: "pointer" }}>
              <text x={lp.x} y={lp.y - 4} textAnchor="middle" fontSize="18" fill={isHovered ? scoreColor(dim.score) : "#aaa"} fontFamily="Palatino, serif" fontStyle="italic" style={{ transition: "fill 0.2s" }}>{dim.label}</text>
              <text x={lp.x} y={lp.y + 30} textAnchor="middle" fontSize="28" fill={scoreColor(dim.score)} fontFamily="Palatino, serif" fontWeight="normal" style={{ transition: "fill 0.2s" }}>{dim.score}</text>
            </g>
          );
        })}
      </svg>
      {hoveredDim && (
        <div style={{ position: "absolute", bottom: "-48px", left: "50%", transform: "translateX(-50%)", background: "#111", border: "1px solid #2a2a2a", borderRadius: "3px", padding: "8px 14px", fontSize: "15px", color: "#aaa", fontStyle: "italic", whiteSpace: "nowrap", fontFamily: "Palatino, serif", pointerEvents: "none", zIndex: 10 }}>
          {dimensions[hoveredDim].desc}
        </div>
      )}
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
    <div style={{ marginBottom: "4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", color: "#4ade80", fontStyle: "italic" }}>Is · factual</span>
        <span style={{ fontSize: "14px", color: "#999", fontStyle: "italic" }}>posting mix</span>
        <span style={{ fontSize: "14px", color: "#f87171", fontStyle: "italic" }}>Ought · normative</span>
      </div>
      <div style={{ height: "5px", background: "linear-gradient(to right, #4ade80, #c8a96e, #f87171)", borderRadius: "3px", position: "relative" }}>
        <div style={{ position: "absolute", top: "-4px", left: `${animated * 100}%`, transform: "translateX(-50%)", width: "12px", height: "12px", borderRadius: "50%", background: "#0a0a0a", border: "2px solid #c8a96e", transition: "left 1s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function CredibilityV2() {
  const [selected, setSelected] = useState(0);
  const user = USERS[selected];
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "Palatino, 'Book Antiqua', serif", padding: "32px 20px" }}>
      <div style={{ width: "100%", maxWidth: "560px" }}>
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "14px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", marginBottom: "4px" }}>Radical Moderate · Credibility</div>
          <div style={{ fontSize: "16px", color: "#666", fontStyle: "italic" }}>Epistemic reputation score</div>
        </div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {USERS.map((u, i) => (
            <button key={i} onClick={() => setSelected(i)} style={{ background: selected === i ? "#161616" : "transparent", border: `1px solid ${selected === i ? "#2a2a2a" : "#1a1a1a"}`, color: selected === i ? "#c8a96e" : "#444", padding: "6px 14px", borderRadius: "3px", fontSize: "16px", fontFamily: "Palatino, serif", fontStyle: "italic", cursor: "pointer", transition: "all 0.2s" }}>{u.name}</button>
          ))}
        </div>
        <div style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", borderRadius: "4px", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "20px 24px 16px", borderBottom: "1px solid #161616", gap: "16px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#c8a96e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "bold", color: "#0a0a0a", flexShrink: 0 }}>{user.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#e0e0e0", fontSize: "19px", marginBottom: "2px" }}>{user.name}</div>
              <div style={{ color: "#aaa", fontSize: "15px", fontStyle: "italic" }}>{user.handle} · {user.location}</div>
              <div style={{ color: "#777", fontSize: "14px", marginTop: "3px" }}>
                {user.postsAnalyzed} posts analyzed · <span style={{ color: user.trend >= 0 ? "#4ade80" : "#f87171" }}>{user.trend >= 0 ? "+" : ""}{user.trend} this month</span>
              </div>
            </div>
            <div style={{ flexShrink: 0 }}><Arc score={user.overall} size={110} /></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "28px 24px 12px" }}>
            <RadarChart dimensions={user.dimensions} size={300} />
          </div>
          <div style={{ padding: "8px 32px 24px" }}><IsOughtBar ratio={user.isOughtRatio} /></div>
        </div>
        <div style={{ padding: "18px 22px", background: "#0e0e0e", border: "1px solid #161616", borderLeft: "3px solid #2a2a2a", borderRadius: "4px" }}>
          <div style={{ fontSize: "14px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>How this is calculated</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Is/Ought Sequencing", weight: "30%", color: "#c8a96e" },
              { label: "Cross-Viewpoint Validation", weight: "30%", color: "#c8a96e" },
              { label: "Source Diversity", weight: "25%", color: "#888" },
              { label: "Claim Consistency", weight: "15%", color: "#666" },
            ].map(({ label, weight, color }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "#999", fontStyle: "italic", fontFamily: "Palatino, serif" }}>{label}</span>
                </div>
                <span style={{ fontSize: "15px", color: color, fontFamily: "Palatino, serif" }}>{weight}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#555", fontStyle: "italic", fontFamily: "Palatino, serif" }}>Hover any axis point or label for details.</div>
        </div>
      </div>
    </div>
  );
}
