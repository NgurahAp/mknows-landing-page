export default function BootcampHeroSection() {
  return (
    <section
      className="md:min-h-[60vh] min-h-[30vh] mt-16  bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/bootcamp/hero-image-bootcamp.png')",
      }}
    >
      <div className="w-full">
        <div className="md:pl-20 pl-5 flex flex-col justify-center">
          <h1 className="font-bold text-xl md:text-5xl md:mb-2 mb-0  text-left">
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
