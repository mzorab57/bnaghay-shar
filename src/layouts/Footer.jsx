import React from "react";
import footer1 from "../assets/images/inter (4).webp";
import footer2 from "../assets/images/ra (3).webp";
import footer3 from "../assets/images/greenWall (3).webp";
import footer4 from "../assets/images/inter (5).webp";
import footer5 from "../assets/images/BGG4.jpg";
import footer6 from "../assets/images/inter (1).webp";
import footerbg from "../assets/images/about3d.webp";
import logo from "../assets/images/bnaghashar_logo.png";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer name="contact" className="relative">
      {/* Background Image with Black Overlay */}
      <div
        className="absolute inset-0 brightness-30   "
        style={{
          backgroundImage: `url(${footerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Footer Content */}
      <div className="relative container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Logo and Social Links */}
          <div className="footer-widget  -translate-y-8 ">
            <div className="">
              <img src={logo} alt="Footer Logo" className=" size-32" />
            </div>
            <p className="mb-4 max-w-72 ">
              Nulla vitae cursus quam, nec ultrices nibh. Quisque tristique
              lorem ac diam laoreet auctor. Proin ac massa elit.
            </p>
            <ul className="flex space-x-5">
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            {/* logo  */}
            <div className="footer-logo flex gap-x-5">
              <a className="bg-[#1b6379] size-9 rounded-full flex justify-center items-center">
                <RiFacebookFill />
              </a>
              <a className="bg-[#1b6379] size-9 rounded-full flex justify-center items-center">
                <RiInstagramFill />
              </a>
              <a className="bg-[#1b6379] size-9 rounded-full flex justify-center items-center">
                <RiTwitterFill />
              </a>
              <a className="bg-[#1b6379] size-9 rounded-full flex justify-center items-center">
                <RiYoutubeFill />
              </a>
            </div>
          </div>

          {/* Latest News */}
          <div className="footer-widget">
            <h4 className="text-lg font-semibold mb-4">Latest news</h4>
            <ul className="space-y-10">
              <li>
                <a href="blog-single-1.html" className="hover:text-gray-300  ">
                  Aenean tristique justo et nibh molestie, non porttitor eros
                  suscipit
                </a>
              </li>
              <li>
                <a
                  href="blog-single-1.html"
                  className="hover:text-gray-300 pt-5 border-t "
                >
                  Phasellus dapibus dictum augue, ut
                </a>
              </li>
              <li>
                <a
                  href="blog-single-1.html"
                  className="hover:text-gray-300 pt-5 border-t "
                >
                  Mauris blandit vitae. Praesent non mi
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="footer-widget">
            <h4 className="text-lg font-semibold mb-4">Flicker</h4>
            <ul className="grid grid-cols-3 gap-2">
              <li>
                <img
                  src={footer1}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
              <li>
                <img
                  src={footer2}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
              <li>
                <img
                  src={footer3}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
              <li>
                <img
                  src={footer4}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
              <li>
                <img
                  src={footer5}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
              <li>
                <img
                  src={footer6}
                  alt="Gallery Image"
                  className="w-[100px] h-[85px] object-cover"
                />
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-widget">
            <h4 className="text-lg font-semibold mb-4">Contact us</h4>
            <ul className="space-y-5">
              <li className="grid">
                <span className="font-semibold">Address:</span> Baxtiyary,
                Bnaghay Shar Bulding
              </li>
              <li className="grid">
                <span className="font-semibold">Call Us:</span>{" "}
                <a href="tel:07725455380" className="hover:text-gray-300">
                  07725455380
                </a>
              </li>
              <li className="grid">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@bnaghayshar.com"
                  className="hover:text-gray-300"
                >
                  info@bnaghayshar.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white mt-10">
          <p>
            ©{" "}
            <a href="#" className="">
              TOP SOFT
            </a>{" "}
            2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
