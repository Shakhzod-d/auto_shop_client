"use client";
import { Skeleton } from "./skeleton";

export const NewsBarLoading = () => {
  return (
    <div className="flex gap-3 mb-8  p-2  rounded-md">
      <Skeleton className="w-[150px] h-[80px] shrink-0" />
      <div className="w-full">
        <Skeleton className="w-full h-[30px] shrink-0 mb-4" />
        <Skeleton className="w-[70%] h-[20px] shrink-0" />
      </div>
    </div>
  );
};
