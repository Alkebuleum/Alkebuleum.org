const posts = [
  {
    cat: 'Foundation Letter',
    date: 'May 18, 2026',
    source: 'Alkebuleum Foundation',
    title: 'The ledger Africa was always going to build.',
    excerpt: 'For a thousand years, Africa has built institutions of trust — manuscript libraries, trade routes, councils of elders, central banks. This is the next one. A note on our new whitepaper, our new mark, and what we are choosing to be.',
    href: '/alkebuleum-blog-founding.html',
    internal: true,
    imgClass: 'post-img-foundation',
    icon: <svg viewBox="0 0 100 110"><use href="#logo" /></svg>,
  },
  {
    cat: 'Governance',
    date: 'July 2, 2025',
    source: 'Front Page Africa',
    title: "Alkebuleum Blockchain launches Liberia's first anti-corruption technology program",
    excerpt: 'Unveiled in Paynesville, the initiative equips youth and institutions with blockchain tools to enhance transparency and combat systemic corruption across Liberia.',
    href: 'https://frontpageafricaonline.com/news/alkebuleum-blockchain-launches-liberias-first-anti-corruption-technology-program/',
    internal: false,
    imgClass: 'post-img-governance',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4L10 10v10c0 9 6 17 14 20 8-3 14-11 14-20V10z"/>
        <path d="M17 24l5 5 9-10"/>
      </svg>
    ),
  },
  {
    cat: 'Ecosystem',
    date: 'April 30, 2023',
    source: 'Medium · Liberian Blockchain Forum',
    title: "The Future of Blockchain in Africa: Alkebuleum DAO's Mission to Create a Pan-African DAO",
    excerpt: 'After meetings at Consensus2023 and in Houston, Alkebuleum DAO outlines plans for a layer-one blockchain interoperable with African chains — built to drive innovation and address continental challenges.',
    href: 'https://medium.com/@liberianblockchainforum/the-future-of-blockchain-in-africa-alkebuleum-daos-mission-to-create-a-pan-african-dao-91541ad45b51',
    internal: false,
    imgClass: 'post-img-ecosystem',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18"/>
        <path d="M6 24h36M24 6a26 26 0 0 1 0 36M24 6a26 26 0 0 0 0 36"/>
      </svg>
    ),
  },
]

export default function BlogSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 'none', gap: 32, flexWrap: 'wrap', marginBottom: 52 }}>
          <div>
            <span className="eyebrow">— From the blog</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(34px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-.025em', marginTop: 20 }}>
              Latest from <span style={{ color: 'var(--purple-deep)' }}>Alkebuleum.</span>
            </h2>
          </div>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <a
              className="post"
              key={p.title}
              href={p.href}
              target={p.internal ? '_self' : '_blank'}
              rel={p.internal ? undefined : 'noopener noreferrer'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={`post-img ${p.imgClass}`}>
                {p.icon}
              </div>
              <div className="post-meta">
                <span className="cat">{p.cat}</span>
                <span className="date">{p.date}</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em' }}>
                {p.internal ? '✦ alkebuleum.org' : p.source}
              </div>
              <h4>{p.title}</h4>
              <p>{p.excerpt}</p>
              <span style={{ display: 'inline-block', marginTop: 14, fontSize: 13, color: 'var(--purple-deep)', fontWeight: 600 }}>
                {p.internal ? 'Read post →' : 'Read article →'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
