"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  interval?: number; // Milliseconds, default is 3000
}

export const ImgSlider: React.FC<CarouselProps> = ({
  images,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full  h-[200px] sm:h-[300px] md:h-[450px] overflow-hidden flex items-center justify-center mb-5 sm:mb-[60px]">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index}`}
            width={800}
            height={400}
            className={`absolute inset-0 w-full h-full object-cover   transition-transform duration-700 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>
      <div className="flex  items-center gap-1   absolute z-10 bottom-5">
        {images.map((_, i) => (
          <div
            className={`w-2.5 h-2.5  rounded-full bg-white ${
              i != currentIndex ? "opacity-55" : ""
            } cursor-pointer`}
            key={i}
            onClick={() => setCurrentIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
