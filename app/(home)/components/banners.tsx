"use client";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/ui/button";
import { ImgSlider } from "@/components/shared/img-slider";
import { useRouter } from "next/navigation";

interface Props {
  banner_img: string;
  w?: string;
  title: string;
  desc: string;
  p: string;
  btn: boolean;
  img_two: boolean;
  ads?: string[] | [];
}
export const Banners = ({
  banner_img,
  desc,
  title,
  w,
  p,
  btn,
  img_two,
  ads,
}: Props) => {
  const navigate = useRouter();
  const { t } = useTranslation();
  return (
    <section>
      <div
        className="w-full  py-[25px] mb-[30px] tablet-max:mb-[70px] bg-no-repeat bg-cover bg-center"
        style={{ padding: p, backgroundImage: `url(${banner_img})` }}
      >
        <div className="container">
          <div className={`w-full text-white`} style={{ maxWidth: w }}>
            <h2 className="text-[28px]  tablet-middle:text-[45px] tablet-max:text-[45px]  font-bold mb-3 font-merriweather  leading-[38px]  sm:leading-[60px] tablet-max:leading-[60px]">
              {title}
            </h2>
            <p className="tablet-middle:text-[22px] font-medium mb-8 font-montserrat">
              {desc}
            </p>
            {btn && (
              <Button
                className=" px-[21px] bg-[#4DA6FF] font-semibold h-[45px]"
                onClick={() => navigate.push("/about")}
              >
                {t("btn.detail")}
              </Button>
            )}
          </div>
        </div>
      </div>

      {img_two && (
        <div className="container">
          <ImgSlider images={ads ?? []} />
        </div>
      )}
    </section>
  );
};
