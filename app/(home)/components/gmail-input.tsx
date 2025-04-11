"use client";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const GmailInput = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#E9F4FF] py-[40px] sm:p-[50px]">
      <div className="container flex flex-col  sm:justify-center sm:items-center">
        <h2 className="text-xl sm:text-[25px] lg:text-[30px]  font-bold mb-8 font-merriweather">
          {t("home.gmail_text")}
        </h2>
        <div className="flex">
          <Input
            type="email"
            className="w-[260px] sm:w-[430px]  lg:w-[550px] rounded-r-none h-[40px] sm:h-[54px] bg-[#FFFFFF] border border-[#DDDDDD] border-r-0 placeholder:text-[15px] text-[#666666]"
            placeholder={t("home.input_placeholder")}
          />
          <Button
            className="h-10 sm:h-[54px] bg-[#4DA6FF] py-4 font-semibold px-6 lg:px-[31px] rounded-s-none "
            onClick={() => router.push("/auth")}
          >
            {t("btn.submit")} <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};
