import { ImgSlider } from "../shared/img-slider";

interface Props {
  text: string;
  w?: string;
  img: string;
  ads: string[] | [];
}

export const Banner = ({ img, text, w = "900px", ads }: Props) => {
  return (
    <>
      <div
        className="w-full h-[270px] sm:h-[370px] tablet-max:h-[550px]  bg-no-repeat bg-cover mb-10 sm:mb-[66px] tablet:mb-[100px]  bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container h-full">
          <div
            style={{ width: "100%", maxWidth: w }}
            className="h-full  flex items-center"
          >
            <h2 className="text-[28px] sm:text-[45px] tablet-max:text-[70px] font-extrabold text-[#FFFFFF]">
              {text}
            </h2>
          </div>
        </div>
      </div>
      <ImgSlider images={ads} />
    </>
  );
};
