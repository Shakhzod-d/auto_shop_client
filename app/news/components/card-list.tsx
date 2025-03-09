import { Card } from "./card";
import { NewsDetail } from "./news-detail";

interface Props {
  data: { id: string; title: string; desc: string; img: string }[];
  title: string;
  isDetail: boolean;
  setIsDetail: (data: boolean) => void;
}

export const CardList = ({ data, title, isDetail, setIsDetail }: Props) => {
  return (
    <section className="">
      {isDetail && <NewsDetail />}
      <h3 className="text-[32px] tablet-max:text-[36px] font-bold mb-8">
        {" "}
        {isDetail ? "Mavzuga Doir Yangiliklari" : title}
      </h3>
      <div className="w-full max-w-[830px] grid grid-cols-1 tablet-middle:grid-cols-2 gap-[50px] gap-y-[87px]">
        {data?.map((item) => (
          <Card data={item} key={item.id} onClick={setIsDetail} />
        ))}
      </div>
    </section>
  );
};
