import Image from "next/image";

export default function History() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-10 ">
          <h2 className="md:text-[48px] text-[36px] text-[#388FC7] font-semibold text-center mb-8 py-6">
            <span className="text-black">History</span> M-Knows Consulting
          </h2>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 ">
              <p className="md:text-3xl text-[20px] leading-snug">
                <span className="text-[#388FC7]"> M-Knows Consulting</span>{" "}
                didirikan pertama kali pada bulan Juni 2003 dan berlokasi di
                Petogogan Jakarta, dan pada tahun 2005 pindah ke Jl. Radio 4 No.
                8B Kebayoran Baru Jakarta Selatan. Tahun 2008, M-Knows
                Consulting membuka kantor cabangnya di Surabaya yang berlokasi
                Jl. Raya Darmo Permai III sampai dengan sekarang. Tahun 2020
                M-Knows membuka kantor untuk produksi solusi digital di jalan
                raya Cirendeu no 61 Tangerang Selatan.
              </p>
            </div>
            <div className="md:w-1/2 md:mb-0 flex md:pl-14 pl-2 justify-center items-center py-10">
              <Image
                src="/assets/more/historyPage/history1.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 flex  md:pl-14 pl-2  items-center">
              <Image
                src="/assets/more/historyPage/history2.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="md:text-3xl text-[20px] leading-snug">
                Sejak berdirinya,{" "}
                <span className="text-[#388FC7]"> M-Knows Consulting </span>
                telah sukses bekerjasama dengan berbagai perusahaan nasional dan
                multinasional. Mereka menyediakan layanan pendidikan dan
                pembelajaran melalui solusi Consulting Services, Public
                Training, In-House Training, dan Outbound & Team Building
                sebelum memperluas ke layanan solusi digital. Di cabang Jakarta
                & Surabaya, M-Knows Consulting dikenal dengan kualitas kerja
                yang memuaskan, sesuai keahlian mereka dalam pendekatan
                konsultasi yang aplikatif, kontemporer, berdampak tinggi, serta
                menyenangkan dan memotivasi. <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 py-10">
              <p className="md:text-3xl text-[20px] leading-snug">
                <span className="text-[#388FC7]"> M-Knows Consulting</span>{" "}
                merupakan salah satu perusahaan Indonesia yang bergerak di
                bidang consultant management. Didirikan pertama kali pada bulan
                Juni 2003 dan berlokasi di Jl. Petogogan Kebayoran Baru Jakarta
                Selatan.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 flex md:pl-14 pl-2 justify-center items-center py-10">
              <Image
                src="/assets/more/historyPage/history3.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}