import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

export const GmailInput = () => {
  return (
    <div className="w-full bg-[#E9F4FF] p-[50px] flex flex-col justify-center items-center">
      <h2 className="text-[36px] font-bold mb-8">
        Yangiliklardan Xabardor Bo‘ling
      </h2>
      <div className="flex">
        <Input
          className="w-[570px] rounded-r-none h-[54px] bg-[#FFFFFF] border border-[#DDDDDD] border-r-0 placeholder:text-[15px] text-[#666666]"
          placeholder="Elektron pochtangiz"
        />
        <Button className="h-[54px] bg-[#4DA6FF] py-4 font-semibold px-[31px] rounded-s-none ">
          Jo’natish <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};
