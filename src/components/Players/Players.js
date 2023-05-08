import './Players.css';
import { useEffect, useState } from 'react';

const Players = () => {
  const [backendData, setBackendData] = useState([{}]);

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
            <th>Number</th>
            {typeof backendData.jerseyNumber === 'undefined' ? (
              <th>Loading Numbers...</th>
            ) : (
              backendData.jerseyNumber.map((number, index) => (
                <th key={index}>{number}</th>
              ))
            )}
          </tr>
          <tr>
            <th>Players</th>
            {typeof backendData.players === 'undefined' ? (
              <th>Loading Players...</th>
            ) : (
              backendData.players.map((player, index) => (
                <th key={index}>{player}</th>
              ))
            )}
          </tr>
          <tr>
            <th>Positions</th>
            {typeof backendData.position === 'undefined' ? (
              <th>Loading Positions...</th>
            ) : (
              backendData.position.map((pos, index) => (
                <th key={index}>{pos}</th>
              ))
            )}
          </tr>
          <tr>
            <th>Height</th>
            {typeof backendData.height === 'undefined' ? (
              <th>Loading Players Height...</th>
            ) : (
              backendData.height.map((height, index) => (
                <th key={index}>{height}</th>
              ))
            )}
          </tr>
          <tr>
            <th>Weight</th>
            {typeof backendData.weight === 'undefined' ? (
              <th>Loading Players Weight...</th>
            ) : (
              backendData.weight.map((weight, index) => (
                <th key={index}>{weight}</th>
              ))
            )}
          </tr>
          {/* <tr><th>Statistics</th></tr> */}
          <tr className='Players-table__stats'>
            <th>PPG</th>
            {typeof backendData.points === 'undefined' ? (
              <th>Loading PPG...</th>
            ) : (
              backendData.points.map((points, index) => (
                <th key={index}>{points}</th>
              ))
            )}
          </tr>
          <tr>
            <th>APG</th>
            {typeof backendData.points === 'undefined' ? (
              <th>Loading APG...</th>
            ) : (
              backendData.assists.map((assists, index) => (
                <th key={index}>{assists}</th>
              ))
            )}
          </tr>
          <tr>
            <th>RPG</th>
            {typeof backendData.points === 'undefined' ? (
              <th>Loading RPG...</th>
            ) : (
              backendData.rebounds.map((rebounds, index) => (
                <th key={index}>{rebounds}</th>
              ))
            )}
          </tr>
          {/* <tr>
            <th>Activity</th>
            {typeof backendData.playing.active === true
              ? backendData.playing.active.map((ac, index) => (
                  <th key={index}>{ac} Active</th>
                ))
              : backendData.playing.active.map((ac, index) => (
                  <th key={index}>{ac} Injured</th>
                ))}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
