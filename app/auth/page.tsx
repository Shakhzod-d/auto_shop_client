"use client";

import Image from "next/image";
import { Header } from "./components/header";

import { Register } from "./components/register";
import { Success } from "./components/success";
import { useAuth } from "../../store/auth-store";
import { Login } from "./components/login";
import { JSX } from "react";

export default function Auth() {
  const { success, successType, authType } = useAuth();
  const obj: Record<string, JSX.Element> = {
    true: <Success variant={successType} />,
    false: (
      <div className="container flex justify-between  flex-col  xl:flex-row ">
        {authType == "register" ? <Register /> : <Login />}
        <div className="w-full flex justify-center mb-[50px] lg:m-0">
          <Image
            src={"/imgs/auth-bg.png"}
            alt="auth picture"
            width={570}
            height={450}
            className="w-full h-full object-cover lg:object-contain lg:w-[570px] lg:h-[450px]"
          />
        </div>
      </div>
    ),
  };
  return (
    <>
      <Header />
      {obj[String(success)]}
    </>
  );
}
