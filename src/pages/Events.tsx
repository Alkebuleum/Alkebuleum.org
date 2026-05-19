import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const PAST = [
  {
    name: 'Consensus 2023',
    location: 'Austin, Texas · USA',
    date: 'April 2023',
    desc: 'Alkebuleum DAO met with blockchain developers and gathered feedback on the Pan-African DAO thesis. The foundations for the Layer 1 strategy were shaped here.',
  },
  {
    name: 'Liberia Anti-Corruption Launch',
    location: 'Paynesville, Liberia',
    date: 'July 2025',
    desc: 'Launched Liberia\'s first blockchain-based anti-corruption technology program — equipping youth and institutions with on-chain transparency tools.',
  },
]

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events — Alkebuleum</title>
        <meta name="description" content="Alkebuleum events — conferences, summits, and community gatherings across Africa and the diaspora." />
        <link rel="canonical" href="https://alkebuleum.org/events" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/events" />
        <meta property="og:title" content="Events — Alkebuleum" />
        <meta property="og:description" content="Alkebuleum events — conferences, summits, and community gatherings across Africa and the diaspora." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events — Alkebuleum" />
        <meta name="twitter:description" content="Alkebuleum events — conferences, summits, and community gatherings across Africa and the diaspora." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Community</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Events</h1>
          <p className="hero-sub" style={{ maxWidth: 500 }}>Where we've been, and where we're going next.</p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">— Upcoming</span>
          <h2 style={{ marginTop: 16, marginBottom: 24, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Join us next</h2>
          <div style={{ background: 'linear-gradient(135deg, #0d0818, #130d2a)', borderRadius: 20, padding: '40px 40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'radial-gradient(circle at 80% 50%, rgba(139,109,255,.25), transparent 55%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 16 }}>Stay updated</span>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-.02em', marginBottom: 16 }}>
                Upcoming events are announced in our community channels first.
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.65, maxWidth: 520, marginBottom: 28 }}>
                We attend blockchain conferences across Africa and the diaspora, host validator meetups, and run online community calls. Join Telegram to be the first to know.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btn btn-violet" href="https://t.me/alkebuleum" target="_blank" rel="noopener noreferrer">Join Telegram →</a>
                <a className="btn btn-outline" href="https://twitter.com/alkebuleum" target="_blank" rel="noopener noreferrer">Follow on X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">— History</span>
          <h2 style={{ marginTop: 16, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Past events</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PAST.map((e, i) => (
              <div key={e.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, padding: '28px 0', borderBottom: i < PAST.length - 1 ? '1px solid rgba(0,0,0,.08)' : 'none', alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--purple-deep)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{e.date}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{e.location}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: '#0a0a0c', marginBottom: 8 }}>{e.name}</div>
                  <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
