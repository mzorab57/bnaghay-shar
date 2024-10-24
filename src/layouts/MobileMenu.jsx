import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo-svg-rash.svg";

const MobileMenu = ({
  isOpenMenu,
  setOpenMenu,
  handleHomeClick,
  handleAboutClick,
  handleServiceClick,
  handleWorkClick,
  handleContactClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Ensure i18n is properly initialized
    localStorage.setItem("selectedLanguage", lng);

    // Set the direction based on the selected language
    document.body.dir = lng === "ar" || lng === "ku" ? "rtl" : "ltr";
    setIsOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    // Apply saved language or default to English on mount
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
  }, []);

  return (
      <div className="container lg:hidden flex justify-end ">
  
        {/* Mobile Menu */}
        <div
          className={`fixed flex items-center justify-center  inset-0 backdrop-blur-md transform ${
            isOpenMenu ? "translate-y-0 top-20" : "translate-y-full"
          } transition-transform duration-500 ease-in-out z-40`}
        >
          <nav className="flex flex-col justify-center  h-full space-y-2">
            <div
              onClick={handleHomeClick}
              className="text-2xl  hover:text-primary cursor-pointer"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("Home")}
            </div>
            <div
              onClick={handleAboutClick}
              className="text-2xl hover:text-primary cursor-pointer"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("About")}
            </div>
            <div
              onClick={handleServiceClick}
              className="text-2xl hover:text-primary cursor-pointer"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("Service")}
            </div>
            <div
              onClick={handleWorkClick}
              className="text-2xl hover:text-primary cursor-pointer"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("Work")}
            </div>
            <a
              href="/gallery"
              onClick={() => setOpenMenu(false)}
              className="text-2xl hover:text-primary"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("Gallery")}
            </a>
            <div
              onClick={handleContactClick}
              className="text-2xl hover:text-primary cursor-pointer"
            >
              <img src={logo} alt="logo" className="size-12 inline-flex" />{t("Contacts")}
            </div>

            {/* Language Selector */}
            <div className={`relative  block lg:hidden`}>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer py-2  rounded-lg ${
                  isOpen ? "text-primary" : "text-black"
                } hover:text-primary`}
              >
                {/* <GrLanguage size={25} className="mx-0" /> */}

                {/* Language Dropdown */}
                <div
                  className={`mt-2 py-2 w-28 bg-white border-2 border-primary rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div
                    className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
                    onClick={() => changeLanguage("ar")}
                  >
                    Arabic
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
                    onClick={() => changeLanguage("ku")}
                  >
                    Kurdish
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex flex-col px-2 text-center items-center justify-center">
              {/* Additional Footer Items Can Go Here */}
            </div>
          </nav>
        </div>
      </div>
  
  );
};

export default MobileMenu;
