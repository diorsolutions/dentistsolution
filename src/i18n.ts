import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLanguage = localStorage.getItem('lang') || 'uz'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          navbar: {
            home: 'Bosh sahifa',
            about: 'Biz haqimizda',
            contact: "Bog'lanish",
            services: 'Xizmatlar',
          },
          footer: {
            copyright: "{{year}} yil. Barcha huquqlar himoyalangan",
          }
        }
      },
      ru: {
        translation: {
          navbar: {
            home: 'Главная',
            about: 'О нас',
            contact: 'Контакты',
            services: 'Услуги',
          },
          footer: {
            copyright: "{{year}} год. Все права защищены",
          }
        }
      },
      en: {
        translation: {
          navbar: {
            home: 'Home',
            about: 'About Us',
            contact: 'Contact',
            services: 'Services',
          },
          footer: {
            copyright: "{{year}} year. All rights reserved",
          }
        }
      }
    },
    lng: savedLanguage,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n