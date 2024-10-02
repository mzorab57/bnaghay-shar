import React from 'react';

const ImageDisplay = ({ image, title }) => {
  return (
    <img
      loading="lazy"
      src={image}
      alt={title}
      className="w-full h-48 object-cover mb-4 rounded-md"
    />
  );
};

export default ImageDisplay;
