"use client";

import { IoClose } from "react-icons/io5";
import {
  FaXTwitter,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useHelper } from "../../store/helper-store";
import { ModalSelect } from "../ui/modal-select";
import { Category } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import LanguageSelector from "../ui/langue-select";
import { ModalSelectMap } from "@/utils/map-data";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface Props {
  data: Category[] | [];
}
const AutoShopModal = ({ data }: Props) => {
  const { setIsModal } = useHelper();
  const { t } = useTranslation();
  const router = useRouter();
  const modalData = ModalSelectMap(data);
  const pathname = usePathname();
  const AuthNavigate = () => {
    setIsModal();

    router.push("/auth");
  };

  const onClickNavigate = (path: string) => {
    router.push(path);
    setIsModal();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex  md:justify-end z-50">
      <div
        className={`bg-white shadow-lg  w-[370px] h-screen overflow-y-auto relative p-4`}
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <Image
              src="/imgs/logo.png"
              alt="autoshop.uz logo"
              width={60}
              height={60}
              className="object-contain cursor-pointer"
              onClick={() => router.push("/")}
            />
            <button
              onClick={setIsModal}
              className=" text-gray-400 hover:text-gray-600"
            >
              <IoClose className="w-10 h-8 md:h-6 md:w-6 " />
            </button>
          </div>

          <p className="font-merriweather text-black mb-4">Sahifalar</p>
          <div className="space-y-4 mb-4">
            {modalData.map((item, i) => {
              if (i == 1 || item.items.length <= 1) {
                return (
                  <p
                    className=" text-[14px] text-[#666666]"
                    key={i}
                    onClick={() => onClickNavigate(item.items[0].path)}
                    style={{
                      color: pathname == item.items[0].path ? "#4DA6FF" : "",
                    }}
                  >
                    {item.title}
                  </p>
                );
              }
              return (
                <ModalSelect
                  key={i}
                  data={item}
                  defaultActive={i == 0}
                  onClick={() => setIsModal()}
                />
              );
            })}
          </div>
          <p className="font-merriweather text-black mb-1">Sozlamalar</p>
          <div className="block tablet-middle:hidden">
            <div className="">
              <LanguageSelector variant="modal" />
            </div>

            {/* Login button */}
            <button
              className="px-8 bg-blue-400 text-white py-2 rounded-md mt-4 hover:bg-blue-500 transition-colors"
              onClick={AuthNavigate}
            >
              {t("btn.entrance")}
            </button>

            {/* Contact */}
            <div className="mt-6">
              <div className="text-black font-merriweather">
                {t("about.contact.title_one")}
              </div>
              <div className="text-gray-600 mt-1">+998 93102-59-55</div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-black font-merriweather">
                {t("contact.social.title_one")}
              </div>
              <div className="flex space-x-3 text-[#666666]">
                <a href="">
                  <FaXTwitter className="h-5 w-5" size={24} />
                </a>

                <a href="https://t.me/autoshop_uzz" target="_blank">
                  <FaTelegram className="h-5 w-5" size={24} />
                </a>

                <a
                  href="https://www.instagram.com/autoshop__uz"
                  target="_blank"
                >
                  <FaInstagram className="h-5 w-5" size={24} />
                </a>

                <a href="">
                  <FaLinkedin className="h-5 w-5" size={24} />
                </a>
                <a href="https://youtube.com/@autoshop_uz" target="_blank">
                  <FaYoutube className="h-5 w-5" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoShopModal;
