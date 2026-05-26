import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const CAPABILITIES = [
  { title: 'Institutional records', desc: 'Organizations anchor official records to the Alkebuleum ledger — creating a permanent, tamper-resistant audit trail that external parties can verify independently.' },
  { title: 'Document anchoring', desc: 'Certificates, contracts, deeds, licenses, and any signed document can be anchored with a cryptographic proof — making forgery detectable and verification instant.' },
  { title: 'Audit trails', desc: 'Every entry to AlkeLedger is immutable and timestamped. Institutions have a complete, non-repudiable record of organizational activity for compliance and accountability.' },
  { title: 'Trusted activity logs', desc: 'Council-validated institutions write organizational activity — disbursements, approvals, issuances — to a shared ledger that is publicly verifiable without exposing private data.' },
  { title: 'Cross-institutional trust', desc: 'Records anchored by one institution can be verified by any other institution or individual on the network — without manual verification processes or intermediaries.' },
  { title: 'Public-sector ready', desc: 'AlkeLedger is designed for the compliance, auditability, and accountability requirements of governments, ministries, and public sector agencies.' },
]

const USECASES = [
  { label: 'Land registries', desc: 'Property deeds anchored on-chain, eliminating paper-based disputes and enabling digital collateral.' },
  { label: 'Academic credentials', desc: 'Diplomas and certificates issued with verifiable, tamper-proof blockchain anchors — for graduates and employers.' },
  { label: 'Corporate governance', desc: 'Board resolutions, financial disclosures, and compliance records — permanently recorded and independently auditable.' },
  { label: 'Public procurement', desc: 'Tender awards, contracts, and procurement records anchored for public accountability and transparency.' },
  { label: 'NGO accountability', desc: 'Nonprofit disbursements, impact records, and donor reporting anchored to build institutional credibility.' },
]

const ECOSYSTEM = [
  { name: 'Alkebuleum Council', desc: 'Governance and reputable authority for the network.', href: '/council' },
  { name: 'AlkePay', desc: 'Payments that automatically anchor to AlkeLedger.', href: '/alkepay' },
  { name: 'AlkeID', desc: 'Identity infrastructure underlying ledger participation.', href: '/alkeid' },
  { name: 'AlkeCredit', desc: 'Credit reputation built from ledger activity.', href: '/alkecredit' },
  { name: 'AlkeCoin', desc: 'Native coin powering ledger transactions.', href: '/alkecoin' },
]

export default function AlkeLedger() {
  return (
    <>
      <Helmet>
        <title>AlkeLedger | Institutional Trust Ledger by Alkebuleum</title>
        <meta name="description" content="AlkeLedger is Alkebuleum's blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity." />
        <link rel="canonical" href="https://alkebuleum.org/alkeledger" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/alkeledger" />
        <meta property="og:title" content="AlkeLedger | Institutional Trust Ledger by Alkebuleum" />
        <meta property="og:description" content="AlkeLedger is Alkebuleum's blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlkeLedger | Institutional Trust Ledger by Alkebuleum" />
        <meta name="twitter:description" content="AlkeLedger is Alkebuleum's blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AlkeLedger | Institutional Trust Ledger by Alkebuleum",
          "url": "https://alkebuleum.org/alkeledger",
          "description": "AlkeLedger is Alkebuleum's blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Institutional ledger</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alke<span style={{ color: 'var(--purple)' }}>Ledger</span></h1>
          <p className="hero-sub" style={{ maxWidth: 600 }}>
            Blockchain-anchored ledger for institutions, records, documents, and accountability. Trusted organizational activity — permanently recorded, independently verifiable.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Get started →</a>
            <Link className="btn btn-dark" to="/council">Join the Council →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— What is AlkeLedger</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 24 }}>A trusted ledger for institutions</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15 }}>
            AlkeLedger is Alkebuleum's institutional-grade blockchain ledger — designed for governments, enterprises, nonprofits, and organizations that need to record, verify, and share trusted activity without relying on third-party intermediaries.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            When an institution anchors a record to AlkeLedger, that record becomes permanently timestamped and cryptographically verifiable. Any authorized party — whether a counterpart institution, a regulator, or an individual — can verify the record independently, without contacting the original issuer.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            AlkeLedger is the foundational layer for AlkeID (identity), AlkePay (payments), and AlkeCredit (credit) — providing the shared record of truth that the entire Alkebuleum trust infrastructure depends on.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Capabilities</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What AlkeLedger enables</h2>
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
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Who uses AlkeLedger</h2>
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
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Anchor your institution's records</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            AlkeLedger is available to institutions that are part of the Alkebuleum Council or working directly with a Council member. Contact us to learn how your organization can begin anchoring trusted records to the ledger.
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
