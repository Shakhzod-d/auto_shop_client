import { Button } from "../../../components/ui/button";

export const Banners = () => {
  return (
    <section className="w-full bg-[url('/imgs/home-hero.jpg')]  bg-no-repeat bg-cover py-[25px]">
      <div className="container">
        <div className="w-[650px] text-white">
          <h2 className="text-[55px]  font-bold mb-4">
            So‘nggi Avtomobil Yangiliklari va Texnologiya Sharhlari
          </h2>
          <p className="text-[22px] font-medium mb-8">
            Bizning platformamizda avtomobil yangiliklari, texnologik
            yangiliklar va elektr avtomobillar haqida eng so‘nggi ma'lumotlarni
            topishingiz mumkin. O‘zbekistonlik avtomobil ishqibozlari uchun
            yangiliklar, sharhlar va qo‘llanmalar – barchasi bir joyda!
          </p>
          <Button className=" px-[51px] bg-[#4DA6FF] font-semibold h-[50px]">Batafsil</Button>
        </div>
      </div>
    </section>
  );
};
