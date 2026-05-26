import { Link } from 'react-router-dom'

const ECOSYSTEM = [
  {
    name: 'Alkebuleum Council',
    desc: 'A council of reputable authorities helping guide Africa\'s trust layer for institutions, records, identity, payments, and digital sovereignty.',
    href: '/council',
  },
  {
    name: 'AlkeLedger',
    desc: 'Blockchain-anchored ledger for institutions, records, documents, and accountability.',
    href: '/alkeledger',
  },
  {
    name: 'AlkePay',
    desc: 'Payment request links, collections, disbursements, and automatic ledger updates.',
    href: '/alkepay',
  },
  {
    name: 'AlkeID',
    desc: 'Identity infrastructure for trusted people, institutions, credentials, and digital participation.',
    href: '/alkeid',
  },
  {
    name: 'AlkeCredit',
    desc: 'Reputation, trust, and creditworthiness infrastructure for people and organizations.',
    href: '/alkecredit',
  },
  {
    name: 'AlkeCoin',
    desc: 'The native coin used to power transactions, network participation, and the Alkebuleum trust layer.',
    href: '/alkecoin',
  },
]

export default function TrustInfrastructure() {
  return (
    <section className="sec sec-white" id="trust-infrastructure">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>— The ecosystem</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', fontSize: 'clamp(28px,4vw,44px)', margin: '0 auto 16px', maxWidth: 640 }}>
            The Alkebuleum Trust Infrastructure
          </h2>
          <p style={{ color: 'var(--ink-mute)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Six components working together to make Africa's institutions, people, records, and transactions trusted and verifiable.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {ECOSYSTEM.map((item, i) => (
            <Link
              key={item.name}
              to={item.href}
              style={{
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: '28px 28px 24px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                background: '#fff',
                transition: 'box-shadow .15s, border-color .15s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(94,58,255,.08)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(94,58,255,.3)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = ''
                ;(e.currentTarget as HTMLElement).style.borderColor = ''
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, fontSize: 13,
                flexShrink: 0,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 8, color: 'var(--ink)' }}>{item.name}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                <span style={{ fontSize: 13, color: 'var(--purple-deep)', fontWeight: 500 }}>Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
