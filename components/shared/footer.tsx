import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";
import { FooterData } from "../../lib/constants";
import { AiOutlineYoutube } from "react-icons/ai";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#4DA6FF] py-[30px]">
      <div className="container">
        <div className="flex justify-between pb-16 border-b mb-16 text-[#FFFFFF]">
          <div className="flex flex-col gap-4 ">
            {FooterData.arr1.map((item, i) => (
              <p className="text-[19px]  font-medium" key={i}>
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4 ">
            {FooterData.arr2.map((item, i) => (
              <p className="text-[19px] text-[#FFFFFF] font-medium" key={i}>
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4 ">
            {FooterData.arr3.map((item, i) => (
              <p className="text-[19px] text-[#FFFFFF] font-medium" key={i}>
                {item.label}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[20px] font-medium mb-4">Obuna Bo’ling</p>
            <span className="flex items-center gap-4">
              <FaTelegram size={30} />
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <AiOutlineYoutube size={30} />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#FFFFFF]">
          <h2 className="text-[45px] font-bold ]">AutoShop</h2>
          <p className="text-[18px]">
            © {date.getFullYear()} AutoShop Yangiliklar. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};
