"use client";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "../../components/ui/carousel";
import { Announcements } from "./components/announcements";
import { Banners } from "./components/banners";
import { GmailInput } from "./components/gmail-input";
import { NewsDetail } from "./components/news";
import { NewsList } from "./components/news-list";
import { fetchItemsServ } from "../../services/items-serv";
import { AdsResData, NewsResType } from "../../types/news.type";
import { useEffect, useState } from "react";

import { newsDataMap } from "../../utils/map-data";
import { useTranslation } from "react-i18next";
import { useHelper } from "@/store/helper-store";
import { HomeBanner } from "@/utils/constants";
import { useAuth } from "@/store/auth-store";
export const mapAdsBanner = [
  { imgUrl: "/imgs/home-news-img.png", id: "1" },
  { imgUrl: "/imgs/byd.jpg", id: "2" },
  { imgUrl: "/imgs/a.png", id: "3" },
];
export default function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
  const { lang } = useHelper();
  const { t } = useTranslation();
  const { setSuccess, setAuthType } = useAuth();
  const { data: news, isLoading: newsLoading } = useQuery<NewsResType>({
    queryFn: () => fetchItemsServ(`${API}/news?page=1&page_size=10`),
    queryKey: ["fetchItemsServ", lang],
    staleTime: 0,
  });
  const { data: ads } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=carousel`),
    queryKey: ["fetchItemsAds"],
    staleTime: 0,
  });
  const { data: photo } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=banner`),
    queryKey: ["AdsBanner"],
    staleTime: 0,
  });

  const mapAdsImg: any[] | undefined = photo?.data.map((item) => {
    return {
      imgUrl:IMG_URL+ item.image.path,
      id: item.id,
    };
  });

  const [detailId, setDetailId] = useState<string>("");

  useEffect(() => {
    setDetailId(news?.data[0]?.id ? news?.data[0].id : "");
  }, [news]);
  useEffect(() => {
    setSuccess(false);
    setAuthType("login");
  }, []);

  const { resultNews, newsDetail } = newsDataMap(
    news?.data ? news.data : [],
    detailId
  );

  return (
    <>
      <Banners
        banner_img={HomeBanner.img}
        title={t("homeBanner.title")}
        desc={t("homeBanner.desc")}
        p="25px 0"
        w="650px"
        btn={true}
        img_two={true}
      />

      <main className="container">
        <section className="mb-[155px]">
          <h3 className="text-[28px] sm:text-[32px] tablet-max:text-4xl font-bold mb-10 font-merriweather">
            {t("home.latest_news")}
          </h3>
          <div className="flex justify-between  gap-[60px] flex-col items-center xl:items-start xl:flex-row  ">
            <NewsDetail
              adsData={mapAdsImg ?? []}
              data={newsDetail}
              variant={newsLoading ? "loading" : "data"}
            />
            <NewsList
              data={resultNews}
              setDetailId={setDetailId}
              variant={newsLoading ? "loading" : "data"}
            />
          </div>
        </section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <Announcements data={ads ? ads?.data : []} />
        </Carousel>
      </main>
      <GmailInput />
    </>
  );
}
