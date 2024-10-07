"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="md:h-screen h-[80vh] mt-16 flex md:flex-row flex-col">
      {/* Left column for image */}
      <div className="w-1/2  md:relative ">
        <Image
          src="/assets/more/contactUs/right3.jpg"
          alt="Deskripsi gambar"
          fill
          className="rounded-lg object-contain md:pl-14" 
        />
      </div>

      {/* Right column for text */}
      <div className="md:w-1/2 w-full  justify-center flex items-center md:pt-0 pt-10">
        <div className="px-10">
          <h1 className="font-semibold text-green-500 text-4xl md:text-5xl md:leading-tight">
            CONTACT US
          </h1>
          <p className="mb-8 mt-2 text-xl md:pr-36 pr-0">
            Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut,
            tim kami siap membantu! Hubungi kami langsung melalui WhatsApp!
          </p>
          <a
            href="https://wa.me/081210468281"
            className="inline-flex items-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.371 0 0 5.373 0 12c0 2.123.553 4.186 1.602 6.011L.051 23.962l5.716-1.498C7.834 23.386 9.895 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0zm7.488 17.216c-.297.837-1.471 1.538-2.058 1.582-.531.04-1.175.118-3.662-1.179-3.074-1.604-5.07-5.376-5.226-5.629-.154-.257-1.243-1.65-1.243-3.145s.785-2.223 1.062-2.535c.276-.312.598-.392.798-.392.199 0 .398.002.572.01.186.008.435-.07.681.527.256.613.874 2.128.951 2.28.077.153.128.329.026.526-.099.196-.149.319-.298.491-.154.176-.325.393-.462.527-.153.149-.313.312-.136.609.176.298.783 1.292 1.676 2.091 1.152 1.027 2.106 1.345 2.404 1.493.298.149.47.127.64-.076.176-.199.733-.855.929-1.149.196-.297.393-.247.662-.149.267.099 1.685.795 1.976.94.291.149.485.221.557.343.072.118.072.676-.225 1.514z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
