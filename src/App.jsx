import React, { useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import Navbar from "./layouts/Navbar";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-transparent">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}  />
      <BackgroundBeamsWithCollisionDemo />
     <AboutUs />
    </div>
  );
};

export default App;
