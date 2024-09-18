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
      <section className="flex flex-col items-center p-20  min-h-screen bg-gray-100">
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
      </section>
    </main>
  );
}
