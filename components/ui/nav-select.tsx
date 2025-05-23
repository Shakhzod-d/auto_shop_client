"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
interface Props {
  initialTitle: string;
  data: { label: string; path: string; id: string }[];
}
export const NavSelect = ({ data, initialTitle }: Props) => {
  const navigate = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (path: string) => {
    navigate.push("/news/" + path);
    setIsOpen(false);
  };

  const selectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative max-w-max" ref={selectRef}>
      <span
        className="flex items-center gap-[5px] text-[18px] font-medium cursor-pointer hover:text-[#4DA6FF]"
        style={{
          color: data.some((item) => pathname.endsWith(item.path))
            ? "#4DA6FF"
            : "#333333",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {initialTitle}
        <MdKeyboardArrowDown />
      </span>
      {isOpen && (
        <div className="min-w-[220px] max-w-max w-fit absolute top-[30px] p-[10px] bg-white border border-gray-300 rounded-lg transition-all duration-300 shadow-md break-words whitespace-normal flex flex-col gap-2 z-10">
          {data.map((item) => (
            <p
              key={item.id}
              className="text-[#333333] text-[14px] cursor-pointer border-b border-[#DDDDDD] pb-1 last:border-none hover:text-[#4DA6FF] break-words"
              onClick={() => onChange(item.path)}
              style={{ color: pathname.endsWith(item.path) ? "#4DA6FF" : "" }}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
