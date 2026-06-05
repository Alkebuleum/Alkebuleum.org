import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import AnalyticsRouterTracker from './analytics/AnalyticsRouterTracker'
import SvgSprite from './components/SvgSprite'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Events from './pages/Events'
import Grants from './pages/Grants'
import Tokenomics from './pages/Tokenomics'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Alkecoin from './pages/Alkecoin'
import Network from './pages/Network'
import AlkeLedger from './pages/AlkeLedger'
import AlkePay from './pages/AlkePay'
import AlkeID from './pages/AlkeID'
import AlkeCredit from './pages/AlkeCredit'
import Resources from './pages/Resources'
import BrandAssets from './pages/BrandAssets'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function RedirectToStatic({ to }: { to: string }) {
  useEffect(() => { window.location.replace(to) }, [to])
  return null
}

function RedirectToStaticPress() {
  const { slug } = useParams<{ slug: string }>()
  useEffect(() => { window.location.replace(`/media/press/${slug}.html`) }, [slug])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SvgSprite />
      <AnalyticsRouterTracker />
      <Routes>
        {/* Primary pages */}
        <Route path="/" element={<Home />} />
        <Route path="/council" element={<RedirectToStatic to="https://council.alkebuleum.org" />} />
        <Route path="/council/apply" element={<RedirectToStatic to="https://council.alkebuleum.org/council-apply.html" />} />
        <Route path="/council/brief" element={<RedirectToStatic to="https://council.alkebuleum.org/council-brief.html" />} />
        <Route path="/council/membership" element={<RedirectToStatic to="https://council.alkebuleum.org/council-membership.html" />} />
        <Route path="/alkeledger" element={<AlkeLedger />} />
        <Route path="/alkepay" element={<AlkePay />} />
        <Route path="/alkeid" element={<AlkeID />} />
        <Route path="/alkecredit" element={<AlkeCredit />} />
        <Route path="/alkecoin" element={<Alkecoin />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/brand-assets" element={<BrandAssets />} />

        {/* Existing pages */}
        <Route path="/apps" element={<Apps />} />
        <Route path="/events" element={<Events />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/network" element={<Network />} />

        {/* Media / Press room — redirect to explicit .html paths to avoid React Router loop */}
        <Route path="/media" element={<RedirectToStatic to="/media/index.html" />} />
        <Route path="/media/press" element={<RedirectToStatic to="/media/press/index.html" />} />
        <Route path="/media/press/:slug" element={<RedirectToStaticPress />} />

        {/* Redirects for broken/old URLs */}
        <Route path="/whitepaper" element={<RedirectToStatic to="/whitepaper.html" />} />
        <Route path="/vision" element={<Navigate to="/resources" replace />} />
        <Route path="/assets" element={<Navigate to="/brand-assets" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
