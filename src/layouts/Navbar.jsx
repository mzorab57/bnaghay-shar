import React from 'react'

const Navbar = ({isOpen,setIsOpen}) => {
  return (
    <nav className="bg-transparent text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <a href="/">
              <img
                className="h-8 w-auto"
                src="/logo.svg" // Replace with your logo
                alt="Architecture Logo"
              />
            </a> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            >
              {/* <svg
                className="h-6 w-6"
                // xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-btext-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
