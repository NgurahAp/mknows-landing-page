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
      className="md:min-h-[72vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
      style={{ backgroundImage: "url('/assets/home/hero-bg.png')" }}
    >
      <div className="w-2/3">
        <div className="md:pl-20 pl-5  flex flex-col justify-center">
          <h1 className="font-bold text-xl  text-left md:text-5xl">
            Another <span className="text-[#2D729F]">Meaningful</span> Learning
            <br />
            with <span className="text-[#2D729F]">M-Knows Consulting </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
