"use client";

import { useHelper } from "@/store/helper-store";
import { X } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";
import { SearchResult } from "./search-result";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debauce";
import { NewsSearchRes } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";
import { fetchItemsServ } from "@/services/items-serv";

const API = process.env.NEXT_PUBLIC_API_URL;
export const SearchInput = () => {
  const [isSearchResult, setIsSearchResult] = useState<boolean>(false);
  const { setIsSearch } = useHelper();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchValue = useDebounce(searchTerm, 500);
  const { data: news, isLoading } = useQuery<NewsSearchRes>({
    queryFn: () => fetchItemsServ(`${API}/news/search?search=${searchValue}`),
    queryKey: ["searchNewsServ", searchValue],
    staleTime: 0,
  });
  useEffect(() => {
    if (searchValue === "") {
      setIsSearchResult(false);
    } else {
      setIsSearchResult(true);
    }
  }, [searchValue]);
  return (
    <div className="flex w-full max-w-[80%] justify-between items-center relative">
      <div className="flex py-4 px-5 border border-[#DDDDDD] rounded-md w-full max-w-[720px] items-center gap-2">
        <input
          type="text"
          className="outline-none w-full  placeholder:text-[#666666] placeholder-[#666666] "
          placeholder="Qidirish"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoSearchOutline size={20} className="cursor-pointer " />
      </div>
      <X className="cursor-pointer" onClick={setIsSearch} />
      {isSearchResult && (
        <SearchResult
          data={news?.data?.data ?? []}
          loading={isLoading}
          setIsActive={setIsSearchResult}
          searchValue={searchValue}
        />
      )}
      {/* <SearchResult data={news?.data?.data ?? []} /> */}
    </div>
  );
};
