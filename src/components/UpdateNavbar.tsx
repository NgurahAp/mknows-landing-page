"use client";
import React, { useState } from "react";

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
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MyLogo</div>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => handleClick("home")}
                className="text-white hover:text-gray-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("about")}
                className="text-white hover:text-gray-400"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("services")}
                className="text-white hover:text-gray-400"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("contact")}
                className="text-white hover:text-gray-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Section yang ditampilkan setelah klik navbar */}
      {activeSection === "home" && (
        <section className="bg-blue-100 w-full h-[50vh] flex items-center justify-center fixed top-16 left-0 z-50">
          <h2 className="text-3xl font-bold">Welcome to the Home Section</h2>
        </section>
      )}

      {activeSection === "about" && (
        <section className="bg-green-100 w-full h-[50vh] flex items-center justify-center fixed top-16 left-0 z-50">
          <h2 className="text-3xl font-bold">About Us Section</h2>
          <p className="mt-4">Here is more information about us.</p>
        </section>
      )}

      {activeSection === "services" && (
        <section className="bg-yellow-100 w-full h-[50vh] flex items-center justify-center fixed top-16 left-0 z-50">
          <h2 className="text-3xl font-bold">Our Services Section</h2>
          <p className="mt-4">
            We offer a variety of services to meet your needs.
          </p>
        </section>
      )}

      {activeSection === "contact" && (
        <section className="bg-red-100 w-full h-[50vh] flex items-center justify-center fixed top-16 left-0 z-50">
          <h2 className="text-3xl font-bold">Contact Us Section</h2>
          <p className="mt-4">
            Get in touch with us through the following ways.
          </p>
        </section>
      )}
    </div>
  );
};

export default UpdateNavbar;
