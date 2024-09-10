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
      className="max-w-sm w-full md:mx-8 mx-14 my-3 h-[460px] border md:my-10 relative flex flex-col"
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
      <div className="p-5 -mt-20 flex flex-col flex-grow">
        <div>
          <h5 className="text-base font-medium tracking-tight">
            {bootcamp.title}
          </h5>
          <h5 className="text-[#388FC7] mb-3 text-lg font-medium tracking-tight">
            {bootcamp.level}
          </h5>
          <p className="text-sm font-base">{bootcamp.description}</p>
        </div>
        <div className="mt-auto flex justify-end">
          <Link
            href={bootcamp.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
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
