import Image from "next/image";
import { Navbar } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <section className="h-[549px] bg-custom-blue">
        <nav className="bg-white shadow-md py-4 px-[50px] h-[75px] flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-32 h-auto">
              <Image
                src="/assets/navbar-logo.png"
                alt="Navbar Logo"
                width={106}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                // value={}
                // onChange={}
                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.65 7.5a7.5 7.5 0 016.35 9.15z"
                />
              </svg>
            </div>
          </div>

          {/* Menu */}
          <div className="flex space-x-8">
            <a href="#" className="pl-6 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="pl-6 hover:text-blue-500">
              Bootcamp Program
            </a>
            <a href="#" className="pl-6 hover:text-blue-500">
              New Training
            </a>
            <a href="#" className="pl-6 hover:text-blue-500">
              What We Do
            </a>
            <a href="#" className="pl-6 hover:text-blue-500">
              More
            </a>
          </div>
        </nav>
      </section>
    </main>
  );
}
