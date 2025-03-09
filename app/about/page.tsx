"use client"
import { Banners } from "../(home)/components/banners";
import { Contacts } from "./components/contact";
import { Info } from "./components/info";
import { SocialMedia } from "./components/social-media";

export default function About() {
  return (
    <>
      <Banners
        btn={false}
        p="137px 0"
        w="800px"
        title="Biz Haqimizda"
        desc="«AutoShop.uz» - O‘zbekistondagi eng faol onlayn avtomobil nashrlardan biri. Sayt o‘z oldiga O‘zbekiston va jahonda ro‘y berayotgan eng muhim avtomobil olamidagi voqea-hodisalar haqida tezkor, aniq va xolis axborot berishni maqsad qilib qo‘ygan."
        banner_img="/imgs/about-banner.png"
        img_two={true}
      />
      <Info />
      <SocialMedia />
      <Contacts />
    </>
  );
}
