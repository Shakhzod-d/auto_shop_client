"use client";
import { LuClock4 } from "react-icons/lu";
import Image from "next/image";

import { Button } from "../../../components/ui/button";
import { NewsListType } from "../../../types/news.type";
import { formatTimeDifference } from "@/utils/map-data";
import { NewsBarLoading } from "@/components/ui/news-bar-loading";
import { JSX } from "react";
interface Props {
  data: NewsListType[];
  setDetailId: (data: string) => void;
  variant: "loading" | "data";
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsList = ({ data, setDetailId, variant }: Props) => {
  const fakeArray = Array.from({ length: 8 }, (_, i) => i);
  const component: Record<string, JSX.Element> = {
    loading: (
      <>
        {fakeArray.map((_, i) => (
          <NewsBarLoading key={i} />
        ))}
      </>
    ),
    data: (
      <>
        {data.map((item, i) => (
          <div
            className="w-full tablet-middle:w-[355px] tablet-max:max-w-[500px]  flex gap-2 xl:gap-3 mb-[24px] sm:mb-[25px] "
            key={i}
            onClick={() => setDetailId(item.id)}
          >
            <div className="w-[190px] h-[100px]  xl:w-[220px] xl:h-[120px]">
              <Image
                src={IMG_URL + item.img}
                alt=""
                height={120}
                width={220}
                className="rounded-[8px] w-[190px] h-[100px]  xl:w-[220px] xl:h-[120px]"
              />
            </div>
            <div className="w-full tablet-middle:w-[157px] xl:w-[200px]">
              <p
                className="text-[18px] sm:text-[20px] text-[#000000] font-medium  inline break-words "
                style={{ letterSpacing: "0.01em" }}
              >
                {item?.title}
              </p>
              <span className="flex items-center gap-[10px] text-[#666666] text-[16px] mt-3 mb-2">
                <LuClock4 />
                {formatTimeDifference(Number(item.created))}
              </span>
              <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-2">
                {item.category}
              </Button>
            </div>
          </div>
        ))}
      </>
    ),
  };
  return (
    <div className="w-full xl:w-[430px] ">
      <p className="text-[24px] font-semibold mb-8 font-merriweather">{`Ko'proq Yangiliklar`}</p>
      <div className=" overflow-y-auto overflow-x-hidden scrollbar-hide  xl:h-[100vh] flex flex-wrap xl:block">
        {component[variant]}
      </div>
    </div>
  );
};
