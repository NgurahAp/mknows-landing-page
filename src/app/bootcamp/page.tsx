import Image from "next/image";
import Link from "next/link";

export default function BootcampPage() {
  return (
    <main>
      <section
        className="md:h-[474px] h-[250px] md:pt-[19rem] pt-32 bg-cover bg-no-repeat bg-center max-w-screen"
        style={{ backgroundImage: "url('/assets/hero-image-bootcamp.png')" }}
      >
        <div className="flex min-h-screen">
          <div className="md:pl-20 pl-5">
            <h1 className="font-bold text-xl md:leading-[48px] text-left md:text-[35px]">
              Bootcamp Program
            </h1>
            <h2 className="font-semibold  text-sm md:text-4xl text-left">
              Welcome to{" "}
              <span className="text-[#2D729F]">M-Knows Consulting!</span>
            </h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center md:py-20 py-10 md:px-28 px-10 ">
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-medium md:mb-7 mb-4 text-[#2D729F]">
            Bootcamp Unggulan
          </h2>
          <h2 className="md:text-2xl text-xl font-semibold mb-2">
            Selamat Datang di M-Knows Consulting!
          </h2>
          <p className="md:text-2xl text-base">
            Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang
            khusus untuk membantu mengembangkan keterampilan dan pengetahuan
            Anda, dalam berbagai bidang. Bootcamp kami, menawarkan pelatihan
            intensif dengan para mentor yang ahli dan berpengalaman dalam
            beragam industri, Mempersiapkan diri Anda untuk sukses di dunia
            kerja yang kompetitif.
          </p>
        </div>
      </section>
      <section className="pb-16 pt-7 min-h-[100vh]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {/* Card */}
            <div className="max-w-sm bg-[#D8EFD3] w-full md:mx-8 mx-14 my-3 h-[450px] border md:my-10 relative flex flex-col">
              <Image
                className="rounded-t-lg"
                src="/assets/bootcamp/frontend.png"
                alt=""
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="p-5 -mt-20 flex flex-col flex-grow">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Test 1
                  </h5>
                  <p className="mb-3 font-normal">Description 1</p>
                </div>
                <div className="mt-auto flex justify-end">
                  <Link
                    href=""
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
            <div className="max-w-sm bg-[#D8EFD3] w-full md:mx-8 mx-14 my-3 h-[450px] border md:my-10 relative flex flex-col">
              <Image
                className="rounded-t-lg"
                src="/assets/bootcamp/frontend.png"
                alt=""
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="p-5 -mt-20 flex flex-col flex-grow">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Test 1
                  </h5>
                  <p className="mb-3 font-normal">Description 1</p>
                </div>
                <div className="mt-auto flex justify-end">
                  <Link
                    href=""
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
            <div className="max-w-sm bg-[#D8EFD3] w-full md:mx-8 mx-14 my-3 h-[450px] border md:my-10 relative flex flex-col">
              <Image
                className="rounded-t-lg"
                src="/assets/bootcamp/frontend.png"
                alt=""
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="p-5 -mt-20 flex flex-col flex-grow">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Test 1
                  </h5>
                  <p className="mb-3 font-normal">Description 1</p>
                </div>
                <div className="mt-auto flex justify-end">
                  <Link
                    href=""
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
          </div>
        </div>
      </section>
    </main>
  );
}
