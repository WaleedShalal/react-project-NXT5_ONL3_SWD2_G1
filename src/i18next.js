import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAR from "./locales/ar/translation-ar.json";
import translationEN from "./locales/en/translation-en.json";

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN },
};

const i18nextLng = localStorage.getItem("i18nextLng");
console.log("🚀 ~ i18nextLng:", i18nextLng);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: false,
    lng: i18nextLng || "ar",
    fallbackLng: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
});

document.documentElement.lang = i18nextLng;
document.documentElement.dir = i18nextLng === "ar" ? "rtl" : "ltr";

export default i18n;
