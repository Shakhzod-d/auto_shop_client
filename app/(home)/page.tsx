import { Carousel } from "../../components/ui/carousel";
import { HomeBanner } from "../../lib/constants";
import { Announcements } from "./components/announcements";
import { Banners } from "./components/banners";
import { GmailInput } from "./components/gmail-input";
import { NewsDetail } from "./components/news";
import { NewsList } from "./components/news-list";

export default function Home() {
  return (
    <>
      <Banners
        banner_img={HomeBanner.img}
        title={HomeBanner.title}
        desc={HomeBanner.desc}
        p="25px 0"
        w="650px"
        btn={true}
        img_two={true}
      />
      <main className="container">
        <section className="mb-[155px]">
          <h3 className="text-[28px] sm:text-[32px] tablet-max:text-4xl font-bold mb-10">
            So’nggi Yangiliklar
          </h3>
          <div className="flex justify-between  gap-[60px] flex-col items-center xl:flex-row">
            <NewsDetail />
            <NewsList />
          </div>
        </section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <Announcements />
        </Carousel>
      </main>
      <GmailInput />
    </>
  );
}
