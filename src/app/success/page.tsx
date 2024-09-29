"use client";

import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-6 px-5">
        Formulir permintaan berhasil terkirim!
      </h1>
      <button
        onClick={() => router.push("/")}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  );
}
