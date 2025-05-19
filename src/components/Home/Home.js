import './Home.css';
import Game from './Game';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const tableContent = [
  '#',
  'Timovi',
  'G',
  'W',
  'L',
  'Ukupno koseva',
  '+/-',
  'Bodovi',
];

const properties = [
  'position',
  'team',
  'gamesPlayed',
  'wins',
  'losses',
  'pointsResults',
  'pointsPlusMinus',
  'pointsLeague',
];

const Home = () => {
  const [backendData, setBackendData] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    fetch('https://kk-stari-ras-server.onrender.com/home')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const activeButtonHandler = () => {
    setActive(true);
  };

  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Home__button-container">
        <button
          className={active ? 'active-button' : 'inactive-button'}
          onClick={activeButtonHandler}
        >
          2. MRL Zapad
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            {tableContent.map((content, index) => (
              <th key={index}>{content}</th>
            ))}
          </tr>
          {backendData.map((info, index) => (
            <tr key={index}>
              {properties.map((prop, index) => (
                <th key={index}>{info[prop]}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Game
        date="14. Kolo - Petak 10.02.2023"
        awayTeam="Goc"
        aFinalScore="40"
        aFirstQ="10"
        aSecondQ="10"
        aThirdQ="10"
        aFourthQ="10"
        hFinalScore="80"
        hFirstQ="20"
        hSecondQ="20"
        hThirdQ="20"
        hFourthQ="20"
        gym="OS Mesa Selimovic"
        referreNo1="Pavle Pavlovic(KV)"
        referreNo2="Milan Milanovic(RA)"
      />
      <Game
        date="13. Kolo - Petak 03.02.2023"
        awayTeam="Polet"
        aFinalScore="40"
        aFirstQ="10"
        aSecondQ="10"
        aThirdQ="10"
        aFourthQ="10"
        hFinalScore="80"
        hFirstQ="20"
        hSecondQ="20"
        hThirdQ="20"
        hFourthQ="20"
        gym="OS Mesa Selimovic"
        referreNo1="Pavle Pavlovic(KV)"
        referreNo2="Milan Milanovic(RA)"
      />
      <Game
        date="12. Kolo - Petak 27.01.2023"
        awayTeam="Trepca"
        aFinalScore="40"
        aFirstQ="10"
        aSecondQ="10"
        aThirdQ="10"
        aFourthQ="10"
        hFinalScore="80"
        hFirstQ="20"
        hSecondQ="20"
        hThirdQ="20"
        hFourthQ="20"
        gym="OS Mesa Selimovic"
        referreNo1="Pavle Pavlovic(KV)"
        referreNo2="Milan Milanovic(RA)"
      />
    </motion.div>
  );
};

export default Home;
