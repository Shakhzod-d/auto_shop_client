import { LuClock4 } from "react-icons/lu";
import { Button } from "../../../components/ui/button";
import { homeNewsList } from "../../../lib/constants";
import Image from "next/image";

export const NewsList = () => {
  return (
    <div className="w-[430px]">
      <p className="text-[28px] font-semibold mb-8">{`Ko'proq Yangiliklar`}</p>
      {homeNewsList.map((item) => (
        <div className="flex gap-4 mb-[38px]" key={item?.id}>
          <Image src={item ? item?.img : ""} alt="" height={120} width={220} />
          <div>
            <h3
              className="text-[20px] text-[#000000] font-medium mb-4 title"
              style={{ letterSpacing: "0.01em" }}
            >
              {item?.title}
            </h3>
            <span className="flex items-center gap-[10px] text-[#666666] text-[16px] mb-4">
              <LuClock4 />
              {item?.create_dateL}
            </span>
            <Button className="text-sm bg-[#3399FF]  h-[26px] px-[5px] mb-2">
              {item?.category}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
