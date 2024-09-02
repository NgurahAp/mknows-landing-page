import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-[474px] bg-custom-blue">
        <nav className="bg-white shadow-md py-4 h-[75px] justify-between flex items-center fixed top-0 left-0 w-full z-50">
          <div className="flex items-center pl-[50px]">
            <div className="w-32 h-auto">
              <Image
                src="/assets/navbar-logo.png"
                alt="Navbar Logo"
                width={106}
                height={32}
                className="object-contain"
              />
            </div>
            <form className="mx-auto pl-[100px] flex justify-center h-[36px] pr-0">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative bg-[#F5F5F5] overflow-hidden rounded-[36px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <Image
                    src="/assets/search-icon.png"
                    alt="Search Icon"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full pl-12 py-3 text-lg text-gray-900 bg-[#F5F5F5] border-none"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex pr-[50px]">
            <a href="#" className="pr-[20px] hover:text-blue-500">
              Home
            </a>
            <a href="#" className="px-[20px] hover:text-blue-500">
              Bootcamp Program
            </a>
            <a href="#" className="px-[20px] hover:text-blue-500">
              New Training
            </a>
            <a href="#" className="px-[20px] hover:text-blue-500">
              What We Do
            </a>
            <a href="#" className="px-[20px] hover:text-blue-500">
              More
            </a>
          </div>
        </nav>

        <div className="flex justify-between items-center">
          <div className="pl-32">
            <h1 className=" font-bold text-[40px] leading-[48px]">
              Another Meaningful Learning <br /> with M-Knows Consulting
            </h1>
          </div>
          <div>
            <Image
              src="/assets/hero-image.png"
              alt="Navbar Logo"
              layout="intrinsic"
              width={600}
              height={600}
              className=" object-contain pt-[6rem]"
            />
          </div>
        </div>
      </section>
      <section className="h-[100vh]"></section>
    </main>
  );
}
