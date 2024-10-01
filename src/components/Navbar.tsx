"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./navbar/mobile";
import { ChevronDown } from "lucide-react";
import BootcampSection from "./navbar/bootcampSection";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href !== '#') {
    setActiveSection(null);
  } else {
    e.preventDefault();
    setActiveSection((prevSection) => prevSection === section ? null : section);
  }
};

  const handleHomeClick = () => {
    setActiveSection(null);
    closeMenu();
  };
  return (
    <>
      <nav className="bg-white md:h-24 w-screen fixed top-0 left-0  z-50 border-gray-200 dark:bg-gray-900">
        <div className="w-11/12 h-full flex items-center justify-between mx-auto p-4">
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
            <div className="relative hidden md:flex items-center justify-center  pl-20">
              <div className="relative bg-[#F5F5F5] overflow-hidden w-full h-14 rounded-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-e-none">
                  <Image
                    src="/assets/home/search-icon.png"
                    alt="Search Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex items-center h-full">
                  <input
                    type="search"
                    id="custom-search"
                    className="block w-full pl-14 text-xl text-gray-900 bg-[#F5F5F5] border-none outline-none focus:ring-0 focus:outline-none h-full"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex">
              <ul className="flex space-x-12 rtl:space-x-reverse">
                <li>
                  <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="text-black flex text-lg hover:text-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => handleClick(e, "bootcampProgram")}
                    className="text-black flex items-center text-lg hover:text-gray-400"
                  >
                    Bootcamp Program
                    <ChevronDown
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        activeSection === "bootcampProgram"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => handleClick(e, "newTraining")}
                    className="text-black flex items-center text-lg hover:text-gray-400"
                  >
                    New Training
                    <ChevronDown
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        activeSection === "newTraining"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => handleClick(e, "whatWeDo")}
                    className="text-black flex items-center text-lg hover:text-gray-400"
                  >
                    What We Do
                    <ChevronDown
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        activeSection === "whatWeDo"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => handleClick(e, "more")}
                    className="text-black flex items-center text-lg hover:text-gray-400"
                  >
                    More
                    <ChevronDown
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        activeSection === "more" ? "transform rotate-180" : ""
                      }`}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-4"
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
        <MobileNavbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </nav>

      {/* Section yang ditampilkan setelah klik navbar */}
      {activeSection === "bootcampProgram" && (
        <BootcampSection
          handleClick={(e) => handleClick(e, "bootcampProgram")}
        />
      )}

      {activeSection === "newTraining" && (
        <section className="bg-white w-full h-auto flex items-center justify-center fixed top-24 left-0 z-50">
          <div className="container mx-auto px-4 py-10">
            <div className="flex">
              {/* Column 1 - 1/4 width */}
              <div className="w-full pr-4">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/pdfViewer/ai-sales"
                      onClick={(e) => handleClick(e, "newTraining")}
                      className="block hover:text-blue-500 py-2 text-lg "
                    >
                      AI Sales Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdfViewer/virtual-reality"
                      onClick={(e) => handleClick(e, "newTraining")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Virtual Reality
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "whatWeDo" && (
        <section className="bg-white w-full h-auto flex items-center justify-center fixed top-24 left-0 z-50">
          <div className="container mx-auto px-4 py-10">
            <div className="flex justify-center ">
              {/* Column 1 - 1/4 width */}
              <div className="w-1/3 ">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/whatWeDo/training"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg "
                    >
                      Public, In-House Training, Online Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/hybridOfficerDevelopment"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Hybrid Officer Development Crash Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/atc"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Asessment for Technical Competency
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Column 2 - 2/4 width */}
              <div className="w-1/3 ">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/whatWeDo/lms"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Learning Management System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/consultingService"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Consulting Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/outbound"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Outbound & Gathering
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Column 3 - 1/4 width */}
              <div className="w-1/3 ">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/whatWeDo/coaching"
                      onClick={(e) => handleClick(e, "whatWeDo")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Executive Coaching & Bussines Mentoring
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "more" && (
        <section className="bg-white w-full h-auto flex items-center justify-center fixed top-24 left-0 z-50">
          <div className="container mx-auto px-4 py-10">
            <div className="flex  ">
              {/* Column 1 - 1/4 width */}
              <div className="w-1/3 ">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/more/aboutUs"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg "
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/historyPage"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/visiMisi"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Vision & Mission
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Column 2 - 2/4 width */}
              <div className="w-1/3 ">
                <ul className="space-y-2 -ml-2">
                  <li>
                    <Link
                      href="/more/ourClients"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/ourFacilitator"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Our Facilitator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/contactUs"
                      onClick={(e) => handleClick(e, "more")}
                      className="block hover:text-blue-500 py-2 text-lg"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
