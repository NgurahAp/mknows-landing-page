import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { navMobileItems } from "./navMobileItems";

interface MobileNavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMenuOpen,
  closeMenu,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  // Toggle specific dropdown
  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  return (
    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
      <div className="px-2 pt-2 pb-3">
        <div className="relative bg-[#F5F5F5] overflow-hidden w-full rounded-3xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
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
              id="search-navbar-mobile"
              className="block w-full pl-14 text-lg text-gray-900 bg-[#F5F5F5] border-none outline-none focus:ring-0 focus:outline-none h-12"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navMobileItems.map((item) => (
          <div key={item.title} className="border-b border-gray-200">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openDropdowns[item.title] ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdowns[item.title] && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.dropdownTitle}
                        href={dropdownItem.href}
                        className="relative block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => {
                          closeAllDropdowns(); // Close all dropdowns after click
                          closeMenu(); // Also close the main menu
                        }}
                      >
                        {/* Vertical line added here */}
                        <span
                          className="absolute left-0  w-1 h-5 bg-[#ACEE07]"
                          aria-hidden="true"
                        ></span>
                        {dropdownItem.dropdownTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
