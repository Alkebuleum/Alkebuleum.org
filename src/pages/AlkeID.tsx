import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const CAPABILITIES = [
  { title: 'Trusted digital identity', desc: 'AlkeID creates verifiable identity records for people and institutions — linked to credentials, activity, and records on the Alkebuleum network.' },
  { title: 'Credential management', desc: 'Issue, hold, and verify credentials — academic qualifications, professional certifications, institutional memberships, and more — in a tamper-proof, portable format.' },
  { title: 'Institutional identity', desc: 'Organizations can establish verified institutional identities on AlkeLedger — enabling trusted interaction with other institutions, governments, and counterparts.' },
  { title: 'Identity-linked records', desc: 'AlkeID ties identity to activity on AlkeLedger — creating a coherent record of who did what, when, and under what authority.' },
  { title: 'Foundation for AlkeCredit', desc: 'A verified AlkeID is the starting point for AlkeCredit — enabling credit reputation to be built from real, identity-linked activity rather than arbitrary scores.' },
  { title: 'Selective disclosure', desc: 'Individuals share only what is necessary for each interaction — proving they hold a credential without exposing underlying personal data.' },
]

const USECASES = [
  { label: 'Personal identity', desc: 'Individuals establish a verified digital identity for participation in institutions, services, and network activity.' },
  { label: 'Institutional identity', desc: 'Organizations verify their institutional identity for trusted engagement with governments, partners, and the public.' },
  { label: 'Academic credentials', desc: 'Universities issue tamper-proof diplomas and transcripts — verifiable globally, held by graduates, not institutions.' },
  { label: 'Professional licensing', desc: 'Regulatory bodies issue licenses and certifications as verifiable digital credentials on the Alkebuleum network.' },
  { label: 'Cross-border identity', desc: 'A single AlkeID enables trusted participation across borders — removing the need to re-verify identity with each institution.' },
]

const ECOSYSTEM = [
  { name: 'Alkebuleum Council', desc: 'Governance and reputable authority for the network.', href: '/council' },
  { name: 'AlkeLedger', desc: 'The institutional ledger where identity activity is anchored.', href: '/alkeledger' },
  { name: 'AlkePay', desc: 'Payments linked to verified identity.', href: '/alkepay' },
  { name: 'AlkeCredit', desc: 'Credit reputation built from identity-linked activity.', href: '/alkecredit' },
  { name: 'AlkeCoin', desc: 'Native coin powering the Alkebuleum network.', href: '/alkecoin' },
]

export default function AlkeID() {
  return (
    <>
      <Helmet>
        <title>AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer</title>
        <meta name="description" content="AlkeID is Alkebuleum's identity infrastructure for trusted people, institutions, records, credentials, and digital participation." />
        <link rel="canonical" href="https://alkebuleum.org/alkeid" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/alkeid" />
        <meta property="og:title" content="AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer" />
        <meta property="og:description" content="AlkeID is Alkebuleum's identity infrastructure for trusted people, institutions, records, credentials, and digital participation." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer" />
        <meta name="twitter:description" content="AlkeID is Alkebuleum's identity infrastructure for trusted people, institutions, records, credentials, and digital participation." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer",
          "url": "https://alkebuleum.org/alkeid",
          "description": "AlkeID is Alkebuleum's identity infrastructure for trusted people, institutions, records, credentials, and digital participation.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Identity infrastructure</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alke<span style={{ color: 'var(--purple)' }}>ID</span></h1>
          <p className="hero-sub" style={{ maxWidth: 600 }}>
            Identity infrastructure for trusted people, institutions, records, credentials, and digital participation across the Alkebuleum trust layer.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Get started →</a>
            <Link className="btn btn-dark" to="/alkecredit">Explore AlkeCredit →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— What is AlkeID</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 24 }}>Identity infrastructure for Africa's trust layer</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15 }}>
            AlkeID is Alkebuleum's identity infrastructure — the system through which people and institutions establish verified, trusted digital identities on the network. It is not a wallet or a consumer application. It is foundational identity infrastructure for the entire Alkebuleum trust ecosystem.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            With AlkeID, individuals can hold verifiable credentials — academic qualifications, professional certifications, institutional affiliations — in a portable, self-sovereign format. Institutions can issue and verify those credentials without manual back-and-forth or reliance on siloed databases.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            AlkeID is the foundation for AlkeCredit (credit reputation), AlkeLedger (identity-linked records), and AlkePay (identity-verified payments). Without trusted identity, the rest of the trust infrastructure cannot function.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Capabilities</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What AlkeID enables</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {CAPABILITIES.map(c => (
              <div key={c.title} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Use cases</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Who uses AlkeID</h2>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {USECASES.map((u, i) => (
              <div key={u.label} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr',
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
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Build identity into your institution</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            AlkeID is available to institutions participating in the Alkebuleum Council and to developers building identity-integrated applications on the Alkebuleum network. Contact us to discuss how AlkeID can serve your organization's identity needs.
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
