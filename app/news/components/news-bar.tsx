"use client";
import { newsBar } from "../../../lib/constants";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";

export const NewsBar = () => {
  return (
    <aside className="w-[444px] border">
      <h4 className="text-[28px] font-bold mb-8">Ko’proq Yangiliklar</h4>
      <div className="">
        {newsBar.map((item) => (
          <div className="flex gap-3 mb-8" key={item.id}>
            <Image
              src={item.img}
              alt="img"
              width={150}
              height={80}
              className="rounded-[8px]"
            />
            <div>
              <p className="text-[21px] font-medium mb-4">{item.title}</p>
              <div className="flex items-center text-[#666666] gap-[10px] font-lora">
                <span className="flex items-center gap-1">
                  <LuClock4 />2 sog’ot oldin
                </span>
                <span className="flex items-center">
                  <MdFiberManualRecord size={25} />
                  John Smith
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image src={"/imgs/byd.jpg"} alt="img" width={444} height={550} />
    </aside>
  );
};
