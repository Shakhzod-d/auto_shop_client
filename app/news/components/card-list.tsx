import { NewsOneData } from "@/types/news.type";
import { Card } from "./card";
import { NewsDetail } from "./news-detail";

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
}

export const CardList = ({
  data,
  title,
  isDetail,
  categoryId,
  detailData,
}: Props) => {
  return (
    <section className="">
      {isDetail && (
        <NewsDetail
          title={detailData?.title_uz ?? ""}
          created={detailData?.created_at ?? "0"}
          desc={detailData?.content_uz ?? ""}
          source={detailData?.source ?? ""}
          img={detailData?.main_image.path ?? ""}
        />
      )}
      <h3 className="text-[32px] tablet-max:text-[36px] font-bold mb-8">
        {" "}
        {isDetail ? "Mavzuga Doir Yangiliklari" : title}
      </h3>
      <div className="w-full max-w-[830px] grid grid-cols-1 tablet-middle:grid-cols-2 gap-[50px] gap-y-[87px]">
        {data?.map((item) => (
          <Card data={item} key={item.id} categoryId={categoryId} />
        ))}
      </div>
    </section>
  );
};
