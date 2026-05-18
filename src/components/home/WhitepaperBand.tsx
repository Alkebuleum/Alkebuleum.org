export default function WhitepaperBand() {
  return (
    <section className="sec-whitepaper" id="whitepaper">
      <div className="wp-bg">
        <div className="wp-glow" />
        <div className="wp-grid-bg" />
      </div>
      <div className="wrap wp-grid-wrap">
        <div className="wp-content">
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 24 }}>— The whitepaper</div>
          <h2 className="wp-title">The thesis,<br /><em>in full.</em></h2>
          <p className="wp-lede">Twelve chapters covering the trust infrastructure thesis, the PORA consensus mechanism, the institutional validator set, the three core protocols, and the strategic alignment with the architects of Africa's digital future.</p>

          <ul className="wp-chapters">
            <li><span className="wp-num">01</span> The Trust Infrastructure Thesis</li>
            <li><span className="wp-num">02</span> PORA — Proof of Reputation and Authority</li>
            <li><span className="wp-num">03</span> The Validator Set</li>
            <li><span className="wp-num">04</span> Identity, Records, and Credit Protocols</li>
            <li><span className="wp-num">05</span> Strategic Alignment &amp; Roadmap</li>
          </ul>

          <div className="wp-cta">
            <a className="btn btn-light" href="/whitepaper.html" target="_blank" rel="noopener">Read whitepaper →</a>
            <a className="btn btn-ghost-light" href="/whitepaper.html" target="_blank" rel="noopener">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
          </div>

          <div className="wp-meta">
            <span>VERSION 2.0</span>
            <span className="wp-meta-dot">·</span>
            <span>MAY 2026</span>
            <span className="wp-meta-dot">·</span>
            <span>12 CHAPTERS</span>
          </div>
        </div>

        <div className="wp-preview">
          <div className="wp-cover">
            <div className="wp-cover-mark">
              <svg viewBox="0 0 100 110"><use href="#logo" /></svg>
            </div>
            <div className="wp-cover-eyebrow">WHITEPAPER · V2.0</div>
            <div className="wp-cover-title">A Ledger of Trust,<br /><em>Built by Africa.</em></div>
            <div className="wp-cover-sub">Sovereign blockchain infrastructure for identity, finance, and institutional records.</div>
            <div className="wp-cover-foot">
              <span><span className="lbl">ISSUED</span>MAY 2026</span>
              <span><span className="lbl">NETWORK</span>LAYER 1 · EVM</span>
            </div>
          </div>
          <div className="wp-cover-shadow" />
        </div>
      </div>
    </section>
  )
}
