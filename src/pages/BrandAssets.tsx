import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const ASSETS = [
  { label: 'Primary logo', desc: 'The official Alkebuleum wordmark and logomark for light and dark backgrounds.', link: '/media/index.html#logos', linkText: 'Download logos →' },
  { label: 'Brand colors', desc: 'Official primary and secondary color palette with hex, RGB, and CMYK values.', link: 'mailto:info@alkebuleum.org', linkText: 'Request brand guide →' },
  { label: 'Typography', desc: 'Official typefaces and type scale used across all Alkebuleum communications.', link: 'mailto:info@alkebuleum.org', linkText: 'Request brand guide →' },
  { label: 'Social graphics', desc: 'Official cover images, profile photos, and social media assets for all platforms.', link: '/media/index.html', linkText: 'View media kit →' },
  { label: 'Media resources', desc: 'Press kit, factsheets, and institutional media assets for editorial and partner use.', link: '/alkebuleum-press-kit.zip', linkText: 'Download press kit →' },
  { label: 'Usage guidance', desc: 'Brand usage rules — what is permitted and what is not — for partners, press, and the community.', link: 'mailto:info@alkebuleum.org', linkText: 'Contact for guidelines →' },
]

export default function BrandAssets() {
  return (
    <>
      <Helmet>
        <title>Brand Assets | Alkebuleum</title>
        <meta name="description" content="Official Alkebuleum brand assets including logos, brand colors, media resources, and downloadable social graphics for press and partners." />
        <link rel="canonical" href="https://alkebuleum.org/brand-assets" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/brand-assets" />
        <meta property="og:title" content="Brand Assets | Alkebuleum" />
        <meta property="og:description" content="Official Alkebuleum brand assets including logos, brand colors, media resources, and downloadable social graphics." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Assets | Alkebuleum" />
        <meta name="twitter:description" content="Official Alkebuleum brand assets including logos, brand colors, media resources, and downloadable social graphics." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>

      <section className="hero" style={{ minHeight: '32vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Media & press</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Brand <span style={{ color: 'var(--purple)' }}>Assets</span></h1>
          <p className="hero-sub" style={{ maxWidth: 560 }}>
            Official Alkebuleum brand assets — logos, colors, typography, and media resources for press, partners, and the community.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="/media/index.html">Open media kit →</a>
            <a className="btn btn-dark" href="/alkebuleum-press-kit.zip">Download press kit →</a>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Available assets</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What's in the brand center</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {ASSETS.map(a => (
              <div key={a.label} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 10 }}>{a.label}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6, margin: '0 0 14px' }}>{a.desc}</p>
                <a href={a.link} style={{ fontSize: 13, color: 'var(--purple-deep)', fontWeight: 500, textDecoration: 'none' }}>{a.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 700 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Usage</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Brand usage guidelines</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
            The Alkebuleum brand represents Africa's sovereign trust infrastructure. When using our brand assets, please follow the official usage guidelines available in the brand center.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
            For specific press inquiries, partnership media requests, or custom usage that falls outside standard guidelines, contact us directly.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="/media/index.html">Open media kit →</a>
            <a className="btn btn-dark" href="mailto:info@alkebuleum.org">Media enquiries →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
