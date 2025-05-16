// src/components/Navbar.tsx
import '../styles/home.css'; // Agar stillaringiz bo'lsa
import { Link } from 'react-router-dom';


function Navbar() {

  return (
   <>
    <div className="header_main_menu p03 block_bg">
      <div className="logo_ct_container">
        <h3>Logo Place here</h3>
      </div>
      <nav>
      <ul>
        <li>
          <Link className='nav_links' to="/">Bosh sahifa</Link>
        </li>
        <li>
          <Link className='nav_links' to="/services">Xizmatlar</Link>
        </li>
        <li>
          <Link className='nav_links' to="/contact">Aloqa</Link>
        </li>
      </ul>
    </nav>
    </div>
   </>
  );
}

export default Navbar;