// src/pages/Home.tsx

import HeroSection from "../components/home/HeroSection";
import RoadmapSection from "../components/home/RoadmapSection";
import JoinSection from "../components/home/JoinSection";
import BuildOnAlkebuleum from "../components/home/BuildOnAlkebuleum";
import InsightsSection from "../components/home/InsightsSection";
import Footer from "../components/layout/Footer";
import Seo from "../components/seo/Seo";

export default function Home() {
    return (
        <>
            <Seo
                title="Alkebuleum — Pan-African Blockchain for Identity, Governance & Finance"
                description="EVM-compatible chain advancing verifiable identity, reputation-weighted security, and transparent governance for Africa and the diaspora."
                url="https://alkebuleum.org/"
                image="https://alkebuleum.org/og/hero.jpg"
                canonical="https://alkebuleum.org/"
            />
            <HeroSection />
            <RoadmapSection />
            <JoinSection />
            <BuildOnAlkebuleum />
            <InsightsSection />
            <Footer />
        </>
    );
}
