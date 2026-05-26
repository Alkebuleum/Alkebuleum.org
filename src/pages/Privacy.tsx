import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly — such as your name, email address, and message when you submit our contact form or apply for a developer grant.',
      'We automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and referring URLs. This is collected through Google Analytics to help us understand how the site is used.',
      'We do not collect wallet addresses, private keys, or any on-chain activity through this website. On-chain interactions occur through third-party apps (Amvault, JollofSwap, Governance Portal) that operate under their own terms.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'Contact form submissions are used solely to respond to your inquiry or process your grant application.',
      'Analytics data is used in aggregate to improve the website experience — understanding which pages are most useful and how visitors navigate the site.',
      'We do not sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'Google Analytics: We use Google Analytics to collect anonymized usage statistics. Google may process data in accordance with its own privacy policy. You can opt out using the Google Analytics Opt-out Browser Add-on.',
      'Firebase: Our backend infrastructure uses Google Firebase for contact form processing and data storage. Data is stored in accordance with Google\'s data processing terms.',
      'Telegram & X (Twitter): If you click links to our social channels, you are leaving this site and are subject to those platforms\' privacy policies.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'We use cookies for analytics purposes only. No tracking cookies are used for advertising or cross-site tracking.',
      'You can disable cookies in your browser settings. Note that some site functionality may be affected.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'Contact and grant application data is retained for as long as necessary to process your request, and for up to 3 years thereafter for record-keeping.',
      'Analytics data is retained in accordance with Google Analytics\' default retention settings (14 months).',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold about you.',
      'To exercise any of these rights, contact us at privacy@alkebuleum.org. We will respond within 30 days.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    body: [
      'This website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be noted with a revised "Last updated" date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'For privacy-related inquiries, contact us at privacy@alkebuleum.org or write to: Alkebuleum Foundation, info@alkebuleum.org.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Alkebuleum</title>
        <link rel="canonical" href="https://alkebuleum.org/privacy" />
        <meta name="description" content="Privacy Policy for Alkebuleum — how we collect, use, and protect your information on alkebuleum.org." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/privacy" />
        <meta property="og:title" content="Privacy Policy | Alkebuleum" />
        <meta property="og:description" content="Privacy Policy for Alkebuleum — how we collect, use, and protect your information on alkebuleum.org." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <section className="hero" style={{ minHeight: '30vh', paddingBottom: 60 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16, display: 'block' }}>— Legal</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Privacy Policy</h1>
          <p className="hero-sub" style={{ maxWidth: 480, fontSize: 15 }}>Last updated: May 2026</p>
        </div>
      </section>

      <section className="sec sec-white" style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 16, color: '#5b5b66', lineHeight: 1.75, marginBottom: 48 }}>
            Alkebuleum Foundation ("we", "us", or "our") operates alkebuleum.org. This Privacy Policy explains what information we collect, how we use it, and your rights with respect to that information.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SECTIONS.map((s, i) => (
              <div key={s.title} style={{ paddingTop: 36, paddingBottom: 36, borderTop: i > 0 ? '1px solid rgba(0,0,0,.08)' : 'none' }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--purple-deep)', minWidth: 24, paddingTop: 4 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: '#0a0a0c', marginBottom: 14, letterSpacing: '-.01em' }}>
                      {s.title}
                    </h2>
                    {s.body.map((p, j) => (
                      <p key={j} style={{ fontSize: 15, color: '#5b5b66', lineHeight: 1.75, marginBottom: j < s.body.length - 1 ? 12 : 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: '28px 32px', background: '#f6f4f1', borderRadius: 16 }}>
            <p style={{ fontSize: 14, color: '#5b5b66', lineHeight: 1.7, margin: 0 }}>
              Questions about this policy? Email{' '}
              <a href="mailto:privacy@alkebuleum.org" style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>privacy@alkebuleum.org</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
