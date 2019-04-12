import React from 'react';
import PropTypes from 'prop-types';

const LastFiveGames = ({ position, games }) => {
  const skaterTable = (
    <div className="box">
      <h2 className="title is-2">Last Five Games</h2>
      <table className="table is-fullwidth is-narrow">
        <thead>
          <tr>
            <th>Opponent</th>
            <th><abbr title="Goals">G</abbr></th>
            <th><abbr title="Assists">A</abbr></th>
            <th><abbr title="Points">P</abbr></th>
            <th><abbr title="Plus / Minus">+/-</abbr></th>
            <th><abbr title="Penalty in Minutes">PIM</abbr></th>
            <th><abbr title="Powerplay Goals">PPG</abbr></th>
            <th><abbr title="Powerplay Points">PPP</abbr></th>
            <th><abbr title="Shorthanded Goals">SHG</abbr></th>
            <th><abbr title="Shorthanded Points">SHP</abbr></th>
            <th><abbr title="Game Winning Goals">GWG</abbr></th>
            <th><abbr title="Overtime Goals">OTG</abbr></th>
            <th><abbr title="Shots">S</abbr></th>
            <th><abbr title="Minutes">MIN</abbr></th>
          </tr>
        </thead>

        <tbody>
          {games.map((game, i) => (
            <tr key={game.opponent.name + i.toString()}>
              <td>{game.opponent.name}</td>
              <td>{game.stat.goals}</td>
              <td>{game.stat.assists}</td>
              <td>{game.stat.points}</td>
              <td>{game.stat.plusMinus}</td>
              <td>{game.stat.penaltyMinutes}</td>
              <td>{game.stat.powerPlayGoals}</td>
              <td>{game.stat.powerPlayPoints}</td>
              <td>{game.stat.shortHandedGoals}</td>
              <td>{game.stat.shortHandedPoints}</td>
              <td>{game.stat.gameWinningGoals}</td>
              <td>{game.stat.overTimeGoals}</td>
              <td>{game.stat.shots}</td>
              <td>{game.stat.timeOnIce}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const goalieTable = (
    <div className="box">
      <h2 className="title is-2">Last Five Games</h2>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Opponent</th>
            <th><abbr title="Shots Against">SA</abbr></th>
            <th><abbr title="Goals Against">GA</abbr></th>
            <th><abbr title="Saves">S</abbr></th>
            <th><abbr title="Save Percentage">S%</abbr></th>
            <th><abbr title="Minutes">MIN</abbr></th>
          </tr>
        </thead>

        <tbody>
          {games.map((game, i) => (
            <tr key={game.opponent.name + i.toString()}>
              <td>{game.opponent.name}</td>
              <td>{game.stat.shotsAgainst}</td>
              <td>{game.stat.goalsAgainst}</td>
              <td>{game.stat.saves}</td>
              <td>{game.stat.savePercentage}</td>
              <td>{game.stat.timeOnIce}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const isGoalie = position === 'Goalie';

  return (
    <React.Fragment>
      {!isGoalie && skaterTable}
      {isGoalie && goalieTable}
    </React.Fragment>
  );
};

LastFiveGames.propTypes = {
  position: PropTypes.string.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape({
    season: PropTypes.string,
  })).isRequired,
};

export default LastFiveGames;
