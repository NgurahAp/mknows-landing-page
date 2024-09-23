"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BootcampCategory, bootcampData } from "./bootcampNavbarData";

const UpdateNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md  py-4 h-24 max-w-screen flex items-center fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center ">
            <div className="w-32 h-auto">
              <Image
                src="/assets/home/navbar-logo.png"
                alt="Navbar Logo"
                width={79}
                height={24}
                className="md:w-36 md:h-auto object-contain"
              />
            </div>
            <form className="mx-auto  flex justify-center h-14 pl-20">
              <div className="relative bg-[#F5F5F5] overflow-hidden w-96 rounded-full">
                <div className="absolute inset-y-0 start-1 flex items-center ps-2 pointer-events-none">
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
                    id="default-search"
                    className="block w-full pl-14 text-xl text-gray-900 bg-[#F5F5F5] border-none outline-none focus:ring-0 focus:outline-none h-full"
                    placeholder="Search"
                  />
                </div>
              </div>
            </form>
          </div>
          <ul className="flex space-x-14">
            <li>
              <Link
                href="/"
                className="text-black flex text-lg hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={() => handleClick("bootcampProgram")}
                className="text-black flex items-center text-lg hover:text-gray-400"
              >
                Bootcamp Program
                <Image
                  src="/assets/home/dropdown-icon.png"
                  alt="Dropdown Icon"
                  width={14}
                  height={2}
                  className="ml-2 h-5"
                />
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={() => handleClick("newTraining")}
                className="text-black flex items-center text-lg hover:text-gray-400"
              >
                New Training
                <Image
                  src="/assets/home/dropdown-icon.png"
                  alt="Dropdown Icon"
                  width={14}
                  height={2}
                  className="ml-2 h-5"
                />
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={() => handleClick("whatWeDo")}
                className="text-black flex items-center text-lg hover:text-gray-400"
              >
                What We Do
                <Image
                  src="/assets/home/dropdown-icon.png"
                  alt="Dropdown Icon"
                  width={14}
                  height={2}
                  className="ml-2 h-5"
                />
              </Link>
            </li>{" "}
            <li>
              <Link
                href=""
                onClick={() => handleClick("more")}
                className="text-black flex items-center text-lg hover:text-gray-400"
              >
                More
                <Image
                  src="/assets/home/dropdown-icon.png"
                  alt="Dropdown Icon"
                  width={14}
                  height={2}
                  className="ml-2 h-5"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Section yang ditampilkan setelah klik navbar */}
      {activeSection === "bootcampProgram" && (
        <section className="bg-white w-full h-auto flex items-center justify-center fixed top-24 left-0 z-50">
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
            <div className="w-full overflow-x-auto">
              <div className="flex pb-4">
                {bootcampData.map(
                  (category: BootcampCategory, index: number) => (
                    <div
                      className="flex-shrink-0 w-auto max-w-2/4 mx-10"
                      key={index}
                    >
                      {/* Lebar otomatis dengan batas maksimal 50% */}
                      <h3 className="font-semibold text-lg mb-2 underline">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item: string, idx: number) => (
                          <li key={idx}>
                            <Link
                              href="#"
                              // onClick={handleLinkClick}
                              className="block hover:bg-gray-100 py-2 text-lg"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/bootcamp"
                onClick={() => handleClick("bootcampProgram")}
              >
                <button className="bg-[#D7E9F4] text-xl text-black font-semibold py-2 px-4 rounded-lg w-full">
                  Lihat Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        </section>
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
                      href="#"
                      // onClick={handleLinkClick}
                      className="block hover:bg-gray-100 py-2 text-lg "
                    >
                      AI Sales Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      // onClick={handleLinkClick}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg "
                    >
                      Public, In-House Training, Online Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/hybridOfficerDevelopment"
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      Hybrid Officer Development Crash Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/atc"
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      Learning Management System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/consultingService"
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      Consulting Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatWeDo/outbound"
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
                      onClick={() => handleClick("whatWeDo")}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg "
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/historyPage"
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/visiMisi"
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg"
                    >
                      Our Facilitator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => handleClick("more")}
                      className="block hover:bg-gray-100 py-2 text-lg"
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
    </div>
  );
};

export default UpdateNavbar;
