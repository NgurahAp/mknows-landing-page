export default function BootcampHeroSection() {
  return (
    <section
      className="md:h-[474px] h-[250px] md:pt-[19rem] pt-32 bg-cover bg-no-repeat bg-center max-w-screen"
      style={{ backgroundImage: "url('/assets/bootcamp/hero-image-bootcamp.png')" }}
    >
      <div className="flex min-h-screen">
        <div className="md:pl-20 pl-5">
          <h1 className="font-bold text-xl md:leading-[48px] text-left md:text-[35px]">
            Bootcamp Program
          </h1>
          <h2 className="font-semibold  text-sm md:text-4xl text-left">
            Welcome to{" "}
            <span className="text-[#2D729F]">M-Knows Consulting!</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
