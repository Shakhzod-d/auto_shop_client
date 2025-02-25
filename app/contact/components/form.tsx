"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  FormDescription,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Textarea } from "../../../components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  topic: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  msg: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function CustomForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      mail: "",
      topic: "",
      msg: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid   grid-cols-2 gap-8 mb-[48px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Ismingiz"
                    {...field}
                    className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Telefon raqamingiz"
                    {...field}
                    className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Elektron pochtangiz"
                    {...field}
                    className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Mavzu"
                    {...field}
                    className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Xabar"
                    className="min-h-[120px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-[166px] h-[50px] bg-[#4DA6FF]">
          Yuborish
        </Button>
      </form>
    </Form>
  );
}
