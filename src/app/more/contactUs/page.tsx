import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex pt-32 justify-center items-center">
      <div className="rounded-lg p-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-[#EDFDC4] rounded-lg p-4">
          <Image
            width={1450}
            height={350}
            src="/assets/more/contactUs/form-ilustration.png" 
            alt="Form illustration"
            className=""
          />
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl text-center font-semibold mb-6">Permintaan Formulir</h1>
          <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Lengkap*</label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Perusahaan*</label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Perusahaan"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Jabatan*</label>
                <input
                  type="text"
                  placeholder="Masukkan Jabatan"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Nomor Whatsapp*</label>
                <input
                  type="text"
                  placeholder="Masukkan Nomor Whatsapp"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Email*</label>
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Kategori*</label>
                <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                  <option>Masukkan Kategori</option>
                </select>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                <textarea
                  placeholder="Masukkan Deskripsi"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full bg-[#ACEE07] hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md"
              >
                Kirim
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}