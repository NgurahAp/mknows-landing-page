import Image from "next/image";
import React from "react";
import { facilitatorsData } from "./facilitatorData";

interface FacilitatorProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const Facilitator: React.FC<FacilitatorProps> = ({
  name,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}) => {
  const textContent = (
    <div className="md:w-2/3">
      <h2 className="text-5xl text-[#388FC7] pb-5">{name}</h2>
      <p className="text-3xl leading-snug">{description}</p>
    </div>
  );

  const imageContent = (
    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={199}
        height={243}
        className="rounded-lg shadow-md"
      />
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center md:flex-row pt-10 pb-20">
      {isReversed ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
};


export default function OurFacilitator() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-56">
          <h2 className="text-5xl text-[#388FC7] font-semibold text-center mb-8 py-9">
            Facilitator
          </h2>
          {facilitatorsData.map((facilitator, index) => (
            <Facilitator
              key={facilitator.name}
              {...facilitator}
              //  operasi modulo yang menghitung sisa pembagian index dengan 2. Hasilnya akan selalu 0 atau 1.
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
