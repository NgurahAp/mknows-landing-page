import OurClients from "@/components/OurClients";
import Image from "next/image";

export default function InHouseTraining() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-4 lg:px-24 xl:px-48">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-[#225677] font-bold text-center mb-6 md:mb-8">
            In-House Training
          </h2>

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/training/inHouse1.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md w-full max-w-sm"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl xl:text-2xl leading-relaxed">
                Pelatihan Internal merupakan program pelatihan yang diselenggarakan oleh
                M-KNOWS CONSULTING bekerjasama dengan Perusahaan atau Instansi pemerintah
                untuk meningkatkan skill karyawan sehingga meningkatkan keunggulan kompetitif
                di bidang Sumberdaya Manusia dengan materi tertentu, seperti Selling Skills,
                Leadership, Executive Coaching & Business Mentoring, Train The Trainer,
                Collection Skills, Credit Analyst dan lain-lain sesuai kebutuhan perusahaan atau instansi.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl xl:text-2xl leading-relaxed">
                M-KNOWS CONSULTING siap membantu mengembangkan program pelatihan, materi, dan jadwal
                yang sesuai dengan kebutuhan bisnis.Sejak tahun 2003, kami telah menyelenggarakan
                pelatihan internal di banyak perusahaan dan lembaga pemerintah. Kami telah mengembangkan
                metode yang sesuai dengan kebutuhan bisnis atau lembaga yang ingin meningkatkan kemampuan
                SDM-nya tetapi memiliki waktu terbatas. Metode pelatihan dirancang untuk dapat diterapkan
                segera setelah selesai karena didasarkan pada kebutuhan nyata di tempat kerja.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 flex items-center justify-center py-5">
              <Image
                src="/assets/whatWeDo/training/inHouse2.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md w-full max-w-sm"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-1/2 mb-6 md:mb-0 flex items-center justify-center">
              <Image
                src="/assets/whatWeDo/training/inHouse3.png"
                alt="Deskripsi gambar"
                width={366}
                height={375}
                className="rounded-lg shadow-md w-full max-w-sm"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl xl:text-2xl leading-relaxed">
                Sistem penyelenggaraan pelatihan dapat diadakan dalam kelas kecil (10-20 peserta)
                atau kelas besar (lebih dari 50 peserta). Pelatihan diselenggarakan di tempat, tanggal,
                dan waktu yang disepakati, biasanya berlangsung selama beberapa hari dari jam 08:00 hingga
                17:00, atau sesuai kebutuhan perusahaan. Durasi pelatihan bisa disesuaikan. Inhouse training
                dapat dilakukan di luar Jabodetabek dan di seluruh wilayah Indonesia.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl xl:text-5xl text-[#225677] font-bold pt-16 mt-8 mb-6 text-center">
            Materi pelatihan yang diselenggarakan:
          </h2>

          {/* Section 4 - Training Details */}
          <div className="flex flex-col md:flex-row items-center pt-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl text-[#225677] font-bold mb-4">1.</h2>
            </div>
            <div className="pl-7">
              <p className="text-lg md:text-2xl leading-relaxed text-center md:text-left">
                Tempat Penyelenggaraan Training: Pelatihan dapat diselenggarakan di Perusahaan atau Instansi.
                Pelatihan dapat diselenggarakan di tempat yang ditentukan misal: Hotel, Training Center perusahaan, dll.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center pt-5">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl text-[#225677] font-bold mb-4">2.</h2>
            </div>
            <div className="pl-5">
              <p className="text-lg md:text-2xl leading-relaxed md:text-left">
                Fasilitas : Sertifikat, Training Kit, Hard copy materi, Hotel/Resort
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center pt-5">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl text-[#225677] font-bold mb-4">3.</h2>
            </div>
            <div className="pl-5">
              <p className="text-lg md:text-2xl leading-relaxed text-center md:text-left">
                Tempat Penyelenggaraan Training: Pelatihan dapat diselenggarakan di Perusahaan atau Instansi.
                Pelatihan dapat diselenggarakan di tempat yang ditentukan misal: Hotel, Training Center perusahaan, dll.
              </p>
            </div>
          </div>
        </div>
        <OurClients />
      </section>
    </main>
  );
}
