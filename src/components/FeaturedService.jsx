import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import bg_1 from '../assets/images/BGG1.webp';
import bg_2 from '../assets/images/BGG2.webp';
import bg_3 from '../assets/images/BGG3.webp';

import { SiAffinitydesigner } from "react-icons/si";

// Featured Service Component
const FeaturedService = () => {
  // Service data
  const services = [
    {
      title: 'Architecture',
      image: bg_3,
      category: 'Architecture',
      icon: <SiAffinitydesigner size={30} />
    },
    {
      title: 'Interior Work',
      image: bg_1,
      category: 'Interior Design',
      icon: <SiAffinitydesigner size={30} />
    },
    {
      title: '2D/3D Design',
      image: bg_2,
      category: 'Furniture',
      icon: <SiAffinitydesigner size={30} />
    },
    {
      title: 'Decoration Art',
      image: bg_3,
      category: 'Architecture',
      icon: <SiAffinitydesigner size={30} />
    },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable centered slides with half-visible images
    centerPadding: "60px 0px 0px 0px", // Apply 100px padding-left and 0 padding-right
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px 0px 0px 0px", // Apply 100px padding-left and 0 padding-right
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px 0px 0px 0px", // Apply 100px padding-left and 0 padding-right
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white max-w-[1500px] m-auto">
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-400">Work We Offer</h3>
        <h2 className="text-3xl font-bold text-black my-2">Our Featured Work</h2>
      </div>

      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className=" overflow-hidden  relative">
                <img
                 loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px]  object-cover "
                />
                <div className="p-4 text-left absolute top-0  size-full">
                  <h3 className="text-sm font-semibold text-white">{service.category}</h3>
                  <h2 className="text-lg font-bold text-white my-2 flex justify-between items-center">
                    <span className="mr-2">{service.title}
                    <span className="text-yellow-200 font-semibold animate-pulse">{service.icon}</span> 
                    </span>
                      
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedService;
