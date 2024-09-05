import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="h-[320px]  justify-center">
      <div className="text-center py-[54px]">
        <h1 className="font-semibold text-4xl leading-[38.4px]">
          Some count that matters
        </h1>
        <p className="leading-[38.4px] text-[16px]">
          Our achievement in the journey depicted in numbers
        </p>
      </div>
      <div className="flex justify-between items-center text-center">
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-4xl">100+ Pelatihan</h2>
          <p className="text-[#868A92] pt-1 text-xl">Dari berbagai klien</p>
        </div>
        <div className="relative flex-1 p-4">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[64px] border-l-[1px] border-[#626262]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[64px] border-r-[1px] border-[#626262]"></div>
          <h2 className="font-semibold text-4xl">10+ Instruktur</h2>
          <p className="text-[#868A92] pt-1 text-xl">Instruktur Ternama</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-4xl">200+ Klien</h2>
          <p className="text-[#868A92] pt-1 text-xl">
            Dari berbagai perusahaanx
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
