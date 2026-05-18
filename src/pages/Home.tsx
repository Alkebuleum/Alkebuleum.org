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
        <title>Alkebuleum — The Blockchain Infrastructure for Digital Africa</title>
        <meta name="description" content="Sovereign blockchain infrastructure for identity, finance, and institutional records — built for governments, institutions, and the diaspora." />
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
