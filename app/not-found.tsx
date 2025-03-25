"use client";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
      <h1 className="text-[64px] tablet-max:text-[120px] font-bold text-[#4DA6FF] mb-8">
        404
      </h1>
      <p className="text-[32px] tablet-max:text-[64px]  font-bold mb-8">
        Sahifa Topilmadi!
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
