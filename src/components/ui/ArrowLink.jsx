import React from 'react';

const ArrowLink = () => {
  return (
    <div className="">
      <a href="#" className="inline-block p-2 bg-gray-200 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default ArrowLink;
