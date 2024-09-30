import Link from "next/link";
import Image from "next/image";
import OurClients from "@/components/OurClients";

export default function consultingService() {
  return (
    <main>
      <section
        className="md:min-h-[70vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/whatWeDo/consultingService/service-hero.png')",
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
      <section className="flex flex-col items-center mt-24 min-h-screen ">
        <div className="md:px-0 px-4">
          <h1 className="md:text-4xl text-[22px] text-center font-semibold mb-8">
            Kemitraan SDM dan Bisnis Masa Depan
          </h1>
          <p className="md:text-3xl text-[20px] text-center md:mx-28">
            Mempunyai hubungan jangka panjang dengan perusahaan-perusahaan lokal
            dan internasional yang berbasis di Indonesia untuk mendukung
            pengembangan sumber daya manusia mereka serta strategi bisnis dan
            manajemen. Program pengembangan ini dirancang untuk meningkatkan
            keahlian spesifik bahwa perusahaan membutuhkan strategi untuk
            mengahadapi masa depan.
          </p>
          <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
            <div className="w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/consultingService/15th.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-2/3 md:pl-24 pl-2">
              <p className="md:text-4xl text-[22px] font-semibold text-[#388FC7] mb-10 leading-snug">
                Kami telah menjadi mitra <br /> terpercaya (lebih dari 15 thn)
              </p>
              <p className="md:text-2xl text-[18px] md:mr-28">
                Bagi perusahaan nasional dan multinasional dalam mendukung
                pengembangan bisnis dan strategi manajemen dan kompetensi sumber
                daya manusia. Kebanggaan berasal dari hubungan jangka panjang
                yang saling menguntungkan dengan berbagai perusahaan yang
                memiliki visi untuk sukses, dan komitmen untuk mencapai
                kesuksesan itu melalui pengembangan sumber daya manusia.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
            <div className="md:w-2/3 md:pl-10 pl-2">
              <p className="md:text-4xl text-[22px] font-semibold text-[#953F3F] mb-10 md:mr-20 leading-snug">
                Pengembangan sumber <br /> daya manusia
              </p>
              <p className="md:text-2xl text-[18px] md:mr-28 ">
                Merupakan proses yang berkesinambungan yang membutuhkan komitmen
                yang tinggi dan manajemen yang baik untuk menjadi efektif dalam
                segala hal. Program pengembangan berkaitan dengan tahap
                pengembangan perusahaan dan tujuan jangka pendek serta jangka
                panjang mereka, baik saat start up, dalam ekspansi, dalam masa
                transisi atau berbalik. Perusahaan harus merencanakan dan
                merancang program pembangunan dengan hati-hati sesuai dengan
                setiap lapisan manajemen seperti : MT (Management Trainee),
                Leadership Program & Consulting.
              </p>
            </div>
            <div className="w-1/3 md:mb-6 mb-0 md:mb-0 mt-10 md:mt-0 flex justify-center">
              <Image
                src="/assets/whatWeDo/consultingService/rocket.png"
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
                src="/assets/whatWeDo/consultingService/program-pelatihan.png"
                alt="Deskripsi gambar"
                width={317}
                height={300}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-2/3 md:pl-24 pl-2">
              <p className="md:text-4xl text-[22px] font-semibold text-[#751F76] mb-10 md:mr-5 leading-snug">
                Program pelatihan <br /> yang efektif
              </p>
              <p className="md:text-2xl text-[18px] md:mr-28 ">
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
        </div>
      </section>
      <div className="relative w-full mb-28">
        {/* Bagian gambar */}
        <Image
          src="/assets/whatWeDo/consultingService/footer.png"
          alt="Descriptive Alt Text"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          className="pt-52"
        />

        <div className="absolute m:p-34 top-5 left-1/2 transform -translate-x-1/2 bg-[#D7E9F4] p-6 md:w-2/5 w-5/6 text-left">
          <h2 className="md:text-3xl text-[20px] font-bold text-[#163950]">
            <span className="text-[#388FC7]">M-Knows Consulting</span> telah
            memperoleh banyak kesempatan bekerja sama
          </h2>
          <p className="md:text-2xl text-[18px] mt-2 md:w-4/5">
            Dengan lembaga-lembaga swasta dan pemerintah pada proyek-proyek
            perumusan kebijakan, studi banding, serta undangan untuk menjadi
            pembicara tamu dalam berbagai kesempatan dan pertemuan atau seminar
            untuk berbagi dan memperkenalkan pandangan dan pengetahuan di bidang
            ekonomi, manajemen dan bisnis.
          </p>
        </div>
      </div>
    </main>
  );
}