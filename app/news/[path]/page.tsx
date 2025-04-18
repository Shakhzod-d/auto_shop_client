"use client";
import { Banner } from "../../../components/ui/banner";
import { NewsAdvertisement } from "../components/advertisement";
import { CardList } from "../components/card-list";
import { NewsBar } from "../components/news-bar";
import { use } from "react";
import { AdsResData, NewsResType } from "../../../types/news.type";
import { useQuery } from "@tanstack/react-query";
import { fetchItemsServ } from "../../../services/items-serv";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Autoshop - Yangiliklar",
//   description: "Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
//   keywords:
//     "autoshop uzum market online shop kun.uz qalampir.uz daryo.uz elektromobillar sukuter mers texnalogiya online shop autoshop.uz",
//   openGraph: {
//     title:
//       "Autoshop uz Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
//     description:
//       "Autoshop.uz - Avtomobil texnologiyalari, EV, elektifikatsiya va innovatsiyalar haqida eng so'nggi yangiliklar va trendlar. Elektr avtomobillari, sun'iy intellekt, va ilg'or texnologiyalar bizning ",
//     images: "/logo.png",
//   },
// };

export default function News({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const paramsId = use(params);

  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;

  const API = process.env.NEXT_PUBLIC_API_URL;

  // Ads

  const { data: adsCarousel } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=carousel`),
    queryKey: ["fetchItemsAdsCarousel"],
    staleTime: 0,
  });

  // news
  const { data: news, isLoading } = useQuery<NewsResType>({
    queryFn: () =>
      fetchItemsServ(
        `${API}/news?page=1&page_size=10&subcategory_id=${paramsId.path}`
      ),
    queryKey: ["fetchItemsServ"],
    staleTime: 0,
  });
  const { data: bannerAds } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=banner`),
    queryKey: ["NewsAdsBanner"],
    staleTime: 0,
  });
  const AdsBannerImg = bannerAds?.data.map(
    (item) => `${IMG_URL}${item.image.path}`
  );

  const NewsData: any[] | undefined = news?.data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      desc: item?.content,
      img: IMG_URL + item?.main_image?.path,
      created: item.created_at,
      categoryId: item.subcategory.id,
      source: item.source,
    };
  });

  const newsCardList = NewsData?.filter((_, i) => i <= 3);
  const newsBar = NewsData?.filter((_, i) => i > 3);

  const bannerImg: any = `${IMG_URL}${
      news?.data ? news?.data[0]?.subcategory.banner.path : ""
    }`,
    bannerTitle = news?.data ? news?.data[0]?.subcategory.title : "";

  return (
    <>
      <Banner
        img={bannerImg}
        text={bannerTitle}
        w={"900px"}
        ads={AdsBannerImg ?? []}
      />
      <main className="bigContainer">
        <div className="flex gap-[46px] mb-16 flex-col items-center xl:flex-row xl:items-start">
          <CardList
            data={newsCardList}
            title={bannerTitle}
            categoryId={paramsId.path}
            comment={0}
            loading={isLoading}
            variant={isLoading ? "cardListLoading" : "cardList"}
          />
          <NewsBar
            data={newsBar ?? []}
            variant={isLoading ? "loading" : "data"}
          />
        </div>
        <NewsAdvertisement data={adsCarousel?.data ?? []} />
      </main>
    </>
  );
}
