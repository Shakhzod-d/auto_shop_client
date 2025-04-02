"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

interface Props {
  width?: number;
  height?: number;
  duration?: number;
  data: { imgUrl: string; id: string }[];
  className?: string;
}

export function AdsCarousel({
  data,
  height = 300,
  width = 750,
  duration = 2000,
  className,
}: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, duration);

    return () => clearInterval(interval);
  }, [data.length, duration]);

  return (
    <div
      className={cn(
        "flex justify-center items-center w-full max-w-[750px] h-[300px] sm:h-[550px] overflow-hidden",
        className || ""
      )}
      style={{ maxWidth: width, }}
    >
      {data.length > 0 && (
        <Image
          src={data[currentIndex].imgUrl}
          alt="Ad Image"
          width={width}
          height={height}
          className={cn("w-full h-full ", className || "")}
        />
      )}
    </div>
  );
}
