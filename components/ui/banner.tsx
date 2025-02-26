import Image from "next/image";

interface Props {
  text: string;
  w?: string;
  img: string;
}

export const Banner = ({ img, text, w = "900px" }: Props) => {
  return (
    <>
      <div
        className="w-full h-[550px]  bg-no-repeat bg-cover mb-[100px]  bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]"
        style={{ backgroundImage: `url(${img})`}}
      >
        <div className="container h-full">
          <div style={{ width: w }} className="h-full  flex items-center">
            <h2 className="text-[70px] font-extrabold text-[#FFFFFF]">
              {text}
            </h2>
          </div>
        </div>
      </div>
      <Image
        src={"/imgs/new-page-banner.jpg"}
        alt="banner"
        width={1440}
        height={450}
        className="w-full mb-[100px]"
      />
    </>
  );
};
