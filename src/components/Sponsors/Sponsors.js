import './Sponsors.css';
import novipazarLogo from './Images/grad-novi-pazar-logo.png';
import adidasLogo from './Images/adidas-logo.png';
import sportklubLogo from './Images/sportklub-logo.svg.png';
import eccoLogo from './Images/ecco-logo.webp';
import djulovicLogo from './Images/djulovic-logo.webp';
import numanovicLogo from './Images/numanovic-logo.png';
import barbosaLogo from './Images/barbosa-logo.png';
import fiziovracarLogo from './Images/fizio-vracar-logo.png';
import klettLogo from './Images/klett-logo.png';
import belmedicLogo from './Images/belmedic-logo.png';
import partizanLogo from './Images/partizan-logo.svg.png';

const Sponsors = () => {
  return (
    <div className="Sponsors">
      {/* 
            <a href="" target="_blank" rel="noreferrer"><img src={} alt='' height="" width="" /></a>
         */}
      <div className="Sponsors__first-line">
        <a href="https://www.novipazar.rs/" target="_blank" rel="noreferrer">
          <img src={novipazarLogo} alt="" height="160" width="150" />
        </a>
      </div>
      <div className="Sponsors__second-line">
        <a href="https://www.adidas.co.uk/" target="_blank" rel="noreferrer">
          <img src={adidasLogo} alt="" height="140" width="210" />
        </a>
        <a href="https://kkpartizan.rs/sr" target="_blank" rel="noreferrer">
          <img src={partizanLogo} alt="" height="200" width="140" />
        </a>
        <a href="https://sportklub.n1info.rs/" target="_blank" rel="noreferrer">
          <img src={sportklubLogo} alt="" height="140" width="200" />
        </a>
      </div>
      <div className="Sponsors__third-line">
        <a href="https://ecco.rs/" target="_blank" rel="noreferrer">
          <img src={eccoLogo} alt="" height="90" width="320" />
        </a>
        <a href="https://djulovic-ru.com/" target="_blank" rel="noreferrer">
          <img src={djulovicLogo} alt="" height="100" width="260" />
        </a>
      </div>
      <div className="Sponsors__fourth-line">
        <a href="https://www.numanovic.com/" target="_blank" rel="noreferrer">
          <img src={numanovicLogo} alt="" height="120" width="350" />
        </a>
      </div>
      <div className="Sponsors__fifth-line">
        <a href="https://barbosa.rs/" target="_blank" rel="noreferrer">
          <img src={barbosaLogo} alt="" height="100" width="420" />
        </a>
      </div>
      <div className="Sponsors__sixth-line">
        <a href="https://medisport.rs/" target="_blank" rel="noreferrer">
          <img src={fiziovracarLogo} alt="" height="160" width="160" />
        </a>
        <a href="https://www.belmedic.rs/" target="_blank" rel="noreferrer">
          <img src={belmedicLogo} alt="" height="80" width="200" />
        </a>
        <a href="https://klett.rs/" target="_blank" rel="noreferrer">
          <img src={klettLogo} alt="" height="100" width="200" />
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
