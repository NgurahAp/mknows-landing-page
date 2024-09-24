import { publicLearningData } from "./components/publicLearningData";
import PublicLearningSection from "./components/publicLearningSection";
import Link from "next/link";

export default function NewTrainingPage() {
  return (
    <main>
      <section className="flex flex-col md:py-20 py-10 md:px-28 px-10 ">
        <div className="text-center pb-10 mt-[133px]">
          <h2 className="text-[32px] leading-[38.4px] font-semibold mb-2">
            Public Webtraining
          </h2>
          <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4 text-[#2D729F]">
            2024
          </h2>
        </div>
        <Link href="/whatWeDo/training/onlineTraining/formulir" className="sm:w-[370px] md:w-[450px]">
          <div className="w-full md:w-auto sm:w-auto bg-slate-100 text-[#2D729F] border border-[#388FC7] py-3 px-4 text-sm md:text-base rounded-lg font-medium text-center hover:bg-gray-200">
            Download Jadwal Public Training Tahun 2024
          </div>
        </Link>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-10">
            {publicLearningData?.map((training) => (
              <PublicLearningSection key={training?.id} training={training} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
