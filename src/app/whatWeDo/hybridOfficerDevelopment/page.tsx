import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "/assets/whatWeDo/hybridOfficer/rekruitmen-mahasiswa.png",
    title: "Recruitment & Seleksi Mahasiswa",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/coaching-mentoring.png",
    title: "Coaching & mentoring selama magang",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/roleplay-drill.png",
    title: "Roleplay, Drill & Penilaian kompetensi",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/kontrak-kerja.png",
    title: "Kontrak kerja & Orientasi",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/evaluasi-kelulusan.png",
    title: "Evaluasi dan Kelulusan",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/magang-perusahaan.png",
    title: "Magang di perusahaan",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/pelatihan-berbasis-kompetensi.png",
    title: "Pelatihan berbasis kompetensi",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/pembuatan-laporan-individual.png",
    title: "Pembuatan laporan individual",
  },
  {
    icon: "/assets/whatWeDo/hybridOfficer/penawaran-bekerja.png",
    title: "Penawaran untuk bekerja di perusahaan",
  },
];
export default function Training() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/whatWeDo/hybridOfficer/heroSection.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-bold mb-3 text-[#388FC7] text-xl md:text-5xl leading-10 text-left">
              Hybrid Officer Development
            </h1>
            <h1 className="font-bold text-xl md:text-5xl leading-10 text-left">
              Crash Program for Financial Industry
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center p-20  min-h-screen ">
        {/* Pengembangan program singkat hibrid */}
        <div className="text-center max-w-full mx-auto ">
          <h1 className="text-4xl text-[#648B04] font-semibold mb-8">
            Pengembangan Program Singkat Hibrid Proyek Lingkup
          </h1>
          <p className="text-3xl">
            Officer Development Crash Program adalah program pelatihan & magang
            yang merupakan penciptaan kompetensi di bidang Sales, Credit &
            Collection, guna menghasilkan SDM yang produktif dan berkinerja
            tinggi. Penguatan kompetensi dilakukan berupa pelatihan selama 1
            bulan di M-Knows, fokus pada role play dan drill, ditutup dengan uji
            kompetensi. Mereka yang lulus uji kompetensi, disalurkan untuk 1
            bulan magang di perusahaan (Bank, Multi Finance, Fintech dan
            Asuransi). Bagi yang berkinerja tinggi akan ditawarkan untuk bekerja
            di perusahaan yang berpartisipasi, bekerja di Industri Keuangan.
          </p>
          <div className="container mx-auto my-12 pt-10  flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-x-24 gap-y-16 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center max-w-sm space-x-4"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    // className="w-28 h-w-28"
                  />
                  <span className="text-2xl text-left  ">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Proses perekrutan & on boarding */}
        <div className=" w-3/5 pt-12">
          <h1 className="text-4xl text-[#648B04] ">
            Proses perekrutan & on Boarding
          </h1>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="text-3xl text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              1.
            </h2>
            <p className="text-2xl leading-relaxed text-center md:text-left pl-0 md:pl-5">
              Recruitment 300 mahasiswa dilakukan bulan April 2022.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="text-3xl text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              2.
            </h2>
            <p className="text-2xl leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Persyaratan seleksi mahasiswa tingkat skripsi (tugas akhir), atau
              yang sudah lulus atau maksimal selama Covid, (2 tahun terakhir)
              belum mendapatkan pekerjaan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="text-3xl text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              3.
            </h2>
            <p className="text-2xl leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Pembuatan Kontrak kerja dan MOU dengan universitas (pusat karir).
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="text-3xl text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              4.
            </h2>
            <p className="text-2xl leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Mahasiswa melakukan onboarding dan mulai mengikuti pelatihan.
            </p>
          </div>
        </div>
        {/* Krangka Program */}
        <div className=" w-full pt-28 ">
          <h1 className="text-4xl text-[#648B04] font-semibold mb-10  text-center">
            Krangka Program (Project Framework)
          </h1>
          <div className="flex flex-col md:flex-row items-center p-7 ">
            <div className="w-2/3 ">
              <p className="text-2xl mb-10 mr-20 leading-relaxed">
                Aktivitas magang yang kami rancang adalah untuk mahasiswa dapat
                diterima bekerja di perusahaan keuangan, yang bernama Officer
                Development Crash Program (ODCP). ODCP memiliki keunggulan,
                karena mahasiswa diberikan kemampuan atau keahlian yang
                spesifik, seperti Sales, Credit dan Collection sesuai kebutuhan
                dari perusahaan keuangan yang akan menerimanya.
              </p>
              <p className="text-2xl mr-20 leading-relaxed">
                Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM
                Framework, dimana pemagang akan diarahkan untuk merancang solusi
                melalui lima proses iterative, yaitu: Sprint Planning, Daily
                SCRUM, SPRINT Review, SPRINTRestrospective, dan Improvement.
              </p>
            </div>
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/hybridOfficer/project-framework.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
        </div>
        {/* Proses Pelatihan */}
        <div className=" w-full pt-28 ">
          <h1 className="text-4xl text-[#648B04] font-semibold mb-10  text-center">
            Proses Pelatihan di Kampus Gratis
          </h1>

          <div className="flex flex-col md:flex-row items-center py-7 px-36 ">
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/hybridOfficer/proses-pelatihan.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="w-2/3 ">
              <p className="text-2xl mb-10 ml-20 leading-relaxed">
                Materi diberikan secara synchronous (online meeting) dan
                asynchronous (video ajar dan white paper di kampusgratis.id).
                Sesi tatap muka diperlukan untuk penugasan dan mentoring
                langsung. Setiap materi dilengkapi kuis, latihan, penugasan,
                ujian akhir, dan uji kompetensi (studi kasus, role play, dan
                drill) untuk evaluasi standar kompetensi.
              </p>
            </div>
          </div>
        </div>
        {/* Monitoring & Evaluasi */}
        <div className=" w-4/5 pt-20  ">
          <h1 className="text-4xl text-[#648B04] font-semibold mb-10  text-center">
            Monitoring & Evaluasi
          </h1>
          <h1 className="text-3xl text-center">
            Peserta program akan dimonitor kinerjanya meliputi:
          </h1>
          <div
            className="relative h-56 w-11/12 mt-12"
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/left-right-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full pl-36 flex items-center ">
              <h2 className="text-5xl ">01</h2>
              <div className="h-32 border-l-2 mx-14 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/professional-working-icon.png"
                alt="Professional Working Attitude"
                width={47}
                height={47}
                className="mr-14"
              />
              <div>
                <h1 className="text-3xl font-semibold mb-6">
                  Professional Working Attitude
                </h1>
                <h2 className="text-3xl pr-5">
                  Meliputi disiplin, intensi belajar, sopan santun, tingkat
                  energi, Fokus dan komitment.
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative h-56 w-full ml-20"
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/right-left-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full pl-36 flex items-center ">
              <h2 className="text-5xl ">02</h2>
              <div className="h-32 border-l-2 mx-14 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/pantang-menyerah.png"
                alt="Professional Working Attitude"
                width={47}
                height={47}
                className="mr-14"
              />
              <div>
                <h1 className="text-3xl font-semibold mb-6">
                  Pantang Menyerah Terhadap Hasil{" "}
                </h1>
                <h2 className="text-3xl max-w-2xl">
                  Meliputi kualitas hasil penugasan, nilai kinerja, nilai uji
                  kompetensi.
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative h-56 w-11/12 "
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/left-right-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full pl-36 flex items-center ">
              <h2 className="text-5xl ">03</h2>
              <div className="h-32 border-l-2 mx-14 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/penguasaan-kompetensi-icon.png"
                alt="Professional Working Attitude"
                width={47}
                height={47}
                className="mr-14"
              />
              <div>
                <h1 className="text-3xl font-semibold mb-6">
                  Penguasaan Kompetensi Teknis & Non Teknis{" "}
                </h1>
                <h2 className="text-3xl pr-5">
                  Meliputi standar kompetensi yang M-Knows Terapkan, dimana Gap
                  Kompetensi akan di identifikasi dan ditentukan solusi
                  perbaikannya.
                </h2>
              </div>
            </div>
          </div>
          <h1 className="text-3xl pt-14">
            Selama melakukan magang kerja, mahasiswa akan di monitoring dan
            evaluasi Progres kerjanya oleh Kampus Gratis. Laporan yang dibuat
            akan di berikan akses kepada mahasiswa dan pihak perusahaan, sesuai
            kebutuhan dan kepentingannya.
          </h1>
        </div>
      </section>
    </main>
  );
}
