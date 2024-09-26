import React, { useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import Navbar from "./layouts/Navbar";
import AboutUs from "./components/AboutUs";
import FeaturedService from "./components/FeaturedService";
import HeroParallaxDemo from "./components/ui/HeroParallaxDemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesSection from "./components/ServicesSection";
import Stats from "./components/Stats";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <BackgroundBeamsWithCollisionDemo />
        <AboutUs />
      <Routes>
        <Route path="/" element={<HeroParallaxDemo />} />
      </Routes>
        <ServicesSection />
        <Stats />
        <FeaturedService />
    </Router>
  );
};

export default App;
