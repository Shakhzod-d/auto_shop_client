"use client";
import { Banner } from "../../../components/ui/banner";
import { NewsAdvertisement } from "../components/advertisement";
import { CardList } from "../components/card-list";
import { NewsBar } from "../components/news-bar";
import { newsData } from "../../../lib/constants";
import { useState } from "react";

interface Props {
  params: any;
}

export default function News({ params }: Props) {
  const data = newsData[params.path as keyof typeof newsData];
  const [isDetail, setIsDetail] = useState(false);
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
