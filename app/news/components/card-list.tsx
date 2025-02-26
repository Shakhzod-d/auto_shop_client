import { Card } from "./card";

interface Props {
  data: { id: string; title: string; desc: string; img: string }[];
  title: string;
}

export const CardList = ({ data, title }: Props) => {
  return (
    <section className="">
      <h3 className="text-[36px] font-bold mb-8">{title}</h3>
      <div className="w-full max-w-[830px] flex flex-wrap gap-[50px] gap-y-[87px]">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
