"use client";

import { Clock4Icon } from "lucide-react";
import Image from "next/image";
import { formatTimeDifference } from "../../../lib/constants";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    id: string;
    title: string;
    desc: string;
    img: string;
    created: number;
  };
  categoryId: string;
}

export const Card = ({ data, categoryId }: Props) => {
  const createdTime = formatTimeDifference(Number(data.created));
  const router = useRouter();
  const onChange = () => {
    router.push(`/news/${categoryId}/${data.id}`);
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
        className="mb-8 rounded-[4px] w-[390px] h-[240px]"
      />
      <h4 className="text-[24px] tablet-max:text-[28px] font-semibold mb-4">
        {data.title}
      </h4>
      <span className="flex items-center gap-1 text-[#666666] mb-4 break-words">
        <Clock4Icon />
        {createdTime}
      </span>

      <p
        className="text-[#666666] text-[18px] line-clamp-4"
        dangerouslySetInnerHTML={{
          __html: data.desc ? data.desc : "",
        }}
      ></p>
    </div>
  );
};
