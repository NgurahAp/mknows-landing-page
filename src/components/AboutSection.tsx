import Image from "next/image";

const AboutSection = () => {
  return (
    <section className=" h-96  justify-center">
      <div className="text-center md:py-16 py-10">
        <h1 className="font-semibold md:text-4xl text-2xl leading-10">
          Some count that matters
        </h1>
        <p className="md:leading-10 md:text-xl px-6 text-base">
          Our achievement in the journey depicted in numbers
        </p>
      </div>
      <div className="flex justify-between items-center text-center">
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-lg md:text-4xl">100+ Pelatihan</h2>
          <p className="text-[#868A92] pt-1 text-xs md:text-xl">
            Dari berbagai klien
          </p>
        </div>
        <div className="relative flex-1 p-4">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 md:h-20 h-14 border-l-2 border-[#626262]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:h-20 h-14 border-r-2 border-[#626262]"></div>
          <h2 className="font-semibold text-lg md:text-4xl">10+ Instruktur</h2>
          <p className="text-[#868A92] pt-1 text-xs md:text-xl">
            Instruktur Ternama
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-lg md:text-4xl">200+ Klien</h2>
          <p className="text-[#868A92] pt-1 text-xs md:text-xl">
            Dari berbagai perusahaan
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
