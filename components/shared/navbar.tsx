"use client";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "../ui/button";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { NavSelect } from "../ui/nav-select";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { auto, energy, other } from "../../lib/constants";
import { useHelper } from "../../store/helper.store";
import LanguageSelector from "../ui/langueSelect";

export const Navbar = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  const { setIsModal } = useHelper();
;

  return (
    <header className="mb-0 tablet-max:mb-10 font-montserrat">
      <div className="container">
        <div className=" flex justify-between items-center py-5  tablet-max:border-b border-[#888888]  tablet-max:mb-10 ">
          <Image
            width={252}
            height={100}
            loading="lazy"
            src={"/imgs/logo.png"}
            alt="logo"
            onClick={() => navigate.push("/")}
            className="cursor-pointer"
          />
          <div className="items-center flex gap-4">
            <IoSearchOutline size={20} className="cursor-pointer " />
            <LanguageSelector />
            <Button
              className="py-[12px]     w-[130px]  h-10 md:w-[142px] md:h-11 bg-[#4DA6FF] rounded-md text-white font-semibold hidden tablet-middle:block"
              onClick={() => navigate.push("/auth")}
            >
              Kirish
            </Button>
            <RxHamburgerMenu
              size={36}
              color="#666666"
              onClick={setIsModal}
              className="tablet-max:hidden"
            />
          </div>
        </div>
        <nav className="hidden tablet-max:block">
          <ul className="flex items-center gap-6">
            <NavSelect data={auto} initialTitle="Auto" />
            <li
              className="text-[#333333] text-[19px] font-medium cursor-pointer"
              style={{ color: pathname == "/news/newsCar" ? "#4DA6FF" : "" }}
            >
              <Link href={"/news/newsCar"}>Yangi Modellar</Link>
            </li>
            <NavSelect data={other} initialTitle="Boshqa Transportlar" />
            <NavSelect data={energy} initialTitle="Energetika" />
            <li className="text-[#333333] text-[19px] font-medium cursor-pointer hover:text-[#4DA6FF]">
              Premyera
            </li>
            <li className="text-[#333333] text-[19px] font-medium cursor-pointer hover:text-[#4DA6FF]">
              Online Shop
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
