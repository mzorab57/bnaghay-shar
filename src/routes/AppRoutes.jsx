import React from "react";
import { Route, Routes } from "react-router-dom";
import { BackgroundBeamsWithCollisionDemo } from "../components/ui/BackgroundBeamsWithCollisionDemo";
import AboutUs from "../components/AboutUs";
import FeaturedService from "../components/FeaturedService";
import HeroParallaxDemo from "../components/ui/HeroParallaxDemo";
import ServicesSection from "../components/ServicesSection";
import Stats from "../components/Stats";

const AppRoutes = ({ setMenuOpen }) => {
  return (
    // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
    <div onMouseOut={() => setMenuOpen(false)}>
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
              <Stats />
            </>
          }
        />
        {/* <Route path="/services" element={<ServicesSection />} />
        <Route path="/menu" element={<AllMenu />} /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
