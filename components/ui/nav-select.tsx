"use client";

import { usePathname, useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
interface Props {
  initialTitle: string;
  data: { label: string; path: string; id: string }[];
}
export const NavSelect = ({ data, initialTitle }: Props) => {
  const navigate = useRouter();
  const pathname = usePathname();
  return (
    <div className="select-container">
      <span
        className="flex items-center gap-[5px] text-[19px] font-medium cursor-pointer"
        style={{
          color: data.some((item) => item.path == pathname) ? "#4DA6FF" : "",
        }}
      >
        {initialTitle}
        <MdKeyboardArrowDown />
      </span>
      <div className="select-action">
        {data.map((item) => (
          <p
            key={item.id}
            className="text-[#333333] text-[18px] mb-4 cursor-pointer border-b border-[#DDDDDD] pb-1 last:border-none"
            onClick={() => navigate.push("/news/" + item.path)}
            style={{ color: pathname == item.path ? "#4DA6FF" : "" }}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};
