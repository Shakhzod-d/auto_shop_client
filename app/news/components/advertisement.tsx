import { Ads } from "@/types/news.type";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
interface Props {
  data: Ads[] | [];
}
export const NewsAdvertisement = ({ data }: Props) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
  return (
    <section className="w-full  mb-[115px]">
      <div className="flex gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[265px] bg-[#F8F8F8] p-[7px] rounded-lg flex flex-col"
          >
            <div className="flex-1 ">
              <div className="w-full h-[200px] mb-4">
                <Image
                  alt="img"
                  width={256}
                  height={200}
                  src={IMG_URL + item.image.path}
                  className="h-[200px]"
                />
              </div>

              <p className=" font-medium mb-2 line-clamp-[6]">
                {item.description}
              </p>
            </div>
            <a href={item.url} target="_blank">
              <Button className="w-full h-[45px] bg-[#4DA6FF] font-semibold">
                To’liq Malumot Olish
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
