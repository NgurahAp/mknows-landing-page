import { bootcampData } from "./bootcampData";
import BootcampCard from "./components/bootcampCard";
import BootcampHeroSection from "./components/heroSection";

export default function BootcampPage() {
  return (
    <main>
      <BootcampHeroSection />
      <section className="flex flex-col items-center justify-center md:py-20 py-10 md:px-28 px-10 ">
        <div className="text-center pb-10">
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
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {bootcampData?.map((bootcamp) => (
              <BootcampCard key={bootcamp?.id} bootcamp={bootcamp} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
