"use client";

import { fetchItemsServ } from "@/services/items-serv";
import { useHelper } from "@/store/helper-store";
import { NewsResType, NewsSearchRes } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";

import { useParams, useSearchParams } from "next/navigation";

import { Card } from "../../components/card";
import { Pagination } from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export default function AllNews() {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
  const API = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");
  const { lang } = useHelper();
  const [count, setCount] = useState(1);
  const ApiUrl =
    params.id === "all-news"
      ? `${API}/news?page=${count}&page_size=12`
      : params.id === "search-news"
      ? `${API}/news/search?search=${searchValue}`
      : `${API}/news?page=${count}&page_size=10&subcategory_id=${params.id}`;

  const { data: news } = useQuery<NewsResType>({
    queryFn: () => fetchItemsServ(ApiUrl),
    queryKey: ["fetchItemsServAll", lang, count],
    staleTime: 0,
  });
  const { data: newsSearch } = useQuery<NewsSearchRes>({
    queryFn: () => fetchItemsServ(ApiUrl),
    queryKey: ["fetchItemsServAll", lang, count],
    staleTime: 0,
  });

  const resultData =
    params.id === "search-news" ? newsSearch?.data.data : news?.data;

  useEffect(() => {
    console.log(news?.current_page);

    setCount(news?.current_page ?? 1);
  }, [news]);

  const NewsData: any[] | undefined = resultData?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      desc: item?.content,
      img: IMG_URL + item?.main_image?.path,
      created: item.created_at,
      categoryId: item.subcategory.id,
      source: item.source,
    };
  });

  return (
    <div className="container ">
      <div className="w-full grid grid-cols-1 tablet-middle:grid-cols-3 gap-[50px] gap-y-[87px] mb-10">
        {NewsData?.map((item) => (
          <Card data={item} key={item?.id} categoryId={item.categoryId} />
        ))}
      </div>
      {params.id !== "search-news" && (
        <Pagination
          count={news?.total_pages ?? 0}
          setCount={setCount}
          activePage={news?.current_page ?? 1}
        />
      )}
    </div>
  );
}
