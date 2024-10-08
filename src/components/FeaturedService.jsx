import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import bg_1 from '../assets/images/BGG1.webp';
import bg_2 from '../assets/images/BGG2.webp';
import bg_3 from '../assets/images/BGG3.webp';
import bg_4 from '../assets/images/BGG4.jpg';
import bg_5 from '../assets/images/bnaghashar_logo.png';

import { SiAffinitydesigner } from "react-icons/si";

// Featured Service Component
const FeaturedService = () => {
  // Service data
  const services = [
    {
      title: 'Architecture',
      image: bg_4,
      category: 'Architecture',
      icon: <SiAffinitydesigner size={30} />
    },
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
      title: 'Decoration Art',
      image: bg_2,
      category: 'Architecture',
      icon: <SiAffinitydesigner size={30} />
    },
    {
      title: '2D/3D Design',
      image: bg_1,
      category: 'Furniture',
      icon: <SiAffinitydesigner size={30} />
    },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px 0px 0px 0px",
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px 0px 0px 0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px 0px 0px 0px",
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 m-auto bg-no-repeat relative">
      <img src={bg_5} alt='mjk' className='absolute mt-5 top-[20%] lg:hidden' />
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-400">Work We Offer</h3>
        <h2 className="text-3xl font-bold text-black my-2">Our Featured Work</h2>
      </div>

      <div className="container max-w-[1450px] mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="overflow-hidden relative">
                <img
                  loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="p-4 text-left absolute top-0 bg-gradient-to-t from-white/50 via-transparent to-transparent">
                  <h3 className="text-sm font-semibold text-white">{service.category}</h3>
                  <h2 className="text-lg font-bold text-white my-2 flex justify-between items-center">
                    <span className="mr-2">
                      {service.title}
                      <span className="text-yellow-200 font-semibold">{service.icon}</span>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 3D Model of a House */}
      {/* <div className="container mx-auto lg:scale-110  size-[500px] lg:h-[800px] lg:w-[1200px] " style={{  }}>
        <model-viewer 
          src="/modern_house.glb" 
          alt="3D House Model" 
          auto-rotate 
          camera-controls 
          style={{ width: "100%", height: "100%" }}
          ar
        ></model-viewer>
      </div> */}
    </section>
  );
};

export default FeaturedService;
