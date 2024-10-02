import React from 'react';

const Icon = ({ icon, altText }) => {
  return (
    <div className="text-red-500 text-3xl mr-2">
      <img src={icon} alt={altText} className="size-20" />
    </div>
  );
};

export default Icon;
