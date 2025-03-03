"use client";

import { Clock4Icon } from "lucide-react";
import Image from "next/image";

interface Props {
  data: { id: string; title: string; desc: string; img: string };
  onClick: (data: boolean) => void;
}

export const Card = ({ data, onClick }: Props) => {
  const onChange = () => {
    onClick(true);
  };
  return (
    <div
      className="w-[398px] tablet-middle:w-[335px] tablet-max:w-[390px] cursor-pointer"
      onClick={onChange}
    >
      <Image
        src={data.img}
        alt="cardImg"
        width={390}
        height={240}
        className="mb-8 rounded-[4px]"
      />
      <h4 className="text-[24px] tablet-max:text-[28px] font-semibold mb-4">
        {data.title}
      </h4>
      <span className="flex items-center gap-1 text-[#666666] mb-4 break-words">
        <Clock4Icon />
        12 daqiqa oldin
      </span>
      <p className="text-[#666666] text-[18px]">{data.desc}</p>
    </div>
  );
};
