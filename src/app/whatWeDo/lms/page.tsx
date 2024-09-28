import { levelCards, animationCards } from "./cardData";
import CardGrid from "./components/cardGrid";

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
            <h1 className="font-semibold mb-4 text-xl text-[#388FC7] md:text-5xl md:leading-10 leading-6 text-left">
              Learning Management System
              <span className="text-black "> (LMS)</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col  pt-20 mx-auto w-10/12  min-h-screen ">
        <h1 className="md:text-5xl text-2xl text-center  font-medium mb-8">
          Pengembangan LMS Berbasis Moodle
        </h1>
        <p className="md:text-3xl text-lg text-center md:pb-28 pb-10 md:mx-36">
          Kami mengembangkan Learning Management System (LMS) menggunakan Moodle
          dengan fitur fleksibel untuk kegiatan belajar, pengaturan konten
          multimedia, dan dukungan untuk interaksi belajar yang beragam. Desain
          LMS dapat disesuaikan, terintegrasi dengan SCORM, dan kompatibel
          dengan perangkat mobile.
        </p>
        <h1 className="md:text-5xl text-3xl text-[#648B04] text-center font-medium mb-10">
          Konten Pembelajaran Digital
        </h1>
        <p className="md:text-4xl text-2xl flex items-start justify-start text-left text-[#648B04] font-medium mb-5">
          Modul Interaktif
        </p>
        <p className="md:text-3xl text-xl  pb-10 ">
          Modul Interaktif Modul pembelajaran yang kami kembangkan mengacu pada
          konsep Activity Based Learning dengan memperhatikan level interaktif
          dari setiap informasi yang perlu disampaikan. <br /> <br /> Penggunaan
          Grafis digunakan untuk menarik lebih banyak perhatian peserta dalam
          pembelajaran. Kami dapat memberi Anda grafis dalam bentuk 2D, 3D,
          still atau bergerak tergantung pada kebutuhan instruksional Anda.
        </p>
        <CardGrid cards={levelCards} />
        <p className="md:text-4xl text-2xl flex items-start justify-start text-left text-[#22776C] font-medium mb-5">
          Vidio Instriksional
        </p>
        <p className="md:text-3xl  text-xl pb-10 ">
          Video pembelajaran merupakan alternatif yang efektif untuk
          meningkatkan kualitas kegiatan belajar. Kami menyediakan berbagai
          jenis video sesuai kebutuhan instruksional Anda. <br /> <br />{" "}
          Pilihannya termasuk video live action yang menampilkan pengajar atau
          demonstrasi langsung. Selain itu, kami juga menawarkan video animasi
          yang menarik dan interaktif. Dengan pilihan ini, Anda dapat memilih
          format yang paling sesuai untuk mencapai tujuan pembelajaran Anda.
        </p>
        <CardGrid cards={animationCards} />
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
