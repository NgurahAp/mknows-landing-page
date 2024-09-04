"use client";

import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

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
      <HeroSection />
      <AboutSection />
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
      <Footer />
    </main>
  );
}
