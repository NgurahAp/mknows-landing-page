"use client";

import Image from "next/image";
import { useData } from "@/hooks/fetchData";

const CategorySection = () => {
  const { data, isLoading, isError, error } = useData();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <section className="pb-16 pt-7 min-h-[100vh]">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-3xl font-medium text-center mb-8">
          Jelajahi Kategori Unggulan
        </h2>
        <div className="flex flex-wrap justify-center -mx-10">
          {data?.map((category: { id: string; path: string; name: string }) => (
            <div key={category.id} className="md:w-96 w-72 m-10">
              <div className="relative md:h-60 h-48 rounded-3xl overflow-hidden">
                <Image
                  src={category.path}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl"
                />
                <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white md:text-2xl text-base">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
