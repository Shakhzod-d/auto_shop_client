"use client";
import { useTranslation } from "react-i18next";
import { Banners } from "../(home)/components/banners";
import { Contacts } from "./components/contact";
import { Info } from "./components/info";
import { SocialMedia } from "./components/social-media";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Banners
        btn={false}
        p="137px 0"
        w="800px"
        title={t("about.banner.title")}
        desc={t("about.banner.desc")}
        banner_img="/imgs/about-banner.png"
        img_two={true}
      />
      <Info />
      <SocialMedia />
      <Contacts />
    </>
  );
}
