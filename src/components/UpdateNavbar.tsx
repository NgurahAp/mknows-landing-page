"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <section className="bg-green-100 w-full h-[50vh] flex items-center justify-center fixed top-24 left-0 z-50">
          <h2 className="text-3xl font-bold">bootcamp Us Section</h2>
          <p className="mt-4">Here is more information bootcamp us.</p>
        </section>
      )}

      {activeSection === "newTraining" && (
        <section className="bg-yellow-100 w-full h-[50vh] flex items-center justify-center fixed top-24 left-0 z-50">
          <h2 className="text-3xl font-bold">New Training Section</h2>
          <p className="mt-4">
            We offer a variety of services to meet your needs.
          </p>
        </section>
      )}

      {activeSection === "whatWeDo" && (
        <section className="bg-red-100 w-full h-[50vh] flex items-center justify-center fixed top-24 left-0 z-50">
          <h2 className="text-3xl font-bold">whatWeDo Us Section</h2>
          <p className="mt-4">
            Get in touch with us through the following ways.
          </p>
        </section>
      )}
      {activeSection === "more" && (
        <section className="bg-red-100 w-full h-[50vh] flex items-center justify-center fixed top-24 left-0 z-50">
          <h2 className="text-3xl font-bold">More Us Section</h2>
          <p className="mt-4">
            Get in touch with us through the following ways.
          </p>
        </section>
      )}
    </div>
  );
};

export default UpdateNavbar;
