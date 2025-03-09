"use client";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { FooterData } from "../../lib/constants";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#4DA6FF] py-[30px]">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-14 lg:gap-0
         justify-between lg:grid-cols-4 pb-16 border-b mb-16 text-[#FFFFFF] items-center text-center sm:text-start"
        >
          <div className="flex flex-col gap-4 ">
            {FooterData.arr1.map((item, i) => (
              <Link
                className="text-[19px]  font-medium"
                key={i}
                href={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:justify-self-end">
            {FooterData.arr2.map((item, i) => (
              <Link
                className="text-[19px] text-[#FFFFFF] font-medium"
                key={i}
                href={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 ">
            {FooterData.arr3.map((item, i) => (
              <Link
                className="text-[19px] text-[#FFFFFF] font-medium"
                key={i}
                href={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="">
            <p className="text-[20px] font-medium mb-4 sm:justify-self-center">
              Obuna Bo’ling
            </p>
            <span className="flex items-center gap-4 sm:justify-self-center justify-center sm:justify-start">
              <FaTelegram size={30} />
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <AiOutlineYoutube size={30} />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center sm:text-start sm:flex-row  sm:justify-between items-center text-[#FFFFFF] ">
          <h2 className="text-[45px] font-bold ]">AutoShop</h2>
          <p className="text-[18px] w-[300px] text-start tablet-max:w-full tablet-max:text-end">
            © {date.getFullYear()} AutoShop Yangiliklar. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};
