import OurClients from "@/components/OurClients";
import Image from "next/image";

export default function Coaching() {
  const topik = [
    { number: 1, text: "Executive coaching" },
    { number: 2, text: "Leadership coaching" },
    { number: 3, text: "Business mentoring" },
  ];

  return (
    <main>
      <section
        className="md:min-h-[72vh] min-h-[30vh] mt-16 bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/whatWeDo/coaching/hero-section.png')",
        }}
      >
        <div className="w-2/3">
          <div className="md:pl-20 pl-5  flex flex-col justify-center">
            <h1 className="font-semibold  text-xl  md:text-5xl md:leading-10 leading-5 text-left">
              Executive Coaching & <br />
              <span className="text-[#388FC7] "> Business Mentoring</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col  pt-20 mx-auto w-11/12  min-h-screen ">
        <h1 className="md:text-5xl text-2xl text-center mx-10  font-medium mb-10">
          Peningkatan Keterampilan Kerja untuk Tim Efektif
        </h1>
        <p className="md:text-3xl text-xl text-center pb-10 md:mx-48 mx-10">
          Program ini bertujuan untuk membantu peserta dalam memperoleh
          pengetahuan dan keterampilan fungsional yang dapat mereka terapkan di
          tempat kerja, khususnya bagi Anda yang memiliki tim (rekan kerja).
        </p>
        <div className="flex flex-col md:flex-row items-center px-7 py-16 ">
          <div className="md:w-1/3 w-full mb-16 md:mb-0 flex justify-center">
            <Image
              src="/assets/whatWeDo/coaching/tujuan-pendamping.png"
              alt="Deskripsi gambar"
              width={300}
              height={345}
              className="rounded-lg shadow-md "
            />
          </div>
          <div className="md:w-2/3 w-full md:pl-24">
            <p className="md:text-4xl text-2xl font-semibold text-[#2D729F] md:mb-10 mb-5 mr-20 leading-snug">
              Tujuan Pendampingan
            </p>
            <p className="md:text-3xl text-xl mr-28 ">
              Mengatasi semua kesulitan yang di hadapi bawahan dalam mengerjakan
              tugas atau performance yang tidak mencapai dengan ketentuan yang
              diperintahkan sehingga daripada itu meningkatkan keahlian tertentu
              di dalam pekerjaan yang kita kerjakan untuk memberikan kepercayaan
              yang lebih besar dalam pekerjaan yang kita lakukan saat ini.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center px-7  md:py-16 ">
          <div className="md:w-2/3 w-full md:pl-24">
            <p className="md:text-4xl text-2xl font-semibold text-[#ACEE07] mb-10 mr-20 leading-snug">
              Topik yang ditawarkan
            </p>
            <div className="md:text-3xl text-xl md:mr-28 ">
              <ul>
                {topik.map((item) => (
                  <li key={item.number}>
                    {item.number}. {item.text}
                  </li>
                ))}
              </ul>
              <h1>
                <br /> Untuk mengembangkan kompetensi dan keterampilan peserta
                sehingga mampu menjadi sumber daya yang handal dalam pencapaian
                target perusahaan.
              </h1>
            </div>
          </div>
          <div className="md:w-1/3 w-full my-16 md:mb-0 flex justify-center">
            <Image
              src="/assets/whatWeDo/coaching/topik-ditawarkan.png"
              alt="Deskripsi gambar"
              width={317}
              height={300}
              className="rounded-lg shadow-md "
            />
          </div>
        </div>
        <OurClients />
      </section>
    </main>
  );
}
