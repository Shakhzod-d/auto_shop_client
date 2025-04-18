"use client";

import { NewsBarLoading } from "@/components/ui/news-bar-loading";
import { FormatTimeDifference } from "@/utils/map-data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";

interface Props {
  data: any[] | [];
  variant: "data" | "loading";
}

export const NewsBar = ({ data, variant }: Props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const fakeArr = Array.from({ length: 6 }, (_, i) => i);

  const barComponent: Record<string, JSX.Element> = {
    loading: (
      <div className="grid grid-cols-1 gap-4 laptop-min:grid-cols-2 xl:block overflow-auto h-[840px] scrollbar-hide mb-3">
        {fakeArr.map((_, i) => (
          <NewsBarLoading key={i} />
        ))}
      </div>
    ),
    data: (
      <div className="grid grid-cols-1 gap-4 laptop-min:grid-cols-2 xl:block overflow-auto h-[540px] scrollbar-hide mb-3">
        {data.length >0? data?.map((item) => (
          <div
            className="flex gap-2 mb-8  p-2 cursor-pointer hover:bg-gray-100 transition rounded-md"
            key={item.id}
            onClick={() => router.push(`/news/${item.categoryId}/${item.id}`)}
          >
            <div className="w-[150px] h-[80px] shrink-0">
              <Image
                src={item.img}
                alt="img"
                width={150}
                height={80}
                className="rounded-[4px] w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-[18px] font-medium mb-4 break-words font-merryweather">
                {item.title}
              </p>
              <div className="flex items-center text-[#666666] gap-[10px] font-lora">
                <span className="flex items-center gap-1 text-sm font-montserrat">
                  <LuClock4 />
                  {FormatTimeDifference(Number(item.created),t)}
                </span>
                <span className="flex items-center font-montserrat text-sm">
                  <MdFiberManualRecord size={25} />
                  {item.source}
                </span>
              </div>
            </div>
          </div>
        )):<>
        <p className="text-sm text-gray-400">Hozirda yangilik mavjud emas : (</p>
        </>}
      </div>
    ),
  };
  return (
    <aside className="w-full  xl:max-w-[444px] ">
      <h4 className="text-xl sm:text-[28px] font-semibold mb-8 font-merriweather">
        {t("news.newsBar")}
      </h4>
      <div className="flex xl:block justify-between flex-wrap ">
        {barComponent[variant]}
      </div>
    </aside>
  );
};
