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
          <h3 className="text-[36px] font-bold mb-10">So’nggi Yangiliklar</h3>
          <div className="flex justify-between  gap-[60px]">
            <NewsDetail />
            <NewsList />
          </div>
        </section>
        <Announcements />
      </main>
      <GmailInput />
    </>
  );
}
