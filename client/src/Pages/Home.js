import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Navbar from "../Components/ui/Navbar";
import HeroSection from "../Components/sections/HeroSection";
import Footer from "../Components/ui/Footer";
import FeaturesSection from "../Components/sections/FeaturesSection";
import TopStartups from "../Components/sections/TopStartups";
import TeamsSection from "../Components/sections/TeamSection";

const Home = () => {
    const { currentUser } = useAuth();
    const page = currentUser ? "/dashboard" : "/signup";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [activeLink, setActiveLink] = useState("home");

    const handleActiveLink = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <Navbar
                activeLink={activeLink}
                isMenuOpen={isMenuOpen}
                handleActiveLink={handleActiveLink}
                handleMenuToggle={handleMenuToggle}
                page={page}
            />
            <HeroSection />
            <FeaturesSection />
            <TopStartups />
            <TeamsSection />
            <Footer />
        </>
    )

}

export default Home