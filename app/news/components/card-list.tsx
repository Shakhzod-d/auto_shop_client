"use client";
import { NewsOneData } from "@/types/news.type";
import { Card } from "./card";
import { NewsDetail } from "./news-detail";
import { IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { CardSkeleton } from "@/components/shared/card-skeleton";
import { JSX } from "react";
import { NewsDetailLoad } from "@/components/ui/news-detail-load";

interface Props {
  data:
    | {
        id: string;
        title: string;
        desc: string;
        img: string;
        created: number;
      }[]
    | undefined;
  title: string;

  categoryId: string;
  detailData?: NewsOneData;
  comment: number | undefined;
  loading: boolean;
  variant: "isDetail" | "cardList" | "isDetailLoading" | "cardListLoading";
}

export const CardList = ({
  data,
  title,

  categoryId,
  detailData,
  comment,
  variant,
}: Props) => {
  const { t } = useTranslation();
  const fakeArray = new Array(4).fill(0);
  const listComponent: Record<string, JSX.Element> = {
    isDetail: (
      <NewsDetail
        title={detailData?.title ?? ""}
        created={detailData?.created_at ?? "0"}
        desc={detailData?.content ?? ""}
        source={detailData?.source ?? ""}
        img={detailData?.main_image.path ?? ""}
        id={detailData?.id ?? ""}
        comment={comment}
      />
    ),
    cardList: (
      <>
        <h3 className="text-xl sm:text-[32px] tablet-max:text-[36px] font-bold mb-8">
          {" "}
          {title}
        </h3>
        <div className="w-full max-w-[830px] grid grid-cols-1 tablet-middle:grid-cols-2 sm:gap-[50px] gap-y-10 sm:gap-y-[87px] mb-5 sm:mb-10" key={1}>
          {data?.map((item,i) => (
            <Card data={item} key={i} categoryId={categoryId} />
          ))}
        </div>
        <Link href={`/news/all/${categoryId}`}>
          <span className="flex items-center gap-[10px] text-[20px] mb-16 cursor-pointer">
            <IoMdAdd size={30} />
            {t("btn.more_news")}
          </span>
        </Link>
      </>
    ),
    isDetailLoading: <NewsDetailLoad />,
    cardListLoading: (
      <div className="w-full max-w-[830px] grid grid-cols-1 tablet-middle:grid-cols-2 gap-[50px] gap-y-[87px] mb-10 border">
        {fakeArray.map((_, i) => (
        
            <CardSkeleton key={i} />
          
        ))}
      </div>
    ),
  };

  return <section className=" w-full">{listComponent[variant]}</section>;
};
