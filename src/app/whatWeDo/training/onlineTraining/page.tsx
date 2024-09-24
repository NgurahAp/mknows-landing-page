import { onlineLearningData } from "./components/onlineTrainingData";
import OnlineLearningSection from "./components/onlineLearningSection";
import Link from "next/link";

export default function NewTrainingPage() {
  return (
    <main>
      <section className="flex flex-col py-10 md:py-20 px-6 md:px-28">
        <div className="text-center pb-6 mt-20 md:mt-[133px]">
          <h2 className="text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38.4px] font-semibold mb-2">
            Public Webtraining
          </h2>
          <h2 className="text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38.4px] font-semibold mb-4 text-[#2D729F]">
            2024
          </h2>
        </div>

        <Link href="/whatWeDo/training/onlineTraining/formulir" className="sm:w-[370px] md:w-[450px]">
          <div className="w-full md:w-auto sm:w-auto bg-slate-100 text-[#2D729F] border border-[#388FC7] py-3 px-4 text-sm md:text-base rounded-lg font-medium text-center hover:bg-gray-200">

            Download Jadwal Public Training Tahun 2024
          </div>
        </Link>

        <div className="container mx-auto mt-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {onlineLearningData?.map((training) => (
              <OnlineLearningSection key={training?.id} training={training} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
