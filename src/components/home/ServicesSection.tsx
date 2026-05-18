const services = [
  {
    num: '01 / Identity',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="7"/><path d="M10 40c2-8 8-12 14-12s12 4 14 12"/><path d="M32 14l3 3 6-6"/>
      </svg>
    ),
    title: 'Identity Service',
    desc: 'Self-sovereign IDs, verifiable credentials, and KYC primitives built directly into the protocol.',
    link: 'Explore Identity →',
    href: '#flagship',
  },
  {
    num: '02 / Tokens',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="14"/><path d="M24 14v20M18 19h12M18 29h12"/>
      </svg>
    ),
    title: 'Token Service',
    desc: 'Issue stablecoins, tokenized real-world assets, and CBDCs with compliance roles enforced natively.',
    link: 'Explore Tokens →',
    href: '#flagship',
  },
  {
    num: '03 / Consensus',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="24" r="4"/><circle cx="36" cy="14" r="4"/><circle cx="36" cy="34" r="4"/>
        <path d="M16 24l16-9M16 24l16 10M36 14v20"/>
      </svg>
    ),
    title: 'Consensus Service',
    desc: 'Tamper-proof, timestamped event ordering — perfect for audit logs, civic records, and supply chains.',
    link: 'Explore Consensus →',
    href: '#whitepaper',
  },
  {
    num: '04 / Smart Contracts',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8h16l8 8v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"/>
        <path d="M30 8v8h8M18 26l-3 3 3 3M26 26l3 3-3 3M23 24l-2 10"/>
      </svg>
    ),
    title: 'Smart Contracts',
    desc: 'EVM-compatible. Deploy Solidity contracts and existing tooling onto sovereign African infrastructure.',
    link: 'Explore EVM →',
    href: '#developers',
  },
]

export default function ServicesSection() {
  return (
    <section className="sec sec-white" id="network">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">— Network services</span>
          <h2>Native primitives for <span className="hl">institutional-grade</span> applications.</h2>
          <p>Four protocol-level services give builders the tools that governments, banks, and enterprises actually need — without bolting on extra contracts.</p>
        </div>
        <div className="services">
          {services.map((s) => (
            <div className="service" key={s.num}>
              <div className="service-num">{s.num}</div>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a className="more" href={s.href}>{s.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
