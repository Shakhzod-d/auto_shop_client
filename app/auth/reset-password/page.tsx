"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "../components/header";
import Image from "next/image";

import { JSX, useEffect, useState } from "react";
import { setLocaleStorage } from "@/utils/locale-storage";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ResetPasswordFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { postItemsServ } from "@/services/items-serv";
import { errorToast } from "@/lib/toast";
import { ResetPassForm } from "@/types/auth.type";
import { Input } from "@/components/ui/input";
import { LuLockKeyhole } from "react-icons/lu";
import { Success } from "../components/success";
const API = process.env.NEXT_PUBLIC_API_URL;
export default function ResetPassword() {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const token = searchParams.get("token");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // 🔹 OnChange Validation

  const { mutate: mutationFun, isPending: loading } = useMutation({
    mutationFn: (obj: ResetPassForm) =>
      postItemsServ(`${API}/auth/reset-password`, obj),
    onSuccess: (data: any) => {
      if (data.status_code >= 200 && data.status_code < 400) {
        setIsSuccess(true);
      } else {
        const text =
          data.message == "Username or password incorrect!"
            ? t("login.validation.error")
            : data.message[0];
        errorToast(text);
        console.log({ err: data });
      }
    },

    onError: (err) => {
      console.log({ err });
    },
  });
  useEffect(() => {
    if (token) {
      setLocaleStorage("UserToken", token);
    }
  }, []);

  const formSchema = ResetPasswordFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirm_password: "",
      new_password: "",
    },
  });
  const { setError } = form;
  const onSubmit = (data: ResetPassForm) => {
    if (data.new_password !== data.confirm_password) {
      setError("confirm_password", {
        message: t("forgetPassword.validation.pass2"),
      });
    } else {
      mutationFun(data);
    }
  };

  const component: Record<string, JSX.Element> = {
    true: <Success variant="resetPassword" />,
    false: (
      <div className="container flex justify-between  flex-col  xl:flex-row ">
        <div>
          <div className="w-full max-w-[532px] mb-[35px]">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-4 flex items-center gap-3">
              {t("forgetPassword.title")}
              <LuLockKeyhole size={38} />
            </h1>
            <p className="text-[18px] lg:text-xl text-[#666666] font-lora">
              {t("forgetPassword.desc")}
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-8 "
            >
              <FormField
                control={form.control}
                // @ts-ignore
                name={"new_password"}
                render={({ field }) => (
                  <FormItem>
                    <label className="text-[#666666]">
                      {" "}
                      {t("forgetPassword.input.pass1Placeholder")}
                    </label>
                    <div className="  flex sm-xl:items-center sm-xl:gap-4  lg:w-[635px] flex-col sm-xl:flex-row">
                      <div>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                // @ts-ignore
                name={"confirm_password"}
                render={({ field }) => (
                  <FormItem>
                    <label className="text-[#666666]">
                      {t("forgetPassword.input.pass2Placeholder")}
                    </label>
                    <div className="  flex sm-xl:items-center sm-xl:gap-4  lg:w-[635px] flex-col sm-xl:flex-row">
                      <div>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex items-center w-full max-w-[378px] justify-between">
                <Button
                  type="submit"
                  className="w-[166px] h-[50px] bg-[#4DA6FF]"
                  disabled={loading}
                >
                  {loading && <Loader2 className="animate-spin" />}
                  {t("btn.submit")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="w-full flex justify-center mb-[50px] lg:m-0">
          <Image
            src={"/imgs/auth-bg.png"}
            alt="auth picture"
            width={570}
            height={450}
          />
        </div>
      </div>
    ),
  };
  return (
    <>
      <Header />
      {component[String(isSuccess)]}
    </>
  );
}
