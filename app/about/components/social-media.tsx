import Image from "next/image";
import { useTranslation } from "react-i18next";

const socialArr = [
  {
    id: 1,
    img: "/imgs/telegram.png",
    link: "",
    userName: "@autoshop.uz",
  },
  {
    id: 2,
    img: "/imgs/instagram.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 3,
    img: "/imgs/youtube.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 4,
    img: "/imgs/facebook.png",
    link: "",
    userName: "@autoshop.uz",
  },
  {
    id: 5,
    img: "/imgs/x.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 6,
    img: "/imgs/a.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 7,
    img: "/imgs/ok.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 8,
    img: "/imgs/tiktok.png",
    link: "",
    userName: "@autoshop_uz",
  },
];

export const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div className="w-full max-w-[700px] m-auto">
        <h2 className="text-xl tablet-middle:text-[36px] font-bold tablet-middle:text-center mb-4 font-merriweather tablet-middle:leading-[36px]">
          {t("about.social.title")}
        </h2>
        <p className="text-start tablet-middle:text-center tablet-middle:text-[20px] text-[#666666] mb-8">
          {t("about.social.desc")}
        </p>
      </div>
      <div className="w-full grid m-auto  grid-cols-2 justify-center items-center text-center tablet-middle:grid-cols-3 xl:grid-cols-4 tablet-middle:justify-between  gap-4 xl:gap-8  mb-20 tablet-max:mb-[120px]">
        {socialArr.map((item) => (
          <div
            className="w-[170px]  tablet-middle:w-[230px] xl:w-[254px] h-[180px] md:h-[220px] bg-[#F8F8F8] flex flex-col justify-center items-center "
            key={item.id}
          >
            <Image
              src={item.img}
              alt=""
              className="mb-5"
              width={50}
              height={70}
            />
            <p className="text-[18px] tablet-middle:text-[21px] font-medium mb-5">
              {item.userName}
            </p>
            <a
              href={item.link}
              target="_blank"
              className="text-[#3399FF] tablet-middle:text-[19px] font-medium"
            >
              {t("about.social.link")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
