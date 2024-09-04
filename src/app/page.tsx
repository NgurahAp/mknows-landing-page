"use client";

import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

interface Category {
  id: string;
  path: string;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<Category[]>([]); // Type the state with the Category array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Category[]>(
          "https://65223fddf43b17938414559c.mockapi.io/category",
          {
            timeout: 10000,
          }
        );
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[474px] bg-custom-blue">
        <nav className="bg-white shadow-md py-4 h-[75px] justify-between flex items-center fixed top-0 left-0 w-full z-50">
          <div className="flex items-center pl-[50px]">
            <div className="w-32 h-auto">
              <Image
                src="/assets/navbar-logo.png"
                alt="Navbar Logo"
                width={106}
                height={32}
                className="object-contain"
              />
            </div>
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
          </div>
          <div className="flex pr-[50px]">
            <a href="#" className="pr-[20px] hover:text-blue-500">
              Home
            </a>
            <div className="relative group">
              <a
                href="#"
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
              </a>
              <ul className="absolute hidden w-44 text-center group-hover:block bg-white shadow-lg py-2 ml-4 rounded-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Bootcamp 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Bootcamp 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Bootcamp 3
                  </a>
                </li>
              </ul>
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
        </nav>

        <div className="flex justify-between items-center">
          <div className="pl-20 pt-20">
            <h1 className="font-bold text-[35px] leading-[48px]">
              Another <span className="text-[#2D729F]">Meaningful</span>{" "}
              Learning <br />
              with <span className="text-[#2D729F]">M-Knows Consulting</span>
            </h1>
            <form className="relative  max-w-md  pt-6">
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <div className="relative bg-[#F5F5F5] w-[330px] h-[48px] rounded-[8px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image
                    src="/assets/search-icon.png"
                    alt="Search Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <input
                  type="search"
                  id="search-input"
                  className="block w-[360px] h-[48px] pl-16 pt-3 text-md text-gray-900 bg-[#F2F2F3] border-none rounded-[8px]"
                  placeholder="Telusuri Topik Pelatihan, Konsultasi, Assesment
"
                />
              </div>
            </form>
          </div>
          <div>
            <Image
              src="/assets/hero-image.png"
              alt="Navbar Logo"
              width={596}
              height={596}
              className=" object-contain pt-[6rem]"
            />
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="h-[320px]  justify-center">
        <div className="text-center py-[54px]">
          <h1 className="font-semibold text-[32px] leading-[38.4px]">
            Some count that matters
          </h1>
          <p className="leading-[38.4px] text-[16px]">
            Our achievement in the journey depicted in numbers
          </p>
        </div>
        <div className="flex justify-between items-center text-center">
          <div className="flex-1 p-4">
            <h2 className="font-semibold text-[32px]">100+ Pelatihan</h2>
            <p className="text-[#868A92] text-[18px]">Dari berbagai klien</p>
          </div>
          <div className="relative flex-1 p-4">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[64px] border-l-[1px] border-[#626262]"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[64px] border-r-[1px] border-[#626262]"></div>
            <h2 className="font-semibold text-[32px]">10+ Instruktur</h2>
            <p className="text-[#868A92] text-[18px]">Instruktur Ternama</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="font-semibold text-[32px]">200+ Klien</h2>
            <p className="text-[#868A92] text-[18px]">
              Dari berbagai perusahaanx
            </p>
          </div>
        </div>
      </section>
      {/* Category */}
      <section className="py-16 min-h-[100vh]">
        <div className="container mx-auto ">
          <h2 className="text-[32px] font-medium text-center mb-8">
            Jelajahi Kategori Unggulan
          </h2>
          {/* Category List */}
          <div className="flex flex-wrap  justify-center -mx-10">
            {data.map((category) => (
              <div key={category.id} className="w-[298px] m-10">
                <div className="relative h-[192px] rounded-[15px] overflow-hidden">
                  <Image
                    src={category.path}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[15px]"
                  />

                  <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-[15px] ">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="h-[450px] px-[50px] pt-32 relative">
        <Image
          src="/assets/navbar-logo.png"
          alt="M-Knows Logo"
          width={126}
          height={32}
          className="rounded-[15px]"
        />
        <div className="flex justify-between">
          <div className="flex-1 p-4">
            <h2 className="text-[14px]">Contact Us</h2>
            <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-[14px]">
              Inhouse Training: 021-720 9729
            </p>
            <p className="text-[#868A92] text-[14px]">
              Public Training: 021-726 5274
            </p>
            <p className="text-[#868A92] text-[14px]">
              WhatsApp: 0812-1046-8281
            </p>
            <p className="text-[#868A92] text-[14px]">
              Email: learning@m-knowsconsulting.com
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-[14px]">Surabaya Branch Office</h2>
            <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-[14px]">
              Jl. Raya Darmo Permai III Surabaya
            </p>
            <p className="text-[#868A92] text-[14px]">Telp: 031-8570-5277</p>
            <p className="text-[#868A92] text-[14px]">
              Email: surabaya@m-knowsconsulting.com
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-[14px]">Alamat Utama</h2>
            <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-[14px]">
              Jl. Radio IV No.8B Barito Kebayoran Baru, Jakarta Selatan
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-[14px]">Alamat Produksi</h2>
            <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-[14px]">
              Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Sealatan 15419
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#BCBEC3] mt-12 mb-2"></div>
        <div className="flex items-center relative">
          <div className="flex pt-5">
            <Image
              src="/assets/linkedin-icon.png"
              alt="Linked In"
              width={50}
              height={50}
              className="rounded-[15px] mr-6"
            />
            <Image
              src="/assets/fb-icon.png"
              alt="Facebook"
              width={50}
              height={50}
              className="rounded-[15px] mr-6"
            />
            <Image
              src="/assets/ig-icon.png"
              alt="Instagram"
              width={50}
              height={50}
              className="rounded-[15px] mr-6"
            />
            <Image
              src="/assets/yt-icon.png"
              alt="You-tube"
              width={50}
              height={50}
              className="rounded-[15px] mr-6"
            />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 pt-4 text-[14px] text-[#868A92]">
            2024 - www.Mknowsconsulting - Hak Cipta Dilindungi.
          </h1>
        </div>
      </footer>
    </main>
  );
}
