"use client";
import { LuClock4 } from "react-icons/lu";
import Image from "next/image";

import { Button } from "../../../components/ui/button";
import { NewsListType } from "../../../types/news.type";
import { formatTimeDifference } from "@/lib/constants";
interface Props {
  data: NewsListType[];
  setDetailId: (data: string) => void;
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsList = ({ data, setDetailId }: Props) => {
  return (
    <div className="w-full xl:w-[430px]   h-[100vh]">
      <p className="text-[26px] font-semibold mb-8 font-merriweather">{`Ko'proq Yangiliklar`}</p>
      <div className="w-full xl:w-[430px] grid grid-col-1  tablet-middle:grid-cols-2  lg:grid-cols-3  xl:block h-full   overflow-auto overflow-y-scroll max-w-[1350px] scrollbar-hide">
        {data.map((item, i) => (
          <div
            className="w-full tablet-middle:w-[355px] xl:w-[436px] flex gap-2 xl:gap-4 mb-[38px]"
            key={i}
            onClick={() => setDetailId(item.id)}
          >
            <div className="w-[190px] h-[100px]  xl:w-[220px] xl:h-[120px]">
              <Image
                src={IMG_URL + item.img}
                alt=""
                height={120}
                width={220}
                className="w-full h-full rounded-[8px]"
              />
            </div>
            <div className="w-full tablet-middle:w-[157px] xl:w-[200px]">
              <h2
                className="text-[19px] text-[#000000] font-medium mb-4 title inline break-words"
                style={{ letterSpacing: "0.01em" }}
              >
                {item?.title}
              </h2>
              <span className="flex items-center gap-[10px] text-[#666666] text-[16px] mb-4">
                <LuClock4 />
                {formatTimeDifference(Number(item.created))}
              </span>
              <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-2">
                {item.category}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
