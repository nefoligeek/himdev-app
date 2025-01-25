import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/assests/data.js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold tracking-wide">
                <Image
                  src={data.navbarLogo}
                  alt="Navbar Logo"
                  width={70}
                  height={20}
                />
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="hover:text-secondary transition-colors">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="hover:text-secondary transition-colors">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="hover:text-secondary transition-colors">
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-secondary transition-colors">
                Contact
              </span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="space-y-2 px-2 pt-2 pb-3">
            <Link href="/">
              <span className="block px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="block px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition">
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="block px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
