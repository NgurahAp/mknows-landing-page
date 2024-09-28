import Image from "next/image";

export default function VisiMisi() {
  return (
    <main>
      <section className="w-full pt-32 bg-white">
        <div className="container mx-auto px-10">
          <h2 className="text-5xl text-black font-semibold text-center mb-8 py-6">
            Visi
          </h2>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 mb-6 md:mb-0 flex md:pl-14 pl-2 justify-center items-center">
              <Image
                src="/assets/more/visiMisi/visi.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="md:text-3xl text-[20px] leading-snug">
                Menjadikan M-Knows Consulting sebagai one stop solution dalam
                kegiatan konsultasi manajemen Sumber daya manusia, solusi
                digital dan penyelenggaraan pelatihan, yang menekankan
                pendekatan HIGH IMPACT (custom-aplikatif) - CUTTING EDGE
                (Kontemporer-Berbasis riset lapangan), dan FUN
                (Energik-Menyenangkan), guna peningkatan kemampuan sumber daya
                manusia di Indonesia.
              </p>
            </div>
          </div>
          <h2 className="text-5xl text-black font-semibold text-center mb-8 py-10">
            Misi
          </h2>
          <div className="flex flex-col md:flex-row py-10">
            <div className="md:w-1/2 mb-6">
              <p className="md:text-3xl text-[20px] leading-snug">
                Memberikan pelayanan terbaik dalam penyelenggaraan jasa layanan,
                sesuai dengan kompetensi M-Knows. Membangun kemampuan dan
                kompetensi berkelanjutan perusahaan untuk menawarkan solusi baru
                melalui konsultan dan unit pendukungnya. Meningkatkan
                kesejahteraan dan pengembangan kemampuan setiap karyawan M-Knows
                Consulting.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 flex md:pl-14 pl-2 justify-center items-center">
              <Image
                src="/assets/more/visiMisi/misi.png"
                alt="Deskripsi gambar"
                width={450}
                height={350}
                className="rounded-lg shadow-md "
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-10 text-center">
          <h2 className="md:text-5xl text-[24px] text-black font-semibold text-center mb-8 py-9">
            Nilai-Nilai Perusahaan
          </h2>

          <div className="grid md:grid-cols-2 gap-8 w-full p-5">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 mr-3 rounded-full">
                <Image
                  src="/assets/more/visiMisi/Vector1.png"
                  alt="Deskripsi gambar"
                  width={80}
                  height={80}
                />
              </div>
              <p className="md:text-3xl text-[20px] leading-snug text-left">
                Dapat Dipercaya & Memiliki Loyalitas
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 mr-3 rounded-full">
                <Image
                  src="/assets/more/visiMisi/Vector3.png"
                  alt="Deskripsi gambar"
                  width={50}
                  height={60}
                />
              </div>
              <p className="md:text-3xl text-[20px] leading-snug text-left">
                Lingkungan Pembelajaran
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 mr-3 rounded-full">
                <Image
                  src="/assets/more/visiMisi/Vector2.png"
                  alt="Deskripsi gambar"
                  width={50}
                  height={40}
                />
              </div>
              <p className="md:text-3xl text-[20px] leading-snug text-left">
                Bekerja Sama
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 mr-3 rounded-full">
                <Image
                  src="/assets/more/visiMisi/Vector4.png"
                  alt="Deskripsi gambar"
                  width={90}
                  height={80}
                />
              </div>
              <p className="md:text-3xl text-[20px] leading-snug text-left">
                Kedekatan Hubungan dengan Pelanggan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
