"use client"
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
interface Props {
  defaultActive: boolean;
  data: {
    title: string;
    items: { id: number; label: string; path: string }[];
  };
}
export const ModalSelect = ({ data, defaultActive }: Props) => {
  const [isOpen, setIsOpen] = useState(defaultActive);
  return (
    <div className="space-y-3">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen((c) => !c)}
      >
        <h5 className="text-[18px] font-medium">{data.title}</h5>
        {isOpen ? (
          <IoChevronUp className="h-4 w-4" />
        ) : (
          <IoChevronDown className="h-4 w-4" />
        )}
      </div>

      {isOpen && (
        <div className="pl-4 space-y-2">
          {data.items.map((item) => (
            <div key={item.id} className="mb-4">
              <Link
                href={item.path}
                className="text-[#666666] py-2 border-b border-[#CCCCCC] font-medium text-[18px]"
                key={item.id}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
