import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const FEATURES = [
  { title: 'Payment request links', desc: 'Organizations generate shareable payment request links — allowing counterparts, customers, or beneficiaries to pay in seconds without an account or app setup.' },
  { title: 'Collections', desc: 'Accept payments from individuals, institutions, and cross-border senders. Every collection is tracked, timestamped, and automatically recorded.' },
  { title: 'Disbursements', desc: 'Disburse funds to individuals, vendors, or partner organizations in bulk — with programmable logic for scheduled releases and milestone-based payouts.' },
  { title: 'Automatic ledger anchoring', desc: 'Every AlkePay transaction is automatically anchored to AlkeLedger — creating a permanent, auditable record of organizational payment activity.' },
  { title: 'Institutional payments', desc: 'AlkePay is designed for the payment workflows of governments, NGOs, enterprises, and institutional treasury operations — not consumer retail.' },
  { title: 'Stablecoin settlement', desc: 'Payments are denominated in stable units and settled in ALKE — giving organizations predictable pricing for cross-border and institutional transactions.' },
]

const USECASES = [
  { label: 'NGO disbursements', desc: 'Disburse grant funding to beneficiaries with automatic, auditable ledger records for donor reporting.' },
  { label: 'Government collections', desc: 'Accept fee, tax, or service payments with transparent, verifiable collection records anchored on-chain.' },
  { label: 'Payroll & salaries', desc: 'Schedule recurring disbursements to staff or contractors with cryptographic proof of payment.' },
  { label: 'Cross-border transfers', desc: 'Send and receive institutional payments across borders — with AlkeLedger confirming settlement.' },
  { label: 'Vendor payments', desc: 'Pay suppliers and partners with tamper-proof payment records — eliminating invoice disputes.' },
]

const ECOSYSTEM = [
  { name: 'Alkebuleum Council', desc: 'Governance and reputable authority for the network.', href: '/council' },
  { name: 'AlkeLedger', desc: 'The institutional ledger where every payment is anchored.', href: '/alkeledger' },
  { name: 'AlkeID', desc: 'Identity infrastructure for verified payment participants.', href: '/alkeid' },
  { name: 'AlkeCredit', desc: 'Credit reputation built from payment history.', href: '/alkecredit' },
  { name: 'ALKE', desc: 'Native asset settling every AlkePay transaction.', href: '/alkecoin' },
]

export default function AlkePay() {
  return (
    <>
      <Helmet>
        <title>AlkePay | Payments Anchored to the Alkebuleum Ledger</title>
        <meta name="description" content="AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger." />
        <link rel="canonical" href="https://alkebuleum.org/alkepay" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/alkepay" />
        <meta property="og:title" content="AlkePay | Payments Anchored to the Alkebuleum Ledger" />
        <meta property="og:description" content="AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlkePay | Payments Anchored to the Alkebuleum Ledger" />
        <meta name="twitter:description" content="AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AlkePay | Payments Anchored to the Alkebuleum Ledger",
          "url": "https://alkebuleum.org/alkepay",
          "description": "AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Payments & settlement</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alke<span style={{ color: 'var(--purple)' }}>Pay</span></h1>
          <p className="hero-sub" style={{ maxWidth: 600 }}>
            Payment request links, collections, disbursements, and automatic ledger updates. Every transaction anchored to AlkeLedger for permanent, auditable records.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:info@alkebuleum.org">Get started →</a>
            <Link className="btn btn-dark" to="/alkeledger">Learn about AlkeLedger →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— What is AlkePay</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 24 }}>Institutional payments, built on trust infrastructure</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15 }}>
            AlkePay is Alkebuleum's payment infrastructure for organizations — governments, enterprises, nonprofits, and institutions that need to collect, disburse, and track payments with verifiable records.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            Unlike traditional payment systems that produce receipts stored in closed databases, every AlkePay transaction is anchored to AlkeLedger — creating a tamper-proof, independently verifiable record of payment activity that persists beyond any single institution's systems.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            AlkePay is not a consumer remittance product. It is institutional payment infrastructure for the organizations that need clean payment records, cross-border settlement, and automatic accountability.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Features</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What AlkePay does</h2>
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
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Who uses AlkePay</h2>
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
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Integrate AlkePay for your organization</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            AlkePay is available to institutions participating in the Alkebuleum Council and to organizations building on the Alkebuleum network. Contact us to discuss integration for your organization's payment workflows.
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
