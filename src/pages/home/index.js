import { Fragment } from "react";
import HeroSection from "../../components/home/HeroSection";
import DeveloperSection from "../../components/home/DeveloperSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import WhyUsSection from "../../components/home/WhyUsSection";
import FaqSection from "../../components/home/FaqSection";
import NetworkSection from "../../components/home/NetworkSection";
import MainNavigation from "../../components/layout/Header/MainNavigation";
import Footer from "../../components/layout/Footer";

export default function Home() {
    return (
        <Fragment>
            <MainNavigation />
            <HeroSection />
            <FeaturesSection />
            <WhyUsSection />
            <DeveloperSection />
            <NetworkSection />
            <FaqSection />
            <Footer />
        </Fragment>
    );
}
