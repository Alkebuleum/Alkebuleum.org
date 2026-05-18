export default function ConsumerEcosystem() {
  return (
    <>
      {/* Zone 1 — Intro */}
      <section className="eco-intro">
        <div className="wrap">
          <div className="eco-head">
            <span className="eyebrow">— Consumer Ecosystem</span>
            <h2>Real products.<br />Real usage. <em>Right now.</em></h2>
            <p>Alkebuleum isn't just infrastructure on a roadmap. It's already in people's pockets — through a growing stack of sovereign applications built directly on the chain, designed for the continent and the diaspora that powers it.</p>
          </div>
        </div>
      </section>

      {/* Zone 2 — Nuru */}
      <section className="nuru-band">
        <div className="nuru-bg-grid" />
        <div className="nuru-glow" />
        <div className="wrap">
          <div className="nuru-grid">
            <div>
              <div className="nuru-tag">
                <span className="nuru-tag-dot" />
                Sovereign AI · Live in the diaspora
              </div>
              <h2 className="nuru-title">Meet Nuru.<br /><em>Your AI guide to</em><br />the chain.</h2>
              <p className="nuru-sub">Nuru is a sovereign AI assistant built natively on Alkebuleum — lowering the onboarding curve for blockchain so anyone in the diaspora can send, save, verify, and transact in plain language. No crypto experience required.</p>
              <ul className="nuru-bullets">
                <li>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="4,10 9,15 16,5"/></svg>
                  Speaks the languages of the diaspora — English, French, Swahili, Yoruba, Twi, more
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="4,10 9,15 16,5"/></svg>
                  Guides users through AfPass, DRIS, and on-chain payments — natively
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="4,10 9,15 16,5"/></svg>
                  Confirms every action before it touches the chain. No surprises.
                </li>
              </ul>
              <div className="nuru-cta">
                <a className="btn btn-violet" href="https://play.google.com/store/apps/details?id=com.alkebuleum.nuru&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  Download Nuru
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </a>
                <a className="btn btn-ghost-light" href="https://nuruai.org" target="_blank" rel="noopener">See how it works</a>
              </div>
            </div>

            <div className="nuru-phone-wrap" aria-hidden="true">
              <div className="nuru-phone">
                <div className="nuru-phone-notch"><span>9:41</span><span>●●● 5G</span></div>
                <div className="nuru-phone-bar">
                  <div className="nuru-av">N</div>
                  <div style={{ flex: 1 }}>
                    <div className="nuru-brand">Nuru</div>
                    <div className="nuru-status">Online · Sovereign</div>
                  </div>
                </div>
                <div className="nuru-chat">
                  <div className="nuru-msg nuru-msg-ai">
                    <div className="nuru-bubble nuru-bubble-ai">Sannu! I'm Nuru. Want to send money home, verify a document, or set up your AfPass?</div>
                  </div>
                  <div className="nuru-msg nuru-msg-user">
                    <div className="nuru-bubble nuru-bubble-user">Send $200 to my sister in Lagos</div>
                  </div>
                  <div className="nuru-msg nuru-msg-ai">
                    <div className="nuru-bubble nuru-bubble-action">
                      ✓ Best route via Alkebuleum<br />
                      <strong>$200 → ₦186,400</strong> · fee $0.80<br />
                      Arrives in ~4 seconds
                    </div>
                  </div>
                  <div className="nuru-msg nuru-msg-ai">
                    <div className="nuru-bubble nuru-bubble-ai">Confirm send?</div>
                  </div>
                  <div className="nuru-msg nuru-msg-user">
                    <div className="nuru-bubble nuru-bubble-user">Yes</div>
                  </div>
                </div>
                <div className="nuru-chips">
                  <div className="nuru-chip">Send money</div>
                  <div className="nuru-chip">Verify ID</div>
                  <div className="nuru-chip">Land record</div>
                </div>
                <div className="nuru-input">
                  <span className="nuru-input-ph">Ask Nuru anything…</span>
                  <div className="nuru-send">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8l12-5-4 12-2-5-6-2z"/></svg>
                  </div>
                </div>
              </div>
              <a className="nuru-dl" href="https://play.google.com/store/apps/details?id=com.alkebuleum.nuru&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="nuru-dl-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M6 11l6 6 6-6M4 21h16"/></svg>
                </div>
                <div className="nuru-dl-text">
                  <span className="nuru-dl-label">Download on</span>
                  <span className="nuru-dl-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zone 3 — Flagship Cards */}
      <section className="flagship-band" id="flagship">
        <div className="wrap">
          <div className="flagship-head">
            <span className="eyebrow" style={{ color: 'var(--purple-deep)' }}>— Flagship products</span>
            <h3>What Nuru opens you into.</h3>
            <p>Three production-grade applications built on Alkebuleum — identity, document trust, and decentralized exchange for the continent.</p>
          </div>

          <div className="flagships">
            <a className="flag-card" href="https://afpass.org" target="_blank" rel="noopener">
              <div className="flag-visual flag-visual-afpass">
                <div className="passport-card">
                  <div className="pc-top">
                    <div className="pc-logo"><span className="pc-logo-mark" /> AfPass</div>
                    <div className="pc-chip" />
                  </div>
                  <div className="pc-mid">
                    <div className="pc-label">Sovereign Identity Passport</div>
                    <div className="pc-id">AF-2345-6789-ABCD</div>
                  </div>
                  <div className="pc-bot">
                    <div className="pc-name">Holder<strong>Adaeze Okonkwo</strong></div>
                    <div className="pc-qr">
                      {Array.from({ length: 25 }).map((_, i) => <span key={i} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flag-body">
                <div className="flag-meta">
                  <span className="flag-cat">Identity</span>
                  <span className="flag-pill pill-live">Live</span>
                </div>
                <h4 className="flag-h">AfPass —<br /><em>one passport, a continent of trust.</em></h4>
                <p className="flag-p">The African Identity Passport. Reusable KYC, cross-border business verification, and selective disclosure — built sovereign from the ground. Prove who you are across the continent without surrendering your private data.</p>
                <div className="flag-features">
                  <span className="flag-feat">Reusable KYC</span>
                  <span className="flag-feat">AfCFTA-ready</span>
                  <span className="flag-feat">Diaspora trust</span>
                  <span className="flag-feat">Verifiable credentials</span>
                </div>
                <div className="flag-foot">
                  <span className="flag-built">Built on Alkebuleum</span>
                  <span className="flag-link">Visit afpass.org →</span>
                </div>
              </div>
            </a>

            <a className="flag-card" href="https://dris.cc" target="_blank" rel="noopener">
              <div className="flag-visual flag-visual-dris">
                <div className="dris-doc">
                  <div className="dris-doc-head">
                    <span className="dris-doc-brand">DRIS</span>
                    <span className="dris-doc-ref">DRS-2026-44712</span>
                  </div>
                  <div className="dris-doc-title">Certificate of Property Deed</div>
                  <div className="dris-doc-sub">Issued by Metro Land Authority</div>
                  <div className="dris-doc-lines">
                    {Array.from({ length: 6 }).map((_, i) => <div className="dris-doc-line" key={i} />)}
                  </div>
                  <div className="dris-doc-seal">
                    <div className="dris-doc-check">
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4,10 9,15 16,5"/></svg>
                    </div>
                    <div className="dris-doc-anchor"><strong>Anchored · Block #1,847,223</strong>Verifiable forever</div>
                  </div>
                </div>
              </div>
              <div className="flag-body">
                <div className="flag-meta">
                  <span className="flag-cat">Document Trust</span>
                  <span className="flag-pill pill-early">Early Access</span>
                </div>
                <h4 className="flag-h">DRIS —<br /><em>any document, permanent proof.</em></h4>
                <p className="flag-p">Document Trust Infrastructure. Institutions issue diplomas, deeds, contracts, and licenses as verifiable digital documents — born on the blockchain, signed by the issuer, and provable forever. Document fraud, made obsolete.</p>
                <div className="flag-features">
                  <span className="flag-feat">Diplomas</span>
                  <span className="flag-feat">Deeds &amp; titles</span>
                  <span className="flag-feat">Contracts</span>
                  <span className="flag-feat">Public records</span>
                </div>
                <div className="flag-foot">
                  <span className="flag-built">Built on Alkebuleum</span>
                  <span className="flag-link">Visit dris.cc →</span>
                </div>
              </div>
            </a>
            <a className="flag-card" href="https://jollofswap.com/" target="_blank" rel="noopener noreferrer">
              <div className="flag-visual flag-visual-jollof">
                <div className="jollof-swap">
                  <div className="jollof-swap-label">Swap</div>
                  <div className="jollof-token">
                    <div className="jollof-token-left">
                      <div className="jollof-token-icon jollof-token-icon-alkeb">A</div>
                      <span className="jollof-token-name">ALKE</span>
                    </div>
                    <span className="jollof-token-amount">500</span>
                  </div>
                  <div className="jollof-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
                  </div>
                  <div className="jollof-token">
                    <div className="jollof-token-left">
                      <div className="jollof-token-icon jollof-token-icon-usdc">$</div>
                      <span className="jollof-token-name">USDC</span>
                    </div>
                    <span className="jollof-token-amount">124.80</span>
                  </div>
                  <div className="jollof-rate">1 ALKE ≈ 0.2496 USDC · fee 0.3%</div>
                  <div className="jollof-btn">Swap tokens</div>
                </div>
              </div>
              <div className="flag-body">
                <div className="flag-meta">
                  <span className="flag-cat">DeFi</span>
                  <span className="flag-pill pill-live">Live</span>
                </div>
                <h4 className="flag-h">Jollofswap —<br /><em>Africa's sovereign DEX.</em></h4>
                <p className="flag-p">The native decentralized exchange of the Alkebuleum ecosystem. Swap tokens, provide liquidity, and earn yield — all on-chain, all sovereign, with fees settled in $ALKE.</p>
                <div className="flag-features">
                  <span className="flag-feat">AMM liquidity pools</span>
                  <span className="flag-feat">ALKE pairs</span>
                  <span className="flag-feat">Low fees</span>
                  <span className="flag-feat">On-chain settlement</span>
                </div>
                <div className="flag-foot">
                  <span className="flag-built">Built on Alkebuleum</span>
                  <span className="flag-link">Launch app →</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Zone 4 — Pipeline */}
      <section className="pipeline-band">
        <div className="wrap">
          <div className="pipeline-head">
            <div>
              <span className="eyebrow">— In the pipeline</span>
              <h4>The next layer of the stack.</h4>
            </div>
            <p>Four sovereign-by-design products extending Alkebuleum across credit, health, payments, and land.</p>
          </div>

          <div className="pipeline-grid">
            <div className="pipe-card">
              <div className="pipe-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"/><path d="M8 13l3 3 5-6"/>
                </svg>
              </div>
              <h5 className="pipe-h">AlkeCredit</h5>
              <div className="pipe-sub">Sovereign Credit Layer</div>
              <p className="pipe-p">A privacy-preserving credit reputation built from verified payment, business, and repayment history — owned by the individual, queryable by any lender on the continent.</p>
              <span className="pipe-pill pill-beta">Beta</span>
            </div>

            <div className="pipe-card">
              <div className="pipe-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11h-4z" transform="translate(-2 0)"/>
                  <path d="M9 12h2v-2h2v2h2"/>
                </svg>
              </div>
              <h5 className="pipe-h">Asili Health</h5>
              <div className="pipe-sub">ZK Health &amp; Research</div>
              <p className="pipe-p">Patients own their health records. Researchers query population-level insights through zero-knowledge proofs — never the underlying data. Privacy and discovery, finally compatible.</p>
              <span className="pipe-pill pill-research">Research Phase</span>
            </div>

            <div className="pipe-card">
              <div className="pipe-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>
                </svg>
              </div>
              <h5 className="pipe-h">AlkePay</h5>
              <div className="pipe-sub">Payments &amp; Settlement</div>
              <p className="pipe-p">Stablecoin-denominated transfers, merchant settlement, and programmable disbursements. The rails under every Nuru remittance — built for African banks, ministries, and treasuries.</p>
              <span className="pipe-pill pill-pilot">Pilot</span>
            </div>

            <div className="pipe-card">
              <div className="pipe-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7"/>
                </svg>
              </div>
              <h5 className="pipe-h">LandLedger</h5>
              <div className="pipe-sub">Property &amp; Land Registry</div>
              <p className="pipe-p">Tokenized, dispute-resistant ownership records. A foundation for collateral, investment, and generational wealth — and a working alternative to paper registries vulnerable to dispute and decay.</p>
              <span className="pipe-pill pill-soon">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
