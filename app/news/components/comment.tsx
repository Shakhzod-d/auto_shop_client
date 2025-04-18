"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { errorToast, successToast } from "@/lib/toast";
import { CommentFormSchema } from "@/lib/validation";
import { postItemsServ } from "@/services/items-serv";
import { getLocaleStorage } from "@/utils/locale-storage";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
const API = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  id: string;
  comment: number | undefined;
}
export const Comment = ({ id, comment }: Props) => {
  const navigate = useRouter();
  const { t } = useTranslation();
  const token = getLocaleStorage("userToken");
  const formSchema = CommentFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const { mutate: commentFun, isPending: loading } = useMutation({
    mutationFn: (obj: { text: string; news_id: string }) =>
      postItemsServ(`${API}/comment`, obj),
    onSuccess: (data: any) => {
      if (data.status_code >= 200 && data.status_code < 400) {
        successToast(t("login.validation.success"));
        form.reset();
      }
      if (data.status_code == 401) {
        errorToast(t("news.validation.auth"));
      }
    },
    onError: (err) => {
      errorToast(err.message || "Something went wrong");
    },
  });
  const onSubmit = (data: { text: string }) => {
    console.log(data);
    commentFun({ text: data.text, news_id: id });
  };

  return (
    <div className="px-6 sm:px-[50px] py-5 bg-[#F8F8F8] w-full max-w-[670px] rounded-sm">
      <div className="flex justify-between items-center mb-8">
        <span className="flex items-center gap-1 sm:gap-[10px] text-[15px] sm:text-[17px] font-lora">
          <Image
            src="/msg.svg"
            alt=""
            width={25}
            height={25}
            className="w-5 sm:w-[25px]"
          />
          {comment ? comment : 0} {t("news.commit")}
        </span>
        {token?.length == 0 && (
          <Button
            className="py-[12px]     w-[130px]  h-10 md:w-[142px] md:h-11 bg-[#4DA6FF] rounded-md text-white font-semibold "
            onClick={() => navigate.push("/auth")}
          >
            {t("btn.entrance")}
          </Button>
        )}
      </div>
      <p className="text-[21px] font-medium mb-4">
        {t("news.validation.commit")}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 "
        >
          <FormField
            control={form.control}
            // @ts-ignore
            name={"text"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full h-[180px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666] bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="py-[12px]     w-[160px]  h-10 md:w-[142px] md:h-11 bg-[#4DA6FF] rounded-md text-white font-semibold"
            type="submit"
          >
            {loading ? <Loader2 className="animate-spin" /> : t("btn.send")}
          </Button>
        </form>
      </Form>
    </div>
  );
};
