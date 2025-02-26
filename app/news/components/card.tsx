"use client"

import { Clock4Icon } from "lucide-react";
import Image from "next/image";

interface Props {
  data: { id: string; title: string; desc: string; img: string };
}

export const Card = ({ data }: Props) => {
  return (
    <div className="w-[390px] cursor-pointer">
      <Image
        src={data.img}
        alt="cardImg"
        width={390}
        height={240}
        className="mb-8 rounded-[4px]"
      />
      <h4 className="text-[28px] font-semibold mb-4">{data.title}</h4>
      <span className="flex items-center gap-1 text-[#666666] mb-4">
        <Clock4Icon />
        12 daqiqa oldin
      </span>
      <p className="text-[#666666] text-[18px]">{data.desc}</p>
    </div>
  );
};
