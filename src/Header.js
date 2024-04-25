import logo from './oil-lamp.png';
import './index.css';

function Header() {
  return (
    <div>
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <ul className="Header-list">
          <li className="Header-item"><a href="#about" className="Header-link">О нас</a></li>
          <li className="Header-item"><a href="#gallery" className="Header-link">Галерея</a></li>
          <li className="Header-item"><a href="#contacts" className="Header-link">Контакты</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
