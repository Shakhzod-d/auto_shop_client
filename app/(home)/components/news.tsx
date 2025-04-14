"use client";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { NewsRes } from "../../../types/news.type";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatTimeDifference } from "@/utils/map-data";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  data: NewsRes;
  variant: "loading" | "data";
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsDetail = ({ data, variant }: Props) => {
  const router = useRouter();
  const createdTime = formatTimeDifference(Number(data.created_at));
  const { t } = useTranslation();
  const component = {
    loading: (
      <>
        <Skeleton className=" h-[400px] mb-6" />
        <div className="">
          <Skeleton className="w-[30%] h-[30px] mb-4" />
          <Skeleton className="w-[95%] h-[50px] mb-4" />
          <Skeleton className="w-[75%] h-[30px] mb-4" />
          <Skeleton className="w-[85%] h-[40px] mb-4" />
          <Skeleton className="w-[75%] h-[30px] mb-4" />
          <Skeleton className="w-[95%] h-[50px] mb-16" />
          <Skeleton className="w-[200px] h-[50px] mb-16" />
        </div>
      </>
    ),
    data: (
      <>
        <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-4">
          {data?.category?.name}
        </Button>
        <h5 className="text-xl sm:text-[24px] font-medium mb-4 font-merriweather ">
          {data.title}
        </h5>
        <div className="flex items-center gap-4 mb-8 text-[#666666]">
          <span className="flex items-center gap-1 sm:gap-[10px] text-[12px] sm:text-[14px]">
            <LuClock4 size={25}/>
            {createdTime}
          </span>
          <span className="flex items-center gap-1 sm:gap-[10px] text-[12px] sm:text-sm">
            <MdFiberManualRecord size={25} />
            {data.source}
          </span>
          <span className="flex items-center gap-1 sm:gap-[10px] text-[12px] sm:text-sm">
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
          className="mb-4 sm:mb-8 rounded-sm object-cover"
          width={720}
          height={350}
        />
        <p
          className="sm:text-[18px] text-[#666666] mb-8  line-clamp-[10] news-desc"
          dangerouslySetInnerHTML={{
            __html: data.content ? data.content : "",
          }}
        ></p>
        <Button
          className="bg-[#4DA6FF] w-[150px] h-[45px] mb-6 sm:mb-10 md:mb-[66px]"
          onClick={() => router.push(`/news/${data.subcategory.id}/${data.id}`)}
        >
          {t("btn.full_information")}
        </Button>
        <Link href={`/news/all/all-news`}>
          <span className="flex items-center gap-[10px] text-[20px]  cursor-pointer">
            <IoMdAdd size={30} />
            {t("btn.more_news")}
          </span>
        </Link>
      </>
    ),
  };
  return <div className="w-full max-w-[750px]">{component[variant]}</div>;
};
