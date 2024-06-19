import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import it from "./languages/it.json";

const currentLang: string = navigator?.language?.split("-")[0];
// const currentLang: string = "";
// const languageStorage = localStorage.getItem("language");
// localStorage.setItem("language", currentLang);
// const languageStorage = localStorage.getItem("language");
// const currentLang: string =
//   localStorage.getItem("language") || navigator.language.split("-")[0] || "en";
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
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./languages/en.json";
// import it from "./languages/it.json";

// i18n
//   .use(initReactI18next) // usa initReactI18next per integrare i18n con React
//   .init({
//     resources: {
//       en: { translation: en }, // traduzioni per l'inglese
//       it: { translation: it }, // traduzioni per l'italiano
//     },
//     lng: "en", // lingua predefinita
//     fallbackLng: "en", // lingua di fallback nel caso in cui non sia disponibile la traduzione per la lingua corrente
//     interpolation: {
//       escapeValue: false, // evita la fuga dei valori durante l'interpolazione delle stringhe tradotte
//     },
//   });

// export default i18n;
