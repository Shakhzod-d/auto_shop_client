"use client";

import Image from "next/image";
import { Header } from "./components/header";

import { Register } from "./components/register";
import { Success } from "./components/success";
import { useAuth } from "../../store/auth-store";
import { Login } from "./components/login";

export default function Auth() {
  const { success, successType, authType } = useAuth();
  return (
    <>
      <Header />
      {success ? (
        <Success variant={successType} />
      ) : (
        <div className="container flex justify-between  flex-col  xl:flex-row ">
          {authType == "register" ? <Register /> : <Login />}
          <div className="w-full flex justify-center mb-[50px] lg:m-0">
            <Image
              src={"/imgs/auth-bg.png"}
              alt="auth picture"
              width={570}
              height={450}
            />
          </div>
        </div>
      )}
    </>
  );
}
