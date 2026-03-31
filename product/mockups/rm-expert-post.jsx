import { useState } from "react";

// Is/ought score: 0 = pure factual (green), 1 = pure normative (red)
const fullPostSegments = [
  { text: "Iran's Revolutionary Guard Corps has", s: 0.05 },
  { text: " repositioned", s: 0.08 },
  { text: " three armored divisions", s: 0.05 },
  { text: " to the western frontier over the past 72 hours,", s: 0.05 },
  { text: " per satellite imagery reviewed by multiple open-source analysts.", s: 0.02 },
  { text: " US Central Command confirmed", s: 0.05 },
  { text: " boots on ground as of 0600 EST.", s: 0.02 },
  { text: " Historical precedent from the 2003 Iraq invasion", s: 0.1 },
  { text: " suggests initial air superiority campaigns", s: 0.1 },
  { text: " typically last 96–120 hours before ground advance.", s: 0.08 },
  { text: "\n\n" , s: 0.05 },
  { text: "The IRGC's", s: 0.1 },
  { text: " asymmetric capability — specifically", s: 0.12 },
  { text: " drone swarm doctrine developed post-2019 —", s: 0.1 },
  { text: " represents a materially different threat profile", s: 0.15 },
  { text: " than anything US forces encountered in Iraq or Afghanistan.", s: 0.1 },
  { text: " Casualty projections", s: 0.25 },
  { text: " from think tanks circulating this morning", s: 0.2 },
  { text: " should be treated with significant skepticism;", s: 0.3 },
  { text: " they are modeling 2003 conditions", s: 0.2 },
  { text: " against a 2026 adversary.", s: 0.15 },
  { text: "\n\n", s: 0.05 },
  { text: "My assessment:", s: 0.5 },
  { text: " this will not be a short campaign.", s: 0.55 },
  { text: " The administration", s: 0.6 },
  { text: " should have", s: 0.85 },
  { text: " exhausted", s: 0.8 },
  { text: " diplomatic channels more thoroughly", s: 0.75 },
  { text: " before committing ground forces.", s: 0.7 },
  { text: " Whether that window has now permanently closed", s: 0.6 },
  { text: " is the question that should dominate", s: 0.65 },
  { text: " the next 48 hours of public discourse —", s: 0.6 },
  { text: " not casualty speculation.", s: 0.5 },
];

const summarySegments = [
  { text: "US ground forces confirmed in Iran as of 0600 EST.", s: 0.05 },
  { text: " Iran has repositioned armored divisions to the western frontier.", s: 0.05 },
  { text: " Author warns:", s: 0.45 },
  { text: " Iran's drone swarm doctrine makes this conflict materially different from Iraq/Afghanistan.", s: 0.2 },
  { text: " Early casualty projections are based on outdated models.", s: 0.2 },
  { text: " Author's view:", s: 0.75 },
  { text: " diplomatic options were not exhausted.", s: 0.8 },
  { text: " Key question to watch:", s: 0.55 },
  { text: " is a negotiated off-ramp still possible?", s: 0.5 },
];

function scoreToColor(score) {
  const green = [74, 222, 128];
  const yellow = [250, 204, 21];
  const red = [248, 113, 113];
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

function ColoredText({ segments }) {
  return (
    <span>
      {segments.map((seg, i) => {
        if (seg.text === "\n\n") return <span key={i}><br /><br /></span>;
        return (
          <span key={i} style={{ color: scoreToColor(seg.s) }}>
            {seg.text}
          </span>
        );
      })}
    </span>
  );
}

function CredBadge({ score, size = "sm" }) {
  const color = score >= 75 ? "#4ade80" : score >= 50 ? "#c8a96e" : "#f87171";
  const fontSize = size === "sm" ? "11px" : "13px";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "4px",
      background: `${color}18`, border: `1px solid ${color}44`,
      borderRadius: "3px", padding: "2px 7px",
      fontSize, color, fontFamily: "Palatino, serif", fontStyle: "italic",
    }}>
      {score} credibility
    </span>
  );
}

function PerspectiveCard({ type, user, location, credScore, summary, viewpoint }) {
  const isLike = type === "like";
  const accentColor = isLike ? "#c8a96e" : "#818cf8";
  const label = isLike
    ? "Someone like you · different view"
    : "Someone unlike you · similar view";

  return (
    <div style={{
      border: `1px solid ${accentColor}33`,
      borderLeft: `3px solid ${accentColor}`,
      borderRadius: "4px",
      padding: "16px 18px",
      background: "#0e0e0e",
      flex: 1,
      minWidth: 0,
    }}>
      <div style={{
        fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
        color: accentColor, marginBottom: "10px",
      }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <div style={{
          width: "30px", height: "30px", borderRadius: "50%",
          background: accentColor, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "11px", fontWeight: "bold",
          color: "#0a0a0a", flexShrink: 0,
        }}>
          {user.initials}
        </div>
        <div>
          <div style={{ color: "#e0e0e0", fontSize: "13px" }}>{user.name}</div>
          <div style={{ color: "#555", fontSize: "11px", fontStyle: "italic" }}>
            {location} · <CredBadge score={credScore} />
          </div>
        </div>
      </div>
      <p style={{
        color: "#aaa", fontSize: "13px", lineHeight: "1.65",
        margin: 0, fontFamily: "Palatino, serif", fontStyle: "italic",
        borderTop: "1px solid #1e1e1e", paddingTop: "10px",
      }}>
        "{summary}"
      </p>
      <div style={{
        marginTop: "8px", fontSize: "11px", color: "#444", fontStyle: "italic",
      }}>
        {viewpoint}
      </div>
    </div>
  );
}

export default function ExpertPost() {
  const [expanded, setExpanded] = useState(false);
  const [showIsOught, setShowIsOught] = useState(true);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "Palatino, 'Book Antiqua', serif",
      padding: "32px 20px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ width: "100%", maxWidth: "660px" }}>

        <div style={{ marginBottom: "24px", borderBottom: "1px solid #1a1a1a", paddingBottom: "16px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e" }}>
            Radical Moderate
          </div>
          <div style={{ fontSize: "12px", color: "#444", fontStyle: "italic", marginTop: "3px" }}>
            Breaking · Iran Invasion · 2 hours ago
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{
            width: "42px", height: "42px", borderRadius: "50%",
            background: "#c8a96e", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "13px", fontWeight: "bold",
            color: "#0a0a0a", flexShrink: 0,
          }}>MK</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#e8e8e8", fontSize: "15px" }}>Marcus K.</div>
            <div style={{ color: "#555", fontSize: "12px", fontStyle: "italic" }}>
              Fmr. CENTCOM analyst · Washington, DC
            </div>
          </div>
          <CredBadge score={91} size="md" />
        </div>

        {/* AI Summary */}
        <div style={{
          background: "#0d0d0d", border: "1px solid #222", borderTop: "2px solid #333",
          borderRadius: "4px", padding: "16px 18px", marginBottom: "16px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#555", background: "#161616", border: "1px solid #2a2a2a",
                borderRadius: "3px", padding: "2px 8px",
              }}>AI Summary · 9% of original</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a3a3a" }}>
                Is/Ought coloring active
              </div>
            </div>
            <button onClick={() => setShowIsOught(v => !v)} style={{
              background: "transparent", border: "1px solid #2a2a2a",
              color: "#444", padding: "2px 10px", borderRadius: "3px",
              fontSize: "10px", fontFamily: "inherit", fontStyle: "italic", cursor: "pointer",
            }}>
              {showIsOught ? "plain" : "is/ought"}
            </button>
          </div>

          {showIsOught && (
            <div style={{ display: "flex", gap: "16px", marginBottom: "10px", flexWrap: "wrap" }}>
              {[{ label: "Factual (is)", score: 0.05 }, { label: "Transitional", score: 0.5 }, { label: "Normative (ought)", score: 0.95 }].map(({ label, score }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: scoreToColor(score) }} />
                  <span style={{ fontSize: "10px", color: "#444", fontStyle: "italic" }}>{label}</span>
                </div>
              ))}
            </div>
          )}

          <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
            {showIsOught
              ? <ColoredText segments={summarySegments} />
              : <span style={{ color: "#bbb" }}>{summarySegments.map(s => s.text).join("")}</span>
            }
          </p>
        </div>

        {/* Full post */}
        <div style={{ background: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "4px", marginBottom: "20px", overflow: "hidden" }}>
          <div style={{ padding: "16px 18px" }}>
            <div style={{
              fontSize: "15px", lineHeight: "1.8",
              maxHeight: expanded ? "none" : "120px",
              overflow: expanded ? "visible" : "hidden",
              position: "relative",
            }}>
              {showIsOught
                ? <ColoredText segments={fullPostSegments} />
                : <span style={{ color: "#ccc" }}>{fullPostSegments.map(s => s.text === "\n\n" ? "\n\n" : s.text).join("")}</span>
              }
              {!expanded && (
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                  background: "linear-gradient(to bottom, transparent, #0c0c0c)",
                }} />
              )}
            </div>
          </div>
          <div style={{
            borderTop: "1px solid #161616", padding: "10px 18px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <button onClick={() => setExpanded(v => !v)} style={{
              background: "transparent", border: "none", color: "#c8a96e",
              fontSize: "12px", fontFamily: "inherit", fontStyle: "italic", cursor: "pointer", padding: 0,
            }}>
              {expanded ? "Collapse ↑" : "Read full analysis (1,100 words) ↓"}
            </button>
            <div style={{ display: "flex", gap: "16px" }}>
              {["↑ 847", "↩ 312", "◎ 94"].map(label => (
                <span key={label} style={{ fontSize: "12px", color: "#444", cursor: "pointer" }}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Perspective divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ flex: 1, height: "1px", background: "#1a1a1a" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#333" }}>
            Two perspectives worth knowing
          </span>
          <div style={{ flex: 1, height: "1px", background: "#1a1a1a" }} />
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <PerspectiveCard
            type="unlike"
            user={{ name: "Priya S.", initials: "PS" }}
            location="Mumbai, India"
            credScore={84}
            summary="The IRGC repositioning is confirmed but the drone doctrine comparison to 2019 overstates Iran's operational readiness. Sanctions degraded their supply chain significantly. The 96-hour air campaign timeline is plausible."
            viewpoint="Largely agrees on facts · diverges on threat assessment"
          />
          <PerspectiveCard
            type="like"
            user={{ name: "Derek W.", initials: "DW" }}
            location="Nashville, TN"
            credScore={77}
            summary="The diplomatic exhaustion argument is well-taken but ignores the 18 months of back-channel negotiations that went nowhere. Sometimes the window closes before you're ready. The question isn't whether diplomacy failed — it's what comes next."
            viewpoint="Similar background · disagrees on diplomatic assessment"
          />
        </div>

        <div style={{
          marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #141414",
          fontSize: "11px", color: "#2a2a2a", fontStyle: "italic", lineHeight: 1.6,
        }}>
          AI summary generated by RadMo · Is/Ought coloring is experimental · Perspectives sourced from cross-viewpoint matching
        </div>

      </div>
    </div>
  );
}
