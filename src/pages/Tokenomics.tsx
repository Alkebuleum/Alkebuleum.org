import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const DISTRIBUTION = [
  { label: 'Validator incentives', pct: 30, desc: 'Rewards distributed to founding council validators for securing the network via PORA consensus.' },
  { label: 'Ecosystem & grants', pct: 25, desc: 'Developer grants, DeFi liquidity bootstrapping, and ecosystem partner incentives.' },
  { label: 'Foundation reserve', pct: 20, desc: 'Long-term protocol development, partnerships, and institutional expansion. 4-year vesting.' },
  { label: 'Community & DAO', pct: 15, desc: 'Governance participation rewards, community programs, and Pan-African DAO treasury.' },
  { label: 'Team & advisors', pct: 10, desc: 'Core team and early advisors. 1-year cliff, 3-year linear vest.' },
]

const USES = [
  {
    title: 'Transaction fees',
    desc: 'All network transaction fees are denominated in USD and settled in ALKE. Predictable pricing for institutions and developers.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="12" width="30" height="18" rx="2"/><path d="M5 18h30M11 25h8"/></svg>,
  },
  {
    title: 'Validator staking',
    desc: 'Council validators lock ALKE as a security deposit. Their reputation and stake are both on the line — aligning incentives with network integrity.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4L8 10v10c0 9 5.5 16 12 19 6.5-3 12-10 12-19V10z"/><path d="M14 20l4 4 8-9"/></svg>,
  },
  {
    title: 'Governance votes',
    desc: 'ALKE holders participate in protocol governance — proposing and voting on upgrades, parameter changes, and grant allocations.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L4 14l16 8 16-8z"/><path d="M10 22v6c0 2 4 5 10 5s10-3 10-5v-6"/></svg>,
  },
  {
    title: 'Developer grants',
    desc: 'The grants program distributes ALKE to builders shipping infrastructure, dApps, and tooling that extends the Alkebuleum ecosystem.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 8h12l8 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"/><path d="M26 8v8h8M14 24l4 4 8-8"/></svg>,
  },
]

export default function Tokenomics() {
  return (
    <>
      <Helmet>
        <title>ALKE Tokenomics — Alkebuleum</title>
        <meta name="description" content="ALKE is the native asset of the Alkebuleum network. Chain ID 237422 · 18 decimals · EVM compatible · PORA consensus · 1B genesis supply." />
        <link rel="canonical" href="https://alkebuleum.org/tokenomics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/tokenomics" />
        <meta property="og:title" content="ALKE Tokenomics — Alkebuleum" />
        <meta property="og:description" content="Native asset of the Alkebuleum network. Chain ID 237422 · 18 decimals · EVM compatible · 1B genesis supply." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ALKE Tokenomics — Alkebuleum" />
        <meta name="twitter:description" content="Native asset of the Alkebuleum network. Chain ID 237422 · 18 decimals · EVM compatible · 1B genesis supply." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Network token</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>ALKE Tokenomics</h1>
          <p className="hero-sub" style={{ maxWidth: 520 }}>The native token of the Alkebuleum L1 — coordination, not speculation.</p>
        </div>
      </section>

      {/* Network details */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— Network</span>
          <h2 style={{ marginTop: 16, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>
            The token that coordinates the network
          </h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
            ALKE is not the product — the trust infrastructure is. The token exists to coordinate validators, align incentives, pay for network usage, and govern the protocol. It is the connective tissue, not the headline.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 60 }}>
            {[
              { label: 'Token symbol', value: 'ALKE' },
              { label: 'Chain ID', value: '237422' },
              { label: 'Network', value: 'Alkebuleum L1' },
              { label: 'Compatibility', value: 'EVM (Solidity)' },
              { label: 'Consensus', value: 'PORA' },
              { label: 'RPC', value: 'rpc.alkebuleum.com' },
            ].map(item => (
              <div key={item.label} style={{ background: '#f6f4f1', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: '#0a0a0c' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Uses */}
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 26, letterSpacing: '-.02em', marginBottom: 28 }}>Token utility</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 64 }}>
            {USES.map(u => (
              <div key={u.title} style={{ background: '#f6f4f1', borderRadius: 14, padding: '24px 24px 24px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0,0,0,.07)', color: 'var(--purple-deep)' }}>{u.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: '#0a0a0c', marginBottom: 6 }}>{u.title}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— Allocation</span>
          <h2 style={{ marginTop: 16, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Token distribution</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {DISTRIBUTION.map((d, i) => (
              <div key={d.label} style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: 20, alignItems: 'center', padding: '20px 0', borderBottom: i < DISTRIBUTION.length - 1 ? '1px solid rgba(0,0,0,.08)' : 'none' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: '#0a0a0c' }}>{d.label}</div>
                <div>
                  <div style={{ height: 6, borderRadius: 999, background: 'rgba(0,0,0,.08)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${d.pct}%`, background: 'var(--purple)', borderRadius: 999 }} />
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-mute)', marginTop: 6, lineHeight: 1.5 }}>{d.desc}</div>
                </div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: 'var(--purple-deep)', minWidth: 52, textAlign: 'right' }}>{d.pct}%</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 36, fontSize: 13, color: 'var(--ink-mute)' }}>Full tokenomics detail is covered in the <a href="/whitepaper.html" style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>Alkebuleum whitepaper →</a></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
