import { z } from "zod";

export const ContactsFormSchemaFun = (t: (key: string) => string) => {
  return z.object({
    name: z.string().min(1, { message: t("contact.validation.name") }),
    phone: z.string().min(9, { message: t("contact.validation.phone") }),
    mail: z
      .string({ message: t("email.validation.email") })
      .email({ message: t("contact.validation.err_email") }),
    topic: z.string().min(1, { message: t("contact.validation.message") }),
    msg: z.string().min(1, { message: t("contact.validation.message") }),
  });
};
export const RegisterFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z
      .string({ message: t("register.validation.email") })
      .email({ message: t("register.validation.invalid_email") }),
    password: z.string({ message: t("register.validation.password") }),
  });
};

export const OTPSchema = z.object({
  otp: z.string().min(4, { message: "parolni tuliq kiriting" }),
});

export const LoginFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z
      .string({ message: t("register.validation.email") })
      .email({ message: t("register.validation.invalid_email") }),
    password: z.string({ message: t("login.validation.password") }),
  });
};
export const CommentFormSchema = (t: (key: string) => string) => {
  return z.object({
    text: z.string({ message: t("news.validation.commit") }),
  });
};
