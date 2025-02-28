import { z } from "zod";

export const ContactsFormSchema = z.object({
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

export const RegisterFormSchema = z.object({
  email: z.string().email({ message: "inter to form email" }),
  password: z.string({ message: "inter to password" }),
});

export const OTPSchema = z.object({
  otp: z.string().min(4, { message: "parolni tuliq kiriting" }),
});
