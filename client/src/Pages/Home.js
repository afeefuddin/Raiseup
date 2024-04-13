import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Navbar from "../Components/ui/Navbar";
import HeroSection from "../Components/sections/HeroSection";

const Home = () =>{
    const { currentUser } = useAuth();
    const [activeLink, setActiveLink] = useState("home");

    const handleActiveLink = (link) => {
      setActiveLink(link);
    };
    return (
        <>
            <Navbar handleActiveLink={handleActiveLink} />
            <HeroSection />
        </>
    )

}

export default Home