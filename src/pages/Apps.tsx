import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const APPS = [
  {
    name: 'Amvault',
    tagline: 'Your Alkebuleum wallet & identity hub',
    desc: 'Self-custodial wallet for managing ALKE, verifiable credentials, and on-chain activity. Your entry point to the Alkebuleum network.',
    category: 'Identity',
    status: 'live' as const,
    href: 'https://amvault.net',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="7"/><path d="M8 36c1.5-7 6-11 12-11s10.5 4 12 11"/>
        <path d="M26 12l3 3 5-5"/>
      </svg>
    ),
  },
  {
    name: 'Nuru',
    tagline: 'Your AI guide to the chain',
    desc: 'Sovereign AI assistant built natively on Alkebuleum — lowering the onboarding curve so anyone can send, save, verify, and transact in plain language.',
    category: 'AI',
    status: 'live' as const,
    href: 'https://nuruai.org',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="7"/><path d="M20 4v4M20 32v4M4 20h4M32 20h4"/>
        <path d="M8.9 8.9l2.8 2.8M28.3 28.3l2.8 2.8M28.3 11.7l-2.8 2.8M11.7 28.3l-2.8 2.8"/>
      </svg>
    ),
  },
  {
    name: 'JollofSwap',
    tagline: "Africa's sovereign DEX",
    desc: 'The native decentralized exchange of the Alkebuleum ecosystem. Swap tokens, provide liquidity, and earn yield — all on-chain.',
    category: 'DeFi',
    status: 'live' as const,
    href: 'https://jollofswap.com/',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14"/><path d="M20 10v20M13 15h14M13 25h14"/>
      </svg>
    ),
  },
  {
    name: 'Governance Portal',
    tagline: 'Vote on proposals and upgrades',
    desc: 'Stake, delegate, and vote on Alkebuleum governance proposals. Shape the protocol as a member of the founding council.',
    category: 'Governance',
    status: 'live' as const,
    href: 'https://ugov.cc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4L8 10v10c0 9 5.5 16 12 19 6.5-3 12-10 12-19V10z"/>
        <path d="M14 20l4 4 8-9"/>
      </svg>
    ),
  },
  {
    name: 'DiasporaPay',
    tagline: 'Cross-border payments for the diaspora',
    desc: 'Stablecoin-powered payments and remittances between African countries and the global diaspora — fast, cheap, sovereign.',
    category: 'Finance',
    status: 'soon' as const,
    href: '#',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="12" width="30" height="18" rx="2"/><path d="M5 18h30M11 25h8"/>
      </svg>
    ),
  },
  {
    name: 'Jengo',
    tagline: 'Escrow for remote work',
    desc: 'Escrow-based freelance marketplace for African builders and the diaspora — milestones secured by Alkebuleum smart contracts.',
    category: 'Community',
    status: 'soon' as const,
    href: '#',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32V18l12-10 12 10v14M15 32V24h10v8"/>
      </svg>
    ),
  },
]

const STATUS = {
  live: { label: 'Live', cls: 'pill-live' },
  soon: { label: 'Coming soon', cls: 'pill-soon' },
} as const

export default function Apps() {
  return (
    <>
      <Helmet>
        <title>Ecosystem Apps — Alkebuleum</title>
        <meta name="description" content="Explore apps built on the Alkebuleum network — Amvault, AfPass, AlkePay, LandLedger, DRIS, and more." />
        <link rel="canonical" href="https://alkebuleum.org/apps" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/apps" />
        <meta property="og:title" content="Ecosystem Apps — Alkebuleum" />
        <meta property="og:description" content="Explore apps built on the Alkebuleum network — Amvault, AfPass, AlkePay, LandLedger, DRIS, and more." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecosystem Apps — Alkebuleum" />
        <meta name="twitter:description" content="Explore apps built on the Alkebuleum network — Amvault, AfPass, AlkePay, LandLedger, DRIS, and more." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Ecosystem</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Apps on Alkebuleum</h1>
          <p className="hero-sub" style={{ maxWidth: 560 }}>Identity, governance, finance, and community tools built for Africa and the diaspora.</p>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="app-grid">
            {APPS.map(app => (
              <a
                key={app.name}
                className={`app-card${app.status === 'soon' ? ' app-card-soon' : ''}`}
                href={app.href}
                target={app.href.startsWith('http') ? '_blank' : undefined}
                rel={app.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ pointerEvents: app.status === 'soon' ? 'none' : undefined }}
              >
                <div className="app-card-top">
                  <div className="app-icon">{app.icon}</div>
                  <span className={`flag-pill ${STATUS[app.status].cls}`}>{STATUS[app.status].label}</span>
                </div>
                <div className="app-cat">{app.category}</div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-tagline">{app.tagline}</p>
                <p className="app-desc">{app.desc}</p>
                {app.status === 'live' && (
                  <span className="app-cta">Open app →</span>
                )}
              </a>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 52, fontSize: 14, color: 'var(--ink-mute)' }}>
            Building on Alkebuleum and want your app listed?{' '}
            <a href="mailto:info@alkebuleum.org" style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>Reach out →</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
