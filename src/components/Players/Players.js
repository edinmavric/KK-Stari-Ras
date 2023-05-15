import './Players.css';
import { useEffect, useState } from 'react';

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
  const [backendData, setBackendData] = useState([]);
  const [active, setActive] = useState(true);

  content = active
    ? backendData.filter(player => player.active === true)
    : backendData.filter(player => player.active === false);

  useEffect(() => {
    fetch('/players')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
        setBackendData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const activeButtonHandler = () => {
    setActive(true);
  };
  const inactiveButtonHandler = () => {
    setActive(false);
  };

  return (
    <div className="Players">
      <div className="Players__button-container">
        <button
          className={active ? 'active-button' : 'inactive-button'}
          onClick={activeButtonHandler}
        >
          Active Players
        </button>
        <button
          className={!active ? 'active-button' : 'inactive-button'}
          onClick={inactiveButtonHandler}
        >
          Inactive Players
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            {tableContent.map((content, index) => (
              <th key={index}>{content}</th>
            ))}
          </tr>
          {content.map((players, index) => (
            <tr key={index}>
              {properties.map((prop, index) => (
                <th key={index}>
                  {players[prop]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
