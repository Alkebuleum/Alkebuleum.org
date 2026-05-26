import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const FEATURES = [
  { title: 'Reputation infrastructure', desc: 'AlkeCredit builds a verifiable reputation record from real, identity-linked activity — not self-reported data or opaque scoring algorithms.' },
  { title: 'Creditworthiness signals', desc: 'On-chain payment history, institutional endorsements, and record of fulfilled obligations form the basis of a transparent creditworthiness signal.' },
  { title: 'Trust history', desc: 'Every verified transaction, credential, and institutional interaction contributes to a participant\'s trust history — building a ledger of demonstrated reliability over time.' },
  { title: 'Identity-linked', desc: 'AlkeCredit is built on AlkeID — credit reputation is tied to a verified identity, not an anonymous wallet. This makes it meaningful to lenders and institutions.' },
  { title: 'Underserved markets', desc: 'AlkeCredit is designed for populations that traditional credit systems exclude — people with strong informal track records but no formal credit history.' },
  { title: 'Institutional credit', desc: 'Organizations build institutional credit records based on payment history, verified activity, and council participation — enabling access to financing and partnerships.' },
]

const USECASES = [
  { label: 'Individual credit', desc: 'Individuals build a credit reputation from verified payment and participation history — portable across any institution using the Alkebuleum network.' },
  { label: 'SME financing', desc: 'Small businesses access credit based on verified ledger activity rather than collateral or personal connections.' },
  { label: 'Lender integration', desc: 'Banks and microfinance institutions query AlkeCredit signals to supplement traditional assessment for underbanked populations.' },
  { label: 'Institutional trust scoring', desc: 'Organizations establish institutional credit and trust records for cross-border partnerships, procurement, and financing.' },
  { label: 'Diaspora remittance history', desc: 'A consistent record of cross-border remittances and payments builds credit reputation for diaspora senders and their families.' },
]

const ECOSYSTEM = [
  { name: 'Alkebuleum Council', desc: 'Governance and reputable authority for the network.', href: '/council' },
  { name: 'AlkeLedger', desc: 'The institutional ledger powering credit reputation records.', href: '/alkeledger' },
  { name: 'AlkePay', desc: 'Payment history that feeds AlkeCredit reputation.', href: '/alkepay' },
  { name: 'AlkeID', desc: 'The verified identity at the foundation of AlkeCredit.', href: '/alkeid' },
  { name: 'AlkeCoin', desc: 'Native coin powering the Alkebuleum network.', href: '/alkecoin' },
]

export default function AlkeCredit() {
  return (
    <>
      <Helmet>
        <title>AlkeCredit | Reputation and Credit Infrastructure for Africa</title>
        <meta name="description" content="AlkeCredit is Alkebuleum's reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation." />
        <link rel="canonical" href="https://alkebuleum.org/alkecredit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/alkecredit" />
        <meta property="og:title" content="AlkeCredit | Reputation and Credit Infrastructure for Africa" />
        <meta property="og:description" content="AlkeCredit is Alkebuleum's reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlkeCredit | Reputation and Credit Infrastructure for Africa" />
        <meta name="twitter:description" content="AlkeCredit is Alkebuleum's reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AlkeCredit | Reputation and Credit Infrastructure for Africa",
          "url": "https://alkebuleum.org/alkecredit",
          "description": "AlkeCredit is Alkebuleum's reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Reputation & credit</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alke<span style={{ color: 'var(--purple)' }}>Credit</span></h1>
          <p className="hero-sub" style={{ maxWidth: 600 }}>
            Reputation, trust, and creditworthiness infrastructure for people and organizations. Credit built from real, identity-linked activity on the Alkebuleum network.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Get started →</a>
            <Link className="btn btn-dark" to="/alkeid">Explore AlkeID →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— What is AlkeCredit</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 24 }}>Credit infrastructure built for Africa's economic reality</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15 }}>
            AlkeCredit is Alkebuleum's reputation and credit infrastructure — a system for building verifiable creditworthiness from real-world activity rather than historical relationships with traditional financial institutions.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            Across Africa and the diaspora, hundreds of millions of people have strong informal economic track records — years of on-time payments, fulfilled obligations, and trusted community participation — but no formal credit history. AlkeCredit gives that record a verifiable, portable form.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            Built on AlkeID and AlkeLedger, AlkeCredit ties credit reputation to a verified identity and a ledger of real activity — not an opaque score generated by an algorithm that individuals cannot access or understand. It is designed for lenders, institutions, and the communities they serve.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Features</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What AlkeCredit provides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Use cases</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Who uses AlkeCredit</h2>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {USECASES.map((u, i) => (
              <div key={u.label} style={{
                display: 'grid', gridTemplateColumns: '220px 1fr',
                padding: '18px 28px',
                borderBottom: i < USECASES.length - 1 ? '1px solid var(--line)' : undefined,
                background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)',
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{u.label}</span>
                <span style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{u.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 700 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Get started</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Integrate AlkeCredit for your organization</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            AlkeCredit is available to lenders, financial institutions, and organizations building credit and reputation products on the Alkebuleum network. Contact us to discuss how AlkeCredit can extend credit access for your customers or beneficiaries.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Contact us →</a>
            <Link className="btn btn-dark" to="/council">Learn about the Council →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Trust infrastructure</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 32 }}>Explore the ecosystem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {ECOSYSTEM.map(e => (
              <Link key={e.name} to={e.href} style={{ border: '1px solid var(--line)', borderRadius: 12, padding: '20px 22px', textDecoration: 'none', display: 'block', color: 'inherit' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 8, color: 'var(--purple-deep)' }}>{e.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.5 }}>{e.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
