import Link from "next/link";
import Image from "next/image";
import OurClients from "@/components/OurClients";

export default function ATC() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/consultingService/service-hero.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-bold mb-3 text-xl md:text-5xl leading-10 text-left">
              Consulting Service
            </h1>
            <h1 className="font-bold text-xl text-[#388FC7] md:text-5xl leading-10 text-left">
              M-Knows Consulting
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-24 mx-36  min-h-screen ">
        <div className=" mx-auto ">
          <h1 className="text-4xl text-center  font-semibold mb-8">
          Kemitraan SDM dan Bisnis Masa Depan
          </h1>
          <p className="text-3xl text-center mx-28">
          Mempunyai hubungan jangka panjang dengan perusahaan-perusahaan lokal dan internasional yang berbasis di Indonesia untuk mendukung pengembangan sumber daya manusia mereka serta strategi bisnis dan manajemen. 
          Program pengembangan ini dirancang untuk meningkatkan keahlian spesifik bahwa perusahaan membutuhkan strategi untuk mengahadapi masa depan.
          </p>
          <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/ATC/solusi-integratif.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="w-2/3 pl-24">
              <p className="text-4xl font-semibold text-[#88BC05] mb-10 mr-20 leading-snug">
                ATC menawarkan <br /> solusi integratif
              </p>
              <p className="text-2xl mr-28 ">
                Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM
                Framework, dimana pemagang akan diarahkan untuk merancang solusi
                melalui lima proses iterative, yaitu: Sprint Planning, Daily
                SCRUM, SPRINT Review, SPRINTRestrospective, dan Improvement.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
            <div className="w-2/3 pl-10">
              <p className="text-4xl font-semibold text-[#E49164] mb-10 mr-20 leading-snug">
                Solusi-solusi yang <br /> ditawarkan oleh ATC
              </p>
              <p className="text-2xl mr-28 ">
                Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM
                Framework, dimana pemagang akan diarahkan untuk merancang solusi
                melalui lima proses iterative, yaitu: Sprint Planning, Daily
                SCRUM, SPRINT Review, SPRINTRestrospective, dan Improvement.
              </p>
            </div>
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/ATC/solusi-ditawarkan.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/ATC/solusi-integratif.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="w-2/3 pl-24">
              <p className="text-4xl font-semibold text-[#88BC05] mb-10 mr-5 leading-snug">
                Program pelatihan <br /> yang efektif
              </p>
              <p className="text-2xl mr-28 ">
                Meningkatkan kompetensi sumber daya manusia untuk melakukan
                lebih baik dan nilai tambah bagi perusahaan serta institusi
                mereka. Pelatihan diperlukan untuk berbagai tujuan, misalnya
                mengembangkan keterampilan dan pengetahuan para eksekutif dan
                staf khusus, mempersiapkan sumber daya manusia baru untuk suatu
                posisi pekerjaan atau regenerasi, maupun mempersiapkan pensiun.
                M-Knows Consulting mendukung perusahaan dan bekerja sinergis
                dengan pusat-pusat pelatihan dalam menilai kebutuhan pelatihan,
                pengembangan pelatihan customized program, melakukan dan
                mengevaluasi pelatihan bagi staf profesional dan eksekutif.
                Konsultan yang berpengalaman dan berdedikasi tinggi memampukan
                M-Knows Consulting dalam menyusun materi pelatihan, menyampaikan
                materi pelatihan, serta metode evaluasi dalam rangka memperoleh
                hasil pelatihan yang terbaik.
              </p>
            </div>
          </div>
          <OurClients />
        </div>
      </section>
    </main>
  );
}