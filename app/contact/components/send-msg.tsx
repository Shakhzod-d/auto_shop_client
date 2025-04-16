"use client";

import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { CustomForm } from "./form";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";
// @ts-ignore
export const SendMessage = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex justify-between flex-wrap gap-6">
      <div className="mb-6 tablet-max:mb-8">
        <h4 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
          {t("contact.info_title")}
        </h4>
        <p className="text-[18px] md:text-[20px] text-[#666666] w-full  max-w-[610px] tablet-middle:max-w-[578px] mb-8 font-lora">
          {t("contact.desc")}
        </p>
        <div className="flex  gap-8 mb-8 sm:mb-12 tablet-max:mb-16 flex-wrap">
          <li className="flex gap-[10px] text-[#666666] items-center sm:text-[18px] tablet-max:text-x">
            <div className="w-[58px] h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
              <PiTelegramLogo size={20} />
            </div>
            @autoshop_murojaat
          </li>
          <li className="flex gap-[10px] text-[#666666] items-center text-[20px]">
            <div className="w-[52px] h-[52px] tablet-max:w-[58px] tablet-max:h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
              <MdMailOutline size={20} />
            </div>
            @autoshop_murojaat
          </li>
        </div>
        <CustomForm />
      </div>
      <div className="mb-[90px]">
        <div className="mb-8">
          <p className="text-xl sm:text-2xl tablet-max:text-[28px] font-medium mb-8">
            {t("contact.social.title_one")}
          </p>
          <ul className="flex gap-4 items-center">
            <li className="w-[35px] sm:w-[55px] h-[35px] sm:h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <a href="https://t.me/autoshop_uzz" target="_blank">
                <PiTelegramLogo className="size-4 sm:size-6"/>
              </a>
            </li>
            <li className="w-[35px] sm:w-[55px] h-[35px] sm:h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <a href="https://facebook.com" target="_blank">
                <SlSocialFacebook  className="size-4 sm:size-6"/>
              </a>
            </li>
            <li className="w-[35px] sm:w-[55px] h-[35px] sm:h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <a href="https://www.instagram.com/autoshop__uz" target="_blank">
                <IoLogoInstagram  className="size-4 sm:size-6"/>
              </a>
            </li>
            <li className="w-[35px] sm:w-[55px] h-[35px] sm:h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <a href="https://youtube.com/@autoshop_uz" target="_blank">
                <AiOutlineYoutube  className="size-4 sm:size-6"/>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl sm:text-2xl tablet-max:text-[28px] font-medium mb-8">
            {t("contact.social.title_two")}
          </p>
          <span className="flex items-center gap-4 text-[#666666] text-[18px] tablet-max:text-[20px] font-lora">
            <MdOutlinePhone size={30} />
            +998 (93) 102-59-55
          </span>
        </div>
      </div>
    </section>
  );
};
