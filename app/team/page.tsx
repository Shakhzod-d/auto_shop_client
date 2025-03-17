"use client";
import { useTranslation } from "react-i18next";
import { Banners } from "../(home)/components/banners";

export default function Team() {
  const { t } = useTranslation();
  return (
    <div>
      <Banners
        btn={false}
        p="135px 0"
        w="700px"
        title={t("team.banner.title")}
        desc={t("team.banner.desc")}
        banner_img="/imgs/team-banner.png"
        img_two={false}
      />
    </div>
  );
}
