import Image from "next/image";
import { cardsData } from "./cardsData";

export default function About() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-10">
          <h2 className="md:text-[48px] text-[36px] text-[#388FC7] font-semibold text-center mb-8 py-6">
            M-Knows Consulting
          </h2>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 ">
              <p className="md:text-3xl text-[20px] leading-snug">
                <span className="text-[#388FC7]"> M-Knows Consulting </span>
                adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan
                PT. Menara Pengetahuan Indonesia. PT. Menara Indonesia adalah
                perusahaan yang menjalankan jasa konsultasi manajemen dan
                pembuatan solusi digital, seperti aplikasi pendidikan (web dan
                app), solusi artificial intelligence untuk industri keuangan dan
                pendidikan, serta solusi virtual reality dan pembuatan game yang
                merupakan induk perusahaan dari PT. Menara Pengetahuan
                Indonesia, perusahaan yang bergerak dalam bidang jasa pendidikan
                dan pelatihan, berkantor pusat di Jakarta dan memiliki cabang di
                Surabaya.
              </p>
            </div>
            <div className="md:w-1/2 md:mb-0 flex md:pl-14 pl-2 justify-center items-center py-10">
              <Image
                src="/assets/more/aboutUs/first-pict.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 flex md:pl-14 pl-2 items-center">
              <Image
                src="/assets/more/aboutUs/second-pict.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="md:text-3xl text-[20px] leading-snug">
                Sejak berdiri,{" "}
                <span className="text-[#388FC7]"> M-Knows Consulting</span>
                telah sukses bekerjasama dengan beragam perusahaan nasional dan
                multinasional, dengan kualitas kerja yang memuaskan, dibuktikan
                dengan tingginya repeat order dan customer yang loyal <br />
                <br />
                Melalui cabang Jakarta & Surabaya,{" "}
                <span className="text-[#388FC7]"> M-Knows Consulting</span>
                telah sukses melayani beragam perusahaan dengan kualitas kerja
                yang memuaskan, sesuai keahliannya dan pendekatan konsultasi
                yang menekankan pada sifat Applicative, Contemporary, High
                Impact, Fun & Motivational.
              </p>
            </div>
          </div>

          <h2 className="md:text-3xl text-[20px] font-semibold text-center pb-10 pt-14">
            Jasa konsultasi yang sering diambil klien meliputi:
          </h2>
          {/* Card */}
          <div className="flex flex-wrap justify-center items-center py-5 gap-y-20 md:gap-x-32 gap-x-10">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="md:w-2/5 h-32 bg-[#D7E9F4] rounded-xl flex items-center md:p-4 p-2"
              >
                {/* Gambar di sebelah kiri */}
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  width={50}
                  height={50}
                  className="mr-10"
                />
                {/* Judul di sebelah kanan gambar */}
                <h2 className="md:text-3xl text-[20px]">{card.title}</h2>
              </div>
            ))}
          </div>
          <h2 className="md:text-3xl text-[20px] font-semibold text-center pb-10 pt-14">
            Assessment for Technical Competency
          </h2>
          <div
            className="relative w-full h-screen bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/more/aboutUs/last-pict.png')",
            }}
          >
            {/* Kotak shadow di tengah */}
            <div className="absolute w-11/12 md:h-5/6 rounded-lg bg-[#302A2A4D] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {/* Tulisan berwarna putih */}
              <h2 className="text-white md:text-4xl text-[20px] md:px-16 px-2 py-12 ">
                Program pelatihan unggulan yang banyak di ambil klien M-Knows
                antara lain meliputi topik: Marketing, Sales Distribution,
                Service, Leadership, Managerial, Supervisory, Credit Management,
                Debt Collection, Filing, Office, 5S & Warehouse Management,
                Finance & Banking, Persiapan Pensiun, Train The Trainers,
                Presentation Skills, Communication Skills, Negotiation Skills,
                Achievement Motivation & Soft Skills lainnya.
              </h2>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-56 bg-[#D7E9F4]">
            <h2 className=" md:text-4xl text-[20px] text-center md:px-16 px-2">
              Kami percaya model pelatihan kontemporer lebih baik dibandingkan
              pendekatan yang klasik dan konservatif. We Are Strong In “Activity
              Based Learning”.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
