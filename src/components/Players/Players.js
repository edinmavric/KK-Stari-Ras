import './Players.css';
import { useEffect, useState } from 'react';

const Players = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="Players">
      <h1>Players</h1>
      {typeof backendData.players === 'undefined' ? (
        <p>Loading Players...</p>
      ) : (
        backendData.players.map((player, index) => <p key={index}>{player}</p>)
      )}
      {typeof backendData.points === 'undefined' ? (
        <p>Loading Points...</p>
      ) : (
        backendData.points.map((points, index) => <p key={index}>{points}</p>)
      )}
    </div>
  );
};

export default Players;
