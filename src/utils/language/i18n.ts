import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from "./translations/en";
import { sq } from "./translations/sq";

i18n.use(initReactI18next)
    .init({
        resources: { en, sq },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;