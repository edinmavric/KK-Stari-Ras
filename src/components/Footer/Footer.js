import './Footer.css';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023 | KK Stari Ras. All Rights Reserved.</p>
      <p>
        Dizajn i izrada sajta -{' '}
        <a
          id="Author-linkedin"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/edin-mavric-926116265/"
        >
          Edin
        </a>
        <span> </span>
        <a
          id="Author-github"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/edinmavric"
        >
          Mavric
        </a>
      </p>
      <div className="footer-icons__links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/kosarkaskiklub.stariras"
        >
          <AiOutlineFacebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kkstariras"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@DIGITALScore"
        >
          <AiOutlineYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
