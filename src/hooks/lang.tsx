import { useTranslation } from "react-i18next"

export const changeLanguage = (language : string) => {
    const {i18n} = useTranslation();
    i18n.changeLanguage(language);
    localStorage.setItem('lang', language)

}