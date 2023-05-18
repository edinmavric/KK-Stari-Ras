import './Players.css';

const Modal = ({ player, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          X
        </span>
        <h2>Player Details</h2>
        <div className='Modal__Player-information'>
          {player && (
            <img src={player.playerImage} alt="" height="120" width="100" />
          )}
          {player && (
            <div>
              <p>Name: {player.name}</p>
              <p>Jersey Number: {player.jerseyNumber}</p>
              <p>Position: {player.position}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
