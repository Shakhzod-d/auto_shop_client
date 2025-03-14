"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";
interface Props {
  data: any[] | undefined;
}
export const NewsBar = ({ data }: Props) => {
  const { t } = useTranslation();
  return (
    <aside className="w-full xl:w-[444px] ">
      <h4 className="text-xl sm:text-[28px] font-bold mb-8">
        {t("news.newsBar")}
      </h4>
      <div className="flex xl:block justify-between flex-wrap">
        <div className="grid grid-cols-1 gap-0 laptop-min:grid-cols-2 laptop-min:gap-4 xl:block overflow-auto overflow-y-scroll h-[540px] scrollbar-hide mb-3">
          {data?.map((item) => (
            <div className="flex gap-3 mb-8" key={item.id}>
              <Image
                src={item.img}
                alt="img"
                width={150}
                height={80}
                className="rounded-[8px] w-[140px] h-[70px] sm:w-[150px] sm:h-[80px]"
              />
              <div>
                <p className="text-[18px] sm:text-xl font-medium mb-4">
                  {item.title}
                </p>
                <div className="flex items-center text-[#666666] gap-[10px] font-lora">
                  <span className="flex items-center gap-1 text-[15px] sm:text-[17px]">
                    <LuClock4 />2 sog’ot oldin
                  </span>
                  <span className="flex items-center">
                    <MdFiberManualRecord size={25} />
                    John Smith
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={"/imgs/byd.jpg"}
          alt="img"
          width={444}
          height={550}
          className=" w-[230px] h-[300] sm:w-[444px] sm:h-[550px]"
        />
      </div>
    </aside>
  );
};
