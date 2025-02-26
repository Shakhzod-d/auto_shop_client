import { Banner } from "../../../components/ui/banner";
import { newsData } from "../../../lib/constants";
import { NewsAdvertisement } from "../components/advertisement";
import { CardList } from "../components/card-list";
import { NewsBar } from "../components/news-bar";

interface Props {
  params: { path: "newsCar" | "bikes" | "energy" | "tracks" };
}

export default function News({ params }: Props) {
  const data = newsData[params.path];

  return (
    <>
      <Banner
        img={data.bannerImg ?? "/default-banner.jpg"}
        text={data.bannertext}
        w={data.w}
      />
      <main className="bigContainer">
        <div className="flex gap-[46px] mb-16">
          <CardList data={data.newsCard} title={data.bannertext} />
          <NewsBar />
        </div>
        <NewsAdvertisement />
      </main>
    </>
  );
}
