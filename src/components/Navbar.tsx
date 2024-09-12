"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type DropdownName = "bootcamp" | "newTraining" | "whatWeDo" | null;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMediumScreen) {
      setIsMenuOpen(false);
    }
  };

  const handleDropdownEnter = (dropdownName: DropdownName) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav className="bg-white shadow-md py-4 h-[75px] max-w-screen justify-between flex items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center pl-4 md:pl-[50px]">
        <div className="w-32 h-auto">
          <Image
            src="/assets/navbar-logo.png"
            alt="Navbar Logo"
            width={79}
            height={24}
            className="md:w-[106px] md:h-[32px] object-contain"
          />
        </div>
        {!isMediumScreen && (
          <form className="mx-auto pl-[60px] flex justify-center h-[43px]">
            <div className="relative bg-[#F5F5F5] overflow-hidden w-[310px] rounded-[36px]">
              <div className="absolute inset-y-0 start-1 flex items-center ps-2 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex items">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full pl-14 text-xl pt-[1rem] text-gray-900 bg-[#F5F5F5] border-none outline-none focus:ring-0 focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </form>
        )}
      </div>

      {isMediumScreen ? (
        <div className="pr-4 flex items-center">
          <form className="pr-10 justify-center h-[36px] flex items-center">
            <div className="relative bg-[#F5F5F5] overflow-x-hidden md:w-[190px] rounded-[36px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-12 text-lg text-gray-900 bg-[#F5F5F5] border-none"
                placeholder="Search"
              />
            </div>
          </form>
          <button onClick={toggleMenu} className="text-3xl">
            ☰
          </button>
        </div>
      ) : (
        <div className="flex pr-[50px]">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="pr-[20px] hover:text-blue-500"
          >
            Home
          </Link>
          {/* Bootcamp Navbar desktop */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("bootcamp")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/bootcamp"
              onClick={handleLinkClick}
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              Bootcamp Program
              <Image
                src="/assets/dropdown-icon.png"
                alt="Dropdown Icon"
                width={14}
                height={14}
                className="ml-2"
              />
            </Link>
            {/* Dropdown value Bootcamp */}
            {activeDropdown === "bootcamp" && (
              <div className="absolute -ml-[58vw] left-0 w-[106vw] h-auto bg-white shadow-lg mt-5 ">
                <div className="container mx-auto px-4 py-10">
                  <div className="flex items-center my-4 w-full mx-auto">
                    <Image
                      src="/assets/home/navbarLine.png"
                      alt="Dropdown Icon"
                      layout="responsive"
                      width={100}
                      height={14}
                      className="w-full h-auto -ml-2"
                    />
                  </div>
                  <div className="flex">
                    {/* Column 1 - 1/4 width */}
                    <div className="w-1/4 pr-4">
                      <h3 className="font-semibold text-lg mb-2 underline">
                        Information Technology
                      </h3>
                      <ul className="space-y-2 -ml-2">
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg "
                          >
                            UI/UX for Web & App Project
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Back End Developer Advance Level
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Front End Developer for Advance Level
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            IT QA Engineer
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Flutter Multi Platform App Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Column 2 - 2/4 width */}
                    <div className="w-2/4 px-4">
                      <h3 className="font-semibold text-lg underline mb-2">
                        AI & Data Science
                      </h3>
                      <ul className="space-y-2 -ml-2">
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Aplikasi AI untuk Industri Perbankan, Multifinance,
                            Asuransi, dan Fintech
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Data Science dan Data Analist di Industri Perbenkan,
                            Pembiayaan, dan Fintech AI untuk Perbankan,
                            Multifinance, Asuransi, dan Fintech (Aplikasi
                            Terapan Lanjutan)
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Column 3 - 1/4 width */}
                    <div className="w-1/4 pl-4">
                      <h3 className="font-semibold text-lg underline mb-2">
                        Design
                      </h3>
                      <ul className="space-y-2 -ml-2">
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            3D Bootcamp
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Photography Bootcamp
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Video Editing & Animation Bootcamp
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Videografer & Sinematografer Bootcamp
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Button "Lihat Selengkapnya" */}
                  <div className=" mt-10">
                    <Link href="/bootcamp">
                      <button className="bg-[#D7E9F4] text-xl text-black font-semibold py-2 px-4 rounded-lg w-full">
                        Lihat Selengkapnya
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* New Training Navbar desktop */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("newTraining")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="#"
              onClick={handleLinkClick}
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              New Training
              <Image
                src="/assets/dropdown-icon.png"
                alt="Dropdown Icon"
                width={14}
                height={14}
                className="ml-2"
              />
            </Link>
            {/* Dropdown value New Training */}
            {activeDropdown === "newTraining" && (
              <div className="absolute -ml-[71vw] left-0 w-[106vw] h-auto bg-white shadow-lg mt-8 pt-4">
                <div className="container mx-auto px-4 py-10">
                  <div className="flex">
                    {/* Column 1 - 1/4 width */}
                    <div className="w-full pr-4">
                      <ul className="space-y-2 -ml-2">
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg "
                          >
                            AI Sales Tools
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Virtual Reality
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* What we do desktop */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("whatWeDo")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="#"
              onClick={handleLinkClick}
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              What We Do
              <Image
                src="/assets/dropdown-icon.png"
                alt="Dropdown Icon"
                width={14}
                height={14}
                className="ml-2"
              />
            </Link>
            {/* Dropdown value New Training */}
            {activeDropdown === "whatWeDo" && (
              <div className="absolute -ml-[81vw] left-0 w-[106vw] h-auto bg-white shadow-lg mt-8 pt-4">
                <div className="container mx-auto px-4 py-10">
                  <div className="flex justify-center ">
                    {/* Column 1 - 1/4 width */}
                    <div className="w-1/3 ">
                      <ul className="space-y-2 -ml-2">
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg "
                          >
                            Public, In-House Training, Online Learning
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Consulting Service{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
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
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Learning Management System
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Consulting Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
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
                            href="#"
                            onClick={handleLinkClick}
                            className="block hover:bg-gray-100 p-2 text-lg"
                          >
                            Executive Coaching & Bussines Mentoring
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative group">
            <Link
              href="#"
              onClick={handleLinkClick}
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              More
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-center -ml-5 w-[9rem] shadow-lg py-2 rounded-lg">
              <li>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Option 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Option 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Option 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isMediumScreen && isMenuOpen && (
        <div className="fixed top-[75px] left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="py-2 text-lg hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/bootcamp"
              onClick={handleLinkClick}
              className="py-2 text-lg hover:text-blue-500"
            >
              Bootcamp Program
            </Link>
            <Link
              href="#"
              onClick={handleLinkClick}
              className="py-2 text-lg hover:text-blue-500"
            >
              New Training
            </Link>
            <Link
              href="#"
              onClick={handleLinkClick}
              className="py-2 text-lg hover:text-blue-500"
            >
              What We Do
            </Link>
            <Link
              href="#"
              onClick={handleLinkClick}
              className="py-2 text-lg hover:text-blue-500"
            >
              More
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
