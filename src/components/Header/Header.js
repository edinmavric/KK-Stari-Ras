import './Header.css';
import HeaderList from './HeaderList';
import logo from './stariras.png';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      }

      if (
        scrollTop === 0 ||
        scrollTop === 1 ||
        scrollTop === 2 ||
        scrollTop === 3 ||
        scrollTop === 4 ||
        scrollTop === 5 ||
        scrollTop === 6 ||
        scrollTop === 7 ||
        scrollTop === 8 ||
        scrollTop === 9 ||
        scrollTop === 10 ||
        scrollTop === 11 ||
        scrollTop === 12 ||
        scrollTop === 13 ||
        (scrollTop === 14 && isScrolled)
      ) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav className={isScrolled ? 'header-scrolled' : ''}>
      <a target="_blank" rel="noreferrer" href="https://kkstariras.com/">
        <img alt="" src={logo} />
      </a>
      <div className="navigation-links">
        <ul>
          <li className="navigation-links__name">
            <b>KK Stari Ras</b>
          </li>
        </ul>
        <ul className="navigation-links__navs">
          <HeaderList link="/" listContent="Pocetak" />
          <HeaderList link="/gallery" listContent="Galerija" />
          <HeaderList link="/contact" listContent="Kontakt" />
          <HeaderList link="/about" listContent="O Nama" />
          <HeaderList link="/camp" listContent="Kamp" />
          <HeaderList link="/news" listContent="Vesti" />
          <HeaderList link="/players" listContent="Igraci" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
