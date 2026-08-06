import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const DOCS = [
  {
    category: 'Core documents',
    items: [
      { title: 'Alkebuleum Whitepaper', desc: 'The foundational document describing Africa\'s trust layer — identity, records, payments, and digital sovereignty.', href: '/whitepaper.html', external: false },
    ]
  },
  {
    category: 'Brand & media',
    items: [
      { title: 'Brand Assets', desc: 'Official logos, brand colors, typography guidelines, and downloadable media resources for press and partners.', href: '/brand', external: false },
    ]
  },
  {
    category: 'Developer resources',
    items: [
      { title: 'Developer documentation', desc: 'Technical documentation for building on the Alkebuleum network — RPC, smart contracts, SDKs, and APIs.', href: 'https://docs.alkebuleum.org', external: true },
      { title: 'Block explorer', desc: 'Explore transactions, blocks, and addresses on the Alkebuleum mainnet.', href: 'https://explorer.alkebuleum.com', external: true },
      { title: 'GitHub', desc: 'Open-source repositories for the Alkebuleum network, tools, and ecosystem projects.', href: 'https://github.com/alkebuleum', external: true },
    ]
  },
  {
    category: 'Ecosystem',
    items: [
      { title: 'AlkeLedger', desc: 'Blockchain-anchored ledger for institutional records, documents, and accountability.', href: '/alkeledger', external: false },
      { title: 'AlkePay', desc: 'Payment request links, collections, disbursements, and automatic ledger updates.', href: '/alkepay', external: false },
      { title: 'AlkeID', desc: 'Identity infrastructure for trusted people, institutions, credentials, and participation.', href: '/alkeid', external: false },
      { title: 'AlkeCredit', desc: 'Reputation and credit infrastructure for people and organizations.', href: '/alkecredit', external: false },
      { title: 'ALKE (Native Asset)', desc: 'Official details, exchange listing information, and tokenomics for ALKE.', href: '/alkecoin', external: false },
    ]
  },
  {
    category: 'Funding & support',
    items: [
      { title: 'Grants & funding', desc: 'Explore Alkebuleum grant and support opportunities for digital trust infrastructure, education, and institutional transformation.', href: '/grants', external: false },
    ]
  },
]

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources | Alkebuleum</title>
        <meta name="description" content="Explore Alkebuleum resources including whitepapers, official documents, brand assets, and ecosystem information." />
        <link rel="canonical" href="https://alkebuleum.org/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/resources" />
        <meta property="og:title" content="Resources | Alkebuleum" />
        <meta property="og:description" content="Explore Alkebuleum resources including whitepapers, official documents, brand assets, and ecosystem information." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources | Alkebuleum" />
        <meta name="twitter:description" content="Explore Alkebuleum resources including whitepapers, official documents, brand assets, and ecosystem information." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Resources | Alkebuleum",
          "url": "https://alkebuleum.org/resources",
          "description": "Explore Alkebuleum resources including whitepapers, official documents, brand assets, and ecosystem information.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '32vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Documents & resources</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Resources</h1>
          <p className="hero-sub" style={{ maxWidth: 560 }}>
            Official documents, ecosystem information, developer resources, and media assets for Alkebuleum.
          </p>
        </div>
      </section>

      {DOCS.map((section, si) => (
        <section key={section.category} className={si % 2 === 0 ? 'sec sec-white' : 'sec'}>
          <div className="wrap">
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '.08em', marginBottom: 20, color: 'var(--ink-mute)', textTransform: 'uppercase' }}>{section.category}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
              {section.items.map((item, i) => {
                const linkProps = item.external
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: item.href }
                return (
                  <a key={item.title} {...linkProps} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    padding: '20px 28px',
                    borderBottom: i < section.items.length - 1 ? '1px solid var(--line)' : undefined,
                    background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)',
                    textDecoration: 'none', color: 'inherit',
                  }}>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: 'var(--purple-deep)', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.4 }}>
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 700 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— More</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Need something specific?</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            For media inquiries, partnership resources, or specific institutional documents, contact us directly.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Contact us →</a>
            <Link className="btn btn-dark" to="/council">Alkebuleum Council →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
