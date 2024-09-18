import Link from "next/link";
import Image from "next/image";

export default function Training() {
  return (
    <main>
      <section
        className="md:min-h-[60vh] min-h-[30vh] md:mt-[4rem] mt-[4rem] bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/hybridOfficer/heroSection.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5 flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-5xl  text-left">
              Hybrid Officer Development <br /> Crash Program for Financial
              Industry
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
