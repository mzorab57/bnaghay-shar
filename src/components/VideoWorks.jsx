import React from "react";
import VideoText from "./ui/VideoText";
import VideoCard from "./ui/VideoCard";
import bg_1 from "../assets/images/BGG1.webp";
import bg_2 from "../assets/images/BGG2.webp";
import bg_3 from "../assets/images/BGG3.webp";
import bg_4 from "../assets/images/BGG4.jpg";
import bg_5 from "../assets/images/bnaghashar_logo.png";


const VideoWorks = () => {
  return (
    <div className=" grid lg:flex lg:justify-between relative items-center   my-32 pb-14 bg-gray-100">
      
       <div className="size-14 bg-white absolute top-0 w-full"></div>
        <VideoText />
      {/* Main Content */}
      <main className="md:w-4/3 ">
        <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-8">
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
