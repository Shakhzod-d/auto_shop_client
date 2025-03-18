import Image from "next/image";
import React from "react";
import { LuClock4 } from "react-icons/lu";
import { Comment } from "./comment";
import { formatTimeDifference } from "@/utils/map-data";
interface Props {
  img: string;
  title: string;
  desc: string;
  created: string;
  source: string;
  id: string;
  comment: number | undefined;
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
export const NewsDetail = ({
  created,
  desc,
  img,
  title,
  id,
  comment,
}: Props) => {
  const createdTime = formatTimeDifference(Number(created));
  console.log({ img });
  console.log({ IMG_URL });

  return (
    <div className="w-full max-w-[800px] mb-16">
      <Image
        src={IMG_URL + img}
        alt="news photo"
        width={800}
        height={400}
        className="mb-8 rounded-sm w-full max-w-[800px]"
      />
      <h3 className="font-semibold text-[28px] mb-6">{title}</h3>
      <p
        className="text-[#666666] text-xl font-lora mb-6 w-full inli"
        dangerouslySetInnerHTML={{
          __html: desc ? desc : "",
        }}
      ></p>

      <div className="flex items-center gap-3 sm:gap-6  text-[#666666] mb-8">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <LuClock4 />
          {createdTime}
        </span>

        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          {comment ? comment : 0} sharhlar
        </span>
      </div>

      <Comment id={id} comment={comment} />
    </div>
  );
};
