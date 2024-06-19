import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import it from "./languages/it.json";
import { useSelector } from "react-redux";
import { ReduxStore } from "../redux/types";

export const InitializeI18n = () => {
  const currentLang = useSelector((state: ReduxStore) => state.lang);
  console.log(currentLang);
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

  return i18n;
};

// export default InitializeI18n();
