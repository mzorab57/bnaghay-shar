import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Lightbox and plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Import images
import bg_1 from "../assets/images/gardenQaiwan (1).webp";
import bg_2 from "../assets/images/inter (5).webp";
import bg_3 from "../assets/images/aboutUs.webp";
import bg_4 from "../assets/images/inter (4).webp";
import bg_6 from "../assets/images/ra (4).webp";
import bg_5 from "../assets/images/bnaghashar_logo.png";


import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

  

// Custom next and previous buttons
const NextArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-14 right-8 lg:right-[40%] z-10 text-yellow-800 rounded-full p-2 focus:outline-none"
    onClick={onClick}
  >
    <SlArrowRightCircle size={40} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-14 left-8 lg:left-[40%] z-10 text-yellow-800 rounded-full p-2 focus:outline-none"
    onClick={onClick}
  >
    <SlArrowLeftCircle size={40} />
  </button>
);

const FeaturedService = () => {
  const navigate = useNavigate();
// Event Handler for Click (Navigating to gallery)
const handleClick = () => {
  navigate("/gallery");
  window.scrollTo({
    top: 0,
    // behavior: "instant", // Optional: You can use "auto" for immediate scrolling
  });
};
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Service data
  const services = [
    {
      title: "Bed Room",
      image: bg_4,
      category: "Interior",
      
    },
    {
      title: "Architecture",
      image: bg_3,
      category: "Exterior",
      
    },
    {
      title: "Garden Qaiwan City",
      image: bg_1,
      category: "Exterior",
      
    },
    {
      title: "Bed Room",
      image: bg_2,
      category: "Interior",
      
    },
   
    {
      title: "Round About",
      image: bg_6,
      category: "Exterior",
      
    },
  ];

  // Lightbox images
  const images = services.map((service) => ({ src: service.image }));

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
    centerMode: true,
    centerPadding: "0px", // No padding for full width
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  // Open Lightbox on image click
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section name="work" className="py-12 bg-gray-50 w-full bg-no-repeat relative">
      {/* Background Logo (Hidden on large screens) */}
      <img
        src={bg_5}
        alt="Background Logo"
        className="absolute mt-5 top-[20%] lg:hidden"
      />

      {/* Title Section */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-400">Work We Offer</h3>
        <h2 className="lg:text-4xl text-3xl pb-6 font-bold text-black my-2">
          Our Featured Work
        </h2>
      </div>

      {/* Services Slider */}
      <div className="w-full relative">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden relative group">
                <img
                  onClick={() => handleImageClick(index)} // Trigger Lightbox on click
                  loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 text-left absolute top-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent">
                  <h3 className="text-sm font-semibold text-white">
                    {service.category}
                  </h3>
                  <h2 className="text-lg font-bold text-white my-2 flex justify-between items-center">
                    <span className="mr-2">
                      {service.title}
                     
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div onClick={handleClick} className="absolute left-[36%] lg:left-[48%]  ">
          <p  className="w-full text-2xl pt-2 cursor-pointer ">Visit Gallery</p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        index={currentIndex}
        slides={images}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        close={() => setIsOpen(false)}
        styles={{
          thumbnail: {
            borderColor: "#1b6379",
            // backgroundColor: "blue", // Change this to your desired color
            // width:"20vh"
          },
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 50% opacity
          },
        }}
      />
    </section>
  );
};

export default FeaturedService;
