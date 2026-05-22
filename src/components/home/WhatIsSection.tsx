import { useState } from 'react'

export default function WhatIsSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="sec">
      <div className="wrap whatis-grid">
        <div>
          <span className="eyebrow">— What is Alkebuleum</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginTop: 20 }}>
            A sovereign ledger, <span style={{ color: 'var(--purple-deep)' }}>built where it's used.</span>
          </h2>
          <p>Alkebuleum is a public, permissioned Layer 1 designed around the realities of African governance, commerce, and identity. Most blockchains were built for somewhere else. This one is built for here — and for the global family that's part of it.</p>
          <a className="btn btn-dark" href="#whitepaper">Learn more</a>
        </div>
        <div className="video-card video-real">
          {playing ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nPPiWE-Nqcs?autoplay=1&si=tnctFmCUTSGj3U0O"
              title="Alkebuleum Explainer — Architecting Sovereign Trust"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: 18, display: 'block' }}
            />
          ) : (
            <div
              onClick={() => setPlaying(true)}
              style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 55% 38%, #1e1040 0%, #0a0a0c 68%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg
                viewBox="0 0 100 110"
                style={{ width: 80, height: 88, filter: 'drop-shadow(0 0 28px rgba(124,58,237,0.6))' }}
              >
                <path fill="#7c3aed" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  d="M50,7 L86,28 Q90,30.5 90,35 L90,75 Q90,79.5 86,82 L50,103 L14,82 Q10,79.5 10,75 L10,35 Q10,30.5 14,28 Z"/>
                <line stroke="#ffffff" strokeWidth="5" strokeLinecap="round" x1="50" y1="27" x2="50" y2="83"/>
                <polyline fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="30,42 42,55 30,68"/>
                <polyline fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="20,45 29.3,55 20,65"/>
                <polyline fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="70,42 58,55 70,68"/>
                <polyline fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="80,45 70.7,55 80,65"/>
              </svg>
              <div className="video-play-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
            </div>
          )}
          {!playing && (
            <div className="video-label">
              <span className="lab-tag">EXPLAINER</span>
              <span className="lab-title">Architecting Sovereign Trust · The Alkebuleum Protocol</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
