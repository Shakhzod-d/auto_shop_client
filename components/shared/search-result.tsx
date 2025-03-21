"use client";
import { NewsRes } from "@/types/news.type";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: NewsRes[] | [];
  loading: boolean;
  setIsActive: (val: boolean) => void;
  searchValue: string;
}
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
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
            <div className="w-[100px]">
              <Image
                width={100}
                height={50}
                alt="img"
                src={IMG_URL + item.main_image.path}
                className="rounded-sm"
              />
            </div>
            <p className="font-medium text">{item.title}</p>
          </div>
        );
      }
    }),
  };
  return (
    <div className="absolute w-[90%]  border bg-[#f1f1f1] shadow-lg rounded-md  top-16 z-10 p-4">
      {data.length > 3 && (
        <div className="flex justify-between items-center mb-2 text-blue-400 cursor-pointer">
          <p>Yangiliklar ({data.length})</p>
          <p className="underline" onClick={AllNewsFun}>
            {"barchasini ko'rish"}
          </p>
        </div>
      )}
      {component[loading ? "loading" : data.length ? "success" : "empty"]}
    </div>
  );
};
