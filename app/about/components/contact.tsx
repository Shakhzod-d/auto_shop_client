import { useTranslation } from "react-i18next";
import { CiClock2 } from "react-icons/ci";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";


const list = [
  "condition1",
  "condition2",
  "condition3",
  "condition4",
  "condition5",
  "condition6",
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
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="max-w-[730px]">
        <h2
          className="text-[28px] tablet-middle:text-[36px] font-bold mb-4"
          dangerouslySetInnerHTML={{
            __html: t("about.oav.title"),
          }}
        ></h2>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[14px] leading-tight flex flex-col gap-5 mb-14 tablet-auto:mb-16">
        {list.map((item, i) => (
          <li className=" tablet-middle:text-xl text-[#666666] mb-4" key={i}>
            {t(`about.oav.${item}`)}
          </li>
        ))}
      </ul>
      <div className="flex  flex-wrap gap-[88px] auto-max:gap-[100px] mb-[110px]">
        <div>
          <h4 className="text-[28px] font-semibold mb-4">
            {t("about.contact.title_one")}
          </h4>
          <ul className=" flex flex-col gap-4">
            {contactList1.map((item) => {
              const Icon = () => item.icon;
              return (
                <li
                  className="flex gap-[10px] text-[#666666] items-center sm:text-[18px] tablet-max:text-xl"
                  key={item.id}
                >
                  <div className="w-[52px] h-[52px] tablet-max:w-[58px] tablet-max:h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
                    <Icon />
                  </div>
                  {item.id == 4 ? t("about.contact.date") : item.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="text-[28px] font-semibold mb-4">
            {t("about.contact.title_two")}
          </h4>
          <ul className=" flex flex-col gap-4">
            {contactList2.map((item) => {
              const Icon = () => item.icon;
              return (
                <li
                  className="flex gap-[10px] text-[#666666] items-center text-[20px]"
                  key={item.id}
                >
                  <div className="w-[52px] h-[52px] tablet-max:w-[58px] tablet-max:h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
                    <Icon />
                  </div>
                  {item.id == 4 ? t("about.contact.date") : item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
