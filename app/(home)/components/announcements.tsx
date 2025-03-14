"use client";
import { CarouselSize } from "../../../components/ui/custom-slider";
import {
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import { Ads } from "../../../types/news.type";
import { useTranslation } from "react-i18next";
interface Props {
  data: Ads[] | [];
}
export const Announcements = ({ data }: Props) => {
  const { t } = useTranslation();
  const IMG_URl = process.env.NEXT_PUBLIC_IMG_API;
  const adsData = data.map((item) => {
    return {
      img: IMG_URl + item.image.path,
      url: item.url,
      text: item.description_uz,
    };
  });
  return (
    <section className="mb-[105px]">
    
      <div className="flex justify-between items-center mb-6">
        <div className="max-w-[600px]">
          <h3 className="text-[36px] font-bold  mb-4 font-merriweather">
            {t("home.announcements")}
          </h3>
          <p className="text-xl">{t("home.announcements_desc")}</p>
        </div>
        <div className="flex items-center gap-4 text-[#666666]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselSize data={adsData} />
    </section>
  );
};
