import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  className,
  images,
  // cursorClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Use a key to trigger re-render

  const text = "Bnaghay-Shar";
  const words = text.split(" ");
  const lastWord = words.pop(); // Extract the last word

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Render words function
  const renderWords = () => {
    return (
      <div className="relative h-[600px] lg:h-screen  ">
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
              className="w-full h-full object-cover rounded-none "
            />
          </div>
        ))}


      {/* Text Section */}
      <div className="flex flex-col absolute top-[30%] mx-4 z-10 items-start justify-start space-y-6 md:space-y-8">
        <div
          key={key}
          className="flex flex-col max-w-2xl items-start md:text-6xl  text-2xl text-white font-semibold overflow-hidden  animate-typewriter whitespace-nowrap"
          style={{
            transition: "width 0.4s ease-out", // Smooth transition
          }}
        >
          <p>Build design with</p>
          {words.join(" ")} <span className="text-sky-300 inline-flex pt-0 md:pt-3"> {lastWord}</span>{" "}
          
        </div>
       
        {/* Subtitle or Description */}
        <p className="text-md md:text-2xl text-white font-light max-w-2xl break-words whitespace-pre-wrap">
          Architecture never derived its force from stability of culture, but rather from the expression
          of those moments when that sense of stability slipped.
        </p>
      </div>

        
  
      </div>
    );
  };

  return (
    <div
      className={cn(
        "flex  space-x-1 sm:-translate-y-5 md:translate-y-0  h-[600px] lg:h-full md:px-8 p-8  ",
        className
      )}
    >
      <motion.div
        className={`overflow-hidden w-full  pb-2 shadow-lg shadow-blue-50/50 `}
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
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold "
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
          {/* Slide indicators */}
          <div className="absolute z-50 w-20  -bottom-10  lg:-bottom-10 left-[42%] lg:left-[48%]   flex   gap-x-2 ">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-5  ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-gradient-to-t from-gray-300 via-gray-400 to-transparent "
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
