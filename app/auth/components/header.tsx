"use client";
import LanguageSelector from "@/components/ui/langue-select";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const navigate = useRouter();

  return (
    <header className="py-[30px] bg-[#F8F8F8]  mb-[90px] lg:mb-28">
      <div className="container flex justify-between items-center">
        <Image
          src="/imgs/logo.png"
          alt="autoshop.uz logo"
          width={60}
          height={60}
          className="object-contain cursor-pointer"
          onClick={() => navigate.push("/")}
        />

        <span className="flex  items-center gap-[5px] cursor-pointer uppercase text-xl text-[#666666] font-medium">
          <LanguageSelector />
        </span>
      </div>
    </header>
  );
};
