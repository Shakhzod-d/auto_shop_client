"use client";
import { ModalItemsData } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
interface Props {
  defaultActive: boolean;
  data: ModalItemsData | undefined;
  onClick: () => void;
}
export const ModalSelect = ({ data, defaultActive, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState(defaultActive);
  const pathname = usePathname();
  return (
    <div className="space-y-3">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen((c) => !c)}
      >
        <h5
          className="text-[18px] font-medium"
          style={{
            color: data?.items.some((item) => item.path == pathname) && !isOpen
              ? "#4DA6FF"
              : "",
          }}
        >
          {data?.title}
        </h5>
        {isOpen ? (
          <IoChevronUp className="h-4 w-4" />
        ) : (
          <IoChevronDown className="h-4 w-4" />
        )}
      </div>

      {isOpen && (
        <div className="pl-4 space-y-2">
          {data?.items.map((item) => (
            <div key={item.id} className="mb-4">
              <Link
                href={item.path}
                className="text-[#666666] py-2 border-b border-[#CCCCCC] font-medium text-[18px]"
                key={item.id}
                onClick={onClick}
                style={{
                  color: pathname == item.path ? "#4DA6FF" : "",
                }}
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
