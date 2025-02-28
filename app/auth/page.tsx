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
        <div className="container flex justify-between items-center">
          {authType == "register" ? <Register /> : <Login />}
          <Image
            src={"/imgs/auth-bg.png"}
            alt="auth picture"
            width={570}
            height={450}
          />
        </div>
      )}
    </>
  );
}
