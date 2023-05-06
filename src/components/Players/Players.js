import './Players.css';
import { useEffect, useState } from 'react';

const Players = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setBackendData(data)
      });
  }, []);

  return (
    <div className="Players">
      <h1>Players</h1>
    {(typeof backendData.users === "undefined") ? (<p>Loading...</p>) : (backendData.users.map((user, key) => (<p key={key}>{user}</p>)))}
    </div>
  );
};

export default Players;
