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
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Players">
      <table>
        <tbody>
          <tr>
            {tableContent.map((content, index) => (
              <th key={index}>{content}</th>
            ))}
          </tr>
          {backendData.map((player, index) => (
            <tr key={index}>
              {properties.map((prop, index) => (
                <th key={index}>{player[prop]}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
