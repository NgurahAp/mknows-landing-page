import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function OurClients() {
  const imagesRow1 = Array.from(
    { length: 9 },
    (_, i) => `/assets/whatWeDo/clients/row1-${i + 1}.png`
  );

  const imagesRow2 = Array.from(
    { length: 8 },
    (_, i) => `/assets/whatWeDo/clients/row2-${i + 1}.png`
  );

  const imagesRow3 = Array.from(
    { length: 5 },
    (_, i) => `/assets/whatWeDo/clients/row3-${i + 1}.png`
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-[#225677] font-semibold text-center mb-8 py-9 pt-20">
        Our Clients
      </h2>
      <Marquee>
        <div className="w-full md:h-24 h-16 overflow-x-auto flex space-x-12 p-3 md:my-5 my-2 scrollbar-hide">
          {imagesRow1.map((src, index) => (
            <div key={index} className="flex-shrink-0 h-full">
              <Image
                src={src}
                alt={`In-house activity ${index + 1}`}
                width={0}
                height={0}
                sizes="100%"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="w-full h-16 md:h-24 overflow-x-auto flex space-x-12 p-3 md:my-5 my-2 scrollbar-hide">
          {imagesRow2.map((src, index) => (
            <div key={index} className="flex-shrink-0 h-full">
              <Image
                src={src}
                alt={`In-house activity ${index + 1}`}
                width={0}
                height={0}
                sizes="100%"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee>
        <div className="w-full h-16 md:h-24 lg:overflow-x-auto flex space-x-12 p-3 md:my-5 my-2  scrollbar-hide">
          {imagesRow3.map((src, index) => (
            <div key={index} className="flex-shrink-0 h-full">
              <Image
                src={src}
                alt={`In-house activity ${index + 1}`}
                width={0}
                height={0}
                sizes="100%"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
