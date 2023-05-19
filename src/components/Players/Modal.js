import './Players.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Modal = ({ player, closeModal }) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(closeModal, 300);
  };

  const backdropClickHandler = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div
      className={`Modal ${open ? 'open' : ''} ${closing ? 'closing' : ''}`}
      onClick={backdropClickHandler}
    >
      <div className={`Modal__Content ${closing ? 'closing' : ''}`}>
        <span className="close" onClick={handleCloseModal}>
          <AiOutlineClose />
        </span>
        <h2>Detalji igraca</h2>
        <div className="Modal__Player-information">
          {player && (
            <img src={player.playerImage} alt="" height="260" width="220" />
          )}
          {player && (
            <div>
              <p>Ime: {player.name}</p>
              <p>Broj dresa: {player.jerseyNumber}</p>
              <p>Pozicija: {player.position}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
