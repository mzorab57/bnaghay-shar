import React from "react";

import VideoText from "./ui/VideoText";
import VideoCard from "./ui/VideoCard";
import bg_1 from "../assets/images/BGG1.webp";
import bg_2 from "../assets/images/BGG2.webp";
import bg_3 from "../assets/images/BGG3.webp";


const VideoWorks = () => {
  return (
    <div className=" grid lg:flex lg:justify-between relative items-center   my-32 pt-14 lg:pt-0 pb-14 bg-gray-100">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold absolute -top-20 lg:top-0 left-4 lg:left-40 z-10">Our Animation Video</h1>
       <div className="size-14 hidden bg-white lg:block absolute top-0 w-full"></div>
        <VideoText />
      {/* Main Content */}
      <main className="md:w-4/3 ">
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3  gap-4">
          {/* Project Cards */}
          <VideoCard
            number="01"
            title="Modern Family House"
            description="Architecture – Luxury Living"
            imgSrc={bg_2}
          />
          <VideoCard
            number="02"
            title="Student Residence Areosa"
            description="Architecture – Luxury Living"
            imgSrc={bg_1}
          />
          <VideoCard
            number="03"
            title="Casa El Maqui"
            description="Architecture – Luxury Living"
            imgSrc={bg_3}
          />
        </div>
      </main>
    </div>
  );
};

export default VideoWorks;
