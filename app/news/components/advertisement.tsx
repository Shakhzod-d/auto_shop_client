import { Button } from "../../../components/ui/button";

export const NewsAdvertisement = () => {
  return (
    <section className="flex gap-4 mb-[115px]">
      <div className="w-[265px] h-[381px] bg-[#F8F8F8] p-[7px]">
        <div className="w-full h-[150px] bg-[#4DA6FF] mb-4"></div>
        <div className="flex items-center gap-[7px] mb-4">
          <span className="w-[30px] h-[30px] bg-[#D9D9D9] block rounded-full"></span>
          <p className="text-[17px] text-[#666666]">plus.yandex.uz</p>
        </div>
        <h4 className="text-xl font-medium mb-7">
          Serial Ahad <br /> Qayum 100-qism <br />
          bepul
        </h4>
        <Button className="w-full h-[45px] bg-[#4DA6FF] font-semibold">
          To’liq Malumot Olish
        </Button>
      </div>
    </section>
  );
};
