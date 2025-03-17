"use client";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { NewsRes } from "../../../types/news.type";
import { formatTimeDifference } from "../../../lib/constants";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Link } from "lucide-react";

interface Props {
  data: NewsRes;
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsDetail = ({ data }: Props) => {
  const router = useRouter();
  const createdTime = formatTimeDifference(Number(data.created_at));
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[750px]">
      <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-2">
        {data?.category?.name}
      </Button>
      <h5 className="text-xl sm:text-[28px] font-semibold mb-4 font-merriweather">
        {data.title}
      </h5>
      <div className="flex items-center gap-3 sm:gap-6 mb-8 text-[#666666]">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <LuClock4 />
          {createdTime}
        </span>
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <MdFiberManualRecord size={25} />
          {data.source}
        </span>
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-xl">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          {data.comment_count} Sharhlar
        </span>
      </div>
      <Image
        src={IMG_URL + data?.main_image?.path}
        alt=""
        className="mb-12 rounded-sm"
        width={720}
        height={350}
      />
      <p
        className="text-xl text-[#666666] mb-8 font-merriweather line-clamp-[10]"
        dangerouslySetInnerHTML={{
          __html: data.content ? data.content : "",
        }}
      ></p>
      <Button
        className="bg-[#4DA6FF] w-[166px] h-[50px] mb-[66px]"
        onClick={() => router.push(`/news/${data.subcategory.id}/${data.id}`)}
      >
        {t("btn.full_information")}
      </Button>
      <Link href={`/news/all/home`}>
        <span className="flex items-center gap-[10px] text-[20px] mb-16 cursor-pointer">
          <IoMdAdd size={30} />
          {t("btn.more_news")}
        </span>
      </Link>
      <Image
        src="/imgs/home-news-img.png"
        alt=""
        width={750}
        height={300}
        className="w-full tablet-max:w-[750px]"
      />
    </div>
  );
};
