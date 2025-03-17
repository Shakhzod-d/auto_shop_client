import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();
  // const text =
  return (
    <section className="">
      <div className="container w-full bg-[#E9F4FF] py-[50px] flex  justify-center flex-col  tablet-middle:items-center tablet-middle:text-center">
        <div className="w-full max-w-[805px]">
          <h3 className="text-[28px] tablet-middle:text-[36px] font-bold mb-4">
            {t("about.info.box_title")}
          </h3>
          <p className="text-[17px] tablet-middle:text-[20px]">
            {t("about.info.box_desc")}
          </p>
        </div>
      </div>

      <div className="my-20 tablet-max:my-[130px] w-full  bg-[#F8F8F8] py-[30px]">
        <div className="container flex  flex-col items-center  xl:flex-row justify-between ">
          <Image
            src="/imgs/about-image.png"
            alt=""
            width={500}
            height={600}
            className="mb-12 xl:mb-0"
          />
          <div className="w-full max-w-[678px]">
            <h3 className="text-[28px] tablet-middle:text-[36px] font-bold mb-4">
              {t("about.info.info_title")}
            </h3>
            <p
              className="text-[#666666] tablet-middle:text-[20px]"
              dangerouslySetInnerHTML={{
                __html: t("about.info.desc"),
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
