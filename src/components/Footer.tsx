import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-[65vh] px-16 md:pt-32 pt-14 relative">
      <Image
        src="/assets/home/navbar-logo.png"
        alt="M-Knows Logo"
        width={126}
        height={32}
        className="rounded-3xl"
      />
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex-1 p-4">
          <h2 className="text-lg">Contact Us</h2>
          <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-lg">
            Inhouse Training: 021-720 9729
          </p>
          <p className="text-[#868A92] text-lg">
            Public Training: 021-726 5274
          </p>
          <p className="text-[#868A92] text-lg">WhatsApp: 0812-1046-8281</p>
          <p className="text-[#868A92] text-lg">
            Email: learning@m-knowsconsulting.com
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg">Surabaya Branch Office</h2>
          <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-lg">
            Jl. Raya Darmo Permai III Surabaya
          </p>
          <p className="text-[#868A92] text-lg">Telp: 031-8570-5277</p>
          <p className="text-[#868A92] text-lg">
            Email: surabaya@m-knowsconsulting.com
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg">Alamat Utama</h2>
          <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-lg">
            Jl. Radio IV No.8B Barito Kebayoran Baru, Jakarta Selatan
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg">Alamat Produksi</h2>
          <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-lg">
            Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Sealatan 15419
          </p>
        </div>
      </div>
      <div className="w-full h-1 bg-[#BCBEC3] mt-12 mb-2"></div>
      <div className="flex md:flex-row flex-col items-center ">
        <div className="flex pt-5">
          <Image
            src="/assets/home/linkedin-icon.png"
            alt="Linked In"
            width={50}
            height={50}
            className="rounded-2xl mr-6"
          />
          <Image
            src="/assets/home/fb-icon.png"
            alt="Facebook"
            width={50}
            height={50}
            className="rounded-2xl mr-6"
          />
          <Image
            src="/assets/home/ig-icon.png"
            alt="Instagram"
            width={50}
            height={50}
            className="rounded-2xl mr-6"
          />
          <Image
            src="/assets/home/yt-icon.png"
            alt="You-tube"
            width={50}
            height={50}
            className="rounded-2xl mr-6"
          />
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 md:pt-4 pt-28 md:text-lg text-md text-center text-[#868A92]">
          2024 - www.Mknowsconsulting - Hak Cipta Dilindungi.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;