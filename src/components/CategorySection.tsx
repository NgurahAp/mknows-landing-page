"use client";

import Image from "next/image";
import { useData } from "@/hooks/fetchData";

const CategorySection = () => {
  const { data, isLoading, isError, error } = useData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <section className="py-16 min-h-[100vh]">
      <div className="container mx-auto">
        <h2 className="text-[32px] font-medium text-center mb-8">
          Jelajahi Kategori Unggulan
        </h2>
        <div className="flex flex-wrap justify-center -mx-10">
          {data?.map((category: { id: string; path: string; name: string }) => (
            <div key={category.id} className="w-[298px] m-10">
              <div className="relative h-[192px] rounded-[15px] overflow-hidden">
                <Image
                  src={category.path}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-[15px]"
                />
                <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-[15px]">{category.name}</h3>
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
