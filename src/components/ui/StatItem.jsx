import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const StatItem = ({ targetNumber, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const end = targetNumber;
    if (start === end) return;

    let current = start;
    const duration = 3; // duration of the animation in seconds
    const increment = Math.ceil((end - start) / (60 * duration)); // number to increment by every frame

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(timer);
  }, [targetNumber, inView]);

  return (
    <div className=" p-6  max-w-sm rounded flex items-center gap-x-6 border-t-2">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1 }}
      >
        {count}+
      </motion.h2>
      <p className="text-gray-600 text-xl">{label}</p>
    </div>
  );
};

  export default StatItem;