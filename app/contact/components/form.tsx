"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Textarea } from "../../../components/ui/textarea";
import { useTranslation } from "react-i18next";
import { ContactsFormSchemaFun } from "@/lib/validation";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/lib/toast";
import { postItemsServ } from "@/services/items-serv";
import { ContactForm } from "@/types";
import { Loader2Icon } from "lucide-react";
const API = process.env.NEXT_PUBLIC_API_URL;
export function CustomForm() {
  const { mutate: contactFun, isPending: loading } = useMutation({
    mutationFn: (obj: ContactForm) => postItemsServ(`${API}/contact`, obj),
    onSuccess: (data: any) => {
      if (data.status_code >= 200 && data.status_code < 400) {
        successToast(t("login.validation.success"));
        form.reset();
      }
      if (data.status_code == 401) {
        errorToast(t("news.validation.auth"));
      }
      if (data.status_code == 422) {
        errorToast(data.message[0]);
      }
    },
    onError: (err) => {
      errorToast(err.message || "Something went wrong");
    },
  });
  const { t } = useTranslation();
  const ContactsFormSchema = ContactsFormSchemaFun(t);
  const form = useForm<z.infer<typeof ContactsFormSchema>>({
    resolver: zodResolver(ContactsFormSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      title: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof ContactsFormSchema>) {
    contactFun(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="w-full  grid  grid-cols-1 tablet-max:grid-cols-2 gap-8 mb-8 sm:mb-10 tablet-max:mb-[48px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contact.input.name")}
                    {...field}
                    className="w-full max-w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contact.input.phone")}
                    {...field}
                    className="w-full max-w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contact.input.email")}
                    {...field}
                    className="w-full max-w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contact.input.topic")}
                    {...field}
                    className="w-full max-w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={t("contact.input.msg")}
                    className="min-h-[120px] max-w-[400px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="sm:w-[166px] sm:h-[50px] bg-[#4DA6FF]">
          {loading && <Loader2Icon />}
          {t("btn.send")}
        </Button>
      </form>
    </Form>
  );
}
