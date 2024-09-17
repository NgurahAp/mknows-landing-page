import Image from "next/image";

export default function Training() {
  const imagesRow1 = Array.from(
    { length: 9 },
    (_, i) => `/assets/whatWeDo/clients/row1-${i + 1}.png`
  );

  const imagesRow2 = Array.from(
    { length: 8 },
    (_, i) => `/assets/whatWeDo/clients/row2-${i + 1}.png`
  );

  const imagesRow3 = Array.from(
    { length: 5 },
    (_, i) => `/assets/whatWeDo/clients/row3-${i + 1}.png`
  );

  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-48">
          <h2 className="text-5xl text-[#225677] font-bold text-center mb-8 py-9">
            In-House Training
          </h2>
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/inHouse1.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="text-2xl leading-relaxed">
                Pelatihan Internal merupakan program pelatihan yang
                diselenggarakan oleh M-KNOWS CONSULTING bekerjasama dengan
                Perusahaan atau Instansi pemerintah untuk meningkatkan skill
                karyawan sehingga meningkatkan keunggulan kompetitif di bidang
                Sumberdaya Manusia dengan materi tertentu, seperti Selling
                Skills, Leadership, Executive Coaching & Business Mentoring,
                Train The Trainer, Collection Skills, Credit Analyst dan
                lain-lain sesuai kebutuhan perusahaan atau instansi.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2 ">
              <p className="text-2xl leading-relaxed">
                M-KNOWS CONSULTING siap membantu mengembangkan program
                pelatihan, materi, dan jadwal yang sesuai dengan kebutuhan
                bisnis.Sejak tahun 2003, kami telah menyelenggarakan pelatihan
                internal di banyak perusahaan dan lembaga pemerintah. Kami telah
                mengembangkan metode yang sesuai dengan kebutuhan bisnis atau
                lembaga yang ingin meningkatkan kemampuan SDM-nya tetapi
                memiliki waktu terbatas.Metode pelatihan dirancang untuk dapat
                diterapkan segera setelah selesai karena didasarkan pada
                kebutuhan nyata di tempat kerja.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 flex items-center justify-center">
              <Image
                src="/assets/whatWeDo/inHouse2.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2 mb-6 md:mb-0 flex items-center justify-center">
              <Image
                src="/assets/whatWeDo/inHouse3.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="text-2xl leading-relaxed">
                Sistem penyelenggaraan pelatihan dapat diadakan dalam kelas
                kecil (10-20 peserta) atau kelas besar (lebih dari 50 peserta).
                Pelatihan diselenggarakan di tempat, tanggal, dan waktu yang
                disepakati, biasanya berlangsung selama beberapa hari dari jam
                08:00 hingga 17:00, atau sesuai kebutuhan perusahaan. Durasi
                pelatihan bisa disesuaikan. Inhouse training dapat dilakukan di
                luar Jabodetabek dan di seluruh wilayah Indonesia.
              </p>
            </div>
          </div>
          <h2 className="text-5xl text-[#225677] font-bold pt-20 mt-8 mb-4 ">
            Materi pelatihan yang diselenggarakan:
          </h2>
          <div className="flex flex-col  md:flex-row items-center pt-6 ">
            <div className="mb-6 md:mb-0">
              <h2 className="text-5xl text-[#225677] font-bold mb-8">1.</h2>
            </div>
            <div className="pl-7">
              <p className="text-3xl leading-relaxed text-center md:text-left">
                Tempat Penyelenggaraan Training: Pelatihan dapat diselenggarakan
                di Perusahaan atau Instansi. Pelatihan dapat diselenggarakan di
                tempat yang ditentukan misal: Hotel, Training Center perusahaan,
                dll.
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row  pt-5">
            <div className="mb-6 md:mb-0">
              <h2 className="text-5xl text-[#225677] font-bold ">2.</h2>
            </div>
            <div className="pl-5">
              <p className="text-3xl leading-relaxed md:text-left">
                Fasilitas : Sertifikat,Training Kit,Hard copy
                materi,Hotel/Resort
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row items-center pt-5  ">
            <div className="mb-6 md:mb-0">
              <h2 className="text-5xl text-[#225677] font-bold mb-8">3.</h2>
            </div>
            <div className="pl-5">
              <p className="text-3xl leading-relaxed text-center md:text-left">
                Tempat Penyelenggaraan Training: Pelatihan dapat diselenggarakan
                di Perusahaan atau Instansi. Pelatihan dapat diselenggarakan di
                tempat yang ditentukan misal: Hotel, Training Center perusahaan,
                dll.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="text-4xl text-[#225677] font-semibold text-center mb-8 py-9 pt-20">
            Our Clients
          </h2>
          <div className="w-full h-24 overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide">
            {imagesRow1.map((src, index) => (
              <div key={index} className="flex-shrink-0 h-full">
                <Image
                  src={src}
                  alt={`In-house activity ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-28 overflow-x-auto flex space-x-12 p-3 my-5 scrollbar-hide">
            {imagesRow2.map((src, index) => (
              <div key={index} className="flex-shrink-0 h-full">
                <Image
                  src={src}
                  alt={`In-house activity ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-24 overflow-x-auto flex space-x-12 p-3 my-5  scrollbar-hide">
            {imagesRow3.map((src, index) => (
              <div key={index} className="flex-shrink-0 h-full">
                <Image
                  src={src}
                  alt={`In-house activity ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
