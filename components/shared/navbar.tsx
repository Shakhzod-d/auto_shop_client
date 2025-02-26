"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavSelect } from "../ui/nav-select";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { auto, energy, other } from "../../lib/constants";
import { cn } from "../../lib/utils";

export const Navbar = () => {
  const navigate = useRouter();
  const pathname = usePathname();

  return (
    <header className="mb-10 font-montserrat">
      <div className="container">
        <div className=" flex justify-between items-center py-5  border-b border-[#888888] mb-10 ">
          <Image
            width={252}
            height={100}
            loading="lazy"
            src={"/imgs/logo.png"}
            alt="logo"
            onClick={() => navigate.push("/")}
          />
          <div className="items-center flex gap-4">
            <IoSearchOutline size={20} className="cursor-pointer" />
            <span className="flex  items-center gap-[5px] cursor-pointer uppercase">
              {`O'z`}
              <MdKeyboardArrowDown />
            </span>
            <Button className="py-[12px] w-[142px] h-11 bg-[#4DA6FF] rounded-md text-white font-semibold">
              Kirish
            </Button>
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <NavSelect data={auto} initialTitle="Auto" />
            <li
              className={cn(
                "text-[#333333] text-[19px] font-medium cursor-pointer hover:text-[#4DA6FF]"
              )}
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
