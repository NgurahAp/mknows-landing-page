import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BootcampCategory, bootcampData } from "../bootcampNavbarData";

interface BootcampSectionProps {
  handleClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => void;
}

const BootcampSection: React.FC<BootcampSectionProps> = ({ handleClick }) => {
  return (
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
            {bootcampData.map((category: BootcampCategory, index: number) => (
              <div className="flex-shrink-0 w-auto max-w-2/4 mx-10" key={index}>
                <h3 className="font-semibold text-lg mb-2 underline">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx: number) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block hover:text-blue-500 py-2 text-lg"
                        onClick={(e) => handleClick(e, "bootcampProgram")}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <a
            href="/bootcamp"
            onClick={(e) => handleClick(e, "bootcampProgram")}
          >
            <button className="bg-[#D7E9F4] text-xl text-black font-semibold py-2 px-4 rounded-lg w-full">
              Lihat Selengkapnya
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BootcampSection;
