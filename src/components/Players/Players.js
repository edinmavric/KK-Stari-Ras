import './Players.css';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

const tableContent = [
  'Dres#',
  'Ime Igraca',
  'Pozicija',
  'Visina',
  'Tezina',
  'PPG',
  'APG',
  'RPG',
];

const properties = [
  'jerseyNumber',
  'name',
  'position',
  'height',
  'weight',
  'points',
  'assists',
  'rebounds',
];

const Players = () => {
  let content;
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [backendData, setBackendData] = useState([]);
  const [active, setActive] = useState(true);

  content = active
    ? backendData.filter(player => player.active === true)
    : backendData.filter(player => player.active === false);

  useEffect(() => {
    fetch('https://kk-stari-ras-server.onrender.com/players')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.jerseyNumber - b.jerseyNumber);
        setBackendData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleRowClick = player => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const activeButtonHandler = () => {
    setActive(true);
  };
  const inactiveButtonHandler = () => {
    setActive(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalOpen]);

  return (
    <motion.div
      className="Players"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Players__button-container">
        <button
          className={active ? 'active-button' : 'inactive-button'}
          onClick={activeButtonHandler}
        >
          Aktivni Igraci
        </button>
        <button
          className={!active ? 'active-button' : 'inactive-button'}
          onClick={inactiveButtonHandler}
        >
          Inaktivni Igraci
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            {tableContent.map((content, index) => (
              <th key={index}>{content}</th>
            ))}
          </tr>
          {content.map((player, index) => (
            <tr key={index} onClick={() => handleRowClick(player)}>
              {properties.map((prop, index) => (
                <th key={index}>{player[prop]}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <Modal player={selectedPlayer} closeModal={() => setModalOpen(false)} />
      )}
    </motion.div>
  );
};

export default Players;
