import './Header.css';
import HeaderList from './HeaderList';
import logo from './stariras.png';

const Header = () => {
  return (
    <nav>
      <a target="_blank" rel="noreferrer" href="https://kkstariras.com/">
        <img alt="" src={logo} />
      </a>
      <div className="navigation-links">
        <ul>
          <li className="navigation-links__name">KK Stari Ras</li>
        </ul>
        <ul className="navigation-links__navs">
          <HeaderList link="/" listContent="Pocetak" />
          <HeaderList link="/gallery" listContent="Galerija" />
          <HeaderList link="/contact" listContent="Kontakt" />
          <HeaderList link="/about" listContent="O Nama" />
          <HeaderList link="/history" listContent="Istorija" />
          <HeaderList link="/news" listContent="Vesti" />
          <HeaderList link="/players" listContent="Igraci" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
