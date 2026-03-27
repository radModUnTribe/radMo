import { useState } from "react";

const mockUser = {
  name: "Sean L.",
  avatar: "SL",
  location: "Chicago, IL",
  age: 38,
};

export default function RadicalModeratePost() {
  const [post, setPost] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const MAX = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= MAX) {
      setPost(e.target.value);
      setCharCount(e.target.value.length);
    }
  };

  const handleSubmit = () => {
    if (post.trim().length === 0) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setPost("");
    setCharCount(0);
    setSubmitted(false);
  };

  const remaining = MAX - charCount;
  const isNearLimit = remaining <= 40;
  const isAtLimit = remaining <= 0;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      padding: "24px",
    }}>
      <div style={{ width: "100%", maxWidth: "560px" }}>
        <div style={{ marginBottom: "32px", borderBottom: "1px solid #2a2a2a", paddingBottom: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e" }}>Radical Moderate</span>
          <h1 style={{ fontSize: "13px", color: "#555", fontWeight: "normal", fontStyle: "italic", margin: "4px 0 0" }}>Say what you actually think.</h1>
        </div>
        {!submitted ? (
          <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #1e1e1e" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#c8a96e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold", color: "#0f0f0f", flexShrink: 0 }}>{mockUser.avatar}</div>
              <div>
                <div style={{ color: "#e8e8e8", fontSize: "14px" }}>{mockUser.name}</div>
                <div style={{ color: "#555", fontSize: "12px", fontStyle: "italic" }}>{mockUser.location} · {mockUser.age}</div>
              </div>
            </div>
            <div style={{ padding: "16px 20px 0" }}>
              <textarea value={post} onChange={handleChange} placeholder="What's your take?" autoFocus style={{ width: "100%", minHeight: "120px", background: "transparent", border: "none", outline: "none", resize: "none", color: "#e8e8e8", fontSize: "16px", lineHeight: "1.6", fontFamily: "'Georgia', serif", boxSizing: "border-box", caretColor: "#c8a96e" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderTop: "1px solid #1e1e1e", marginTop: "8px" }}>
              <span style={{ fontSize: "12px", color: isAtLimit ? "#e05c5c" : isNearLimit ? "#c8a96e" : "#444", fontStyle: "italic", transition: "color 0.2s" }}>{remaining} remaining</span>
              <button onClick={handleSubmit} disabled={post.trim().length === 0} style={{ background: post.trim().length > 0 ? "#c8a96e" : "#222", color: post.trim().length > 0 ? "#0f0f0f" : "#444", border: "none", borderRadius: "3px", padding: "8px 22px", fontSize: "13px", fontFamily: "Georgia, serif", cursor: post.trim().length > 0 ? "pointer" : "not-allowed", transition: "all 0.2s" }}>Post</button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: "4px", padding: "20px", marginBottom: "16px" }}>
              <p style={{ color: "#d0d0d0", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{post}</p>
            </div>
            <div style={{ border: "1px solid #2a2a2a", borderLeft: "3px solid #c8a96e", borderRadius: "4px", padding: "16px 20px", background: "#111" }}>
              <div style={{ color: "#c8a96e", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>Cooling Period Active</div>
              <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.6", margin: "0 0 12px", fontStyle: "italic" }}>Reactions visible in <strong style={{ color: "#aaa" }}>24 hours</strong>. Finding two people worth knowing about.</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ fontSize: "12px", color: "#555", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "3px", padding: "6px 12px", fontStyle: "italic" }}>Someone unlike you · similar view</div>
                <div style={{ fontSize: "12px", color: "#555", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "3px", padding: "6px 12px", fontStyle: "italic" }}>Someone like you · different view</div>
              </div>
            </div>
            <button onClick={handleReset} style={{ marginTop: "16px", background: "transparent", border: "1px solid #2a2a2a", color: "#555", borderRadius: "3px", padding: "8px 18px", fontSize: "12px", fontStyle: "italic", cursor: "pointer" }}>← Post again</button>
          </div>
        )}
      </div>
    </div>
  );
}