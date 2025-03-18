"use client";
import { formatTimeDifference } from "@/utils/map-data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";

interface Props {
  data: any[] | undefined;
}

export const NewsBar = ({ data }: Props) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <aside className="w-full xl:w-[444px]">
      <h4 className="text-xl sm:text-[28px] font-bold mb-8">
        {t("news.newsBar")}
      </h4>
      <div className="flex xl:block justify-between flex-wrap">
        <div className="grid grid-cols-1 gap-4 laptop-min:grid-cols-2 xl:block overflow-auto h-[540px] scrollbar-hide mb-3">
          {data?.map((item) => (
            <div
              className="flex gap-3 mb-8  p-2 cursor-pointer hover:bg-gray-100 transition rounded-md"
              key={item.id}
              onClick={() => router.push(`/news/${item.categoryId}/${item.id}`)}
            >
              {/* ✅ Image to'g'ri ishlashi uchun `layout="fixed"` ishlatildi */}
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
                <p className="text-[18px] sm:text-xl font-medium mb-4 break-words">
                  {item.title}
                </p>
                <div className="flex items-center text-[#666666] gap-[10px] font-lora">
                  <span className="flex items-center gap-1 text-[15px] sm:text-[17px]">
                    <LuClock4 />
                    {formatTimeDifference(Number(item.created))}
                  </span>
                  <span className="flex items-center">
                    <MdFiberManualRecord size={25} />
                    {item.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Reklama image */}
        <Image
          src="/imgs/byd.jpg"
          alt="img"
          width={444}
          height={550}
          className="w-[230px] sm:w-[444px] h-auto"
        />
      </div>
    </aside>
  );
};
