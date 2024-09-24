import Image from "next/image";
import { cardsData } from "./cardsData";

export default function About() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-28 ">
          <h2 className="text-5xl text-[#388FC7] font-semibold text-center mb-8 py-9">
            M-Knows Consulting
          </h2>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 ">
              <p className="text-3xl leading-snug">
                <span className="text-[#388FC7]"> M-Knows Consulting</span>
                adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan
                PT. Menara Pengetahuan Indonesia. PT. Menara Indonesia adalah
                perusahaan yang menjalankan jasa konsultasi manajemen dan
                pembuatan solusi digital, seperti aplikasi pendidikan (web dan
                app), solusi artificial intelligence untuk industri keuangan dan
                pendidikan, serta solusi virtual reality dan pembuatan game yang
                merupakan induk perusahaan dari PT. Menara Pengetahuan
                Indonesia,  perusahaan yang bergerak dalam bidang jasa
                pendidikan dan pelatihan, berkantor pusat di Jakarta dan
                memiliki cabang di Surabaya.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 flex pl-14  justify-center items-center">
              <Image
                src="/assets/more/aboutUs/first-pict.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 mb-6 md:mb-0 flex    items-center">
              <Image
                src="/assets/more/aboutUs/second-pict.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="text-3xl leading-snug">
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

          <h2 className="text-3xl  font-semibold text-center pb-10 pt-14">
            Jasa konsultasi yang sering diambil klien meliputi:
          </h2>
          {/* Card */}
          <div className="flex flex-wrap justify-center items-center py-5 gap-y-20 gap-x-32">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="w-2/5 h-32 bg-[#D7E9F4] rounded-xl flex items-center p-4"
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
                <h2 className="text-3xl">{card.title}</h2>
              </div>
            ))}
          </div>
          <h2 className="text-3xl  font-semibold text-center pb-10 pt-14">
            Assessment for Technical Competency
          </h2>
          <div
            className="relative w-full h-[70vh] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/more/aboutUs/last-pict.png')",
            }}
          >
            {/* Kotak shadow di tengah */}
            <div className="absolute w-11/12 h-5/6 rounded-lg bg-[#302A2A4D] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {/* Tulisan berwarna putih */}
              <h2 className="text-white text-4xl px-16  ">
                Program pelatihan unggulan yang banyak di ambil klien M-Knows
                antara lain meliputi topik: Marketing, Sales Distribution,
                Service, Leadership, Managerial, Supervisory, Credit Management,
                Debt Collection, Filing, Office, 5S & Warehouse Management,
                Finance & Banking, Persiapan Pensiun,  Train The Trainers,
                 Presentation Skills,  Communication Skills, Negotiation Skills,
                Achievement Motivation & Soft Skills lainnya.
              </h2>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-56 bg-[#D7E9F4]">
            <h2 className=" text-4xl text-center px-16  ">
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
