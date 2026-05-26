import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const ROLES = [
  { title: 'Governance guidance', desc: 'Council members help shape policy, protocol standards, and trust infrastructure decisions for the Alkebuleum network.' },
  { title: 'Reputable validation', desc: 'Institutions participate in PORA (Proof of Reputable Authority) consensus — validating network activity through institutional reputation.' },
  { title: 'Trust anchoring', desc: 'Council members issue and verify trusted records, credentials, and institutional documents anchored to AlkeLedger.' },
  { title: 'Ecosystem stewardship', desc: 'The Council guides the development of Alkebuleum\'s identity, records, payments, and digital sovereignty infrastructure.' },
]

const WHO = [
  { label: 'Public sector', desc: 'Government agencies, ministries, and public institutions seeking trusted digital infrastructure.' },
  { label: 'Enterprise', desc: 'Corporations and businesses committed to transparent, accountable organizational records.' },
  { label: 'Academic', desc: 'Universities, research institutions, and educational bodies anchoring credentials and research.' },
  { label: 'Civic & nonprofit', desc: 'NGOs, foundations, and civil society organizations building community trust infrastructure.' },
  { label: 'Community organizations', desc: 'Cooperatives, diaspora groups, and community-led institutions representing people across Africa.' },
]

const ECOSYSTEM = [
  { name: 'AlkeLedger', desc: 'Institutional ledger for records and accountability.', href: '/alkeledger' },
  { name: 'AlkePay', desc: 'Payment requests, collections, and disbursements.', href: '/alkepay' },
  { name: 'AlkeID', desc: 'Identity infrastructure for trusted participation.', href: '/alkeid' },
  { name: 'AlkeCredit', desc: 'Reputation and credit infrastructure for Africa.', href: '/alkecredit' },
  { name: 'AlkeCoin', desc: 'Native coin powering the Alkebuleum network.', href: '/alkecoin' },
]

export default function Council() {
  return (
    <>
      <Helmet>
        <title>Alkebuleum Council | Reputable Authority for Africa's Trust Layer</title>
        <meta name="description" content="The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa's trust layer for identity, records, payments, and digital sovereignty." />
        <link rel="canonical" href="https://alkebuleum.org/council" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/council" />
        <meta property="og:title" content="Alkebuleum Council | Reputable Authority for Africa's Trust Layer" />
        <meta property="og:description" content="The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa's trust layer for identity, records, payments, and digital sovereignty." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alkebuleum Council | Reputable Authority for Africa's Trust Layer" />
        <meta name="twitter:description" content="The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa's trust layer for identity, records, payments, and digital sovereignty." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Alkebuleum Council | Reputable Authority for Africa's Trust Layer",
          "url": "https://alkebuleum.org/council",
          "description": "The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa's trust layer.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Governance</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alkebuleum <span style={{ color: 'var(--purple)' }}>Council</span></h1>
          <p className="hero-sub" style={{ maxWidth: 600 }}>
            A council of reputable authorities helping guide Africa's trust layer for institutions, records, identity, payments, and digital sovereignty.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="mailto:council@alkebuleum.org">Express interest →</a>
            <Link className="btn btn-dark" to="/alkeledger">Explore AlkeLedger →</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— About the Council</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 24 }}>A Council of Reputable Authority</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15 }}>
            The Alkebuleum Council is the governance body at the heart of Africa's sovereign trust infrastructure. It brings together reputable institutions — from governments and universities to enterprises, nonprofits, and community organizations — to guide how trust, identity, records, and payments work across the continent and diaspora.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            Unlike a political body, the Council operates on the principle of institutional reputation. Members participate in the PORA (Proof of Reputable Authority) consensus mechanism, helping validate network activity through the weight of their organizational integrity and track record — not token holdings or anonymous staking.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
            The Council is the mechanism through which Alkebuleum remains accountable, community-governed, and aligned with the needs of African institutions, public-sector partners, and the global diaspora.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Council roles</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What Council members do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {ROLES.map(r => (
              <div key={r.title} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Participation</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Who can join</h2>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {WHO.map((w, i) => (
              <div key={w.label} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr',
                padding: '18px 28px',
                borderBottom: i < WHO.length - 1 ? '1px solid var(--line)' : undefined,
                background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)',
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{w.label}</span>
                <span style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 700 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Get involved</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Express interest in the Council</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            If your institution is committed to building trusted, accountable infrastructure for Africa and the diaspora, we invite you to express interest in joining the Alkebuleum Council. Membership is extended to reputable institutions with a demonstrated track record in their sector.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:council@alkebuleum.org">Contact the Council →</a>
            <Link className="btn btn-dark" to="/resources">Resources & documents →</Link>
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
