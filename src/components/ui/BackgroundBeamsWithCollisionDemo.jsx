import React from "react";
import BackgroundBeamsWithCollision from "../ui/BackgroundBeamsWithCollision";

import bg1 from "../../assets/images/BGG1.webp";
import bg2 from "../../assets/images/BGG2.webp";
import bg3 from "../../assets/images/BGG3.webp";

import { TypewriterEffectSmooth } from "./TypewriterEffectSmooth";

export function BackgroundBeamsWithCollisionDemo() {
  const images = [bg1, bg2, bg3, bg1, bg2, bg3]; // Simplified array of images
  return (
    <BackgroundBeamsWithCollision>
      {/* w-full  max-w-full md:max-w-[90%] lg:max-w-[80%] md:h-[80%]   h-[550px] */}
      <div className="size-full relative z-10 flex justify-center items-center">
        <TypewriterEffectSmooth  images={images} />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
