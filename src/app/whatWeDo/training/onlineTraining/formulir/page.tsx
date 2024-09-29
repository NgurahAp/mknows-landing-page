"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Formulir() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    whatsapp: "",
    telp: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Form submitted:", formData);
    router.push("/success");
  };

  return (
    <div className="flex pt-32 justify-center items-center">
      <div className="rounded-lg p-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-[#D7E9F4] rounded-lg p-4">
          <Image
            width={1450}
            height={350}
            src="/assets/whatWeDo/training/onlineLearning/calendar.png"
            alt="Form illustration"
            className=""
          />
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl text-center font-semibold mb-6">
            Formulir Permintaan Jadwal Pelatihan Umum 2024
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Masukkan Nama Lengkap"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Perusahaan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Masukkan Nama Perusahaan"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jabatan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="position"
                placeholder="Masukkan Jabatan"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telepon Kantor <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="telp"
                placeholder="Masukkan Nomor Whatsapp"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.telp}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nomor Whatsapp <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="whatsapp"
                placeholder="Masukkan Nomor Whatsapp"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#388FC7] hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}