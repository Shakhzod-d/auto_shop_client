"use client";
import { Banner } from "../../../components/ui/banner";
import { NewsAdvertisement } from "../components/advertisement";
import { CardList } from "../components/card-list";
import { NewsBar } from "../components/news-bar";
import { newsData } from "../../../lib/constants";
import { use, useState } from "react";
import { NewsResType } from "../../../types/news.type";
import { useQuery } from "@tanstack/react-query";
import { fetchItemsServ } from "../../../services/itemsServ";

export default function News({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const paramsId = use(params);
  const data = newsData["newsCar"];
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
console.log(news);

  return (
    <>
      <Banner
        img={data.bannerImg ?? "/default-banner.jpg"}
        text={data.bannertext}
        w={data.w}
      />
      <main className="bigContainer">
        <div className="flex gap-[46px] mb-16 flex-col items-center xl:flex-row xl:items-start">
          <CardList
            data={data.newsCard}
            title={data.bannertext}
            setIsDetail={setIsDetail}
            isDetail={isDetail}
          />
          <NewsBar />
        </div>
        <NewsAdvertisement />
      </main>
    </>
  );
}
