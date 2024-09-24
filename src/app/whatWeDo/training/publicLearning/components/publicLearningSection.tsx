import Image from "next/image";
import Link from "next/link";

interface PublicLearningSectionProps {
  training: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

export default function PublicLearningSection({ training }: PublicLearningSectionProps) {
  return (
    <section className="pt-7 w-96">
      <div className="container mx-3 mt-10">
        <div >
            <div key={training.id}>
              <div className="relative h-60 w-11/12 rounded-[15px] overflow-hidden">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-[15px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
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