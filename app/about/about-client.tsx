"use client";
import { useTranslation } from "react-i18next";
import { Banners } from "../(home)/components/banners";
import { Contacts } from "./components/contact";
import { Info } from "./components/info";
import { SocialMedia } from "./components/social-media";
import { useQuery } from "@tanstack/react-query";
import { AdsResData } from "@/types/news.type";
import { fetchItemsServ } from "@/services/items-serv";

import Head from "next/head";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
const API = process.env.NEXT_PUBLIC_API_URL;



export default function AboutPage() {
  const { t } = useTranslation();
  const { data: bannerAds } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=banner`),
    queryKey: ["NewsAdsBanner"],
    staleTime: 0,
  });
  const AdsBannerImg = bannerAds?.data.map(
    (item) => `${IMG_URL}${item.image.path}`
  );
  return (
    <>
      <Head>
        <title>Autoshop - Biz haqimizda</title>
        <meta
          name="description"
          content="Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala"
        />
        <meta
          name="keywords"
          content="autoshop uzum market online shop kun.uz qalampir.uz daryo.uz elektromobillar sukuter mers texnalogiya online shop autoshop.uz"
        />
        <meta
          property="og:title"
          content="Autoshop Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala"
        />
        <meta
          property="og:description"
          content="Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala"
        />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Banners
        btn={false}
        p="80px 0"
        w="800px"
        title={t("about.banner.title")}
        desc={t("about.banner.desc")}
        banner_img="/imgs/about-banner.png"
        img_two={true}
        ads={AdsBannerImg ?? []}
      />
      <Info />
      <SocialMedia />
      <Contacts />
    </>
  );
}
