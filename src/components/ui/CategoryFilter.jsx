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
          activeFilter === "agency" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("agency")}
      >
        Agency Interior
      </li>
      <li
        className={`cursor-pointer ${
          activeFilter === "ecomer" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("ecomer")}
      >
        Ecommerce Interior
      </li>
      <li
        className={`cursor-pointer ${
          activeFilter === "resident" ? " text-yellow-500" : ""
        }`}
        onClick={() => setActiveFilter("resident")}
      >
        Residential Interior
      </li>
    </ul>
  </div>
  
  
  );
};

export default CategoryFilter;
