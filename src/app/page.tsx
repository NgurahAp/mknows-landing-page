import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-[549px] bg-custom-blue">
        <nav className="bg-white shadow-md py-4  h-[75px] justify-between flex items-center ">
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

            {/* Search Bar */}
            <form className="mx-auto pl-[200px]  flex justify-center h-[36px]  pr-0">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
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
                  className="block w-full pl-12 py-3  text-lg text-gray-900 bg-[#F5F5F5] border-none"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>

          {/* Menu */}
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
      </section>
    </main>
  );
}
