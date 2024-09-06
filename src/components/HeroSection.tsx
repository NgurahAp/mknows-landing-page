import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[474px] bg-custom-blue">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:pl-20 pt-40 md:pt-20">
          <h1 className="font-bold text-3xl md:leading-[48px] md:text-left text-center  md:text-[35px]">
            Another <span className="text-[#2D729F]">Meaningful</span> Learning{" "}
            <br />
            with <span className="text-[#2D729F]">M-Knows Consulting</span>
          </h1>
          <form className="md:pl-0 pl-5 max-w-md  pt-6 ">
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <div className="relative bg-[#F5F5F5] md:w-[330px] w-[220px] md:h-[48px] h-[30px] rounded-[8px]">
              <div className="absolute md:pt-0 pt-2 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/search-icon.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="md:w-[26px] "
                />
              </div>
              <input
                type="search"
                id="search-input"
                className="block md:w-[360px] w-[300px] md:h-[48px] h-[35px] md:pl-16 pl-11 pt-3 text-sm md:text-md text-gray-900 bg-[#F2F2F3] border-none rounded-[8px]"
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
            width={300}
            height={300}
            className="md:w-[596px] pt-[4.2rem] md:pt-[6rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
