import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-[450px] px-[50px] md:pt-32 pt-14 relative">
      <Image
        src="/assets/navbar-logo.png"
        alt="M-Knows Logo"
        width={126}
        height={32}
        className="rounded-[15px]"
      />
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex-1 p-4">
          <h2 className="text-[14px]">Contact Us</h2>
          <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-[14px]">
            Inhouse Training: 021-720 9729
          </p>
          <p className="text-[#868A92] text-[14px]">
            Public Training: 021-726 5274
          </p>
          <p className="text-[#868A92] text-[14px]">WhatsApp: 0812-1046-8281</p>
          <p className="text-[#868A92] text-[14px]">
            Email: learning@m-knowsconsulting.com
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-[14px]">Surabaya Branch Office</h2>
          <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-[14px]">
            Jl. Raya Darmo Permai III Surabaya
          </p>
          <p className="text-[#868A92] text-[14px]">Telp: 031-8570-5277</p>
          <p className="text-[#868A92] text-[14px]">
            Email: surabaya@m-knowsconsulting.com
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-[14px]">Alamat Utama</h2>
          <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-[14px]">
            Jl. Radio IV No.8B Barito Kebayoran Baru, Jakarta Selatan
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-[14px]">Alamat Produksi</h2>
          <div className="w-[62px] h-[2px] bg-[#626262] mt-1 mb-2"></div>
          <p className="text-[#868A92] text-[14px]">
            Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Sealatan 15419
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#BCBEC3] mt-12 mb-2"></div>
      <div className="flex md:flex-row flex-col items-center ">
        <div className="flex pt-5">
          <Image
            src="/assets/linkedin-icon.png"
            alt="Linked In"
            width={50}
            height={50}
            className="rounded-[15px] mr-6"
          />
          <Image
            src="/assets/fb-icon.png"
            alt="Facebook"
            width={50}
            height={50}
            className="rounded-[15px] mr-6"
          />
          <Image
            src="/assets/ig-icon.png"
            alt="Instagram"
            width={50}
            height={50}
            className="rounded-[15px] mr-6"
          />
          <Image
            src="/assets/yt-icon.png"
            alt="You-tube"
            width={50}
            height={50}
            className="rounded-[15px] mr-6"
          />
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 md:pt-4 pt-28 md:text-[14px] text-md text-center text-[#868A92]">
          2024 - www.Mknowsconsulting - Hak Cipta Dilindungi.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;