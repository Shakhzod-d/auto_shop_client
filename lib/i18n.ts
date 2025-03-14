import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LangueEn } from "../locale/en";
import { LangueUz } from "../locale/uz";
import { LangueRu } from "../locale/ru";


const resources = {
  en: { translation: LangueEn },
  uz: { translation: LangueUz },
  ru: { translation: LangueRu },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
