import Image from "next/image";
import React from "react";
import { LuClock4 } from "react-icons/lu";

export const NewsDetail = () => {
  return (
    <div className="w-full max-w-[800px] mb-16">
      <Image
        src={"/imgs/car.png"}
        alt="news photo"
        width={800}
        height={400}
        className="mb-8"
      />
      <h3 className="font-semibold text-[28px] mb-6">
        2024 Kawasaki Ninja 500
      </h3>
      <p className="text-[#666666] text-xl font-lora mb-6">
        {`   Ninja 500 zamonaviy texnologiyalarga, jumladan Kawasaki's Rideology
        ilovasi orqali smartfonga ulanishga ega to'liq LCD displeyga ega. Yuqori
        trimlar toʻliq rangli TFT displeylar, ABS, LED koʻrsatkichlari va boshqa
        ergonomik yaxshilanishlar kabi ilgʻor funksiyalarni taklif etadi. Uning
        30,9 dyuymli o'rindiq balandligi va yaxshilangan osma sozlamalari turli
        o'lchamdagi va mahorat darajasidagi chavandozlar uchun javob beradi.`}
      </p>
      <Image
        src={"/imgs/home-news-img.png"}
        alt="news photo"
        width={600}
        height={200}
        className="mb-6"
      />
      <p className="text-[#666666] text-xl font-lora mb-8">
        {`2024 yilgi Kawasaki Ninja 500 Kawasaki sport velosipedlari qatorining dinamik yangilanishi boʻlib, yangi va tajribali chavandozlar uchun ishlash, uslub va qulaylik muvozanatini taklif etadi. U modernizatsiya qilingan 451cc parallel egizak dvigatelga ega bo‘lib, quvvatini 51 ot kuchiga oshiradi, bu Ninja 400 ga nisbatan sezilarli yaxshilanishdir. Velosiped o‘zining yengil dizaynini 377 funt og‘irlikdagi og‘irligi bilan saqlab qoladi, bu uni har ikki shaharda ham chaqqon va oson boshqarish imkonini beradi. va kanyon yo'l stsenariylari.`}
      </p>
      <div className="flex items-center gap-3 sm:gap-6  text-[#666666]">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <LuClock4 />2 sog’ot oldin
        </span>

        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          John Smith
        </span>
      </div>
    </div>
  );
};
