import Link from "next/link";
import Image from "next/image";
import { features } from "./featuresItems";

export default function Training() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[25vh] mt-16 bg-cover bg-no-repeat bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/assets/whatWeDo/hybridOfficer/heroSection.png')",
        }}
      >
        <div className="w-3/4">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-bold md:mb-3 mb-1 text-[#388FC7] text-md md:text-5xl   text-left">
              Hybrid Officer Development
            </h1>
            <h1 className="font-bold text-md md:text-5xl   text-left">
              Crash Program for Financial Industry
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center md:p-20  p-10 ">
        {/* Pengembangan program singkat hibrid */}
        <div className="text-center max-w-full mx-auto ">
          <h1 className="md:text-4xl text-2xl text-[#648B04] font-semibold mb-8">
            Pengembangan Program Singkat Hibrid Proyek Lingkup
          </h1>
          <p className="md:text-3xl text-lg md:text-center text-justify">
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
                  className="flex items-center max-w-sm md:space-x-8 space-x-4"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="md:w-20 md:h-20 h-14 w-14"
                  />
                  <span className="md:text-2xl text-lg text-left  ">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Proses perekrutan & on boarding */}
        <div className=" md:w-3/5 w-full pt-12">
          <h1 className="md:text-4xl text-xl text-center md:text-left text-[#648B04] ">
            Proses perekrutan & on Boarding
          </h1>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="md:text-3xl text-2xl  text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              1.
            </h2>
            <p className="md:text-2xl text-lg leading-relaxed text-center md:text-left pl-0 md:pl-5">
              Recruitment 300 mahasiswa dilakukan bulan April 2022.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="md:text-3xl text-2xl  text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              2.
            </h2>
            <p className="md:text-2xl text-lg leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Persyaratan seleksi mahasiswa tingkat skripsi (tugas akhir), atau
              yang sudah lulus atau maksimal selama Covid, (2 tahun terakhir)
              belum mendapatkan pekerjaan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="md:text-3xl text-2xl  text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              3.
            </h2>
            <p className="md:text-2xl text-lg leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Pembuatan Kontrak kerja dan MOU dengan universitas (pusat karir).
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-6">
            <h2 className="md:text-3xl text-2xl  text-[#388FC7]  mb-8 md:mb-0 md:mr-4">
              4.
            </h2>
            <p className="md:text-2xl text-lg leading-relaxed text-center md:text-left pl-0 md:pl-3">
              Mahasiswa melakukan onboarding dan mulai mengikuti pelatihan.
            </p>
          </div>
        </div>
        {/* Krangka Program */}
        <div className=" w-full pt-28 ">
          <h1 className="md:text-4xl text-2xl text-[#648B04] font-semibold mb-10  text-center">
            Krangka Program (Project Framework)
          </h1>
          <div className="flex flex-col md:flex-row items-center md:p-7 p-0">
            <div className="md:w-2/3 w-full">
              <p className="md:text-2xl text-lg mb-10 md:mr-20  leading-relaxed">
                Aktivitas magang yang kami rancang adalah untuk mahasiswa dapat
                diterima bekerja di perusahaan keuangan, yang bernama Officer
                Development Crash Program (ODCP). ODCP memiliki keunggulan,
                karena mahasiswa diberikan kemampuan atau keahlian yang
                spesifik, seperti Sales, Credit dan Collection sesuai kebutuhan
                dari perusahaan keuangan yang akan menerimanya.
              </p>
              <p className="md:text-2xl text-lg mb-10 md:mb-0 md:mr-20  leading-relaxed">
                Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM
                Framework, dimana pemagang akan diarahkan untuk merancang solusi
                melalui lima proses iterative, yaitu: Sprint Planning, Daily
                SCRUM, SPRINT Review, SPRINTRestrospective, dan Improvement.
              </p>
            </div>
            <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center">
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
          <h1 className="md:text-4xl text-2xl text-[#648B04] font-semibold mb-10  text-center">
            Proses Pelatihan di Kampus Gratis
          </h1>

          <div className="flex flex-col md:flex-row items-center py-7 md:px-36 px-0 ">
            <div className="md:w-1/3 w-full mb-10 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/hybridOfficer/proses-pelatihan.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-2/3 w-full ">
              <p className="md:text-2xl text-lg mb-10 md:ml-20 ml-0 leading-relaxed">
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
        <div className=" md:w-4/5  w-full md:pt-20 pt-10 ">
          <h1 className="md:text-4xl text-2xl  text-[#648B04] font-semibold md:mb-10 mb-5  text-center">
            Monitoring & Evaluasi
          </h1>
          <h1 className="md:text-3xl text-lg text-center">
            Peserta program akan dimonitor kinerjanya meliputi:
          </h1>
          <div
            className="relative md:h-56 md:w-11/12 h-28 w-full mt-12 bg-left bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/left-right-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full md:pl-36 pl-14 flex items-center ">
              <h2 className="md:text-5xl  text-2xl">01</h2>
              <div className="md:h-32 h-14 border-l-2 md:mx-14 mx-4 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/professional-working-icon.png"
                alt="Professional Working Attitude"
                width={47}
                height={47}
                className="md:mr-14 mr-4"
              />
              <div>
                <h1 className="md:text-3xl text-lg flex items-center font-semibold md:mb-6 mb-0">
                  Professional Working Attitude
                </h1>
                <h2 className="hidden md:block text-3xl md:pr-5 pr-0">
                  Meliputi disiplin, intensi belajar, sopan santun, tingkat
                  energi, fokus, dan komitmen.
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative md:h-56 md:w-11/12 h-28 w-full mt-12 bg-right bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/right-left-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full md:pl-36 pl-2 flex items-center ">
              <h2 className="md:text-5xl  text-2xl">02</h2>
              <div className="md:h-32 h-14 border-l-2 md:mx-14 mx-4 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/pantang-menyerah.png"
                alt="Professional Working Attitude"
                width={40}
                height={40}
                className="md:mr-14 mr-4"
              />
              <div>
                <h1 className="md:text-3xl text-lg flex items-center font-semibold md:mb-6 mb-0">
                  Pantang Menyerah Terhadap Hasil
                </h1>
                <h2 className="hidden md:block text-3xl md:pr-10 pr-0">
                  Meliputi kualitas hasil penugasan, nilai kinerja, nilai uji
                  kompetensi.
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative md:h-56 md:w-11/12 h-28 w-full mt-12 bg-left bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('/assets/whatWeDo/hybridOfficer/left-right-gradient.png')",
            }}
          >
            <div className="container mx-auto h-full md:pl-36 pl-14 flex items-center ">
              <h2 className="md:text-5xl  text-2xl">03</h2>
              <div className="md:h-32 h-14 border-l-2 md:mx-14 mx-4 border-gray-400 "></div>
              <Image
                src="/assets/whatWeDo/hybridOfficer/penguasaan-kompetensi-icon.png"
                alt="Professional Working Attitude"
                width={47}
                height={47}
                className="md:mr-14 mr-4"
              />
              <div>
                <h1 className="md:text-3xl text-lg flex items-center font-semibold md:mb-6 mb-0">
                  Penguasaan Kompetensi Teknis & Non Teknis{" "}
                </h1>
                <h2 className="hidden md:block text-3xl md:pr-5 pr-0">
                  Meliputi standar kompetensi yang M-Knows Terapkan, dimana Gap
                  Kompetensi akan di identifikasi dan ditentukan solusi
                  perbaikannya.
                </h2>
              </div>
            </div>
          </div>
          <h1 className="md:text-3xl text-xl pt-14">
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
