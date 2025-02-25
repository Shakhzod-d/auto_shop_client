"use client";

import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
interface Props {
  initialTitle: string;
  data: { label: string; path: string; id: number }[];
}
export const NavSelect = ({ data, initialTitle }: Props) => {
  const navigate = useRouter();
  return (
    <div className="select-container">
      <span className="flex items-center gap-[5px] text-[19px] font-medium cursor-pointer">
        {initialTitle}
        <MdKeyboardArrowDown />
      </span>
      <div className="select-action">
        {data.map((item) => (
          <p
            key={item.id}
            className="text-[#333333] text-[19px] mb-4 cursor-pointer"
            onClick={() => navigate.push(item.path)}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};
