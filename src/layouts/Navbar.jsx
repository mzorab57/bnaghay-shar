import React, { useState } from "react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom"; // Add useLocation and useNavigate
import logo from "../assets/images/bnaghashar_logo.png";
import { Cross as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [color, setColor] = useState(false);

  const navigate = useNavigate(); // Add useNavigate
  const { pathname } = useLocation(); // Get the current path

  const handleScroll = (target, offset = 1) => {
    setOpenMenu(false)
    scroller.scrollTo(target, {
      smooth: true,
      offset,
      duration: 500,
    });
  };

  const handleHomeClick = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll("home", -200), 100); // Delay to ensure page navigation happens
    } else {
      handleScroll("home", -200);
    }
  };

  const handleServiceClick = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll("service"), 100);
    } else {
      handleScroll("service");
    }
  };
  const handleWorlClick = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll("work"), 100);
    } else {
      handleScroll("work");
    }
  };

  const handleAboutClick = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll("about"), 100);
    } else {
      handleScroll("about");
    }
  };

  const handleContactClick = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll("contact"), 100);
    } else {
      handleScroll("contact");
    }
  };

  // Change the header color when the user scrolls
  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 flex justify-between items-center ${
          color ? "backdrop-blur-md text-black" : "text-white bg-transparent"
        }`}
      >
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="size-20" />
          </a>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`hidden lg:flex space-x-8 rtl:space-x-8 font-semibold px-4`}
        >
          <li>
            <div
              onClick={handleHomeClick}
              className="hover:text-[#1b6379] cursor-pointer px-6"
            >
              Home
            </div>
          </li>

          <li>
            <div
              onClick={handleAboutClick}
              className="hover:text-[#1b6379] cursor-pointer"
            >
              About
            </div>
          </li>

          {/* Service */}
          <li>
            <div
              onClick={handleServiceClick}
              className="hover:text-[#1b6379] cursor-pointer"
            >
              Service
            </div>
          </li>

          {/* Work */}
          <li>
            <div
              onClick={handleWorlClick}
              className="hover:text-[#1b6379] cursor-pointer"
            >
              Work
            </div>
          </li>

          {/* Gallery */}
          <li>
            <a href="/gallery" className="hover:text-[#1b6379]">
              Gallery
            </a>
          </li>

          {/* Contacts */}
          <li>
            <div
              onClick={handleContactClick}
              className="hover:text-[#1b6379] cursor-pointer"
            >
              Contacts
            </div>
          </li>
        </ul>

          {/* menu */}
        <div className="lg:hidden">
          <Hamburger
            toggled={isOpenMenu}
            toggle={setOpenMenu}
            size={28}
            duration={0.3}
            rounded
          />
        </div>
      </nav>
      {/* Mobile Menu */}
      <MobileMenu
        setOpenMenu={setOpenMenu}
        isOpenMenu={isOpenMenu}
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
        handleServiceClick={handleServiceClick}
        handleWorlClick={handleWorlClick}
        handleContactClick={handleContactClick}
      />
    </>
  );
};

export default Navbar;
