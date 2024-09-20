import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

import bg1 from "../../assets/images/BGG1.jpg";
import bg2 from "../../assets/images/BGG2.jpg";
import bg3 from "../../assets/images/BGG3.jpg";

import { TypewriterEffectSmooth } from "./typewriter-effect";

export function BackgroundBeamsWithCollisionDemo() {
  const images = [bg1, bg2, bg3, bg1, bg2, bg3]; // Simplified array of images
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full max-w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] md:h-[80%] h-[550px] relative z-10 flex justify-center items-center">
        <TypewriterEffectSmooth className="w-full" images={images} />
       
      </div>
    </BackgroundBeamsWithCollision>
  );
}
