import React from "react";
import { Route, Routes } from "react-router-dom";
import { BackgroundBeamsWithCollisionDemo } from "../components/ui/BackgroundBeamsWithCollisionDemo";
import AboutUs from "../components/AboutUs";
import FeaturedService from "../components/FeaturedService";
import HeroParallaxDemo from "../components/ui/HeroParallaxDemo";
import ServicesSection from "../components/ServicesSection";
import Stats from "../components/Stats";
import VideoWorks from "../components/VideoWorks";
import Galary from "../pages/Galary";


const AppRoutes = () => {
  return (
    // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <BackgroundBeamsWithCollisionDemo />
              <AboutUs />
              <HeroParallaxDemo />
              <ServicesSection />
              <Stats />
              <FeaturedService />
              <VideoWorks />
        
            </>
          }
        />
        {/* {/* <Route path="/services" element={<ServicesSection />} /> */}
        <Route path="/gallery" element={<Galary />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
