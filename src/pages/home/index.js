import { Fragment } from "react";
import HeroSection from "../../components/home/HeroSection";
import HowToSection from "../../components/home/HowToSection";
import TokenomicsSection from "../../components/home/TokenomicsSection";
import RoadmapSection from "../../components/home/RoadmapSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import WhyUsSection from "../../components/home/WhyUsSection";
import FaqSection from "../../components/home/FaqSection";
import TeamSection from "../../components/home/TeamSection";
import MainNavigation from "../../components/layout/Header/MainNavigation";
import Footer from "../../components/layout/Footer";

export default function Home() {
    return (
        <Fragment>
            <MainNavigation />
            <HeroSection />
            <FeaturesSection />
            <WhyUsSection />
            <HowToSection />
            <TokenomicsSection />
            <RoadmapSection />
            <FaqSection />
            <TeamSection />
            <Footer />
        </Fragment>
    );
}
