import Image from "next/image";
import { Button } from "../../../components/ui/button";
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
        className="w-full  py-[25px] mb-[100px] bg-no-repeat bg-cover"
        style={{ padding: p, backgroundImage: `url(${banner_img})` }}
      >
        <div className="container">
          <div className={`w-full text-white`} style={{ maxWidth: w }}>
            <h2 className="text-[55px]  font-bold mb-4">{title}</h2>
            <p className="text-[22px] font-medium mb-8">{desc}</p>
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
          className="w-full mb-[115px]"
        />
      )}
    </section>
  );
};
