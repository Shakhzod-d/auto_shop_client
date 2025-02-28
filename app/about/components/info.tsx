import Image from "next/image";

export const Info = () => {
  return (
    <section className="">
      <div className="container w-full bg-[#E9F4FF] py-[50px] flex  justify-center flex-col  tablet-middle:items-center tablet-middle:text-center">
        <div className="w-full max-w-[805px]">
          <h3 className="text-[28px] tablet-middle:text-[36px] font-bold mb-4">
            Nega Aynan Bizni Tanlashingiz Kerak
          </h3>
          <p className="text-[17px] tablet-middle:text-[20px]">
            Google Analytics ma’lumotlariga ko‘ra, saytga har kuni 100 ming
            kishi tashrif buyuradi. Saytdan foydalanish mutlaqo bepul bo‘lib,
            faqatgina internet traffik sarflanadi.
          </p>
        </div>
      </div>

      <div className="my-20 tablet-max:my-[130px] w-full  bg-[#F8F8F8] py-[30px]">
        <div className="container flex  flex-col items-center  xl:flex-row justify-between ">
          <Image
            src="/imgs/about-image.png"
            alt=""
            width={500}
            height={600}
            className="mb-12 xl:mb-0"
          />
          <div className="w-full max-w-[678px]">
            <h3 className="text-[28px] tablet-middle:text-[36px] font-bold mb-4">
              Bizning Loyiha 2025-yilning Noyabr Oyida Faoliyatini Boshlagan
            </h3>
            <p className="text-[#666666] tablet-middle:text-[20px]">
              OAV sifatida 0000 raqami bilan davlat ro‘yxatidan o‘tgan. Loyiha
              muassisi «SSSSSS» MChJ hisoblanadi. <br />
              <br />
              Sayt O‘zbekiston Respublikasi hududida faoliyat olib boruvchi
              davlat va jamoat tashkilotlari bilan qonunda belgilangan tartibda
              hamkorlik o‘rnatgan holda ish olib boradi. <br />
              <br />
              «Autoshop.uz» sayti materiallaridan foydalanish shartlari
              «Autoshop.uz» sayti tahririyati mavjud qonunchilikka ko‘ra saytda
              nashr etilgan, qoidalar asosida ko‘chirib bosilgan ma’lumotlar
              asosliligi uchun (manbasi ko‘rsatib yozilganligi evaziga)
              javobgarlikni o‘z zimmasiga olmaydi. <br />
              <br /> Saytda nashr qilingan maqola yuzasidan, uning muallifi va
              sayt tahririyatining fikri bir xil bo‘lmasligi mumkin. Shuningdek,
              sayt tahririyati o‘quvchilarining yuborgan xatlarining har biriga
              alohida javob yozish majburiyatini olmaydi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
