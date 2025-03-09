"use client";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "../../components/ui/carousel";
import { HomeBanner } from "../../lib/constants";
import { Announcements } from "./components/announcements";
import { Banners } from "./components/banners";
import { GmailInput } from "./components/gmail-input";
import { NewsDetail } from "./components/news";
import { NewsList } from "./components/news-list";
import { fetchItemsServ } from "../../services/itemsServ";
import { NewsResType } from "../../types/news.type";
import { useEffect, useState } from "react";
import { NewsDetailType } from "../../types/news.type";

export default function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const { data: news } = useQuery<NewsResType>({
    queryFn: () => fetchItemsServ(`${API}/news`,),
    queryKey: ["fetchItemsServ"],
    staleTime: 0,
  });

  const [NewsDetailData, setNewsDetailData] = useState<NewsDetailType>({
    category: "",
    createdDate: "",
    desc: news ? news?.data[0]?.content_uz : "",
    msgTotal: news?.data[0] ? news?.data[0]?.comment_count : 0,
    title: news ? news?.data[0]?.title_uz : "",
    img: "",
  });
  useEffect(() => {
    setNewsDetailData({
      category: "",
      createdDate: news?.data[0] ? news?.data[0].created_at : "",
      desc: news?.data[0] ? news?.data[0].content_uz : "",
      msgTotal: news?.data[0] ? news?.data[0].comment_count : 0,
      title: news?.data[0] ? news?.data[0]?.title_uz : "",
      img: news ? news?.data[0]?.main_image?.path : "",
    });
  }, [news]);

  return (
    <>
      <Banners
        banner_img={HomeBanner.img}
        title={HomeBanner.title}
        desc={HomeBanner.desc}
        p="25px 0"
        w="650px"
        btn={true}
        img_two={true}
      />
      <main className="container">
        <section className="mb-[155px]">
          <h3 className="text-[28px] sm:text-[32px] tablet-max:text-4xl font-bold mb-10">
            So’nggi Yangiliklar
          </h3>
          <div className="flex justify-between  gap-[60px] flex-col items-center xl:flex-row">
            <NewsDetail data={NewsDetailData} />
            <NewsList />
          </div>
        </section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <Announcements />
        </Carousel>
      </main>
      <GmailInput />
    </>
  );
}
