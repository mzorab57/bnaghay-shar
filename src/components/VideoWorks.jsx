import React from "react";

import VideoText from "./ui/VideoText";
import VideoCard from "./ui/VideoCard";
import videoInter from "../assets/videos/interior-video.mp4";
import videoVilla from "../assets/videos/villa-video1.mp4";
import videoFlka from "../assets/videos/video-flka.mp4";

import inter from "../assets/images/inter (4).webp";
import roundAbout from "../assets/images/ra (2).webp";
import garden from "../assets/images/BGG4.jpg";



const VideoWorks = () => {
  return (
    <div className=" grid lg:flex lg:justify-between relative items-center   mt-32 mb-16 pt-14 lg:pt-0 pb-14 bg-gray-100">
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
            videoSrc={videoInter}
            poster={inter}
          />
          <VideoCard
            number="02"
            title="Student Residence Areosa"
            description="Architecture – Luxury Living"
            videoSrc={videoFlka}
            poster={roundAbout}
          />
          <VideoCard
            number="03"
            title="Casa El Maqui"
            description="Architecture – Luxury Living"
            videoSrc={videoVilla}
            poster={garden}
          />
        </div>
      </main>
    </div>
  );
};

export default VideoWorks;
