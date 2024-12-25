import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    az: {
        translation: {
            welcome: 'Xos gelmisiz',
            text: 'heyat bir gundu oda bugun',
            contact: 'elaqe',
            lahiye: 'lahiye',
            haqqimizda: 'haqqimizda',
            home: 'eses sehife',
            login: 'daxil ol'
        },
    },
    en: {
        translation: {
            welcome: 'welcome',
            text: 'Today is a day of a lifetime',
            contact: 'contact',
            lahiye: 'songs',
            haqqimizda: 'about us',
            home: 'home',
            login: 'login'
        },
    },
    ru: {
        translation: {
            welcome: 'привет',
            text: 'Сегодня день на всю жизнь',
            contact: 'ru kontakt',
            lahiye: 'песни',
            haqqimizda: 'о нас',
            home: 'дом',
            login: 'входить'

        },
    },
};

i18n.use(initReactI18next).init({
    lng: 'az',
    resources,
});

export default i18n;