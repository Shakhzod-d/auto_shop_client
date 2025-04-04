"use client";
import { useTranslation } from "react-i18next";
import { Banners } from "../(home)/components/banners";
import { SendMessage } from "./components/send-msg";
import { AdsResData } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";
import { fetchItemsServ } from "@/services/items-serv";
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
const API = process.env.NEXT_PUBLIC_API_URL;
export default function Contact() {
  const { data: bannerAds } = useQuery<AdsResData>({
    queryFn: () => fetchItemsServ(`${API}/ad?type=banner`),
    queryKey: ["NewsAdsBanner"],
    staleTime: 0,
  });
  const AdsBannerImg = bannerAds?.data.map(
    (item) => `${IMG_URL}${item.image.path}`
  );
  const { t } = useTranslation();
  return (
    <div>
      <Banners
        btn={false}
        p="135px 0"
        w="700px"
        title={t("contact.banner.title")}
        desc={t("contact.banner.desc")}
        banner_img="/imgs/contact-banner.png"
        img_two={true}
        ads={AdsBannerImg ?? []}
      />
      <SendMessage />
    </div>
  );
}
