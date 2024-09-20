import React from "react";

import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import bg1 from "../../assets/images/BGG1.jpg";
import bg2 from "../../assets/images/BGG2.jpg";
import bg3 from "../../assets/images/BGG3.jpg";

import { TypewriterEffectDemo } from "../../components/ui/TypewriterEffectDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision bg1={bg1} bg2={bg2} bg3={bg3}>
      <h2 className="text-2xl w-[1600px]  md:h-[700px] h-[550px]  relative z-10 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
            <TypewriterEffectDemo />
      </h2>
      
    </BackgroundBeamsWithCollision>
  );
}
