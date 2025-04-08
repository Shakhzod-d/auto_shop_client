"use client";
import { useTranslation } from "react-i18next";
import { Banners } from "../(home)/components/banners";
import { SendMessage } from "./components/send-msg";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <Banners
        btn={false}
        p="90px 0"
        w="700px"
        title={t("contact.banner.title")}
        desc={t("contact.banner.desc")}
        banner_img="/imgs/contact-banner.png"
        img_two={false}
      />
      <SendMessage />
    </div>
  );
}
