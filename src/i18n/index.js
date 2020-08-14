import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enLang from './resources/en';
import frLang from './resources/fr';

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
