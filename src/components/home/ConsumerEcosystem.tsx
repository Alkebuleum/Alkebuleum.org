import { Link } from 'react-router-dom'

const PROTOCOLS = [
  { num: '01', name: 'AlkeLedger',  sub: 'Ledger Protocol',   href: '/alkeledger' },
  { num: '02', name: 'AlkePay',     sub: 'Payment Protocol',  href: '/alkepay' },
  { num: '03', name: 'AlkeID',      sub: 'Identity Protocol', href: '/alkeid' },
  { num: '04', name: 'AlkeCredit',  sub: 'Credit Protocol',   href: '/alkecredit' },
]


/* ─────────────────────────────────────────
   Diagram: blockchain cube + 4 protocols + Nuru AI
   Two SVGs: desktop (880×520) and mobile (380×430)
───────────────────────────────────────── */
function NuruOrbit({ cx, r, dur, pathId }: { cx: number, r: number, dur: string, pathId: string }) {
  return (
    <g>
      <animateMotion dur={dur} repeatCount="indefinite">
        <mpath href={`#${pathId}`}/>
      </animateMotion>
      <circle r={r * 2.8} fill="rgba(251,191,36,0.1)" className="nuru-aura"/>
      <circle r={r * 1.8} fill="rgba(251,191,36,0.18)"/>
      <g className="nuru-rays-g">
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = a * Math.PI / 180
          const inner = r * 1.25, outer = r * 2.1
          return <line key={a}
            x1={Math.cos(rad)*inner} y1={Math.sin(rad)*inner}
            x2={Math.cos(rad)*outer} y2={Math.sin(rad)*outer}
            stroke="#fbbf24" strokeWidth={a % 90 === 0 ? r * 0.25 : r * 0.16}
            strokeLinecap="round" opacity={a % 90 === 0 ? 0.9 : 0.62}/>
        })}
      </g>
      <circle r={r} fill="#fde68a"/>
      <circle r={r * 0.46} fill="#d97706"/>
      <text y={r * 3.1} textAnchor="middle"
        fontFamily="'Space Grotesk',sans-serif" fontSize={r * 1.18} fontWeight="700"
        fill="rgba(253,230,138,0.9)" letterSpacing="0.05em">Nuru AI</text>
    </g>
  )
}

function CubeFaces({ cx, cy, s }: { cx: number, cy: number, s: number }) {
  // s = half-width of cube face
  const h = s * 0.56  // vertical half
  return (
    <>
      <polygon points={`${cx},${cy-s} ${cx+s},${cy-h} ${cx},${cy} ${cx-s},${cy-h}`}
        fill="#8b6dff" opacity="0.92"/>
      <polygon points={`${cx},${cy-s} ${cx+s},${cy-h} ${cx},${cy} ${cx-s},${cy-h}`}
        fill="rgba(255,255,255,0.22)" opacity="0.38"/>
      <polygon points={`${cx-s},${cy-h} ${cx},${cy} ${cx},${cy+s} ${cx-s},${cy+h}`}
        fill="#4a28d4" opacity="0.95"/>
      <polygon points={`${cx+s},${cy-h} ${cx},${cy} ${cx},${cy+s} ${cx+s},${cy+h}`}
        fill="#6644ee" opacity="0.95"/>
      <polygon points={`${cx},${cy-s} ${cx+s},${cy-h} ${cx+s},${cy+h} ${cx},${cy+s} ${cx-s},${cy+h} ${cx-s},${cy-h}`}
        fill="none" stroke="rgba(180,165,255,0.55)" strokeWidth="0.8"/>
      <line x1={cx} y1={cy} x2={cx} y2={cy+s}
        stroke="rgba(180,165,255,0.28)" strokeWidth="0.7"/>
    </>
  )
}

function ArchDiagram() {
  // ── Desktop layout (viewBox 880×520, center 440,280) ──
  const CX = 440, CY = 280
  const nodes = [
    { name: 'AlkeLedger', sub: 'Records',    x: CX,       y: CY - 185 },
    { name: 'AlkePay',    sub: 'Payments',   x: CX + 185, y: CY       },
    { name: 'AlkeCredit', sub: 'Reputation', x: CX,       y: CY + 185 },
    { name: 'AlkeID',     sub: 'Identity',   x: CX - 185, y: CY       },
  ]
  const lines = [
    { x1: CX,      y1: CY - 38, x2: CX,       y2: CY - 159, id: 'pl0' },
    { x1: CX + 38, y1: CY,      x2: CX + 127, y2: CY,       id: 'pl1' },
    { x1: CX,      y1: CY + 38, x2: CX,       y2: CY + 159, id: 'pl2' },
    { x1: CX - 38, y1: CY,      x2: CX - 127, y2: CY,       id: 'pl3' },
  ]

  // ── Mobile layout (viewBox 380×430, center 190,225) ──
  const MCX = 190, MCY = 225
  const mNodes = [
    { name: 'AlkeLedger', sub: 'Records',    x: MCX,        y: MCY - 145 },
    { name: 'AlkePay',    sub: 'Payments',   x: MCX + 130,  y: MCY       }, // 130 → right edge at 372, 8px from 380
    { name: 'AlkeCredit', sub: 'Reputation', x: MCX,        y: MCY + 145 },
    { name: 'AlkeID',     sub: 'Identity',   x: MCX - 130,  y: MCY       }, // 130 → left edge at 8
  ]
  const mLines = [
    { x1: MCX,       y1: MCY - 32, x2: MCX,       y2: MCY - 122, id: 'ml0' },
    { x1: MCX + 32,  y1: MCY,      x2: MCX + 82,  y2: MCY,       id: 'ml1' }, // ends ~4px before node left edge
    { x1: MCX,       y1: MCY + 32, x2: MCX,       y2: MCY + 122, id: 'ml2' },
    { x1: MCX - 32,  y1: MCY,      x2: MCX - 82,  y2: MCY,       id: 'ml3' }, // ends ~4px before node right edge
  ]

  const sharedParticles = (ls: typeof lines, prefix: string) => ls.map((l, i) => (
    <g key={l.id}>
      <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
        stroke="rgba(200,154,58,0.28)" strokeWidth="1.4"
        className="alke-flow" style={{ animationDelay: `${-i * 1.25}s` }}/>
      <line x1={l.x2} y1={l.y2} x2={l.x1} y2={l.y1}
        stroke="rgba(139,109,255,0.22)" strokeWidth="1"
        className="alke-ret" style={{ animationDelay: `${-i * 1.0 - 0.6}s` }}/>
      <circle r="3.5" fill="#c89a3a" opacity="0.9">
        <animateMotion dur={`${2.2 + i * 0.15}s`} repeatCount="indefinite" begin={`${-i * 0.55}s`}>
          <mpath href={`#${l.id}`}/></animateMotion>
      </circle>
      <circle r="3.5" fill="#c89a3a" opacity="0.9">
        <animateMotion dur={`${2.2 + i * 0.15}s`} repeatCount="indefinite" begin={`${-i * 0.55 - 1.1}s`}>
          <mpath href={`#${l.id}`}/></animateMotion>
      </circle>
      <circle r="2.5" fill="rgba(139,109,255,0.8)">
        <animateMotion dur={`${2.7 + i * 0.1}s`} repeatCount="indefinite"
          begin={`${-i * 0.4 - 0.8}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
          <mpath href={`#${l.id}`}/></animateMotion>
      </circle>
    </g>
  ))

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes alke-out  { to { stroke-dashoffset: -72; } }
        @keyframes alke-in   { to { stroke-dashoffset:  72; } }
        @keyframes cube-glow { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes card-fade { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes nuru-rays-spin { to { transform: rotate(360deg); } }
        @keyframes nuru-pulse { 0%,100%{opacity:.85} 50%{opacity:1} }
        .alke-flow { stroke-dasharray: 4 9; animation: alke-out 5s linear infinite; }
        .alke-ret  { stroke-dasharray: 3 11; animation: alke-in  6s linear infinite; }
        .cube-halo { animation: cube-glow 4s ease-in-out infinite; }
        .nuru-rays-g { animation: nuru-rays-spin 6s linear infinite; transform-origin: 0 0; }
        .nuru-aura { animation: nuru-pulse 2.5s ease-in-out infinite; }
        @keyframes node-light {
          0%, 44%, 56%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        /* Orbit: east(Pay t=0) → north(Ledger t=3.5s) → west(ID t=7s) → south(Credit t=10.5s)  */
        /* Peak at 50% = 7s. Shift -1s so glow peaks as Nuru arrives, not after.                 */
        /* delay = (pass_time - 1) - 7  →  pass_time - 8                                         */
        .node-glow-0 { animation: node-light 14s ease-in-out infinite; animation-delay: -4.5s; } /* Ledger  3.5-8=-4.5  */
        .node-glow-1 { animation: node-light 14s ease-in-out infinite; animation-delay: -8s;   } /* Pay     0-8=-8      */
        .node-glow-2 { animation: node-light 14s ease-in-out infinite; animation-delay: 2.5s;  } /* Credit  10.5-8=2.5  */
        .node-glow-3 { animation: node-light 14s ease-in-out infinite; animation-delay: -1s;   } /* ID      7-8=-1      */
        .arch-desktop { display: block; }
        .arch-mobile  { display: none; }
        @media (max-width: 640px) {
          .arch-desktop { display: none; }
          .arch-mobile  { display: block; }
        }
      `}</style>

      {/* ══ DESKTOP SVG ══ */}
      <div className="arch-desktop">
        <svg viewBox="0 0 880 520" fill="none" aria-hidden="true"
          style={{ width: '100%', display: 'block' }}>
          <defs>
            <radialGradient id="bgr" cx="50%" cy="54%" r="48%">
              <stop offset="0%" stopColor="#0e0a28"/>
              <stop offset="100%" stopColor="#06040f"/>
            </radialGradient>
            <radialGradient id="cgr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5e3aff" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#5e3aff" stopOpacity="0"/>
            </radialGradient>
            <pattern id="dotgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.6"/>
            </pattern>
            <path id="nuru-path" d={`M${CX+90},${CY} A90,90 0 0,0 ${CX-90},${CY} A90,90 0 0,0 ${CX+90},${CY}`}/>
            {lines.map(l => <path key={l.id+'-d'} id={l.id} d={`M${l.x1},${l.y1} L${l.x2},${l.y2}`}/>)}
          </defs>

          <rect width="880" height="520" rx="20" fill="url(#bgr)"/>
          <rect width="880" height="520" rx="20" fill="url(#dotgrid)"/>
          <circle cx={CX} cy={CY} r="90" stroke="rgba(251,191,36,0.18)" strokeWidth="1" strokeDasharray="3 6"/>
          <circle cx={CX} cy={CY} r="185" stroke="rgba(139,109,255,0.15)" strokeWidth="1" strokeDasharray="3 8"/>

          {/* Council */}
          <line x1={CX} y1="72" x2={CX} y2={CY-40} stroke="rgba(200,154,58,0.3)" strokeWidth="1" strokeDasharray="3 7"/>
          <rect x={CX-78} y="22" width="156" height="42" rx="8" fill="rgba(200,154,58,0.08)" stroke="rgba(200,154,58,0.4)" strokeWidth="1"/>
          <text x={CX} y="38" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="7.5" fontWeight="500" fill="rgba(200,154,58,0.6)" letterSpacing="0.14em">GOVERNANCE</text>
          <text x={CX} y="54" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="12" fontWeight="600" fill="rgba(253,226,138,0.9)">Alkebuleum Council</text>

          {sharedParticles(lines, 'pl')}

          {/* Cube */}
          <ellipse cx={CX} cy={CY} rx="54" ry="40" fill="url(#cgr)" className="cube-halo"/>
          <CubeFaces cx={CX} cy={CY} s={32}/>
          <text x={CX} y={CY+52} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="8" fontWeight="500" fill="rgba(200,190,255,0.65)" letterSpacing="0.15em">ALKEBULEUM BLOCKCHAIN</text>

          {/* Nuru AI */}
          <NuruOrbit cx={CX} r={8} dur="14s" pathId="nuru-path"/>

          {/* Protocol nodes */}
          {nodes.map((n, i) => (
            <g key={n.name} style={{ animation: `card-fade 0.5s ease-out ${i*0.1}s both` }}>
              <rect x={n.x-58} y={n.y-26} width="116" height="52" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(139,109,255,0.38)" strokeWidth="1"/>
              {/* Nuru AI proximity glow — synced to orbit timing */}
              <rect x={n.x-60} y={n.y-28} width="120" height="56" rx="10"
                fill="rgba(253,230,138,0.08)" stroke="rgba(251,191,36,0.9)" strokeWidth="1.5"
                className={`node-glow-${i}`} style={{ opacity: 0 }} pointerEvents="none"/>
              <rect x={n.x-38} y={n.y-26} width="76" height="1.5" rx="1" fill="rgba(139,109,255,0.55)"/>
              <text x={n.x} y={n.y-6} textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.88)">{n.name}</text>
              <text x={n.x} y={n.y+13} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="7.5" fontWeight="500" fill="rgba(139,109,255,0.55)" letterSpacing="0.12em">{n.sub.toUpperCase()}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* ══ MOBILE SVG (viewBox 380×430 — renders ~1:1 on phone, text stays large) ══ */}
      <div className="arch-mobile">
        <svg viewBox="0 0 380 430" fill="none" aria-hidden="true"
          style={{ width: '100%', display: 'block' }}>
          <defs>
            <radialGradient id="m-bgr" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#0e0a28"/>
              <stop offset="100%" stopColor="#06040f"/>
            </radialGradient>
            <radialGradient id="m-cgr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5e3aff" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#5e3aff" stopOpacity="0"/>
            </radialGradient>
            <pattern id="m-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0L0 0 0 30" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
            </pattern>
            <path id="m-nuru" d={`M${MCX+70},${MCY} A70,70 0 0,0 ${MCX-70},${MCY} A70,70 0 0,0 ${MCX+70},${MCY}`}/>
            {mLines.map(l => <path key={l.id+'-d'} id={l.id} d={`M${l.x1},${l.y1} L${l.x2},${l.y2}`}/>)}
          </defs>

          <rect width="380" height="430" rx="16" fill="url(#m-bgr)"/>
          <rect width="380" height="430" rx="16" fill="url(#m-dots)"/>
          <circle cx={MCX} cy={MCY} r="70" stroke="rgba(251,191,36,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
          <circle cx={MCX} cy={MCY} r="138" stroke="rgba(139,109,255,0.18)" strokeWidth="1" strokeDasharray="3 7"/>

          {/* Council */}
          <line x1={MCX} y1="52" x2={MCX} y2={MCY-34} stroke="rgba(200,154,58,0.35)" strokeWidth="1" strokeDasharray="3 6"/>
          <rect x={MCX-70} y="14" width="140" height="38" rx="7" fill="rgba(200,154,58,0.1)" stroke="rgba(200,154,58,0.45)" strokeWidth="1"/>
          <text x={MCX} y="29" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="8" fontWeight="500" fill="rgba(200,154,58,0.65)" letterSpacing="0.12em">GOVERNANCE</text>
          <text x={MCX} y="44" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="13" fontWeight="600" fill="rgba(253,226,138,0.92)">Alkebuleum Council</text>

          {sharedParticles(mLines, 'ml')}

          {/* Cube */}
          <ellipse cx={MCX} cy={MCY} rx="44" ry="32" fill="url(#m-cgr)" className="cube-halo"/>
          <CubeFaces cx={MCX} cy={MCY} s={26}/>
          <text x={MCX} y={MCY+44} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="7.5" fontWeight="500" fill="rgba(200,190,255,0.7)" letterSpacing="0.13em">ALKEBULEUM BLOCKCHAIN</text>

          {/* Nuru AI */}
          <NuruOrbit cx={MCX} r={7} dur="14s" pathId="m-nuru"/>

          {/* Protocol nodes — larger text for mobile */}
          {mNodes.map((n, i) => (
            <g key={n.name} style={{ animation: `card-fade 0.5s ease-out ${i*0.1}s both` }}>
              <rect x={n.x-52} y={n.y-24} width="104" height="48" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(139,109,255,0.42)" strokeWidth="1"/>
              {/* Nuru AI proximity glow */}
              <rect x={n.x-54} y={n.y-26} width="108" height="52" rx="9"
                fill="rgba(253,230,138,0.08)" stroke="rgba(251,191,36,0.9)" strokeWidth="1.5"
                className={`node-glow-${i}`} style={{ opacity: 0 }} pointerEvents="none"/>
              <rect x={n.x-34} y={n.y-24} width="68" height="1.5" rx="1" fill="rgba(139,109,255,0.6)"/>
              <text x={n.x} y={n.y-4} textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.9)">{n.name}</text>
              <text x={n.x} y={n.y+14} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="8.5" fontWeight="500" fill="rgba(139,109,255,0.6)" letterSpacing="0.1em">{n.sub.toUpperCase()}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export default function ConsumerEcosystem() {
  return (
    <>
      {/* ── 1. Diagram + heading (light) ── */}
      <section className="sec" id="ecosystem" style={{ paddingTop: 100, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow" style={{ color: 'var(--purple-deep)' }}>— The Trust Ecosystem</span>
            <h2>One chain. <span className="hl">Four protocols.</span><br />One sovereign AI.</h2>
            <p>The Alkebuleum Blockchain sits at the center — governed by the Council, orbited by AlkePay, AlkeLedger, AlkeCredit, and AlkeID, and illuminated by Nuru AI.</p>
          </div>

          <div style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 24px 60px -16px rgba(94,58,255,0.14), 0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <ArchDiagram />
          </div>
        </div>
      </section>

      {/* ── 2. Explore cards (light) ── */}
      <section className="sec" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="wrap">
          <h3 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(20px,2.5vw,28px)',
            letterSpacing: '-.02em',
            color: '#0a0a0a',
            marginBottom: 28,
          }}>
            Trust Protocols
          </h3>
          <div className="services" style={{ borderRadius: 16, overflow: 'hidden' }}>
            {PROTOCOLS.map(c => {
              return (
                <Link key={c.name} to={c.href} className="service" style={{ textDecoration: 'none' }}>
                  <div className="service-num">{c.num}</div>
                  <h3>{c.name}</h3>
                  <p style={{ marginBottom: 22 }}>{c.sub}</p>
                  <span className="more">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Meet Nuru (dark) ── */}
      <section style={{
        background: '#000',
        padding: '88px 0 100px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: '.14em', color: 'var(--nuru-gold)', fontWeight: 500 }}>
                  SOVEREIGN AI · LIVE
                </span>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}/>
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(32px,4vw,52px)',
                letterSpacing: '-.03em',
                color: '#fff',
                lineHeight: 1.05,
                marginBottom: 20,
              }}>
                Meet<br /><em style={{ fontStyle: 'normal', color: 'var(--nuru-gold)' }}>Nuru AI.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.65, marginBottom: 32, maxWidth: 480 }}>
                Sovereign AI assistant built natively on Alkebuleum. Send money, verify documents, manage your AlkeID — all in plain language. No crypto experience required.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                {[
                  'Speaks English, French, Swahili, Yoruba, Twi, and more',
                  'Guides you through AlkePay, AlkeID, and AlkeLedger natively',
                  'Confirms every action before it touches the chain',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="rgba(139,109,255,0.8)" strokeWidth="2.2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <polyline points="4,10 9,15 16,5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btn btn-violet"
                  href="https://play.google.com/store/apps/details?id=com.alkebuleum.nuru&pcampaignid=web_share"
                  target="_blank" rel="noopener noreferrer"
                >
                  Download on Google Play →
                </a>
                <a className="btn btn-ghost-light" href="https://nuruai.org" target="_blank" rel="noopener noreferrer">
                  Visit nuruai.org
                </a>
              </div>
            </div>

            {/* Chat preview */}
            <div style={{
              background: 'rgba(10,10,12,0.95)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '24px',
              maxWidth: 360,
              justifySelf: 'center',
              width: '100%',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--purple-deep), var(--nuru-gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#fff' }}>N</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Nuru</div>
                  <div style={{ fontSize: 10, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}/>
                    Online · Sovereign
                  </div>
                </div>
              </div>
              {[
                { role: 'ai',   text: 'Sannu! I\'m Nuru. Want to send money home, verify a document, or set up your AlkeID?' },
                { role: 'user', text: 'Send $200 to my sister in Lagos' },
                { role: 'ai',   text: '✓ Best route via Alkebuleum\n$200 → ₦186,400 · fee $0.80\nArrives in ~4 seconds' },
                { role: 'ai',   text: 'Confirm send?' },
                { role: 'user', text: 'Yes' },
              ].map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                  <div style={{
                    maxWidth: '80%', padding: '8px 12px',
                    borderRadius: msg.role === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    background: msg.role === 'user' ? 'var(--purple-deep)' : 'rgba(255,255,255,0.06)',
                    fontSize: 12.5, color: '#fff', lineHeight: 1.5, whiteSpace: 'pre-line',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 12, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Ask Nuru anything…</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(139,109,255,0.6)" strokeWidth="2" strokeLinecap="round"><path d="M2 8l12-5-4 12-2-5-6-2z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Apps built on Alkebuleum (light) ── */}
      <section className="sec" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--purple-deep)', marginBottom: 10, display: 'block' }}>— Built on Alkebuleum</span>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: '#0a0a0a', margin: 0 }}>
                Applications on the network
              </h3>
            </div>
            <a className="btn btn-dark" href="https://docs.alkebuleum.com" target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
              Build on Alkebuleum →
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, overflow: 'hidden' }}>
            {([
              { name: 'AfPass',      tag: 'Identity',       status: 'Live',         statusColor: '#0f6e3d', desc: 'The African Identity Passport — reusable KYC, cross-border verification, and selective disclosure built on AlkeID.', href: 'https://afpass.org',      domain: 'afpass.org',          isInternal: false as const },
              { name: 'DRIS',        tag: 'Document Trust', status: 'Early Access', statusColor: '#7c3aed', desc: 'Document registry and institutional signing on-chain. Diplomas, deeds, contracts — anchored to AlkeLedger.',        href: 'https://dris.cc',         domain: 'dris.cc',             isInternal: false as const },
              { name: 'JollofSwap',  tag: 'DeFi',           status: 'Live',         statusColor: '#0f6e3d', desc: "Africa's native decentralised exchange — swap tokens and provide liquidity with fees settled in ALKE.",        href: 'https://jollofswap.com',  domain: 'jollofswap.com',      isInternal: false as const },
              { name: 'Your app',    tag: 'Open to builders',status: 'Apply',        statusColor: '#1d4ed8', desc: 'Building on Alkebuleum? Get developer docs, grants, and ecosystem support to launch your application.',           href: '/grants',                 domain: 'Apply for a grant →', isInternal: true  as const },
            ] as const satisfies { name: string; tag: string; status: string; statusColor: string; desc: string; href: string; domain: string; isInternal: boolean }[]).map(app => {
              const Tag = app.isInternal ? Link as any : 'a'
              const linkProps = app.isInternal ? { to: app.href } : { href: app.href, target: '_blank', rel: 'noopener noreferrer' }
              return (
                <Tag key={app.name} {...linkProps}
                  style={{ display: 'block', background: '#fff', padding: '28px 28px 24px', textDecoration: 'none', color: 'inherit', transition: 'background .15s' }}
                  onMouseEnter={(e: any) => { e.currentTarget.style.background = '#faf9f7' }}
                  onMouseLeave={(e: any) => { e.currentTarget.style.background = '#fff' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9.5, letterSpacing: '.08em', fontWeight: 500, color: '#5b5b66' }}>{app.tag}</span>
                    <span style={{ fontSize: 9.5, fontWeight: 600, padding: '2px 7px', borderRadius: 99, background: app.statusColor, color: '#fff', letterSpacing: '.04em' }}>{app.status}</span>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: '#0a0a0a', marginBottom: 10 }}>{app.name}</div>
                  <p style={{ fontSize: 13.5, color: '#5b5b66', lineHeight: 1.6, margin: '0 0 18px' }}>{app.desc}</p>
                  <span style={{ fontSize: 12.5, color: 'var(--purple-deep)', fontWeight: 500 }}>{app.domain}</span>
                </Tag>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
