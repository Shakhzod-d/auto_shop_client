"use client";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { NewsDetailType } from "../../../types/news.type";
import { formatTimeDifference } from "../../../lib/constants";

interface Props {
  data: NewsDetailType;
}
export const NewsDetail = ({ data }: Props) => {
  const createdTime = formatTimeDifference(Number(data.createdDate));

  return (
    <div className="w-full max-w-[750px]">
      <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-2">
        Elektr Avtomobillar
      </Button>
      <h5 className="text-xl sm:text-[28px] font-semibold mb-4">
        {data.title}
      </h5>
      <div className="flex items-center gap-3 sm:gap-6 mb-8 text-[#666666]">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <LuClock4 />
          {createdTime}
        </span>
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <MdFiberManualRecord size={25} />
          John Smith
        </span>
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          {data.msgTotal} Sharhlar
        </span>
      </div>
      <Image
        src="/imgs/car.png"
        alt=""
        className="mb-12"
        width={720}
        height={350}
      />
      <p
        className="text-xl text-[#666666] mb-8 font-lora"
        dangerouslySetInnerHTML={{
          __html: data.desc ? data.desc : "",
        }}
      ></p>
      <Button className="bg-[#4DA6FF] w-[166px] h-[50px] mb-[66px]">
        {` To’liq Ma’lumot`}
      </Button>
      <span className="flex items-center gap-[10px] text-[20px] mb-16">
        <IoMdAdd size={30} />
        {` Ko’proq Yangiliklar`}
      </span>
      <Image
        src="/imgs/home-news-img.png"
        alt=""
        width={400}
        height={300}
        className="w-full tablet-max:w-[400px]"
      />
    </div>
  );
};
