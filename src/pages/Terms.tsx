import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using alkebuleum.org (the "Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.',
      'These Terms apply to all visitors, users, developers, grant applicants, and any other parties who access or use the Site.',
    ],
  },
  {
    title: 'About Alkebuleum',
    body: [
      'Alkebuleum is an open blockchain network developed to serve African institutions, governments, and the global diaspora. The Site provides information about the network, its token (ALKE), ecosystem applications, developer resources, and grant programs.',
      'The Alkebuleum Foundation is not a financial institution, investment advisor, or broker-dealer. Nothing on this Site constitutes financial, legal, or investment advice.',
    ],
  },
  {
    title: 'Not Financial Advice',
    body: [
      'ALKE and all associated digital assets involve significant risk, including the risk of total loss. Cryptocurrency and blockchain technology are subject to rapid change, regulatory uncertainty, and market volatility.',
      'Nothing on this Site — including tokenomics documentation, ecosystem descriptions, or grant program materials — should be construed as a solicitation to buy or sell any digital asset.',
      'You are solely responsible for any decisions you make regarding digital assets. Consult a licensed financial advisor before making investment decisions.',
    ],
  },
  {
    title: 'Use of the Site',
    body: [
      'You may use the Site for lawful purposes only. You agree not to use the Site in any way that violates applicable local, national, or international law or regulation.',
      'You may not attempt to gain unauthorized access to any part of the Site, its servers, or any related systems. You may not use the Site to transmit harmful, offensive, or disruptive content.',
      'We reserve the right to terminate or restrict access to the Site at any time, for any reason, without notice.',
    ],
  },
  {
    title: 'Developer Grants',
    body: [
      'The Alkebuleum Developer Grant Program is provided at the sole discretion of the Alkebuleum Foundation. Submission of an application does not guarantee funding.',
      'Grant recipients agree to deliver the stated project milestones. Disbursement of ALKE tokens is contingent on milestone completion as evaluated by the Foundation.',
      'The Foundation reserves the right to modify, suspend, or terminate the grant program at any time.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'The Alkebuleum name, logo, and all related marks are trademarks of the Alkebuleum Foundation. Unauthorized use is prohibited. For brand usage guidelines, see the Brand Assets page.',
      'Open-source code repositories published under the Alkebuleum GitHub organization are licensed under their respective open-source licenses. Review each repository\'s LICENSE file before use.',
      'Site content — including text, graphics, and design — is © Alkebuleum Foundation. You may not reproduce or redistribute content without written permission.',
    ],
  },
  {
    title: 'Third-Party Links and Apps',
    body: [
      'The Site links to third-party applications (Amvault, JollofSwap, Nuru, Governance Portal, and others). These are independent products. We do not control their content, privacy practices, or terms of service.',
      'Use of third-party applications is at your own risk. We are not liable for any loss or damage resulting from your use of those applications.',
    ],
  },
  {
    title: 'Disclaimers and Limitation of Liability',
    body: [
      'THE SITE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, THE ALKEBULEUM FOUNDATION DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'IN NO EVENT SHALL THE ALKEBULEUM FOUNDATION BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE OR THE ALKEBULEUM NETWORK.',
      'THE FOUNDATION\'S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED $100 USD.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These Terms are governed by applicable international law and the laws of the jurisdiction in which the Alkebuleum Foundation is registered. Disputes shall be resolved through good-faith negotiation before any formal proceedings.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms at any time. Material changes will be indicated by a revised "Last updated" date. Continued use of the Site following changes constitutes your acceptance of the new Terms.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'For legal inquiries, contact legal@alkebuleum.org.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Helmet><title>Terms of Service — Alkebuleum</title></Helmet>
      <section className="hero" style={{ minHeight: '30vh', paddingBottom: 60 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16, display: 'block' }}>— Legal</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Terms of Service</h1>
          <p className="hero-sub" style={{ maxWidth: 480, fontSize: 15 }}>Last updated: May 2026</p>
        </div>
      </section>

      <section className="sec sec-white" style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 16, color: '#5b5b66', lineHeight: 1.75, marginBottom: 48 }}>
            Please read these Terms of Service carefully before using the Alkebuleum website or any associated services. These Terms constitute a legally binding agreement between you and the Alkebuleum Foundation.
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
              Legal questions? Email{' '}
              <a href="mailto:legal@alkebuleum.org" style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>legal@alkebuleum.org</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
