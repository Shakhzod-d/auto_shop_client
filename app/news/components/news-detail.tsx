import { formatTimeDifference } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { LuClock4 } from "react-icons/lu";
interface Props {
  img: string;
  title: string;
  desc: string;
  created: string;
  source: string;
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsDetail = ({ created, desc, img, source, title }: Props) => {
  const createdTime = formatTimeDifference(Number(created));
  return (
    <div className="w-full max-w-[800px] mb-16">
      <Image
        src={IMG_URL + img}
        alt="news photo"
        width={800}
        height={400}
        className="mb-8"
      />
      <h3 className="font-semibold text-[28px] mb-6">{title}</h3>
      <p className="text-[#666666] text-xl font-lora mb-6">{desc}</p>

      <div className="flex items-center gap-3 sm:gap-6  text-[#666666]">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <LuClock4 />
          {createdTime}
        </span>

        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          {source}
        </span>
      </div>
    </div>
  );
};
