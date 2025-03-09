"use client";
import * as React from "react";
import { CarouselContent, CarouselItem } from "../../components/ui/carousel";
import { announcementsList } from "../../lib/constants";
import Image from "next/image";

export function CarouselSize() {
  return (
    <>
      <CarouselContent>
        {announcementsList.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div
              className="w-[305px]!important min-h-[330px] bg-[#F8F8F8] rounded-sm cursor-pointer select-none"
              key={item.id}
            >
              <Image src={item.img} id="1" width={305} height={150} alt="img" className="mb-4"/>
              <div className="px-[5px] text-[#666666] text-[18px] font-montserrat">
                {item.msg}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </>
  );
}
