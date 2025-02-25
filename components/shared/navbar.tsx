"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavSelect } from "../ui/nav-select";
import Link from "next/link";

const auto = [
  { id: 1, label: "Auto", path: "/" },
  { id: 2, label: "Biz haqimizda", path: "/about" },
  { id: 3, label: "Jamoa", path: "/team" },
  { id: 4, label: "Bo'glanish", path: "/contact" },
];
const other = [
  { id: 1, label: "Boshqa Transportlar", path: "auto" },
  { id: 2, label: "Skuter va Mopedlar", path: "auto" },
  { id: 3, label: "Yuk Mashinalar", path: "auto" },
  { id: 4, label: "Uchoqlar", path: "auto" },
];
export const Navbar = () => {
  return (
    <header className="mb-10">
      <div className="container">
        <div className=" flex justify-between items-center py-5  border-b border-[#888888] mb-10 ">
          <Image
            width={252}
            height={100}
            loading="lazy"
            //   layout="responsive"
            src={"/imgs/logo.png"}
            alt="logo"
          />
          <div className="items-center flex gap-4">
            <IoSearchOutline size={20} className="cursor-pointer" />
            <span className="flex  items-center gap-[5px] cursor-pointer">
              {`o'z`}
              <MdKeyboardArrowDown />
            </span>
            <Button
              // variant={"secondary"}

              className="py-[12px] w-[142px] h-11 bg-[#4DA6FF] rounded-md text-white font-semibold"
            >
              Kirish
            </Button>
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <NavSelect data={auto} initialTitle="Auto" />
            <li className="text-[#333333] text-[19px] font-medium cursor-pointer">
              <Link href={"/news/new-cars"}>Yangi Modellar</Link>
            </li>
            <NavSelect data={other} initialTitle="Boshqa Transportlar" />
            <NavSelect data={other} initialTitle="Energetika" />
            <li className="text-[#333333] text-[19px] font-medium cursor-pointer">
              Premyera
            </li>
            <li className="text-[#333333] text-[19px] font-medium cursor-pointer">
              Online Shop
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
