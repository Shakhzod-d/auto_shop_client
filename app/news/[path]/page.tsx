"use client";
import { Banner } from "../../../components/ui/banner";
import { NewsAdvertisement } from "../components/advertisement";
import { CardList } from "../components/card-list";
import { NewsBar } from "../components/news-bar";
import { use, useState } from "react";
import { NewsResType } from "../../../types/news.type";
import { useQuery } from "@tanstack/react-query";
import { fetchItemsServ } from "../../../services/items-serv";

export default function News({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const paramsId = use(params);

  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;

  const [isDetail, setIsDetail] = useState(false);
  const API = process.env.NEXT_PUBLIC_API_URL;

  const { data: news } = useQuery<NewsResType>({
    queryFn: () =>
      fetchItemsServ(
        `${API}/news?page=1&page_size=10&subcategory_id=${paramsId.path}`
      ),
    queryKey: ["fetchItemsServ"],
    staleTime: 0,
  });

  console.log({ news });

  const NewsData: any[] | undefined = news?.data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title_uz,
      desc: item?.content_en,
      img: IMG_URL + item?.main_image?.path,
      created: item.created_at,
    };
  });
  const newsCardList = NewsData?.filter((_, i) => i <= 3);
  const newsBar = NewsData?.filter((_, i) => i > 3);

  const bannerImg: any = `${IMG_URL}${news?.data[0]?.subcategory.banner.path}`,
    bannerTitle = news?.data ? news?.data[0]?.subcategory.title_uz : "";

  return (
    <>
      <Banner img={bannerImg} text={bannerTitle} w={"900px"} />
      <main className="bigContainer">
        <div className="flex gap-[46px] mb-16 flex-col items-center xl:flex-row xl:items-start">
          <CardList
            data={newsCardList}
            title={bannerTitle}
            setIsDetail={setIsDetail}
            isDetail={isDetail}
          />
          <NewsBar data={newsBar} />
        </div>
        <NewsAdvertisement />
      </main>
    </>
  );
}
