"use client";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

export const GmailInput = () => {
  return (
    <div className="w-full bg-[#E9F4FF] py-[50px] sm:p-[50px]">
      <div className="container flex flex-col  sm:justify-center sm:items-center">
        <h2 className=" text-[36px] lg:text-4xl  font-bold mb-8 font-merriweather">
          Yangiliklardan Xabardor Bo‘ling
        </h2>
        <div className="flex">
          <Input
            type="email"
            className="w-[260px] sm:w-[430px]  lg:w-[550px] rounded-r-none h-[54px] bg-[#FFFFFF] border border-[#DDDDDD] border-r-0 placeholder:text-[15px] text-[#666666]"
            placeholder="Elektron pochtangiz"
          />
          <Button className="h-[54px] bg-[#4DA6FF] py-4 font-semibold px-6 lg:px-[31px] rounded-s-none ">
            Jo’natish <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};
