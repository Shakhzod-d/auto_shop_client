"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { FormVariant } from "@/types/auth.type";
import { useTranslation } from "react-i18next";
interface Props {
  variant: "register" | "resetPassword" | "login" | "forgetPassword";
}
export const Success = ({ variant }: Props) => {
  const navigate = useRouter();
  const { t } = useTranslation();

  const changeBtn = async () => {
    await navigate.push("/");
  };

  const successText: Record<FormVariant | "resetPassword", string> = {
    register: "success.register",
    forgetPassword: "success.forgetPassword",
    resetPassword: "success.resetPassword",
    login: "",
  };
  return (
    <div className="container flex flex-col items-center justify-center gap-8 w-full">
      <Image
        src={"/imgs/success.png"}
        alt="success-logo"
        width={200}
        height={200}
        className="w-[100px] h-[100px] sm:h-[200px] sm:w-[200px]"
      />
      <h3 className="text-[25px]  sm:text-[36px] font-bold w-full max-w-[787px] text-center">
        {t(successText[variant])}
      </h3>
      <Button className="w-[200px] h-[60px] bg-[#4DA6FF]" onClick={changeBtn}>
        {t("btn.home")}
      </Button>
    </div>
  );
};
