"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white md:h-24 max-w-screen fixed top-0 left-0 w-full z-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl h-full flex items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse mr-4"
          >
            <Image
              src="/assets/home/navbar-logo.png"
              alt="Navbar Logo"
              width={79}
              height={24}
              className="md:w-36 md:h-auto object-contain"
            />
          </Link>
          <div className="relative hidden md:flex items-center">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex">
            <ul className="flex space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-4"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
        <div className="px-2 pt-2 pb-3">
          <input
            type="text"
            id="search-navbar-mobile"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
