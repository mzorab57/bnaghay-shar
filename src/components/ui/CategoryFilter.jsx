import React from "react";



const CategoryFilter = ({activeFilter, setActiveFilter}) => {

  return (
    <div className="text-center my-12 ">
    <ul className="flex justify-start lg:justify-center font-sans space-x-6 overflow-x-auto whitespace-nowrap px-4 sm:px-0 w-full">
      <li
        className={`cursor-pointer  ${
          activeFilter === "all" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("all")}
      >
        All
      </li>
      <li
        className={`cursor-pointer ${
          activeFilter === "interior" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("interior")}
      >
         Interior
      </li>
      {/* <li
        className={`cursor-pointer ${
          activeFilter === "exterior" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("exterior")}
      >
        Exterior
      </li> */}
      <li
        className={`cursor-pointer ${
          activeFilter === "garden" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("garden")}
      >
       Garden
      </li>
      <li
        className={`cursor-pointer ${
          activeFilter === "raoundAbout" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("raoundAbout")}
      >
        Round About
      </li>
    
    </ul>
  </div>
  
  
  );
};

export default CategoryFilter;
