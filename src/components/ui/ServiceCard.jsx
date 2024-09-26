import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceCard = ({ title, description, image, icon, index }) => {
  // This hook tracks the scroll progress of the page
  const { scrollYProgress } = useScroll();

  // Define the Y transform based on the index
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      index % 2 === 0 ? 0 : -200, // Cards 1 and 3 stay near the top (less movement)
      index % 2 === 0 ? 0 : 200 // Cards 2 and 4 move more (centered in the middle)
    ]
  );

  return (
    <motion.div
      className="border-l-2 mb-10 overflow-hidden relative flex flex-col gap-y-5 justify-between p-4"
      style={{ y }} // Applying parallax effect
    >
      {/* Icon and Title */}
      <div className="flex flex-col items-start mb-4">
        <div className="text-red-500 text-3xl mr-2"><img src={icon} alt='fg' className='size-20' /></div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Arrow Link */}
      <div className="">
        <a href="#" className="inline-block p-2 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
