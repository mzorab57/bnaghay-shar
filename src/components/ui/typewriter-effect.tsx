import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

import bg1 from "../../assets/images/BGG1.jpg"; // Add your images
import bg2 from "../../assets/images/BGG2.jpg";
import bg3 from "../../assets/images/BGG3.jpg";

const images = [bg1, bg2, bg3,bg1, bg2, bg3]; // List of images

export const TypewriterEffectSmooth = ({
  className,
  cursorClassName,
}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);


  // Render words function
  const renderWords = () => {
    
    return (
      <div className="relative">
     
        {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-screen  absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                opacity: currentIndex === index ? 1 : 0, // Only show the current image
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-md"
              />


            </div>

            
          ))}
            
      </div>
    );
  };

  return (
    <div className={cn("flex  space-x-1 my-6 h-full md:px-8 px-3 rounded-md", className)}>
      <motion.div
        className={`overflow-hidden w-full pb-2 shadow-xl shadow-blue-100/50`}
        initial={{
          height: "0%",
        }}
        animate={{
          height: "100%",
         
        }}
        transition={{
          duration: 2, // Animation duration for text reveal
          ease: "linear",
          repeat: Infinity, // Infinite repeat
          repeatDelay: 3, // Delay of 3 seconds after each repeat
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
     
    </div>
  );
};
