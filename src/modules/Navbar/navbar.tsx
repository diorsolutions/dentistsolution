import { useTranslation } from "react-i18next";
import "./style.css";
import logo from "../../assets/tooth.png";
import { Link } from "react-router-dom";
function Navbar() {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("lang") || "uz";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value;
    changeLanguage(selectedLang);
  };

  return (
    <nav>
      <div className="container navbar">
        <Link to={"/"} className="logo">
          <img className="logoPNG" src={logo} alt="Logotip" />
          <span className="logo">
            <span className="simple">Dental</span>
            <span className="blue" style={{ gap: "0px !important" }}>
              Pro
            </span>
          </span>
        </Link>
        <div className="navbar_actions">
          <ul>
            <li>
              <Link to={"/"}>{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to={"/services"}>{t("navbar.services")}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{t("navbar.contact")}</Link>
            </li>
          </ul>
          <select
            name="lang"
            id="lang"
            value={lang}
            onChange={handleLanguageChange}
          >
            <option value="uz">O'zbekcha</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
