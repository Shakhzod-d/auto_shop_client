import { Ads } from "@/types/news.type";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Props {
  data: Ads[] | [];
}

export const NewsAdvertisement = ({ data }: Props) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
  const { t } = useTranslation();
  return (
    <section className="w-full mb-[115px]">
      <div className="flex gap-4 overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[300px] min-w-[265px] flex-shrink-0 bg-[#F8F8F8] p-[7px] rounded-lg flex flex-col"
          >
            <div className="flex-1">
              <div className=" h-[200px] mb-4">
                <Image
                  alt="img"
                  width={256}
                  height={200}
                  src={IMG_URL + item.image.path}
                  className="h-[200px] w-full object-cover rounded"
                />
              </div>
              <p className="font-medium mb-2 line-clamp-[6]">
                {item.description}
              </p>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button className="w-full h-[45px] bg-[#4DA6FF] font-semibold">
                {t("btn.full_information")}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
