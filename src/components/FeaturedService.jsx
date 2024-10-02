import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import bg_1 from '../assets/images/BGG1.webp';
import bg_2 from '../assets/images/BGG2.webp';
import bg_3 from '../assets/images/BGG3.webp';

import { SiAffinitydesigner } from "react-icons/si";

// Custom Left Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    className="slick-prev"
    style={{ display: "block", left: "-16px" }} // Adjust arrow position
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

// Custom Right Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    className="slick-next"
    style={{ display: "block", right: "-16px" }} // Adjust arrow position
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

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
      title: 'Decoration art',
      image: bg_3,
      category: 'Architecture',
      icon: <SiAffinitydesigner size={30} />
    },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white max-w-[1500px] m-auto">
      <div className="text-center"> {/* Changed from text-center to text-left */}
        <h3 className="text-sm font-semibold text-gray-400">Service We Do</h3>
        <h2 className="text-3xl font-bold text-black my-2">Our Featured Service</h2>
      </div>

      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="border overflow-hidden shadow-lg">
                <img
                 loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-left"> {/* Changed from text-center to text-left */}
                  <h3 className="text-sm font-semibold text-gray-400">{service.category}</h3>
                  <h2 className="text-lg font-bold text-black my-2 flex justify-between items-center">
                    {/* VS Icon/Label */}
                    <span className="mr-2">{service.title}</span>
                    <span className="text-red-200 font-semibold">{service.icon}</span> {/* "VS" Icon */}
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
