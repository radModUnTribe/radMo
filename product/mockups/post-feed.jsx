import { useState, useEffect } from "react";

// ── Utilities ────────────────────────────────────────────────────
function scoreColor(s) {
  return s >= 75 ? "#4ade80" : s >= 50 ? "#c8a96e" : "#f87171";
}

function avatarBg(s) {
  return s >= 75 ? "#1a3a2a" : s >= 50 ? "#3a2a10" : "#3a1010";
}

function ioColor(s) {
  const g = [74, 222, 128], y = [200, 169, 110], r = [248, 113, 113];
  const [a, b, t] = s <= 0.5 ? [g, y, s * 2] : [y, r, (s - 0.5) * 2];
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

// ── Data ─────────────────────────────────────────────────────────
const POSTER = {
  name: "J. Hartwell", handle: "@j_hartwell", avatar: "JH",
  overall: 7, postsAnalyzed: 23, trend: -4,
};

const POST_WORDS = [
  { w: "BREAKING:", s: .75 }, { w: "US", s: .1 }, { w: "boots", s: .1 },
  { w: "on", s: .05 }, { w: "the", s: .05 }, { w: "ground", s: .05 },
  { w: "on", s: .05 }, { w: "Karg", s: .05 }, { w: "Island,", s: .05 },
  { w: "Iran", s: .05 }, { w: "\u2014", s: .3 }, { w: "full", s: .45 },
  { w: "invasion", s: .35 }, { w: "underway.", s: .25 }, { w: "I", s: .55 },
  { w: "have", s: .55 }, { w: "insider", s: .72 }, { w: "sources.", s: .68 },
  { w: "This", s: .75 }, { w: "is", s: .6 }, { w: "happening", s: .7 },
  { w: "NOW.", s: .95 },
];

const RATERS = [
  { name: "Maya R.", handle: "@maya_prog", avatar: "MR", lean: -0.9, overall: 72, action: "repost", location: "Portland, OR", leanLabel: "Progressive", badges: ["Bridge Builder"] },
  { name: "Chris L.", handle: "@cl_press", avatar: "CL", lean: -0.3, overall: 81, action: "like", location: "New York, NY", leanLabel: "Center-left", badges: ["First Principles", "Wide Lens"] },
  { name: "David A.", handle: "@da_policy", avatar: "DA", lean: 0.4, overall: 88, action: "repost", location: "Washington, DC", leanLabel: "Center-right", badges: ["Bridge Builder", "Wide Lens"] },
  { name: "Mark H.", handle: "@mark_hawk", avatar: "MH", lean: 0.8, overall: 45, action: "like", location: "Houston, TX", leanLabel: "Conservative", badges: [] },
  { name: "TruthSeeker99", handle: "@truth99", avatar: "T9", lean: 1.0, overall: 12, action: "like", location: "Unknown", leanLabel: "Far-right", badges: [] },
];

const BADGE_DESC = {
  "Bridge Builder": "Consistently validated across viewpoints",
  "First Principles": "Strong is/ought sequencing",
  "Wide Lens": "High source diversity across the spectrum",
};

// ── Arc gauge ─────────────────────────────────────────────────────
function Arc({ score, size = 72 }) {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProg(score), 200);
    return () => clearTimeout(t);
  }, [score]);
  const r = size * 0.375;
  const cx = size / 2, cy = size * 0.65;
  const circ = Math.PI * r;
  const color = scoreColor(score);
  return (
    <svg width={size} height={size * 0.64} viewBox={`0 0 ${size} ${size * 0.64}`} style={{ overflow: "visible" }}>
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#1e1e1e" strokeWidth={size * 0.07} strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={color} strokeWidth={size * 0.07} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - prog / 100)}
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
      <text x={cx} y={cy - 5} textAnchor="middle" fill={color} fontSize={size * 0.22} fontFamily="Palatino,serif">{score}</text>
      <text x={cx} y={cy + size * 0.12} textAnchor="middle" fill="#555" fontSize={size * 0.13} fontFamily="Palatino,serif" fontStyle="italic">cred</text>
    </svg>
  );
}

// ── Badge ─────────────────────────────────────────────────────────
function Badge({ name }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-block" }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", background: "#161616", border: "0.5px solid #2a2a2a", borderRadius: 3, fontSize: 10, color: "#c8a96e", fontStyle: "italic", cursor: "default" }}>{name}</span>
      {hov && (
        <div style={{ position: "absolute", bottom: "calc(100% + 5px)", left: "50%", transform: "translateX(-50%)", background: "#111", border: "0.5px solid #2a2a2a", borderRadius: 3, padding: "5px 10px", fontSize: 10, color: "#888", fontStyle: "italic", whiteSpace: "nowrap", zIndex: 20, pointerEvents: "none" }}>
          {BADGE_DESC[name]}
        </div>
      )}
    </div>
  );
}

// ── Rater card ────────────────────────────────────────────────────
function RaterCard({ r }) {
  return (
    <div style={{ background: "#111", border: "0.5px solid #1a1a1a", borderRadius: 4, padding: "11px 13px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: avatarBg(r.overall), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: scoreColor(r.overall), flexShrink: 0 }}>{r.avatar}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, color: "#ddd" }}>{r.name} <span style={{ color: "#555", fontSize: 11 }}>{r.handle}</span></div>
          <div style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>{r.leanLabel} · {r.location}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <span style={{ fontSize: 10, color: r.action === "repost" ? "#c8a96e" : "#3a3a3a", fontStyle: "italic", border: `0.5px solid ${r.action === "repost" ? "#2a2220" : "#1a1a1a"}`, padding: "1px 7px", borderRadius: 2 }}>{r.action}</span>
          <span style={{ fontSize: 18, color: scoreColor(r.overall) }}>{r.overall}</span>
        </div>
      </div>
      {r.badges.length > 0 && (
        <div style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}>
          {r.badges.map(b => <Badge key={b} name={b} />)}
        </div>
      )}
    </div>
  );
}

// ── Viewpoint reach bar ───────────────────────────────────────────
function ViewpointBar({ reposters }) {
  const spread = reposters.length >= 2
    ? Math.abs(reposters[0].lean - reposters[reposters.length - 1].lean)
    : 0;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ fontSize: 10, color: "#4a7ab5", fontStyle: "italic" }}>left</span>
        <span style={{ fontSize: 9, color: "#3a3a3a", letterSpacing: ".18em", textTransform: "uppercase" }}>Viewpoint reach</span>
        <span style={{ fontSize: 10, color: "#b54a4a", fontStyle: "italic" }}>right</span>
      </div>
      <div style={{ position: "relative", height: 4, background: "#1e1e1e", borderRadius: 2 }}>
        {reposters.map((r, i) => (
          <div key={i} title={`${r.name} — cred ${r.overall}`} style={{ position: "absolute", top: -5, left: `${((r.lean + 1) / 2) * 100}%`, transform: "translateX(-50%)", width: 14, height: 14, borderRadius: "50%", background: scoreColor(r.overall), border: "2px solid #0e0e0e" }} />
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: 10, color: spread > 0.8 ? "#4ade80" : "#555", fontStyle: "italic", textAlign: "center" }}>
        {spread > 0.8 ? "Cross-viewpoint reach detected" : "Limited viewpoint spread"}
      </div>
    </div>
  );
}

// ── Someone panels ────────────────────────────────────────────────
function SomeonePanels() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 10 }}>
      <div style={{ background: "#0c0c0c", border: "0.5px solid #1e1e1e", borderLeft: "3px solid #4a7ab5", borderRadius: 0, padding: 14 }}>
        <div style={{ fontSize: 9, letterSpacing: ".15em", color: "#4a7ab5", textTransform: "uppercase", marginBottom: 8 }}>Someone unlike you</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#1a2a3a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#4ade80", flexShrink: 0 }}>SK</div>
          <div>
            <div style={{ fontSize: 13, color: "#ccc" }}>Sarah K.</div>
            <div style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>Conservative · Atlanta · cred <span style={{ color: "#4ade80" }}>83</span></div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", lineHeight: 1.55 }}>"No corroboration from any credible source. Matches the pattern of prior false military reports."</div>
        <div style={{ marginTop: 9, fontSize: 10, color: "#3a3a3a", fontStyle: "italic" }}>Same conclusion — different starting point</div>
      </div>
      <div style={{ background: "#0c0c0c", border: "0.5px solid #1e1e1e", borderLeft: "3px solid #c8a96e", borderRadius: 0, padding: 14 }}>
        <div style={{ fontSize: 9, letterSpacing: ".15em", color: "#c8a96e", textTransform: "uppercase", marginBottom: 8 }}>Someone like you</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#3a2a10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#c8a96e", flexShrink: 0 }}>JT</div>
          <div>
            <div style={{ fontSize: 13, color: "#ccc" }}>James T.</div>
            <div style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>Progressive · Portland · cred <span style={{ color: "#c8a96e" }}>69</span></div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", lineHeight: 1.55 }}>"Unusual activity near the strait. Not ready to call this false — sourcing is weak but the location is plausible."</div>
        <div style={{ marginTop: 9, fontSize: 10, color: "#3a3a3a", fontStyle: "italic" }}>Shares your background — sees it differently</div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────
export default function PostFeed() {
  const [showRaters, setShowRaters] = useState(false);
  const reposters = RATERS.filter(r => r.action === "repost");
  const avgCred = Math.round(reposters.reduce((s, r) => s + r.overall, 0) / reposters.length);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "Palatino,'Book Antiqua',serif", padding: "32px 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 580 }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, letterSpacing: ".25em", color: "#444", textTransform: "uppercase", marginBottom: 4 }}>Radical Moderate · feed</div>
          <div style={{ fontSize: 12, color: "#555", fontStyle: "italic" }}>Post card — reader view</div>
        </div>

        <div style={{ background: "#0e0e0e", border: "0.5px solid #252525", borderRadius: 8, overflow: "hidden" }}>

          {/* Poster header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 18px 12px" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: avatarBg(POSTER.overall), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, color: scoreColor(POSTER.overall), flexShrink: 0 }}>{POSTER.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, color: "#ddd" }}>{POSTER.name} <span style={{ color: "#555", fontSize: 13, fontStyle: "italic" }}>{POSTER.handle}</span> <span style={{ color: "#3a3a3a", fontSize: 11 }}>· 2h ago</span></div>
              <div style={{ fontSize: 11, color: "#555", fontStyle: "italic", marginTop: 2 }}>{POSTER.postsAnalyzed} posts analyzed · <span style={{ color: scoreColor(POSTER.overall) }}>{POSTER.trend} this month</span></div>
            </div>
            <Arc score={POSTER.overall} size={72} />
          </div>

          {/* Post text — is/ought colored */}
          <div style={{ padding: "0 18px 10px", fontSize: 16, lineHeight: 1.85, wordSpacing: 2 }}>
            {POST_WORDS.map((t, i) => <span key={i} style={{ color: ioColor(t.s) }}>{t.w}{" "}</span>)}
          </div>

          {/* Is/ought legend */}
          <div style={{ padding: "0 18px 14px", display: "flex", gap: 14, alignItems: "center" }}>
            {[["Factual", 0], ["Mixed", 0.5], ["Normative", 1]].map(([label, s]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ioColor(s) }} />
                <span style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>{label}</span>
              </div>
            ))}
            <span style={{ fontSize: 10, color: "#3a3a3a", fontStyle: "italic", marginLeft: "auto" }}>Is/Ought analysis</span>
          </div>

          <div style={{ borderTop: "0.5px solid #1a1a1a", margin: "0 18px" }} />

          {/* Engagement signals */}
          <div style={{ padding: "14px 18px" }}>
            <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 14 }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 9, letterSpacing: ".15em", color: "#3a3a3a", textTransform: "uppercase", marginBottom: 4 }}>Avg reposter cred</div>
                <div style={{ fontSize: 32, color: scoreColor(avgCred), lineHeight: 1 }}>{avgCred}</div>
                <div style={{ fontSize: 10, color: "#555", fontStyle: "italic", marginTop: 4 }}>{reposters.length} reposters</div>
              </div>
              <div style={{ flex: 1 }}>
                <ViewpointBar reposters={reposters} />
              </div>
            </div>
            <button onClick={() => setShowRaters(v => !v)} style={{ width: "100%", background: "transparent", border: "0.5px solid #252525", color: "#555", padding: "6px 14px", borderRadius: 4, fontSize: 12, fontFamily: "Palatino,serif", fontStyle: "italic", cursor: "pointer" }}>
              {showRaters ? "Hide" : "Show"} who engaged · {RATERS.length} users
            </button>
            {showRaters && (
              <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                {RATERS.map((r, i) => <RaterCard key={i} r={r} />)}
              </div>
            )}
          </div>

          <div style={{ borderTop: "0.5px solid #1a1a1a", margin: "0 18px" }} />

          {/* Someone panels */}
          <div style={{ padding: "14px 18px 18px" }}>
            <div style={{ fontSize: 9, letterSpacing: ".2em", color: "#3a3a3a", textTransform: "uppercase", marginBottom: 2 }}>Perspective check</div>
            <div style={{ fontSize: 12, color: "#555", fontStyle: "italic", marginBottom: 10 }}>Two people worth knowing about</div>
            <SomeonePanels />
          </div>

        </div>

        <div style={{ marginTop: 12, fontSize: 10, color: "#444", fontStyle: "italic", textAlign: "center" }}>
          Cooling period active · reactions visible in 14h · credibility scores update continuously
        </div>
      </div>
    </div>
  );
}
