import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
        <Route path="/events" element={<Events />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/alkecoin" element={<Alkecoin />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </BrowserRouter>
  )
}
