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
        {player && (
          <div className="Modal__Content-header">
            <div className="Modal__Content-player-info">
              <h2>{player.jerseyNumber}</h2>
              <h3>
                <span>{player.firstName}</span>
                {player.surName}
              </h3>
            </div>
            <p>{player.position}</p>
          </div>
        )}
        <div className="Modal__Player-information">
          {player && (
            <img src={player.playerImage} alt="" height="380" width="300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
