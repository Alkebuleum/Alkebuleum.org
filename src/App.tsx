import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import AnalyticsRouterTracker from "./analytics/AnalyticsRouterTracker";

// New imports for your static pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Whitepaper from "./pages/Whitepaper";
import VisionPaper from "./pages/VisionPaper";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import { Toolbar } from "@mui/material";
import Apps from "./pages/Apps";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsRouterTracker />
      <MainNavigation />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Apps page */}
        <Route
          path="/apps"
          element={
            <>
              <Apps />
            </>
          }
        />

        {/* Legal Pages */}
        <Route
          path="/terms"
          element={
            <>
              <Terms />
              <Footer />
            </>
          }
        />

        <Route
          path="/privacy"
          element={
            <>
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route
          path="/whitepaper"
          element={
            <>
              <Whitepaper />
              <Footer />
            </>
          }
        />
        <Route
          path="/vision"
          element={
            <>
              <VisionPaper />
              <Footer />
            </>
          }
        />
        <Route
          path="/assets"
          element={
            <>
              <Assets />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
