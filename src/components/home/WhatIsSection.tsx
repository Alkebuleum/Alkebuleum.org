export default function WhatIsSection() {
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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nPPiWE-Nqcs?si=tnctFmCUTSGj3U0O"
            title="Alkebuleum Explainer — Architecting Sovereign Trust"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: 18, display: 'block' }}
          />
          <div className="video-label">
            <span className="lab-tag">EXPLAINER</span>
            <span className="lab-title">Architecting Sovereign Trust · The Alkebuleum Protocol</span>
          </div>
        </div>
      </div>
    </section>
  )
}
