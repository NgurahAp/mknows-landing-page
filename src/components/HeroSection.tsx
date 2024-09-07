import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="md:h-[474px] h-[240px] md:pt-0 pt-40  bg-cover bg-no-repeat bg-center max-w-screen"
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
    >
      <div className="flex md:items-center min-h-screen  ">
        <div className="md:pl-20 pl-5 ">
          <h1 className="font-bold text-xl md:leading-[48px]  text-left   md:text-[35px]">
            Another <span className="text-[#2D729F]">Meaningful</span> Learning
            <br />
            with <span className="text-[#2D729F]">M-Knows Consulting</span>
          </h1>
          <form className="md:pl-0  max-w-md md:pt-6 pt-2">
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <div className="relative bg-[#F5F5F5] md:h-[48px] md:w-[360px] w-[200px] h-[25px] rounded-[8px]">
              <div className="absolute md:pt-0  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="md:w-[26px]"
                />
              </div>
              <input
                type="search"
                id="search-input"
                className="block md:w-[360px] w-[200px] md:h-[48px] h-[25px] md:pl-16 pl-11  text-xs md:text-base text-gray-900 bg-[#F2F2F3] border-none rounded-[8px]"
                placeholder="Telusuri Topik Pelatihan, Konsultasi, Assesment"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
