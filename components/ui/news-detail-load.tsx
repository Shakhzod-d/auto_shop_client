import { Skeleton } from "./skeleton";

export const NewsDetailLoad = () => {
  return (
    <div className="w-full mb-16">
      <Skeleton className="w-full h-[400px] mb-6" />
      <Skeleton className="w-[40%] h-[30px] mb-6 ml-10" />
      <div className="flex items-center flex-col pl-10">
        <Skeleton className="w-[90%] h-[30px] mb-6" />
        <Skeleton className="w-[80%] h-[30px] mb-6" />
        <Skeleton className="w-[85%] h-[30px] mb-6" />
        <Skeleton className="w-full h-[30px] mb-6" />
      </div>
    </div>
  );
};
