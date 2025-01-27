import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import data from "@/assests/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#4B0082] shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={data.navbarLogo}
                alt="Himdev Logo"
                className="h-8 w-auto sm:h-10 transition-transform duration-300 hover:rotate-3"
              />
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="text-white hover:text-opacity-90 transition-colors duration-300">
                  Himdev
                </span>
                <span className="text-[#008080] hover:text-opacity-90 transition-colors duration-300">
                  {" "}
                  Educational
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-white text-sm lg:text-base font-medium px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#008080] hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#008080] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-white text-sm lg:text-base font-medium px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#008080] hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#008080] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#program"
              className="text-white text-sm lg:text-base font-medium px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#008080] hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#008080] after:transition-all after:duration-300 hover:after:w-full"
            >
              Program
            </a>
            <a
              href="#contact"
              className="text-white text-sm lg:text-base font-medium px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#008080] hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#008080] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white transition-all duration-300 ease-in-out hover:text-[#008080] hover:bg-white/10 transform hover:scale-105"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#4B0082] shadow-xl rounded-b-xl">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:text-[#008080] hover:bg-white/10 rounded-md transform hover:translate-x-1"
            >
              Home
            </Link>
            <a
              href="#about"
              className="block px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:text-[#008080] hover:bg-white/10 rounded-md transform hover:translate-x-1"
            >
              About
            </a>
            <a
              href="#program"
              className="block px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:text-[#008080] hover:bg-white/10 rounded-md transform hover:translate-x-1"
            >
              Program
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:text-[#008080] hover:bg-white/10 rounded-md transform hover:translate-x-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
