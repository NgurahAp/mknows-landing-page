import Image from "next/image";

export default function BootcampPage() {
  return (
    <main>
      <section
        className="md:h-[474px] h-[250px] md:pt-[19rem] pt-32 bg-cover bg-no-repeat bg-center max-w-screen"
        style={{ backgroundImage: "url('/assets/hero-image-bootcamp.png')" }}
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
      <section className="flex flex-col items-center justify-center md:py-20 py-10 md:px-28 px-10 ">
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-medium md:mb-7 mb-4 text-[#2D729F]">
            Bootcamp Unggulan
          </h2>
          <h2 className="md:text-2xl text-xl font-semibold mb-2">
            Selamat Datang di M-Knows Consulting!
          </h2>
          <p className="md:text-2xl text-base">
            Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang
            khusus untuk membantu mengembangkan keterampilan dan pengetahuan
            Anda, dalam berbagai bidang. Bootcamp kami, menawarkan pelatihan
            intensif dengan para mentor yang ahli dan berpengalaman dalam
            beragam industri, Mempersiapkan diri Anda untuk sukses di dunia
            kerja yang kompetitif.
          </p>
        </div>
      </section>
    </main>
  );
}
