import './Players.css';
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ player, closeModal }) => {
  const backdropClickHandler = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="Modal" onClick={backdropClickHandler}>
      <div className="Modal__Content">
        <span className="close" onClick={closeModal}>
          <AiOutlineClose />
        </span>
        <h2>Detalji igraca</h2>
        <div className="Modal__Player-information">
          {player && (
            <img src={player.playerImage} alt="" height="260" width="200" />
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
