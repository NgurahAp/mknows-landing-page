export default function BootcampHeroSection() {
  return (
    <section
      className="min-h-[60vh] md:mt-[6rem] mt-32 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/bootcamp/hero-image-bootcamp.png')",
      }}
    >
      <div className="w-full">
        <div className="md:pl-20 pl-5 flex flex-col justify-center">
          <h1 className="font-bold text-xl md:text-[35px] md:leading-[48px] text-left">
            Bootcamp Program
          </h1>
          <h2 className="font-semibold text-sm md:text-4xl text-left">
            Welcome to{" "}
            <span className="text-[#2D729F]">M-Knows Consulting!</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
