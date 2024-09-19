import OurClients from "@/components/OurClients";
import Image from "next/image";
import { outboundData, videoData } from "./data";


export default function Outbound() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/outbound/hero-section.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-semibold  text-xl text-[#388FC7] md:text-5xl leading-[50px] text-left">
              Outbound
              <span className="text-black "> & Gathering</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col  pt-20 mx-auto w-11/12  min-h-screen ">
        <h1 className="text-5xl text-center  font-medium mb-8">
          Outbound Training
        </h1>
        <p className="text-3xl text-center pb-28 mx-36">
          Outbound merupakan jenis latihan yang memanfaatkan keunggulan alam
          (outdoor) untuk membangun kerjasama tim dan pengembangan diri yang
          disimulasi dalam outbound training melalui permainan-permainan
          outbound yang edukatif baik dilakukan secara individu maupun kelompok.
        </p>
        <div className="flex flex-col md:flex-row items-center  py-16 ">
          <div className="w-1/2 mb-6 md:mb-0 ">
            <Image
              src="/assets/whatWeDo/outbound/training.png"
              alt="Deskripsi gambar"
              width={500}
              height={400}
              className="rounded-lg shadow-md "
            />
          </div>
          <div className="w-1/2 pl-12">
            <p className="text-2xl  ">
              Paket Outbound yang kami tawarkan tidak hanya mencakup tantangan
              fisik dan mental, tetapi juga tantangan intelegensia. Program ini
              dirancang dengan permainan dan kegiatan yang dapat memberikan
              perubahan karakter, sehingga individu menjadi lebih baik dan
              positif. <br /> <br /> Outbound training sangat cocok untuk
              perusahaan, baik swasta maupun instansi pemerintah, yang ingin
              meningkatkan kinerja karyawan mereka. Program ini dapat
              meningkatkan kreativitas, membangun jiwa kepemimpinan, memperkuat
              kerjasama tim, menumbuhkan kebersamaan, serta rasa saling percaya
              dan tanggung jawab. Melalui kegiatan yang menyenangkan, karyawan
              perusahaan Anda akan mendapatkan banyak pelajaran yang dapat
              diterapkan untuk meningkatkan kinerjanya.
            </p>
          </div>
        </div>
        <h1 className="text-2xl  font-medium my-10">
          Paket Outbound Training yang kami tawarkan meliputi:
        </h1>
        <div className="flex justify-center items-center py-5 ">
          {outboundData.map((card) => (
            <div
              key={card.id}
              className="w-[35rem] h-48 mx-6 bg-white shadow-lg border-[#648B04] border rounded-lg overflow-hidden flex items-center justify-center"
            >
              {/* Left: Image */}
              <div className="w-1/3">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={134}
                  height={130}
                  className="ml-5"
                />
              </div>

              {/* Right: Title */}
              <div className="w-2/3 p-2 flex items-center justify-center">
                <h2 className="text-2xl text-[#648B04]">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-5xl text-center py-20 font-medium ">
          Video Outbound
        </h1>
        <div className="flex flex-wrap justify-center items-center py-5 ">
          {videoData.map((card) => (
            <div key={card.id} className="m-10">
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={350}
                height={220}
                className=""
              />
            </div>
          ))}
        </div>
      </section>
      <OurClients/>
    </main>
  );
}
