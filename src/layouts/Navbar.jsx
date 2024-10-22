import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/bnaghashar_logo.png';
import { Cross as Hamburger } from "hamburger-react";
import { HiHome } from "react-icons/hi2";


const Navbar = ({ isOpen, setIsOpen }) => {
  const [color, setColor] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null); // Track which link is clicked

  // Change the header color when the user scrolls
  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  // Framer-motion variants for link animation
  const linkVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Variant for the clicked link to move the ✄ and hide text
  const clickedLinkVariants = {
    initial: { x: 0, opacity: 1 },
    clicked: { x: 100, opacity: 0, transition: { duration: 1 } },
  };

  const handleLinkClick = (index) => {
    setClickedIndex(index); // Set the clicked link index
    setTimeout(() => setIsOpen(false), 900); // Delay closing to allow animation
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`text-white fixed w-full z-50 flex justify-between items-center ${color ? 'backdrop-blur-md' : 'bg-transparent'}`}>
        {/* Navbar Container */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="size-20"
                  src={logo} // Replace with your logo
                  alt="Architecture Logo"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium capitalize"
                >
                  {link.replace(/-/g, ' ')}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden text-gray-300">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={28}
                duration={0.3}
                rounded
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Background Blur and Mobile Menu */}
      {isOpen && (
        <>
          {/* Background Blur Effect */}
          <div className="fixed inset-0 md:hidden block bg-black bg-opacity-40 backdrop-blur-md z-40"></div>

          {/* Mobile Menu */}
          <div className="md:hidden fixed flex justify-center items-center h-full w-full z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-2 pt-2 pb-3 space-y-2"
            >
              {['home', 'about', 'services', 'portfolio', 'contact'].map((link, index) => (
                <motion.div
                  key={link}
                  className="text-white px-3 py-2 rounded-md text-lg font-medium capitalize flex items-center"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span
                    variants={clickedLinkVariants}
                    initial="initial"
                    animate={clickedIndex === index ? 'clicked' : 'initial'}
                    onClick={() => handleLinkClick(index)} // Trigger animation and menu close
                    className={`mr-2 cursor-pointer ${clickedIndex === index ? 'text-sky-300' : ''}`}
                  >
                    <HiHome className={` ${clickedIndex === index ? 'text-sky-300' : ''}`} />
                  </motion.span>
                  <motion.a
                    href={`#${link}`}
                    onClick={() => handleLinkClick(index)} // Close the menu when a link is clicked
                    className={`cursor-pointer ${clickedIndex === index ? 'text-sky-300' : ''}`}
                    variants={clickedLinkVariants}
                    initial="initial"
                    animate={clickedIndex === index ? 'clicked' : 'initial'}
                  >
                    {link.replace(/-/g, ' ')}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
