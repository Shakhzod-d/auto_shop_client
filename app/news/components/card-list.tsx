"use client";
import { NewsOneData } from "@/types/news.type";
import { Card } from "./card";
import { NewsDetail } from "./news-detail";
import { IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
  isDetail: boolean;
  categoryId: string;
  detailData?: NewsOneData;
  comment: number | undefined;
}

export const CardList = ({
  data,
  title,
  isDetail,
  categoryId,
  detailData,
  comment,
}: Props) => {
  const { t } = useTranslation();
  return (
    <section className="">
      {isDetail ? (
        <NewsDetail
          title={detailData?.title ?? ""}
          created={detailData?.created_at ?? "0"}
          desc={detailData?.content ?? ""}
          source={detailData?.source ?? ""}
          img={detailData?.main_image.path ?? ""}
          id={detailData?.id ?? ""}
          comment={comment}
        />
      ) : (
        <>
          <h3 className="text-[32px] tablet-max:text-[36px] font-bold mb-8">
            {" "}
            {isDetail ? "Mavzuga Doir Yangiliklari" : title}
          </h3>
          <div className="w-full max-w-[830px] grid grid-cols-1 tablet-middle:grid-cols-2 gap-[50px] gap-y-[87px] mb-10">
            {data?.map((item) => (
              <Card data={item} key={item.id} categoryId={categoryId} />
            ))}
          </div>
          <Link href={`/news/all/${categoryId}`}>
            <span className="flex items-center gap-[10px] text-[20px] mb-16 cursor-pointer">
              <IoMdAdd size={30} />
              {t("btn.more_news")}
            </span>
          </Link>
        </>
      )}
    </section>
  );
};
