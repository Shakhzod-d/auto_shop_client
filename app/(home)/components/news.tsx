import { LuClock4 } from "react-icons/lu";
import { Button } from "../../../components/ui/button";
import { MdFiberManualRecord } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

export const NewsDetail = () => {
  return (
   
      <div className="w-full max-w-[750px]">
        <Button className="text-sm bg-[#3399FF]  h-[26px] w-[137px] mb-2">
          Elektr Avtomobillar
        </Button>
        <h5 className="text-[28px] font-semibold mb-4">
          Toyota 1000 km masofani bosib o'tishga mo'ljallangan yangi avlod
          elektr avtomobillarini taqdim etdi
        </h5>
        <div className="flex items-center gap-6 mb-8 text-[#666666]">
          <span className="flex items-center gap-[10px]">
            <LuClock4 />2 sog’ot oldin
          </span>
          <span className="flex items-center gap-[10px]">
            <MdFiberManualRecord size={25} />
            John Smith
          </span>
          <span className="flex items-center gap-[10px]">
            <img src="/msg.svg" alt="" />
            John Smith
          </span>
        </div>
        <img src="/imgs/car.png" alt="" className="mb-12" />
        <p className="text-xl text-[#666666] mb-8">
          Toyota kompaniyasi diapazon va unumdorlikni sezilarli darajada
          oshirish uchun mo'ljallangan akkumulyatorli elektr transport
          vositalarining (BEVs) keyingi avlodi uchun rejalarini e'lon qildi.
          2026-yilgacha ishga tushirilishi mo‘ljallangan ushbu yangi EV’lar har
          bir zaryad uchun 1000 kilometrgacha (taxminan 621 milya) masofani
          qo‘llab-quvvatlaydigan batareyalarni o‘z ichiga oladi va energiya
          samaradorligi va texnologiya integratsiyasi sohasidagi yutuqlarni
          namoyish etadi. Toyota-ning BEV tashabbusi, shuningdek, ishlab
          chiqarishni soddalashtirish va xarajatlarni kamaytirish uchun sun'iy
          intellekt va ishlab chiqarish jarayonlari, masalan, giga quyish
          yordami bilan aerodinamik dizaynlarga urg'u beradi.
        </p>
        <Button className="bg-[#4DA6FF] w-[166px] h-[50px] mb-[66px]">
          To’liq Ma’lumot
        </Button>
        <span className="flex items-center gap-[10px] text-[20px] mb-16">
          <IoMdAdd size={30} />
          Ko’proq Yangiliklar
        </span>
        <img src="/imgs/home-news-img.png" alt="" />
      </div>
   
  );
};
