import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Key to force re-render

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  // Renders the words and the background images
  const renderWords = () => {
    return (
      <div
      className="size-full ">
        {/* Background images with fade-in effect */}
        {images.map((image, index) => (
          <div
         
            key={index}
            className="absolute size-full transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              loading="lazy"
              src={image}
              alt={`Slide ${index}`}
              className="object-cover size-full brightness-75 "
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={"relative h-[550px] lg:h-[700px] w-[1200px] mx-6  shadow-lg shadow-gray-50/20 "}>
      <motion.div
        className=" "
        initial={{  opacity:0 }}
        animate={{  opacity:1  }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        {/* Render the main content */}
        {renderWords()}
        {/* Text Section */}
        <div className="flex flex-col justify-center pl-4  h-full absolute ">
          <div
            key={key}
            className="  max-w-2xl text-white font-semibold text-3xl md:text-4xl xl:text-6xl whitespace-nowrap overflow-hidden"
            style={{
              transition: "width 0.4s  ease-out",
            }}
          >
            <p className="text-[#37a1c2]">Building design</p>
          </div>

          {/* Subtitle */}
          <p className="text-lg  md:text-2xl text-white font-normal max-w-2xl break-words whitespace-pre-wrap">
            Architecture never derived its force from stability of culture, but
            rather from the expression of those moments when that sense of
            stability slipped.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
