"use client";
import { fetchItemsServ } from "@/services/items-serv";
import { NewsOneRes, NewsResType } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { CardList } from "../../components/card-list";
import { NewsBar } from "../../components/news-bar";
import { NewsAdvertisement } from "../../components/advertisement";
export default function Detail() {
  // useEffect(() => {
  //   window.scrollTo(0,1000);
  // }, []);
  const params = useParams<{ path: string; id: string }>();

  const API = process.env.NEXT_PUBLIC_API_URL;

  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;
  const { data: news, isLoading: newsLoading } = useQuery<NewsResType>({
    queryFn: () =>
      fetchItemsServ(
        `${API}/news?page=1&page_size=10&subcategory_id=${params.path}`
      ),
    queryKey: ["fetchItemsDetailServ"],
    staleTime: 0,
  });

  const { data: newsOne, isLoading: newsOneLoading } = useQuery<NewsOneRes>({
    queryFn: () => fetchItemsServ(`${API}/news/one/${params.id}`),
    queryKey: ["fetchItemsOneNewsServ"],
    staleTime: 0,
  });
  console.log({ newsOne });

  const NewsData: any[] | undefined = news?.data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      desc: item?.content,
      img: IMG_URL + item?.main_image?.path,
      created: item.created_at,
      source: item.source,
      categoryId: item.subcategory.id,
    };
  });

  const newsCardList = NewsData?.filter(
    (item, i) => i <= 3 && item.id !== params.id
  );

  return (
    <>
      <main className="bigContainer">
        <div className="flex gap-[46px] mb-16 flex-col items-center xl:flex-row xl:items-start justify-between">
          <CardList
            data={newsCardList}
            title={""}
            categoryId={params.path}
            detailData={newsOne?.data}
            comment={newsOne?.data.comments.length}
            loading
            variant={newsOneLoading ? "isDetailLoading" : "isDetail"}
          />
          <NewsBar data={NewsData} variant={newsLoading ? "loading" : "data"} />
        </div>
        <NewsAdvertisement data={[]} />
      </main>
    </>
  );
}
