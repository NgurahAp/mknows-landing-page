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
  const imagesRow4 = Array.from(
    { length: 5 },
    (_, i) => `/assets/whatWeDo/clients/row4-${i + 1}.png`
  );
  const imagesRow5 = Array.from(
    { length: 7 },
    (_, i) => `/assets/whatWeDo/clients/row5-${i + 1}.png`
  );
  return (
    <main>
      <section className="container mx-auto pt-32 bg-slate-500s">
        <h2 className="text-5xl font-semibold text-center mb-8 py-9 pt-20">
          Our Client
        </h2>
        <Marquee>
          <div className="w-full h-24 overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide">
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
          <div className="w-full h-28 overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide">
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
          <div className="w-full h-24 overflow-x-auto flex space-x-12 p-3 my-5  scrollbar-hide">
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
        <Marquee direction="right">
          <div className="w-full h-28 overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide">
            {imagesRow4.map((src, index) => (
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
          <div className="w-full h-24 overflow-x-auto flex space-x-12 p-3 my-5  scrollbar-hide">
            {imagesRow5.map((src, index) => (
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
      </section>
    </main>
  );
}
