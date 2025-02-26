import { FiArrowLeftCircle } from "react-icons/fi";
import { announcementsList } from "../../../lib/constants";
import Image from "next/image";

export const Announcements = () => {
  return (
    <section className="mb-[105px]">
      <div className="flex justify-between items-center mb-6">
        <div className="w-[430px]">
          <h3 className="text-[32px] font-bold  mb-4">E’lonlar</h3>
          <p className="text-[18px]">
            Reklama bilan bog‘liq istalgan savollar bo‘yicha <br />
            <span className="text-[#4DA6FF]">+998 93 102 59 55</span>
            telefoni orqali bog‘lanishingiz mumkin.
          </p>
        </div>
        <div className="flex items-center gap-4 text-[#666666]">
          <FiArrowLeftCircle size={48} className="cursor-pointer" />
          <FiArrowLeftCircle size={48} className="rotate-180 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-[6px]">
        {announcementsList.map((item) => (
          <div
            className="w-[305px] h-[330px] bg-[#F8F8F8] rounded-sm"
            key={item.id}
          >
            <Image src={item.img} alt="" className="mb-4"width={305} height={150} />
            <div className="px-[5px] text-[#666666] text-[18px]">
              {item.msg}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
