import { useTranslation } from 'react-i18next';
import './style.css'

function Footer() {
  const {t} = useTranslation();
  return (
    <footer>
      <div className="container">
        <p>&copy; {t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}

export default Footer;