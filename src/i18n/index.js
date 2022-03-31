import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import vn from './locales/vn/translation.json';
import en from './locales/en/translation.json';
i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {vn, en},
    lng: 'vn',
    fallbackLng: 'vn',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
