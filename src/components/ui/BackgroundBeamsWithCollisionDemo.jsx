import React from "react";
import BackgroundBeamsWithCollision from "../ui/BackgroundBeamsWithCollision";

import bg1 from "../../assets/images/gardenQaiwan (1).webp";
import bg2 from "../../assets/images/inter (5).webp";
// import bg3 from "../../assets/images/aboutUs.webp";
import bg4 from "../../assets/images/inter (4).webp";
import bg6 from "../../assets/images/ra (4).webp";

import { TypewriterEffectSmooth } from "./TypewriterEffectSmooth";

export function BackgroundBeamsWithCollisionDemo() {
  const images = [bg6, bg4, bg2,bg1 ]; // Simplified array of images
  return (
    <BackgroundBeamsWithCollision>
      {/* w-full  max-w-full md:max-w-[90%] lg:max-w-[80%] md:h-[80%]   h-[550px] */}
      <div className="size-full relative z-10 flex justify-center items-center">
        <TypewriterEffectSmooth images={images} />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
