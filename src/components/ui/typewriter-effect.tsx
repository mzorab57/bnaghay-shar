import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";


export const TypewriterEffectSmooth = ({
  className,
  images
  // cursorClassName,
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
      <div className="relative h-[500px] lg:h-screen">
     
        {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full  absolute z-10  transition-opacity duration-1000 ease-in-out"
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
    <div className={cn("flex  space-x-1 sm:-translate-y-5 md:translate-y-0  h-[500px] lg:h-full md:px-8 p-5  rounded-md", className)}>
      <motion.div
        className={`overflow-hidden w-full  pb-2 shadow-xl shadow-blue-100/50 rounded-md`}
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
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold rounded-md"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
                  {/* Slide indicators */}
      <div className="absolute z-50 w-20  -bottom-5 lg:-bottom-10 left-[42%] lg:left-[48%] rounded-md  flex   gap-x-2 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-5 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gradient-to-t from-gray-300 via-gray-400 to-transparent rounded-md"
            }`}
          />
        ))}
      </div>
        </div>
      </motion.div>
     
    </div>
  );
};
