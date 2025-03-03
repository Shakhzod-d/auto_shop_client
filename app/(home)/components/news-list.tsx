import { LuClock4 } from "react-icons/lu";

import Image from "next/image";
import { homeNewsList } from "../../../lib/constants";
import { Button } from "../../../components/ui/button";

export const NewsList = () => {
  return (
    <div className="w-full xl:w-[430px]">
      <p className="text-[28px] font-semibold mb-8">{`Ko'proq Yangiliklar`}</p>
      <div className="w-full xl:w-[430px] grid grid-col-1  tablet-middle:grid-cols-2  lg:grid-cols-3  xl:block">
        {homeNewsList.map((item) => (
          <div
            className="w-full tablet-middle:w-[355px] xl:w-[436px] flex gap-2 xl:gap-4 mb-[38px]"
            key={item?.id}
          >
            <div className="w-[190px] h-[100px]  xl:w-[220px] xl:h-[120px]">
              <Image
                src={item ? item?.img : ""}
                alt=""
                height={120}
                width={220}
                className="w-full h-full "
              />
            </div>
            <div className="w-full tablet-middle:w-[157px] xl:w-[200px]">
              <h2
                className="text-[19px] text-[#000000] font-medium mb-4 title inline break-words"
                style={{ letterSpacing: "0.01em" }}
              >
                {item?.title}
              </h2>
              <span className="flex items-center gap-[10px] text-[#666666] text-[16px] mb-4">
                <LuClock4 />
                {item?.create_dateL}
              </span>
              <Button className=" text-[10px] xl:text-[12px] bg-[#3399FF]  h-[26px] px-[5px] mb-2">
                {item?.category}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
