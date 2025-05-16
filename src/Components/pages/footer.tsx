// src/components/Footer.tsx
import '..//styles/footer.css'; // Agar stillaringiz bo'lsa

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sizning Loyiha Nomingiz. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}

export default Footer;