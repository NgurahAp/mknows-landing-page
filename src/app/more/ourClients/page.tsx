import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FC } from "react";

type MarqueeDirection = "left" | "right" | "up" | "down";

interface ImageRowProps {
  images: string[];
  direction?: MarqueeDirection;
}

const ImageRow: FC<ImageRowProps> = ({ images, direction = "left" }) => (
  <Marquee direction={direction}>
    <div
      className={`w-full h-${
        direction === "left" ? "24" : "28"
      } overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide`}
    >
      {images.map((src, index) => (
        <div key={index} className="flex-shrink-0 h-full">
          <Image
            src={src}
            alt={`Client logo ${index + 1}`}
            width={0}
            height={0}
            sizes="100%"
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </Marquee>
);

interface RowConfig {
  count: number;
  direction: MarqueeDirection;
}

const OurClients: FC = () => {
  const createImageArray = (row: number, count: number): string[] =>
    Array.from(
      { length: count },
      (_, i) => `/assets/whatWeDo/clients/row${row}-${i + 1}.png`
    );

  const imageRows: RowConfig[] = [
    { count: 9, direction: "left" },
    { count: 8, direction: "right" },
    { count: 5, direction: "left" },
    { count: 5, direction: "right" },
    { count: 7, direction: "left" },
    { count: 6, direction: "right" },
    { count: 5, direction: "left" },
    { count: 5, direction: "right" },
    { count: 6, direction: "left" },
    { count: 6, direction: "right" },
  ];

  return (
    <main>
      <section className="container mx-auto pt-32 bg-slate-500s">
        <h2 className="text-5xl font-semibold text-center mb-8 py-9 pt-20">
          Our Clients
        </h2>
        {imageRows.map((row, index) => (
          <ImageRow
            key={index}
            images={createImageArray(index + 1, row.count)}
            direction={row.direction}
          />
        ))}
      </section>
    </main>
  );
};

export default OurClients;
