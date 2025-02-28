import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { CustomForm } from "./form";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export const SendMessage = () => {
  return (
    <section className="container flex justify-between">
      <div className="mb-8">
        <h4 className="text-[36px] font-bold mb-4">Bizga Xabar Yuboring</h4>
        <p className="text-[20px] text-[#666666] w-full  max-w-[578px] mb-8">
          Savollaringiz yoki fikrlaringiz bormi? Quyidagi shaklni to‘ldiring va
          tez orada siz bilan bog‘lanamiz. Sizning fikringiz biz uchun juda
          muhim!
        </p>
        <div className="flex gap-8 mb-16">
          <li className="flex gap-[10px] text-[#666666] items-center text-[20px]">
            <div className="w-[58px] h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
              <PiTelegramLogo size={20} />
            </div>
            @autoshop_murojaat
          </li>
          <li className="flex gap-[10px] text-[#666666] items-center text-[20px]">
            <div className="w-[58px] h-[58px] rounded-full border border-[#666666] flex justify-center items-center text-[#666666]">
              <MdMailOutline size={20} />
            </div>
            @autoshop_murojaat
          </li>
        </div>
        <CustomForm />
      </div>
      <div>
        <div className="mb-8">
          <p className="text-[28px] font-medium mb-8"> Ijtimoiy Tarmoqlar</p>
          <ul className="flex gap-4 items-center">
            <li className="w-[55px] h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <PiTelegramLogo size={28} />
            </li>
            <li className="w-[55px] h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <SlSocialFacebook size={28} />
            </li>
            <li className="w-[55px] h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <IoLogoInstagram size={28} />
            </li>
            <li className="w-[55px] h-[55px] rounded-[8px]  bg-[#CCCCCC] flex justify-center items-center text-white">
              <AiOutlineYoutube size={28} />
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[28px] font-medium mb-8"> Murojaat uchun Tel</p>
          <span className="flex items-center gap-4 text-[#666666] text-[20px]">
            <MdOutlinePhone size={30} />
            +998 (93) 102-59-55
          </span>
        </div>
      </div>
    </section>
  );
};
