import './Home.css';

const Game = ({
  date,
  awayTeam,
  hFinalScore,
  aFinalScore,
  hFirstQ,
  hSecondQ,
  hThirdQ,
  hFourthQ,
  aFirstQ,
  aSecondQ,
  aThirdQ,
  aFourthQ,
  gym,
  referreNo1,
  referreNo2,
}) => {
  return (
    <div className="Game">
      <table>
        <thead>
          <tr>{date}</tr>
        </thead>
        <tbody>
          <div className="Game__teams">
            <tr>
              <th>Timovi</th>
              <th>Rezultat</th>
              <th>1Q</th>
              <th>2Q</th>
              <th>3Q</th>
              <th>4Q</th>
            </tr>
            <tr className="Game__teams-home">
              <th>Ras</th>
              <th> {hFinalScore}</th>
              <th> {hFirstQ}</th>
              <th> {hSecondQ}</th>
              <th> {hThirdQ}</th>
              <th> {hFourthQ}</th>
            </tr>
            <tr className="Game__teams-away">
              <th>{awayTeam}</th>
              <th> {aFinalScore}</th>
              <th> {aFirstQ}</th>
              <th> {aSecondQ}</th>
              <th> {aThirdQ}</th>
              <th> {aFourthQ}</th>
            </tr>
            <tr className="Game__teams-gym">
              {gym} - Sudije: {referreNo1}, {referreNo2}
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Game;
