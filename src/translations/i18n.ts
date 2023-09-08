import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.json'
import it from './languages/it.json'

// get current language at init of the app
const currentLang: string = navigator?.language?.split('-')[0]

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            it
        },
        lng: currentLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;