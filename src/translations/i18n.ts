import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import it from "./languages/it.json";

const currentLang: string = localStorage.getItem("language") ?? "en";

i18n.use(initReactI18next).init({
  resources: {
    en,
    it,
  },

  lng: currentLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
