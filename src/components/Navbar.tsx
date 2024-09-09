"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

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

  return (
    <nav className="bg-white shadow-md py-4 h-[75px]  max-w-screen justify-between flex items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center  pl-4 md:pl-[50px]">
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
          <form className="mx-auto pl-[60px] flex justify-center h-[36px] ">
            <div className="relative bg-[#F5F5F5] overflow-hidden w-[310px] rounded-[36px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className=""
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
        )}
      </div>

      {isMediumScreen ? (
        <div className="pr-4 flex  ">
          <form className="pr-10  justify-center  h-[36px] ">
            <div className="relative bg-[#F5F5F5] overflow-x-hidden md:w-[190px] rounded-[36px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className=""
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
          <a href="/" className="pr-[20px] hover:text-blue-500">
            Home
          </a>
          <div className="relative group">
            <Link
              href="/bootcamp" // Tambahkan link ke halaman bootcamp
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              Bootcamp Program
            </Link>
          </div>
          <div className="relative group">
            <a
              href="#"
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
            </a>
            <ul className="absolute hidden group-hover:block bg-white text-center ml-1 w-[9rem] shadow-lg py-2 rounded-lg">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Training 1
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Training 2
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Training 3
                </a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <a
              href="#"
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
            </a>
            <ul className="absolute hidden group-hover:block bg-white text-center ml-1 w-[9rem] shadow-lg py-2 rounded-lg">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Service 1
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Service 2
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Service 3
                </a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="px-[20px] hover:text-blue-500 flex items-center"
            >
              More
              <Image
                src="/assets/dropdown-icon.png"
                alt="Dropdown Icon"
                width={14}
                height={14}
                className="ml-2"
              />
            </a>
            <ul className="absolute hidden group-hover:block bg-white text-center -ml-5 w-[9rem] shadow-lg py-2 rounded-lg">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 1
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 2
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isMediumScreen && isMenuOpen && (
        <div className="fixed top-[75px] left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <a href="/" className="py-2 hover:text-blue-500">
              Home
            </a>
            <div className="py-2 text-center hover:text-blue-500 relative group">
              <Link href="/bootcamp">Bootcamp Program</Link>
            </div>
            <div className="py-2 text-center hover:text-blue-500 relative group">
              New Training
              <ul className="hidden group-hover:block bg-white shadow-md mt-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Training 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Training 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Training 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-2 text-center hover:text-blue-500 relative group">
              What We Do
              <ul className="hidden group-hover:block bg-white shadow-md mt-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-2 text-center hover:text-blue-500 relative group">
              More
              <ul className="hidden group-hover:block bg-white shadow-md mt-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
