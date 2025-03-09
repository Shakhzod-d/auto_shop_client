import { Button } from "../../../components/ui/button";
import Image from "next/image";

interface Props {
  banner_img: string;
  w?: string;
  title: string;
  desc: string;
  p: string;
  btn: boolean;
  img_two: boolean;
}
export const Banners = ({
  banner_img,
  desc,
  title,
  w,
  p,
  btn,
  img_two,
}: Props) => {
  return (
    <section>
      <div
        className="w-full  py-[25px] mb-20 tablet-max:mb-[100px] bg-no-repeat bg-cover bg-center"
        style={{ padding: p, backgroundImage: `url(${banner_img})` }}
      >
        <div className="container">
          <div className={`w-full text-white`} style={{ maxWidth: w }}>
            <h2 className="text-[28px]  tablet-middle:text-[45px] tablet-max:text-[55px]  font-bold mb-4 font-merriweather">
              {title}
            </h2>
            <p className="tablet-middle:text-[22px] font-medium mb-8 font-lora">{desc}</p>
            {btn && (
              <Button className=" px-[51px] bg-[#4DA6FF] font-semibold h-[50px]">
                Batafsil
              </Button>
            )}
          </div>
        </div>
      </div>
      {img_two && (
        <Image
          width={1440}
          height={450}
          src="/imgs/advertisement.png"
          alt=""
          className="w-full mb-20 tablet-max:mb-[115px]"
        />
      )}
    </section>
  );
};
