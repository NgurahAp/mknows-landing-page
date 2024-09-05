import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[474px] bg-custom-blue">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="pl-20 pt-20">
          <h1 className="font-bold text-3xl leading-[48px] md:text-[35px]">
            Another <span className="text-[#2D729F]">Meaningful</span> Learning{" "}
            <br />
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
            alt="Hero IMag"
            width={596}
            height={596}
            className="  pt-[6rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
