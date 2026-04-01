import { useState, useEffect } from "react";

// ── Utilities ────────────────────────────────────────────────────
function scoreColor(s) { return s>=75?"#4ade80":s>=50?"#c8a96e":"#f87171"; }
function avatarBg(s) { return s>=75?"#1a3a2a":s>=50?"#3a2a10":"#3a1010"; }
function ioColor(s) {
  const g=[74,222,128],y=[200,169,110],r=[248,113,113];
  const [a,b,t]=s<=.5?[g,y,s*2]:[y,r,(s-.5)*2];
  return `rgb(${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)})`;
}

// ── Data ─────────────────────────────────────────────────────────
const POSTER = {
  name:"J. Hartwell", handle:"@j_hartwell", avatar:"JH", location:"Chicago, IL",
  overall:7, postsAnalyzed:23, trend:-4,
  dims:{ sequencing:10, diversity:0, crossValidation:5, consistency:12 },
};

const POST_WORDS = [
  {w:"BREAKING:",s:.75},{w:"US",s:.1},{w:"boots",s:.1},{w:"on",s:.05},{w:"the",s:.05},
  {w:"ground",s:.05},{w:"on",s:.05},{w:"Karg",s:.05},{w:"Island,",s:.05},{w:"Iran",s:.05},
  {w:"\u2014",s:.3},{w:"full",s:.45},{w:"invasion",s:.35},{w:"underway.",s:.25},
  {w:"I",s:.55},{w:"have",s:.55},{w:"insider",s:.72},{w:"sources.",s:.68},
  {w:"This",s:.75},{w:"is",s:.6},{w:"happening",s:.7},{w:"NOW.",s:.95},
];

const RATERS = [
  {name:"Maya R.",handle:"@maya_prog",avatar:"MR",overall:72,action:"repost",location:"Portland, OR",lean:"Progressive",badges:["Bridge Builder"]},
  {name:"Chris L.",handle:"@cl_press",avatar:"CL",overall:81,action:"like",location:"New York, NY",lean:"Center-left",badges:["First Principles","Wide Lens"]},
  {name:"David A.",handle:"@da_policy",avatar:"DA",overall:88,action:"repost",location:"Washington, DC",lean:"Center-right",badges:["Bridge Builder","Wide Lens"]},
  {name:"Mark H.",handle:"@mark_hawk",avatar:"MH",overall:45,action:"like",location:"Houston, TX",lean:"Conservative",badges:[]},
  {name:"TruthSeeker99",handle:"@truth99",avatar:"T9",overall:12,action:"like",location:"Unknown",lean:"Far-right",badges:[]},
];

const REPOSTER_DIMS = { sequencing:82, diversity:80, crossValidation:81, consistency:79 };

const BADGE_DESC = {
  "Bridge Builder":"Consistently validated across viewpoints",
  "First Principles":"Strong is/ought sequencing",
  "Wide Lens":"High source diversity across the spectrum",
};

// ── Spider chart ───────────────────────────────────────────────────
const DIM_LABELS = { sequencing:"Sequencing", diversity:"Source Div.", crossValidation:"Cross-View", consistency:"Consistency" };

function SpiderChart({ dims, size=176 }) {
  const keys = Object.keys(dims);
  const n = keys.length;
  const cx=size/2, cy=size/2, mR=size*0.296, lR=mR+40;
  const avg = Object.values(dims).reduce((s,v)=>s+v,0)/n;
  const col = scoreColor(avg);
  const angle = (i) => (Math.PI*2*i/n) - Math.PI/2;
  const pt = (i,v) => ({ x: cx+v*mR*Math.cos(angle(i)), y: cy+v*mR*Math.sin(angle(i)) });
  const polyPts = keys.map((k,i)=>{ const p=pt(i,dims[k]/100); return `${p.x},${p.y}`; }).join(" ");
  return (
    <div style={{display:"flex",justifyContent:"center",padding:"48px 24px 36px"}}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{overflow:"visible"}}>
        {[1,2,3,4].map(l=>{
          const r=(l/4)*mR;
          const rp=keys.map((_,i)=>{ const a=angle(i); return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`; }).join(" ");
          return <g key={l}><polygon points={rp} fill="none" stroke="#1e1e1e" strokeWidth="0.5"/><text x={cx+4} y={cy-r+5} fill="#2a2a2a" fontSize={11} fontFamily="Palatino,serif">{l*25}</text></g>;
        })}
        {keys.map((_,i)=>{ const p=pt(i,1); return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#1a1a1a" strokeWidth="0.5"/>; })}
        <polygon points={polyPts} fill={`${col}22`} stroke={col} strokeWidth="1.5"/>
        {keys.map((k,i)=>{ const p=pt(i,dims[k]/100); return <circle key={k} cx={p.x} cy={p.y} r={4} fill={scoreColor(dims[k])} stroke="#0e0e0e" strokeWidth={2}/>; })}
        {keys.map((k,i)=>{
          const lx=cx+lR*Math.cos(angle(i)), ly=cy+lR*Math.sin(angle(i));
          return (
            <g key={k}>
              <text x={lx} y={ly-7} textAnchor="middle" fill="#888" fontSize={13} fontFamily="Palatino,serif" fontStyle="italic">{DIM_LABELS[k]}</text>
              <text x={lx} y={ly+16} textAnchor="middle" fill={scoreColor(dims[k])} fontSize={22} fontFamily="Palatino,serif">{dims[k]}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Badge ─────────────────────────────────────────────────────────
function Badge({ name }) {
  const [hov,setHov]=useState(false);
  return (
    <div style={{position:"relative",display:"inline-block"}} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <span style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",background:"#161616",border:"0.5px solid #2a2a2a",borderRadius:3,fontSize:15,color:"#c8a96e",fontStyle:"italic",cursor:"default"}}>{name}</span>
      {hov&&<div style={{position:"absolute",bottom:"calc(100% + 5px)",left:"50%",transform:"translateX(-50%)",background:"#111",border:"0.5px solid #2a2a2a",borderRadius:3,padding:"5px 10px",fontSize:13,color:"#888",fontStyle:"italic",whiteSpace:"nowrap",zIndex:20,pointerEvents:"none"}}>{BADGE_DESC[name]}</div>}
    </div>
  );
}

// ── Rater card ───────────────────────────────────────────────────
function RaterCard({ r }) {
  return (
    <div style={{background:"#111",border:"0.5px solid #1a1a1a",borderRadius:4,padding:"13px 15px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:36,height:36,borderRadius:"50%",background:avatarBg(r.overall),display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:500,color:scoreColor(r.overall),flexShrink:0}}>{r.avatar}</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:19,color:"#ddd"}}>{r.name} <span style={{color:"#555",fontSize:16}}>{r.handle}</span></div>
          <div style={{fontSize:15,color:"#555",fontStyle:"italic"}}>{r.lean} · {r.location}</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
          <span style={{fontSize:14,color:r.action==="repost"?"#c8a96e":"#3a3a3a",fontStyle:"italic",border:`0.5px solid ${r.action==="repost"?"#2a2220":"#1a1a1a"}`,padding:"2px 9px",borderRadius:2}}>{r.action}</span>
          <span style={{fontSize:24,color:scoreColor(r.overall)}}>{r.overall}</span>
        </div>
      </div>
      {r.badges.length>0&&<div style={{display:"flex",gap:6,marginTop:9,flexWrap:"wrap"}}>{r.badges.map(b=><Badge key={b} name={b}/>)}</div>}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────
export default function PostFeed() {
  const [posterOpen,setPosterOpen]=useState(false);
  const [reposterOpen,setReposterOpen]=useState(false);
  const [showRaters,setShowRaters]=useState(false);
  const reposters=RATERS.filter(r=>r.action==="repost");
  const avgCred=Math.round(reposters.reduce((s,r)=>s+r.overall,0)/reposters.length);

  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",fontFamily:"Palatino,'Book Antiqua',serif",padding:"32px 20px",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:640}}>
        <div style={{marginBottom:18}}>
          <div style={{fontSize:15,letterSpacing:".25em",color:"#444",textTransform:"uppercase",marginBottom:5}}>Radical Moderate · feed</div>
          <div style={{fontSize:18,color:"#555",fontStyle:"italic"}}>Post card — reader view</div>
        </div>

        <div style={{background:"#0e0e0e",border:"0.5px solid #252525",borderRadius:8,overflow:"hidden"}}>

          {/* Poster header */}
          <div style={{display:"flex",alignItems:"flex-start",gap:14,padding:"20px 22px 16px"}}>
            <div style={{width:50,height:50,borderRadius:"50%",background:avatarBg(POSTER.overall),border:`2px solid ${scoreColor(POSTER.overall)}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:500,color:scoreColor(POSTER.overall),flexShrink:0}}>{POSTER.avatar}</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",marginBottom:5}}>
                <span style={{fontSize:22,color:"#ddd"}}>{POSTER.name}</span>
                <span style={{fontSize:18,color:"#555",fontStyle:"italic"}}>{POSTER.handle}</span>
                <div onClick={()=>setPosterOpen(v=>!v)} style={{display:"inline-flex",flexDirection:"column",alignItems:"center",background:"#1a1010",border:`1px solid ${scoreColor(POSTER.overall)}44`,borderRadius:5,padding:"4px 11px",cursor:"pointer",lineHeight:1.1}}>
                  <span style={{fontSize:26,color:scoreColor(POSTER.overall),fontFamily:"Palatino,serif",lineHeight:1}}>{POSTER.overall}</span>
                  <span style={{fontSize:12,color:"#664444",fontStyle:"italic"}}>credibility</span>
                </div>
              </div>
              <div style={{fontSize:16,color:"#555",fontStyle:"italic"}}>{POSTER.location} · {POSTER.postsAnalyzed} posts analyzed · <span style={{color:scoreColor(POSTER.overall)}}>{POSTER.trend} this month</span> · 2h ago</div>
            </div>
          </div>

          {posterOpen&&(
            <div style={{padding:"0 22px 16px"}}>
              <div style={{background:"#111",border:"0.5px solid #1e1e1e",borderRadius:6,padding:16}}>
                <div style={{fontSize:14,color:"#3a3a3a",letterSpacing:".15em",textTransform:"uppercase",marginBottom:4}}>J. Hartwell · credibility breakdown</div>
                <SpiderChart dims={POSTER.dims}/>
              </div>
            </div>
          )}

          {/* Post text */}
          <div style={{padding:"0 22px 13px",fontSize:22,lineHeight:1.85,wordSpacing:2}}>
            {POST_WORDS.map((t,i)=><span key={i} style={{color:ioColor(t.s)}}>{t.w}{" "}</span>)}
          </div>

          {/* Legend */}
          <div style={{padding:"0 22px 16px",display:"flex",gap:18,alignItems:"center",flexWrap:"wrap"}}>
            {[["Factual",0],["Mixed",.5],["Normative",1]].map(([l,s])=>(
              <div key={l} style={{display:"flex",alignItems:"center",gap:7}}><div style={{width:9,height:9,borderRadius:"50%",background:ioColor(s)}}/><span style={{fontSize:16,color:"#555",fontStyle:"italic"}}>{l}</span></div>
            ))}
            <span style={{fontSize:15,color:"#3a3a3a",fontStyle:"italic",marginLeft:"auto"}}>Is/Ought analysis</span>
          </div>

          <div style={{borderTop:"0.5px solid #1a1a1a",margin:"0 22px"}}/>

          {/* Engagement */}
          <div style={{padding:"18px 22px"}}>
            <div style={{display:"flex",gap:24,alignItems:"flex-start",marginBottom:16}}>
              <div onClick={()=>setReposterOpen(v=>!v)} style={{flexShrink:0,background:"#111",border:"0.5px solid #252525",borderRadius:6,padding:"14px 18px",minWidth:160,cursor:"pointer"}}>
                <div style={{fontSize:16,color:"#888",fontStyle:"italic",lineHeight:1.3,marginBottom:8}}>Average reposter<br/>credibility score</div>
                <div style={{fontSize:46,color:scoreColor(avgCred),lineHeight:1}}>{avgCred}</div>
                <div style={{fontSize:15,color:"#555",fontStyle:"italic",marginTop:7}}>{reposters.length} reposters · tap to expand</div>
              </div>
              <div style={{flex:1,paddingTop:4}}>
                <div style={{fontSize:15,color:"#3a3a3a",letterSpacing:".15em",textTransform:"uppercase",marginBottom:12}}>Geographic reach · reposters</div>
                <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
                  {reposters.map((r,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:10,height:10,borderRadius:"50%",background:scoreColor(r.overall),flexShrink:0}}/>
                      <span style={{fontSize:18,color:"#aaa"}}>{r.location}</span>
                      <span style={{fontSize:15,color:"#555",fontStyle:"italic",marginLeft:"auto"}}>cred {r.overall}</span>
                    </div>
                  ))}
                </div>
                <div style={{fontSize:16,color:"#4ade80",fontStyle:"italic"}}>Cross-coast · 2,800 mi apart</div>
              </div>
            </div>

            {reposterOpen&&(
              <div style={{marginBottom:14}}>
                <div style={{background:"#111",border:"0.5px solid #1e1e1e",borderRadius:6,padding:16}}>
                  <div style={{fontSize:14,color:"#3a3a3a",letterSpacing:".15em",textTransform:"uppercase",marginBottom:4}}>Avg reposter · credibility breakdown</div>
                  <SpiderChart dims={REPOSTER_DIMS}/>
                </div>
              </div>
            )}

            <button onClick={()=>setShowRaters(v=>!v)} style={{width:"100%",background:"transparent",border:"0.5px solid #252525",color:"#666",padding:"9px 16px",borderRadius:4,fontSize:18,fontFamily:"Palatino,serif",fontStyle:"italic",cursor:"pointer"}}>
              {showRaters?"Hide":"Show"} who engaged · {RATERS.length} users
            </button>
            {showRaters&&(
              <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:6}}>
                {RATERS.map((r,i)=><RaterCard key={i} r={r}/>)}
              </div>
            )}
          </div>

          <div style={{borderTop:"0.5px solid #1a1a1a",margin:"0 22px"}}/>

          {/* Perspective check */}
          <div style={{padding:"18px 22px 22px"}}>
            <div style={{fontSize:15,letterSpacing:".2em",color:"#3a3a3a",textTransform:"uppercase",marginBottom:4}}>Perspective check</div>
            <div style={{fontSize:18,color:"#555",fontStyle:"italic",marginBottom:14}}>Two people worth knowing about</div>
            <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:14}}>
              <div style={{background:"#0c0c0c",border:"0.5px solid #1e1e1e",borderLeft:"3px solid #4a7ab5",borderRadius:0,padding:17}}>
                <div style={{fontSize:14,letterSpacing:".15em",color:"#4a7ab5",textTransform:"uppercase",marginBottom:10}}>Someone unlike you — nearby</div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:13}}>
                  <div style={{width:34,height:34,borderRadius:"50%",background:"#1a2a3a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:500,color:"#4ade80",flexShrink:0}}>SK</div>
                  <div>
                    <div style={{fontSize:19,color:"#ccc"}}>Sarah K.</div>
                    <div style={{fontSize:15,color:"#555",fontStyle:"italic"}}>Conservative · Chicago, IL · cred <span style={{color:"#4ade80"}}>83</span></div>
                  </div>
                </div>
                <div style={{fontSize:14,color:"#4a7ab5",fontStyle:"italic",marginBottom:10}}>0.4 mi from the original poster</div>
                <div style={{fontSize:18,color:"#777",fontStyle:"italic",lineHeight:1.55}}>"No corroboration from any credible source. Matches prior false military reports."</div>
                <div style={{marginTop:11,fontSize:15,color:"#3a3a3a",fontStyle:"italic"}}>Different background. Same neighborhood. Same conclusion.</div>
              </div>
              <div style={{background:"#0c0c0c",border:"0.5px solid #1e1e1e",borderLeft:"3px solid #c8a96e",borderRadius:0,padding:17}}>
                <div style={{fontSize:14,letterSpacing:".15em",color:"#c8a96e",textTransform:"uppercase",marginBottom:10}}>Someone like you</div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:13}}>
                  <div style={{width:34,height:34,borderRadius:"50%",background:"#3a2a10",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:500,color:"#c8a96e",flexShrink:0}}>JT</div>
                  <div>
                    <div style={{fontSize:19,color:"#ccc"}}>James T.</div>
                    <div style={{fontSize:15,color:"#555",fontStyle:"italic"}}>Progressive · Portland, OR · cred <span style={{color:"#c8a96e"}}>69</span></div>
                  </div>
                </div>
                <div style={{fontSize:14,color:"#555",fontStyle:"italic",marginBottom:10}}>Shares your background</div>
                <div style={{fontSize:18,color:"#777",fontStyle:"italic",lineHeight:1.55}}>"Unusual activity near the strait. Not ready to call this false — sourcing is weak but location is plausible."</div>
                <div style={{marginTop:11,fontSize:15,color:"#3a3a3a",fontStyle:"italic"}}>Same starting point — different conclusion.</div>
              </div>
            </div>
          </div>

        </div>
        <div style={{marginTop:14,fontSize:16,color:"#444",fontStyle:"italic",textAlign:"center"}}>Cooling period active · reactions visible in 14h · credibility scores update continuously</div>
      </div>
    </div>
  );
}
