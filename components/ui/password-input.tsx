"use client";
import { MdOutlineLock } from "react-icons/md";

export const PasswordInput = () => {
  return (
    <div className=" border  w-[400px] h-[52px] px-4 flex items-center gap-1 border-[#DDDDDD] rounded-sm">
      <input type="password" className="outline-none  w-full" />
      <MdOutlineLock size={20} color="#666666" />
    </div>
  );
};
