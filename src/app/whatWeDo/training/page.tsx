import Link from "next/link";
import Image from "next/image";

const trainingCategories = [
  {
    title: "Online Learning",
    imageSrc: "/assets/whatWeDo/training/onlineLearning.png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "Public Learning",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title: "In-House Training",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
];


export default function Training() {
  return (
    <main>
      <section
        className="md:min-h-[60vh] min-h-[30vh] md:mt-[4rem] mt-[4rem] bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/training/hero-section.png')",
        }}
      >
        <div className="w-1/2">
          <div className="md:pl-20 pl-5 flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-5xl  text-left">
              Online Learning, Public & Inhouse Training
            </h1>
          </div>
        </div>
      </section>
      <section className="pb-16 pt-7 min-h-[40vh]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-10">
            {/* Looping melalui data trainingCategories */}
            {trainingCategories.map((category, index) => (
              <Link href={category.link} key={index}>
                <div className="md:w-96 w-80 m-10 cursor-pointer">
                  <div className="relative h-56 rounded-3xl overflow-hidden">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-[15px]"
                    />
                    <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white md:text-2xl text-base">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
