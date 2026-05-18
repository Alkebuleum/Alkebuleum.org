import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnalyticsRouterTracker from './analytics/AnalyticsRouterTracker'
import SvgSprite from './components/SvgSprite'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Assets from './pages/Assets'
import Events from './pages/Events'
import Grants from './pages/Grants'
import Tokenomics from './pages/Tokenomics'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SvgSprite />
      <AnalyticsRouterTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/events" element={<Events />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}
