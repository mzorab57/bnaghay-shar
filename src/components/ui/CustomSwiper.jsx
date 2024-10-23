import React, { useState, useEffect } from "react";

import bg1 from "../../assets/images/gardenQaiwan (1).webp";
import bg2 from "../../assets/images/inter (5).webp";
// import bg3 from "../../assets/images/aboutUs.webp";
import bg4 from "../../assets/images/inter (4).webp";
import bg6 from "../../assets/images/ra (4).webp";

const images = [bg6,bg4,bg2,bg1]; // List of images

const CustomSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="absolute z-0 w-full h-screen  flex justify-center items-center bg-black ">
      {/* Slide Container */}
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex transition-opacity ease-out  duration-1000" // Smooth opacity transition
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            opacity: 0.6, // Ensure opacity transition is smooth
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-screen blur-sm  transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                opacity: currentIndex === index ? 1 : 0, // Only show the current image
              }}
            >
              <img
               loading="lazy"
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute  w-20  bottom-8  flex gap-x-2 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-5 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gradient-to-t from-gray-300 via-gray-400 to-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
