import './Camp.css';
import mainImage from './Images/kk-stari-ras-main-img.jpg';
import imageOne from './Images/kk-stari-ras-second-img.jpg';
import imageTwo from './Images/kk-stari-ras-third-img.jpg';
import imageThree from './Images/kk-stari-ras-fourth-img.jpg';
import imageFour from './Images/kk-stari-ras-fifth-img.jpg';
import imageFive from './Images/kk-stari-ras-sixth-img.jpg';
import imageSix from './Images/kk-stari-ras-seventh-img.jpg';
import { motion } from 'framer-motion';

const Camp = () => {
  return (
    <motion.div
      className="Camp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Camp__Container">
        <div className="Camp__Header">
          <h1>LETNJI KAMP KK STARI RAS/BASKETBALL CAMP ACADEMY</h1>
        </div>
        <div className="Camp__main-image">
          <img src={mainImage} alt="" height="10%" width="55%" />
        </div>
        <div className="Camp__text">
          <p>
            Letnji kamp "Basketball Academy" se i na leto 2023. godine održava
            na Zlatiboru, i to tokom sredine Avgusta. Dečaci uzrasta od 7 do 18
            godina, ali i devojčice uzrasta od 7 do 12 godina, mogu da treniraju
            i stiču košarkaško znanje od nasih trenera, a sve po precizno
            kreiranom programu rada omladinske škole KK Stari Ras.
          </p>
          <p>
            Glavni koordinatori kampa, treneri Uros Petrovic i Fahrudin
            Djulovic, i ove godine će vršiti nadzor svih sportskih aktivnosti na
            kampu, a u ponudi je i program individualnog rada sa trenerom
            Djulovicem, namenjen mladim igračima uzrasta od 16 do 18 godina.
            Pored vrhunskih trenera koji će sa decom raditi na poboljšanju
            njihovih košarkaških veština, obezbeđen je i stručan nadzor lekara,
            fizioterapeuta, kao i rad sa kondicionim trenerima u cilju
            poboljšanja motoričkih i fizičkih sposobnosti dece.
          </p>
          <p>
            Pored treninga koji se održavaju dva puta dnevno, polaznike kampa
            čeka i bogat zabavni sadržaj, gde će učestvovati u mnogim
            takmičenjima i edukativnim radionicama. Cilj kampa je i da provedemo
            kvalitetno vreme u prirodi i na svežem vazduhu, pa ćemo tokom
            boravka na Zlatiboru kroz izlete obići lokalne kulturno-istorijske
            znamenitosti i bliže se upoznati sa lepotama ovog kraja.
          </p>
          <strong>TERMINI</strong>
          <p>11.08.2023 - 18.08.2023</p>
          <strong>CENE I POPUSTI</strong>
          <p>
            <strong>Standardni program</strong>(8 dana/7 noćenja, pun pansion i
            prevoz): 30.000 dinara
          </p>
          <p>
            <strong>Program individualnog rada sa Fahrudinom Djulovicem</strong>
            (8 dana/7 noćenja, pun pansion i prevoz): 60.000 dinara
          </p>
          <div className="Camp__no-margin">
            <p>Sopstveni prevoz - 1.000 dinara popusta</p>
            <p>Cena za dva deteta iz iste porodice: 55.000 dinara</p>
            <p>Cena za tri deteta iz iste porodice: 75.000 dinara</p>
            <p>Posebne pogodnosti za grupne prijave</p>
            <p>Plaćanje na rate do polaska</p>
          </div>
          <p>
            <strong>INFORMACIJE I PRIJAVE:</strong> kkstariras@yahoo.com , +381
            66 9595 959
          </p>
        </div>
        <div className="Camp__info-images">
          <img src={imageOne} alt="" width="90%" height="30%" />
          <img src={imageTwo} alt="" width="90%" height="30%" />
          <img src={imageThree} alt="" width="90%" height="30%" />
          <img src={imageFour} alt="" width="90%" height="30%" />
          <img src={imageFive} alt="" width="90%" height="30%" />
          <img src={imageSix} alt="" width="90%" height="30%" />
        </div>
      </div>
    </motion.div>
  );
};

export default Camp;
