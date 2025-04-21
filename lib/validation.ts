import { z } from "zod";

export const ContactsFormSchemaFun = (t: (key: string) => string) => {
  return z.object({
    name: z.string().min(1, { message: t("contact.validation.name") }),
    phone_number: z.string().min(9, { message: t("contact.validation.phone") }),
    email: z
      .string({ message: t("email.validation.email") })
      .email({ message: t("contact.validation.err_email") }),
    title: z.string().min(1, { message: t("contact.validation.topic") }),
    message: z.string().min(1, { message: t("contact.validation.msg") }),
  });
};
export const RegisterFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z
      .string({ message: t("register.validation.email") })
      .email({ message: t("register.validation.invalid_email") }),
    password: z
      .string({ message: t("register.validation.password") })
      .min(6, { message: t("register.validation.password_invalid") }),
  });
};
export const ForgetPassFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z
      .string({ message: t("register.validation.email") })
      .email({ message: t("register.validation.invalid_email") }),
  });
};
export const ResetPasswordFormSchema = (t: (key: string) => string) => {
  return z.object({
    new_password: z
      .string({ message: t("forgetPassword.validation.pass1") })
      .min(3, { message: t("forgetPassword.validation.pass1") }),
    confirm_password: z
      .string({ message: t("forgetPassword.validation.pass2") })
      .min(3, t("forgetPassword.validation.pass2")),
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
    text: z.string().min(1, { message: t("news.validation.commit") }),
  });
};
