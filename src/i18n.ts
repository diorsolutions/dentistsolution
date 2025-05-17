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
            contact: 'Bog\'lanish',
            services: 'Xizmatlar',
          },
          test:'uzbekcha'
        }
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать!",
          login: "Войти",
          test:'ruscha'

        }
      },
      en: {
        translation: {
          welcome: "Welcome!",
          login: "Login",
          test:'inglizcha'
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