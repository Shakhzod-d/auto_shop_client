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
      <div className="grid grid-cols-1 tablet-middle:grid-cols-2  xl:grid-cols-1 gap-4">
        {data.map((item, i) => (
          <div
            className="flex cursor-pointer gap-2"
            key={i}
            onClick={() => setDetailId(item.id)}
          >
            <div className="w-[190px] tablet-max:w-[220px] h-[120px] overflow-hidden rounded-md relative">
              <Image
                src={IMG_URL + item.img}
                alt="autoshop.uz image"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2  w-[250px] sm:w-[300px] tablet-middle:w-[200px] laptop-max:max-w-[300px] xl:w-[220px]">
              <p className="text-[14px] sm:text-[18px] line-clamp-2 sm:font-medium">
                {item?.title}
              </p>
              <span className="flex items-center gap-2 text-gray-600 text-sm">
                <LuClock4 />
                {formatTimeDifference(Number(item.created))}
              </span>
              <Button className="text-xs bg-blue-500 text-white py-1 px-2 w-max">
                {item.category}
              </Button>
            </div>
          </div>
        ))}
      </div>
    ),
  };
  return (
    <div className="w-full xl:w-[430px]">
      <p className="text-2xl font-semibold mb-8 font-merriweather">{`Ko'proq Yangiliklar`}</p>
      <div className="overflow-y-auto overflow-x-hidden scrollbar-hide xl:h-[100vh]">
        {component[variant]}
      </div>
    </div>
  );
};
