import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ActiveEventBanner from '../components/home/ActiveEventBanner'
import HeroSection from '../components/home/HeroSection'
import TickerSection from '../components/home/TickerSection'
import WhatIsSection from '../components/home/WhatIsSection'
import ServicesSection from '../components/home/ServicesSection'
import CouncilSection from '../components/home/CouncilSection'
import WhitepaperBand from '../components/home/WhitepaperBand'
import ConsumerEcosystem from '../components/home/ConsumerEcosystem'
import DevelopersSection from '../components/home/DevelopersSection'
import BlogSection from '../components/home/BlogSection'
import BigCTASection from '../components/home/BigCTASection'
import Footer from '../components/layout/Footer'
import ContactModal from '../components/ContactModal'

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Alkebuleum — Africa's Sovereign Blockchain Infrastructure</title>
        <meta name="description" content="A public Layer 1 blockchain built for Africa — powering identity, documents, payments, and trusted records with Alkecoin (ALKE)." />
        <link rel="canonical" href="https://alkebuleum.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/" />
        <meta property="og:title" content="Alkebuleum — Africa's Sovereign Blockchain Infrastructure" />
        <meta property="og:description" content="A public Layer 1 blockchain built for Africa — powering identity, documents, payments, and trusted records with Alkecoin (ALKE)." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alkebuleum — Africa's Sovereign Blockchain Infrastructure" />
        <meta name="twitter:description" content="A public Layer 1 blockchain built for Africa — powering identity, documents, payments, and trusted records with Alkecoin (ALKE)." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>
      <ActiveEventBanner />
      <HeroSection onContact={() => setContactOpen(true)} />
      <TickerSection />
      <WhatIsSection />
      <ServicesSection />
      <CouncilSection />
      <WhitepaperBand />
      <ConsumerEcosystem />
      <DevelopersSection />
      <BlogSection />
      <BigCTASection onContact={() => setContactOpen(true)} />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
