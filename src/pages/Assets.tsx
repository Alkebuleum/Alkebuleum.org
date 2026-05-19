import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const COLORS = [
  { name: 'Purple', role: 'Primary', hex: '#8b6dff', dark: false },
  { name: 'Purple Deep', role: 'CTA & links', hex: '#5e3aff', dark: false },
  { name: 'Accent', role: 'Highlights', hex: '#c6b6ff', dark: true },
  { name: 'Black', role: 'Background', hex: '#000000', dark: false },
  { name: 'Near Black', role: 'Surface', hex: '#0a0a0c', dark: false },
  { name: 'Nuru Gold', role: 'Nuru brand', hex: '#c9993d', dark: true },
]

const FONTS = [
  { name: 'Space Grotesk', role: 'Display & headings', sample: 'The Ledger Africa Built.' },
  { name: 'Inter', role: 'Body & UI', sample: 'Sovereign infrastructure for digital Africa.' },
  { name: 'JetBrains Mono', role: 'Code & metadata', sample: 'chain_id: 237422 · rpc.alkebuleum.com' },
]

export default function Assets() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <>
      <Helmet>
        <title>Brand Assets — Alkebuleum</title>
        <meta name="description" content="Official Alkebuleum brand assets — logo files, colour palette, typography, and usage guidelines for partners, press, and ecosystem builders." />
        <link rel="canonical" href="https://alkebuleum.org/assets" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/assets" />
        <meta property="og:title" content="Brand Assets — Alkebuleum" />
        <meta property="og:description" content="Official Alkebuleum brand assets — logo files, colour palette, typography, and usage guidelines." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Assets — Alkebuleum" />
        <meta name="twitter:description" content="Official Alkebuleum brand assets — logo files, colour palette, typography, and usage guidelines." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Brand</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Brand Assets</h1>
          <p className="hero-sub" style={{ maxWidth: 500 }}>Official logos, colors, and typography. Use respectfully and maintain clear space.</p>
        </div>
      </section>

      {/* Logo */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">— The mark</span>
          <h2 style={{ marginTop: 16, marginBottom: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>The Alkebuleum mark</h2>
          <p style={{ color: 'var(--ink-mute)', maxWidth: 620, marginBottom: 48, lineHeight: 1.7 }}>
            A hexagon — the block a chain is built from. Inside: a vertical bar (the ledger), flanked by inward-pointing chevrons representing institutions converging on a shared sovereign record of truth.
          </p>

          <div className="brand-logo-grid">
            <div className="brand-logo-tile brand-logo-dark">
              <svg width="64" height="72"><use href="#logo-nav" /></svg>
              <span>Primary — on dark</span>
            </div>
            <div className="brand-logo-tile brand-logo-light">
              <svg width="64" height="72" style={{ color: '#000' }}>
                <use href="#logo" />
              </svg>
              <span>Outline — on light</span>
            </div>
            <div className="brand-logo-tile brand-logo-dark">
              <svg width="48" height="56" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <use href="#logo-bold" />
              </svg>
              <span>Bold — at opacity</span>
            </div>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 24 }}>
            SVG mark available in the page source. For full brand asset downloads, contact{' '}
            <a href="mailto:brand@alkebuleum.org" style={{ color: 'var(--purple-deep)' }}>brand@alkebuleum.org</a>
          </p>
        </div>
      </section>

      {/* Colors */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">— Color palette</span>
          <h2 style={{ marginTop: 16, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Brand colors</h2>
          <div className="brand-color-grid">
            {COLORS.map(c => (
              <div key={c.hex} className="brand-color-card">
                <div className="brand-swatch" style={{ background: c.hex }} />
                <div className="brand-color-info">
                  <div className="brand-color-name">{c.name}</div>
                  <div className="brand-color-role">{c.role}</div>
                  <button
                    className="brand-color-hex"
                    onClick={() => copy(c.hex)}
                    title="Copy hex"
                  >
                    {copied === c.hex ? '✓ Copied' : c.hex}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">— Typography</span>
          <h2 style={{ marginTop: 16, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Type system</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FONTS.map((f, i) => (
              <div key={f.name} style={{ padding: '28px 0', borderBottom: i < FONTS.length - 1 ? '1px solid rgba(0,0,0,.08)' : 'none' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 10 }}>
                  {f.name} · {f.role}
                </div>
                <p style={{ fontFamily: `'${f.name}', sans-serif`, fontSize: 'clamp(20px,3vw,32px)', color: '#0a0a0c', lineHeight: 1.2, margin: 0 }}>
                  {f.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">— Usage</span>
          <h2 style={{ marginTop: 16, marginBottom: 32, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>Guidelines</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Do</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Use the mark with adequate clear space', 'Use on dark or white backgrounds only', 'Maintain aspect ratio when scaling', 'Use approved color combinations'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#3a3a44' }}>
                    <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Don't</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Distort or stretch the mark', 'Use on busy or low-contrast backgrounds', 'Change the brand colors', 'Use the mark to imply partnership without approval'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#3a3a44' }}>
                    <span style={{ color: '#dc2626', flexShrink: 0 }}>✕</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-mute)' }}>
            For press kits, co-branding, or partnership usage — contact{' '}
            <a href="mailto:brand@alkebuleum.org" style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>brand@alkebuleum.org</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
