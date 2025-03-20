"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "../components/header";
import Image from "next/image";
import { AuthForm } from "../components/auth-form";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <p>Invalid or missing token.</p>;
  }

  const onSubmit = () => {};

  return (
    <>
      <Header />
      <div className="container flex justify-between  flex-col  xl:flex-row ">
        <AuthForm variant="resetPassword" onSubmit={onSubmit} loading={false} />
        <div className="w-full flex justify-center mb-[50px] lg:m-0">
          <Image
            src={"/imgs/auth-bg.png"}
            alt="auth picture"
            width={570}
            height={450}
          />
        </div>
      </div>
    </>
  );
}
