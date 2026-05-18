import { useRef, useState } from 'react'

export default function WhatIsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

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
          <video
            ref={videoRef}
            controls
            preload="metadata"
            playsInline
            onPlay={() => setPlaying(true)}
          >
            <source src="/alkebuleum-explainer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing && (
            <button className="video-play-btn" onClick={handlePlay} aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
          <div className="video-label">
            <span className="lab-tag">EXPLAINER</span>
            <span className="lab-title">Architecting Sovereign Trust · The Alkebuleum Protocol</span>
          </div>
        </div>
      </div>
    </section>
  )
}
