import Image from "next/image";
import { levelCards, animationCards } from "./cardData";

export default function LMS() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/LMS/hero-section.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-semibold mb-4 text-xl text-[#388FC7] md:text-5xl leading-[50px] text-left">
              Learning Management <br />
            </h1>
            <h1 className="font-semibold  text-xl text-[#388FC7] md:text-5xl leading-[50px] text-left">
              System
              <span className="text-black "> (LMS)</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col  pt-20 mx-auto w-10/12  min-h-screen ">
        <h1 className="text-5xl text-center  font-medium mb-8">
          Pengembangan LMS Berbasis Moodle
        </h1>
        <p className="text-3xl text-center pb-28 mx-36">
          Kami mengembangkan Learning Management System (LMS) menggunakan Moodle
          dengan fitur fleksibel untuk kegiatan belajar, pengaturan konten
          multimedia, dan dukungan untuk interaksi belajar yang beragam. Desain
          LMS dapat disesuaikan, terintegrasi dengan SCORM, dan kompatibel
          dengan perangkat mobile.
        </p>
        <h1 className="text-5xl text-[#648B04] text-center font-medium mb-10">
          Konten Pembelajaran Digital
        </h1>
        <p className="text-4xl flex items-start justify-start text-left text-[#648B04] font-medium mb-5">
          Modul Interaktif
        </p>
        <p className="text-3xl  pb-10 ">
          Modul Interaktif Modul pembelajaran yang kami kembangkan mengacu pada
          konsep Activity Based Learning dengan memperhatikan level interaktif
          dari setiap informasi yang perlu disampaikan. <br /> <br /> Penggunaan
          Grafis digunakan untuk menarik lebih banyak perhatian peserta dalam
          pembelajaran. Kami dapat memberi Anda grafis dalam bentuk 2D, 3D,
          still atau bergerak tergantung pada kebutuhan instruksional Anda.
        </p>
        <div className="flex justify-center items-center py-20 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {levelCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-80 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-6">
                  {/* Image sebagai ikon */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40} // Atur lebar ikon
                    height={40} // Atur tinggi ikon
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#648B04]   text-left mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-xl text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-4xl flex items-start justify-start text-left text-[#22776C] font-medium mb-5">
          Vidio Instriksional
        </p>
        <p className="text-3xl  pb-10 ">
          Video pembelajaran merupakan alternatif yang efektif untuk
          meningkatkan kualitas kegiatan belajar. Kami menyediakan berbagai
          jenis video sesuai kebutuhan instruksional Anda. <br /> <br />{" "}
          Pilihannya termasuk video live action yang menampilkan pengajar atau
          demonstrasi langsung. Selain itu, kami juga menawarkan video animasi
          yang menarik dan interaktif. Dengan pilihan ini, Anda dapat memilih
          format yang paling sesuai untuk mencapai tujuan pembelajaran Anda.
        </p>
        <div className="flex justify-center items-center py-20 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {animationCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-80 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-6">
                  {/* Image sebagai ikon */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40} // Atur lebar ikon
                    height={40} // Atur tinggi ikon
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#648B04]   text-left mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-xl text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="md:min-h-[80vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/LMS/lms-yt.png')",
        }}
      ></section>
    </main>
  );
}
