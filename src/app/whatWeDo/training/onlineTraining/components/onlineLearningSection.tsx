import Image from "next/image";
import Link from "next/link";

interface OnlineLearningSectionProps {
  training: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

export default function OnlineLearningSection({ training }: OnlineLearningSectionProps) {
  return (
    <section className="pb-16 pt-7 min-h-[100vh]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-10">
            <div key={training.id} className="w-[298px] m-10">
              <div className="relative h-[192px] rounded-[15px] overflow-hidden">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-[15px]"
                />
                <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white md:text-2xl text-base">{training.title}</h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}