import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const TIERS = [
  {
    name: 'Research & Tooling',
    amount: 'Up to $5,000',
    color: 'var(--accent)',
    desc: 'For researchers, writers, and developers building small-scale tools, educational content, developer libraries, or documentation that advances the Alkebuleum ecosystem.',
    examples: ['Technical tutorials & docs', 'Open-source SDKs & libraries', 'Research papers', 'Community tools'],
  },
  {
    name: 'Builder Grant',
    amount: 'Up to $25,000',
    color: 'var(--purple)',
    desc: 'For teams building production-grade dApps, protocols, integrations, or developer infrastructure directly on the Alkebuleum network.',
    examples: ['dApps & consumer products', 'Protocol integrations', 'Developer infrastructure', 'DeFi primitives'],
  },
  {
    name: 'Infrastructure Grant',
    amount: '$25,000 – $100,000',
    color: 'var(--purple-deep)',
    desc: 'For teams building critical network infrastructure, institutional tooling, validator software, or major protocol extensions that benefit the entire ecosystem.',
    examples: ['Validator tooling', 'Block explorers', 'Institutional APIs', 'Core protocol extensions'],
  },
]

const CRITERIA = [
  'Builds on or directly integrates with the Alkebuleum network',
  'Open-source or committed to open-sourcing after grant period',
  'Clearly defined deliverables and timeline',
  'Benefits African institutions, communities, or the diaspora',
  'Team with demonstrated ability to execute',
]

export default function Grants() {
  return (
    <>
      <Helmet><title>Developer Grants — Alkebuleum</title></Helmet>
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Build</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Developer Grants</h1>
          <p className="hero-sub" style={{ maxWidth: 520 }}>Funding for builders who are extending the Alkebuleum ecosystem — tooling, dApps, research, and infrastructure.</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">— Grant tiers</span>
          <h2 style={{ marginTop: 16, marginBottom: 16, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Three tiers of funding</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 580, marginBottom: 52 }}>Grants are denominated in USD and disbursed in ALKE at the time of milestone completion. All grants require a public deliverable.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {TIERS.map(t => (
              <div key={t.name} style={{ background: '#f6f4f1', borderRadius: 18, padding: '32px', border: '1px solid rgba(0,0,0,.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: '#0a0a0c' }}>{t.name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: t.color, marginTop: 4, fontWeight: 600 }}>{t.amount}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--ink-mute)', fontSize: 14.5, lineHeight: 1.65, marginBottom: 16 }}>{t.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {t.examples.map(e => <span key={e} className="flag-feat">{e}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria + Apply */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <span className="eyebrow">— Eligibility</span>
              <h2 style={{ marginTop: 16, marginBottom: 28, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(22px,2.5vw,34px)', letterSpacing: '-.02em' }}>What we fund</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {CRITERIA.map((c, i) => (
                  <li key={c} style={{ display: 'flex', gap: 14, padding: '13px 0', borderBottom: i < CRITERIA.length - 1 ? '1px solid rgba(0,0,0,.08)' : 'none', fontSize: 14.5, color: '#3a3a44', alignItems: 'flex-start' }}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="var(--purple-deep)" strokeWidth="2.2" strokeLinecap="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 1 }}><polyline points="3,10 8,15 17,5"/></svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,.07)' }}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, color: '#0a0a0c', marginBottom: 12 }}>Apply for a grant</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.65, marginBottom: 28 }}>
                Send us a short description of what you're building, your team background, and which grant tier you're applying for. We review applications on a rolling basis.
              </p>
              <a className="btn btn-violet" href="mailto:grants@alkebuleum.org?subject=Grant Application" style={{ display: 'block', textAlign: 'center' }}>
                Apply via email →
              </a>
              <p style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 16, textAlign: 'center' }}>
                grants@alkebuleum.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
