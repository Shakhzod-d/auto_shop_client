"use client";

import { IoClose, IoChevronDown } from "react-icons/io5";
import {
  FaXTwitter,
  FaYoutube,
  FaTelegram,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useHelper } from "../../store/helper.store";
import { ModalSelect } from "../ui/modal-select";
import { ModalSelectData } from "../../lib/constants";

const AutoShopModal = () => {
  const { setIsModal } = useHelper();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex  justify-end z-50">
      <div
        className={`bg-white shadow-lg  w-[370px] h-screen overflow-y-auto relative p-4`}
      >
        <button
          onClick={setIsModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoClose className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h1 className="block tablet-middle:hidden text-3xl font-bold text-blue-400 mb-4">
            AutoShop
          </h1>

          <div className="space-y-4">
            <ModalSelect data={ModalSelectData.auto} defaultActive={true} />

            <p className=" text-[18px] font-medium">Yangi modellar</p>
            <ModalSelect data={ModalSelectData.other} defaultActive={false} />
            <ModalSelect data={ModalSelectData.energy} defaultActive={false} />
            <p className=" text-[18px] font-medium">Premyera</p>
            <p className=" text-[18px] font-medium">Online Shop</p>
          </div>

          <div className="block tablet-middle:hidden">
            <div className="mt-6">
              <div className="flex items-center gap-2 mt-1">
                <div>{`O'Z`}</div>
                <IoChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Login button */}
            <button className="w-full bg-blue-400 text-white py-2 rounded-md mt-4 hover:bg-blue-500 transition-colors">
              Kirish
            </button>

            {/* Contact */}
            <div className="mt-6">
              <div>Murojaat Uchun</div>
              <div className="text-gray-600 mt-1">+998 93102-59-55</div>
            </div>

            <div className="mt-6">
              <div className="mb-2">Ijtimoiy Tarmoqlar</div>
              <div className="flex space-x-3">
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaXTwitter className="h-5 w-5" />
                </div>
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaTelegram className="h-5 w-5" />
                </div>
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaPinterest className="h-5 w-5" />
                </div>
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaInstagram className="h-5 w-5" />
                </div>
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div className="bg-gray-700 text-white p-1 rounded-md">
                  <FaYoutube className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoShopModal;
