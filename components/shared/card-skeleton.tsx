import { Skeleton } from "../ui/skeleton";

export const CardSkeleton = () => {
  return (
    <div className="w-[398px] tablet-middle:w-[335px] tablet-max:w-[390px] cursor-pointer">
      <Skeleton className="w-full h-[240px] rounded-md mb-4" />
      <Skeleton className="w-[80%] h-[24px] mb-4" />
      <Skeleton className="w-[50%] h-[24px] mb-8" />

      <Skeleton className="w-full h-[50px] mb-4" />
      <Skeleton className="w-[95%] h-[20px] mb-4" />
      <Skeleton className="w-[85%] h-[20px] mb-4" />
      <Skeleton className="w-full h-[24px] mb-4" />
    </div>
  );
};
