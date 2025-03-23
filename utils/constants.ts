"use client";
import { Language } from "../types";
import { LoginFormSchema, RegisterFormSchema } from "@/lib/validation";

export const FooterList = [
  { label: "Biz Haqimizda", path: "/about" },
  { label: "Jamoa", path: "/team" },
  { label: "Bog’lanish", path: "/contact" },
  { label: "Online Shop", path: "/" },
  { label: "Premyera", path: "/" },
];

export const HomeBanner = {
  title: "homeBanner.title",
  img: "/imgs/home-hero.jpg",
  desc: `homeBanner.desc`,
};
export const teamBanner = {
  title: "So‘nggi Avtomobil Yangiliklari va Texnologiya Sharhlari",
  img: "/imgs/home-hero.jpg",
  desc: `Bizning platformamizda avtomobil yangiliklari, texnologik yangiliklar va elektr avtomobillar haqida eng so‘nggi ma'lumotlarni topishingiz mumkin. O‘zbekistonlik avtomobil ishqibozlari uchun yangiliklar, sharhlar va qo‘llanmalar – barchasi bir joyda!`,
};

export const AuthData = {
  register: {
    title: "register.title",
    desc: `register.desc`,
    checkbox: true,
    closebtn: true,
    form: {
      validate: RegisterFormSchema,
      inputs: [
        {
          id: "1",
          placeholder: "register.form.email_placeholder",
          label: "register.form.email_label",
          name: "email",
        },
        {
          id: "2",
          placeholder: "register.form.pass_placeholder",
          label: "register.form.pass_label",
          name: "password",
        },
      ],
    },
  },
  login: {
    title: "login.title",
    desc: `login.desc`,
    checkbox: false,
    closebtn: false,
    form: {
      validate: LoginFormSchema,
      inputs: [
        {
          id: "1",
          placeholder: "autoshop@gmail.com...",
          label: "register.form.email_label",
          name: "email",
        },
        {
          id: "2",
          placeholder: "********",
          label: "register.form.pass_label",
          name: "password",
        },
      ],
    },
  },
  forgetPassword: {
    title: "forgetPassword.title",
    desc: `forgetPassword.desc_forget`,
    checkbox: false,
    closebtn: true,
    form: {
      validate: RegisterFormSchema,
      inputs: [
        {
          id: "1",
          placeholder: "forgetPassword.input.email_placeholder",
          label: "forgetPassword.input.email",
          name: "email",
        },
      ],
    },
  },
};

export const languages: Language[] = [
  {
    code: "uz",
    name: "O'z",
    flag: "/uz.svg",
  },
  {
    code: "ru",
    name: "Ru",
    flag: "/ru.svg",
  },
  {
    code: "en",
    name: "En",
    flag: "/en.svg",
  },
];
