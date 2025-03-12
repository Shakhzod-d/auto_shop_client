"use client";
import * as React from "react";
import { CarouselContent, CarouselItem } from "../../components/ui/carousel";
import Image from "next/image";
interface Props {
  data: { img: string; url: string; text: string }[] | [];
}
export function CarouselSize({ data }: Props) {
  return (
    <>
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div
              className="w-[305px]!important min-h-[330px] bg-[#F8F8F8] rounded-sm cursor-pointer select-none"
              key={index}
            >
              <Image
                src={item.img}
                id="1"
                width={305}
                height={150}
                alt="img"
                className="mb-4"
              />
              <div className="px-[5px] text-[#666666] text-[18px] font-montserrat">
                {item.text}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </>
  );
}
