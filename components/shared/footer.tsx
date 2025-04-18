"use client";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import { Category } from "@/types";
import { FooterList } from "@/utils/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Props {
  data: Category[] | [];
}
export const Footer = ({ data }: Props) => {
  const filter = data.flatMap((item) => item.subcategories);

  const footerData = filter.map((item) => {
    return { id: item.id, label: item.name };
  });

  const date = new Date();
  const { t } = useTranslation();
  return (
    <footer className="bg-[#4DA6FF] py-[30px]">
      <div className="container">
        <div className=" flex justify-between flex-wrap gap-8  pb-8 border-b mb-10">
          <div className="  w-full   flex flex-col sm:flex-row   sm:justify-between sm:flex-wrap laptop-max:max-w-[546px] text-center sm:text-start">
            <div className="flex flex-col gap-2 mb-10 sm:mb-0">
              {FooterList.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="text-[18px] font-medium text-[#FFFFFF] hover:opacity-70 transition-all"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {footerData.map((item, i) => {
                if (i != 2 && i <= 5) {
                  return (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="text-[18px] font-medium text-[#FFFFFF] hover:opacity-70 transition-all"
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div className="  w-full   flex flex-col sm:flex-row   sm:justify-between sm:flex-wrap laptop-max:max-w-[546px] text-center sm:text-start">
            <div className="flex flex-col gap-2 mb-10 sm:mb-0">
              {footerData.map((item, i) => {
                if (i >= 6) {
                  return (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="text-[18px] font-medium text-[#FFFFFF] hover:opacity-70 transition-all"
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-medium text-[#FFFFFF]">
              {t("footer.subscribe")}
              </p>
              <span className="flex items-center gap-4 sm:justify-self-center justify-center sm:justify-start text-white">
                <a href="https://t.me/autoshop_uzz" target="_blank">
                  <FaTelegram
                    size={24}
                    className="hover:translate-y-[-5px] transition-all"
                  />
                </a>
                <a
                  href="https://www.instagram.com/autoshop__uz"
                  target="_blank"
                >
                  <FaInstagram
                    size={24}
                    className="hover:translate-y-[-5px] transition-all"
                  />
                </a>
                <a href="https://facebook.com" target="_blank">
                  <FaFacebook
                    size={24}
                    className="hover:translate-y-[-5px] transition-all"
                  />
                </a>
                <a href="https://youtube.com/@autoshop_uz" target="_blank">
                  <AiOutlineYoutube
                    size={24}
                    className="hover:translate-y-[-5px] transition-all"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col  text-center gap-4 sm:text-start sm:flex-row  sm:justify-between sm:flex-wrap items-center">
          <Image
            src="/imgs/logo.png"
            alt="autoshop.uz logo"
            width={70}
            height={70}
            className="object-contain cursor-pointer"
          />
          <p className="text-white  w-[280px] tablet-max:w-[500px] ">
            © {date.getFullYear()} {t("footer.faq")}
          </p>
        </div>
      </div>
    </footer>
  );
};
