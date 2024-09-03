import Image from "next/image";

export default function Home() {
  const categories = [
    { id: 1, name: "Category 1", image: "/assets/program-pelatihan.jpeg" },
    { id: 2, name: "Category 2", image: "/assets/program-pelatihan.jpeg" },
    { id: 3, name: "Category 3", image: "/assets/program-pelatihan.jpeg" },
    { id: 3, name: "Category 3", image: "/assets/program-pelatihan.jpeg" },
    {
      id: 3,
      name: "Program kilat pengembangan petugas hibrida untuk industri keuangan",
      image: "/assets/program-pelatihan.jpeg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
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
          <div className="pl-20 pt-20">
            <h1 className="font-bold text-[35px] leading-[48px]">
              Another <span className="text-[#2D729F]">Meaningful</span>{" "}
              Learning <br />
              with <span className="text-[#2D729F]">M-Knows Consulting</span>
            </h1>
            <form className="relative  max-w-md  pt-6">
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <div className="relative bg-[#F5F5F5] w-[330px] h-[48px] rounded-[8px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image
                    src="/assets/search-icon.png"
                    alt="Search Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <input
                  type="search"
                  id="search-input"
                  className="block w-[360px] h-[48px] pl-16 pt-3 text-md text-gray-900 bg-[#F2F2F3] border-none rounded-[8px]"
                  placeholder="Telusuri Topik Pelatihan, Konsultasi, Assesment
"
                />
              </div>
            </form>
          </div>
          <div>
            <Image
              src="/assets/hero-image.png"
              alt="Navbar Logo"
              width={596}
              height={596}
              className=" object-contain pt-[6rem]"
            />
          </div>
        </div>
      </section>
      <section className="h-[320px]  justify-center">
        <div className="text-center py-[54px]">
          <h1 className="font-semibold text-[32px] leading-[38.4px]">
            Some count that matters
          </h1>
          <p className="leading-[38.4px] text-[16px]">
            Our achievement in the journey depicted in numbers
          </p>
        </div>
        <div className="flex justify-between items-center text-center">
          <div className="flex-1 p-4">
            <h2 className="font-semibold text-[32px]">100+ Pelatihan</h2>
            <p className="text-[#868A92] text-[18px]">Dari berbagai klien</p>
          </div>
          <div className="relative flex-1 p-4">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[64px] border-l-[1px] border-[#626262]"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[64px] border-r-[1px] border-[#626262]"></div>
            <h2 className="font-semibold text-[32px]">10+ Instruktur</h2>
            <p className="text-[#868A92] text-[18px]">Instruktur Ternama</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="font-semibold text-[32px]">200+ Klien</h2>
            <p className="text-[#868A92] text-[18px]">
              Dari berbagai perusahaanx
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto ">
          <h2 className="text-[32px] font-medium text-center mb-8">
            Jelajahi Kategori Unggulan
          </h2>
          {/* Category List */}
          <div className="flex flex-wrap  justify-center -mx-10">
            {categories.map((category) => (
              <div key={category.id} className="w-[298px] m-10">
                <div className="relative h-[192px] rounded-[15px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[15px]"
                  />
                  <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-[15px] ">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
