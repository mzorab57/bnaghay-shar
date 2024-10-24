import React, { useState } from "react";

import aboutSub from "../assets/images/aboutArch.webp";
import aboutIntrrior from "../assets/images/aboute-interior1.webp";
import about3d from "../assets/images/about3d.webp";
import ModelViewerComponent from "./ui/ModelViewerComponent ";

const AboutUs = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("architecture");

  // Content based on the active tab
  const content = {
    architecture: {
      heading: "We Provide You The Best Experience.",
      description:
        "We are committed to impeccable craftsmanship and luxury, reflected in all we do. We offer span furniture and many accessories.",
      image: aboutSub,
    },
    interior: {
      heading: "Interior Design Tailored to Your Style.",
      description:
        "Our interior design services bring beauty, comfort, and functionality to your spaces, making them truly yours.",
      image: aboutIntrrior,
    },
    design3D: {
      heading: "3D Design for Your Dream Space.",
      description:
        "With 3D design, visualize your ideas with clarity and precision. See your dream space come to life before it’s built.",
      image: about3d,
    },
  };

  // Helper function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div name="about" className=" py-10">
      {/* Main container */}
      <div className="container max-w-[1500px]  m-auto p-6">
        {/* Flex container */}
        <div className="flex flex-col   items-center  lg:flex-row gap-x-10 ">
          
          {/* Left image container */}
          {/* <div className="lg:w-1/2 h-full ">
             <img
             loading="lazy"
              src={aboutUs}
              alt="about"
              className=" size-full  object-cover scale-105   "
            />  </div>*/}
         
 <ModelViewerComponent />
          {/* Right text container */}
          <div className=" max-w-4xl  w-full mt-6 md:mt-0 md:pl-10 p-3">
            <h1 className="text-2xl">About Us</h1>
            <h2 className="xl:text-5xl text-3xl font-bold mb-4">
              {content[activeTab].heading}
            </h2>
            <p className="text-gray-500 text-md mb-6 max-w-xl">
              {content[activeTab].description}
            </p>

            {/* Navigation Tabs */}
            <div className="flex md:space-x-10 space-x-4 mb-6 whitespace-nowrap">
              <button
                className={`md:text-lg text-sm   font-semibold flex flex-wrap ${
                  activeTab === "architecture"
                    ? "border-b-2 border-orange-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("architecture")}
              >
                Architecture
              </button>
              <button
                className={`md:text-lg text-sm font-semibold ${
                  activeTab === "interior"
                    ? "border-b-2 border-orange-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("interior")}
              >
                Interior Design
              </button>
              <button
                className={`md:text-lg text-sm font-semibold ${
                  activeTab === "design3D"
                    ? "border-b-2 border-orange-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("design3D")}
              >
                3D Design
              </button>
            </div>

            {/* Checkpoints */}
            <div className="flex   flex-col md:flex-row gap-8 ">
              <ul className="list-none max-w-[400px] space-y-2 ">
                {/* text */}
                <div>
                  <p className="">
                    We are committed to the impeccable craftsmanship and luxury
                    is reflected in all we do. We offer span furniture and many
                    accessories.
                  </p>
                </div>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">✔</span>
                  Quality and design checks deeply
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">✔</span>
                  Periodic site review and timelines
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">✔</span>
                  Design development and strategy
                </li>
              </ul>
              {/* Image container */}
              <div className="md:w-1/3 ">
                <img
                  src={content[activeTab].image}
                  alt={content[activeTab].heading}
                  className=""
                />
              </div>
            </div>
          </div>
          
         

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
