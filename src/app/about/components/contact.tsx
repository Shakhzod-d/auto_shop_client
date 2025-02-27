import { CiClock2 } from "react-icons/ci";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";

const list = [
  `Sayt O‘zbekiston Respublikasi hududida, mintaqa va chet ellarda faoliyat yuritayotgan internet saytlari, nashrlar bilan o‘zaro ma’lumot, maqolalar almashishni yo‘lga qo‘yadi.`,
  "Saytdagi ma’lumotlardan faqat tahririyatdan yozma ravishda ruxsat olingandagina foydalanish talab etiladi.",
  `Materiallardan foydalanishda, sayt nomini (muallifini) berilayotgan materialning birinchi yoki uchinchi qatorigacha bo‘lgan hududda taqdim etish so‘raladi.`,
  "Masalan, «Bu haqda Autoshop.uz sayti xabar berdi».",
  "Bu o‘rinda nashr nomi - «Autoshop.uz» so‘ziga havola qo‘yilib, bu havola http://autoshop.uz/ sahifasiga yo‘naltirilgan bo‘lishi, qolaversa, «xabar beradi» so‘z birikmasiga havola qo‘yilib, bu havola «Autoshop.uz» saytidan olingan xabarga yo‘naltirilgan bo‘lishi kerak.",
  "Boshqa nashrlar bilan hamkorlikda ishlashdan doim mamnun bo‘lamiz.",
];
const contactList1 = [
  { id: 1, icon: <MdOutlinePhone size={20} />, label: " +998 (99) 536-19-17" },
  { id: 2, icon: <PiTelegramLogo size={20} />, label: " @autoshop_official" },
  {
    id: 3,
    icon: <MdMailOutline size={20} />,
    label: " autoshop_uz@gmail.com",
  },
  {
    id: 4,
    icon: <CiClock2 size={20} />,
    label: " Dush. - Shan.  9:00 - 18:00",
  },
];
const contactList2 = [
  { id: 1, icon: <MdOutlinePhone size={20} />, label: "+998 (93) 102-59-55" },
  { id: 2, icon: <PiTelegramLogo size={20} />, label: "@abrolovv" },
  {
    id: 3,
    icon: <MdMailOutline size={20} />,
    label: "autoshop_uz@gmail.com",
  },
  {
    id: 4,
    icon: <CiClock2 size={20} />,
    label: " Dush. - Shan.  9:00 - 18:00",
  },
];
export const Contacts = () => {
  return (
    <section className="container">
      <div className="max-w-[730px]">
        <h2 className="text-[36px] font-bold mb-4">
          Sayt Materiallaridan Boshqa Saytlar <br />
          Yoki OAV Foydalanishi Shartlari:
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[14px] leading-tight flex flex-col gap-5 mb-16">
        {list.map((item, i) => (
          <li className="text-[20px] text-[#666666] mb-4" key={i}>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-[100px] mb-[110px]">
        <div>
          <h4 className="text-[28px] font-semibold mb-4">Murojat Uchun</h4>
          <ul className=" flex flex-col gap-4">
            {contactList1.map((item) => {
              const Icon = () => item.icon;
              return (
                <li
                  className="flex gap-[10px] text-[#666666] items-center text-[20px]"
                  key={item.id}
                >
                  <div className="w-[58px] h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
                    <Icon />
                  </div>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="text-[28px] font-semibold mb-4">Reklama Uchun</h4>
          <ul className=" flex flex-col gap-4">
            {contactList2.map((item) => {
              const Icon = () => item.icon;
              return (
                <li
                  className="flex gap-[10px] text-[#666666] items-center text-[20px]"
                  key={item.id}
                >
                  <div className="w-[58px] h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
                    <Icon />
                  </div>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
