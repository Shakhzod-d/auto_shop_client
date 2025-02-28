import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  return (
    <header className="py-[30px] bg-[#F8F8F8] mb-28">
      <div className="container flex justify-between items-center">
        <h2 className="text-[#4DA6FF] font-bold text-[45px]">AutoShop</h2>
        <span className="flex  items-center gap-[5px] cursor-pointer uppercase text-xl text-[#666666] font-medium">
          {`O'z`}
          <MdKeyboardArrowDown size={25} />
        </span>
      </div>
    </header>
  );
};
