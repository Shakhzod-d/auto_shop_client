"use client";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import { Category } from "@/types";
import { FooterList } from "@/utils/constants";

interface Props {
  data: Category[] | [];
}
export const Footer = ({ data }: Props) => {
  const filter = data.flatMap((item) => item.subcategories);

  const footerData = filter.map((item) => {
    return { id: item.id, label: item.name };
  });

  const date = new Date();
  return (
    <footer className="bg-[#4DA6FF] py-[30px]">
      <div className="container">
        <div className=" flex justify-between flex-wrap gap-8 items-center pb-8 border-b mb-16">
          <div className="  w-full   flex flex-col sm:flex-row   sm:justify-between sm:flex-wrap laptop-max:max-w-[546px] text-center sm:text-start">
            <div className="flex flex-col gap-4 mb-10 sm:mb-0">
              {FooterList.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="text-[18px] font-medium text-[#FFFFFF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {footerData.map((item, i) => {
                if (i != 2 && i <= 5) {
                  return (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="text-[18px] font-medium text-[#FFFFFF]"
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div className="  w-full   flex flex-col sm:flex-row   sm:justify-between sm:flex-wrap laptop-max:max-w-[546px] text-center sm:text-start">
            <div className="flex flex-col gap-4 mb-10 sm:mb-0">
              {footerData.map((item, i) => {
                if (i >= 6) {
                  return (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="text-[18px] font-medium text-[#FFFFFF]"
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-medium text-[#FFFFFF]">
                Obuna Bo’ling
              </p>
              <span className="flex items-center gap-4 sm:justify-self-center justify-center sm:justify-start text-white">
                <FaTelegram size={30} />
                <FaInstagram size={30} />
                <FaFacebook size={30} />
                <AiOutlineYoutube size={30} />
              </span>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col  text-center gap-4 sm:text-start sm:flex-row  sm:justify-between sm:flex-wrap items-center">
          <h3 className="text-2xl sm:text-[35px] tablet-max:text-[40px] text-[#FFFFFF] font-semibold italic font-merriweather">{`// AutoShop`}</h3>
          <p className="text-white  w-[280px] tablet-max:w-[500px] ">
            © {date.getFullYear()} AutoShop Yangiliklar. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};
