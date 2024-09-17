import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [placeholderText, setPlaceholderText] = useState(
    "Telusuri Topik Pelatihan, Konsultasi, Assesment"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPlaceholderText("Telusuri Topik Pelatihan, Konsultasi, Assesment");
      } else {
        setPlaceholderText("Telusuri topik disini");
      }
    };

    // Set initial placeholder based on screen size
    handleResize();

    // Update placeholder on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="md:h-[75vh] h-80 md:pt-0 pt-28 bg-cover bg-no-repeat bg-center max-w-screen"
      style={{ backgroundImage: "url('/assets/home/hero-bg.png')" }}
    >
      <div className="flex md:items-center min-h-screen">
        <div className="md:pl-20 pl-5">
          <h1 className="font-bold text-xl  text-left md:text-5xl">
            Another <span className="text-[#2D729F]">Meaningful</span> Learning
            <br />
            with <span className="text-[#2D729F]">M-Knows Consulting </span>
          </h1>
          <form className="md:pl-0 max-w-md md:pt-6 pt-2">
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <div className="relative bg-[#F5F5F5] md:h-16 md:w-[30rem] w-[16rem] h-12 rounded-xl">
              <div className="absolute md:pt-0 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/home/search-icon.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="md:w-8"
                />
              </div>
              <input
                type="search"
                id="search-input"
                className="block md:w-[30rem] w-[16rem] md:h-16 h-12 md:pl-16 pl-11 text-xs md:text-base text-gray-900 bg-[#F2F2F3] border-none rounded-xl"
                placeholder={placeholderText}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
