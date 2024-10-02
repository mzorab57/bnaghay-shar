import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from './Icon';
import ArrowLink from './ArrowLink';
import ImageDisplay from './ImageDisplay';

const ServiceCard = ({ title, description, image, icon, index }) => {
  // Track the scroll progress within a defined range (instead of [0, 1])
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 0.5], // Limiting the scroll range for smoother effect
    [index % 2 === 0 ? 0 : -100, index % 2 === 0 ? 0 : 100] // Adjust range for smoother movement
  );

  return (
    <motion.div
      className="border-l-2 mb-10 overflow-hidden relative flex flex-col gap-y-5 justify-between p-4"
      style={{ y }} // Applying parallax effect
    >
      {/* Icon and Title Section */}
      <div className="flex flex-col items-start mb-4">
        <Icon icon={icon} altText={title} />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Image Section */}
      <ImageDisplay image={image} title={title} />

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Arrow Link */}
      <ArrowLink />
    </motion.div>
  );
};

export default ServiceCard;
