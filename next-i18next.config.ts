/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"], // Qo'llab-quvvatlanadigan tillar
  },
  reloadOnPrerender: process.env.NODE_ENV === "development", // Hot reload ishlashi uchun
};

module.exports = i18nConfig;
