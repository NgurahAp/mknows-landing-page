import Image from "next/image";
import Link from "next/link";

interface BootcampCardProps {
  bootcamp: {
    id: number;
    title: string;
    level: string;
    description: string;
    image: string;
    bg: string;
    link: string;
  };
}

export default function BootcampCard({ bootcamp }: BootcampCardProps) {
  return (
    <div
      className="max-w-sm w-full md:mx-8 mx-0 my-3 md:h-[460px] h-[500px] border md:my-10 relative flex flex-col"
      style={{ backgroundColor: bootcamp.bg }}
    >
      <Image
        className="rounded-t-lg"
        src={bootcamp.image}
        alt={bootcamp.title}
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="md:p-5 p-2 md:-mt-20 -mt-12 flex flex-col flex-grow">
        <div>
          <h5 className="md:text-base text-sm font-medium tracking-tight">
            {bootcamp.title}
          </h5>
          <h5 className="text-[#388FC7] mb-3 md:text-lg text-base font-medium tracking-tight">
            {bootcamp.level}
          </h5>
          <p className="md:text-sm text-xs font-base">{bootcamp.description}</p>
        </div>
        <div className="mt-auto flex justify-end">
          <Link
            href={bootcamp.link}
            className="inline-flex items-center px-3 py-2 md:text-base text-xs font-medium  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Detail
            <Image
              src="/assets/bootcamp/arrow.png"
              alt="Rectangle"
              width={14}
              height={14}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
      <div className="absolute md:top-[147px] top-[148px] left-0">
        <Image
          src="/assets/bootcamp/rectangle.png"
          alt="Rectangle"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
}
