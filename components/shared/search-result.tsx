"use client";
import { NewsRes } from "@/types/news.type";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  data: NewsRes[] | [];
  loading: boolean;
  setIsActive: (val: boolean) => void;
  searchValue: string;
}
export const SearchResult = ({
  data,
  loading,
  setIsActive,
  searchValue,
}: Props) => {
  const router = useRouter();

  const onChange = async (categoryId: string, newsId: string) => {
    await router.push(`/news/${categoryId}/${newsId}`);
    setIsActive(false);
  };
  const AllNewsFun = () => {
    router.push(`/news/all/search-news?search=${searchValue}`);
    setIsActive(false);
  };

  const component: Record<string, any> = {
    loading: (
      <div className="p-4 flex justify-center">
        <Loader2Icon size={25} className="animate-spin text-blue-400" />
      </div>
    ),
    empty: (
      <div className="p-4 flex justify-center">
        <p>Yangilik topilmadi :(</p>
      </div>
    ),
    success: data.map((item, i) => {
      if (i < 3) {
        return (
          <div
            className="flex gap-2 items-center mb-4 cursor-pointer"
            key={item.id}
            onClick={() => onChange(item.category.id, item.id)}
          >
            <p className="font-medium text-[12px] break-words">{item.title}</p>
          </div>
        );
      }
    }),
  };
  return (
    <div className="absolute w-[90%]  border bg-[#f1f1f1] shadow-lg rounded-md  top-16 z-10 p-4">
      {data.length > 3 && (
        <div className="flex justify-between items-center mb-2 text-blue-400 cursor-pointer">
          <p className="text-[10px] sm:text-[18px]">
            Yangiliklar ({data.length})
          </p>
          <p
            className="underline text-[10px] sm:text-[18px]"
            onClick={AllNewsFun}
          >
            {"barchasini ko'rish"}
          </p>
        </div>
      )}
      {component[loading ? "loading" : data.length ? "success" : "empty"]}
    </div>
  );
};
