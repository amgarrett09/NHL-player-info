import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

import '../css/stats.css';

const LastFiveGames = ({ id, position }) => {
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    setLoaded(false);
    try {
      const res = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=gameLog`,
      );
      const json = await res.json();

      const out = json.stats[0].splits.slice(0, 5);

      setGames(out);
      setLoaded(true);
    } catch (err) {
      setGames([]);
      setLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const skaterTable = (
    <div className="stat-card">
      <h2>Last Five Games</h2>
      <table>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>G</th>
            <th>A</th>
            <th>P</th>
            <th>+/-</th>
            <th>PIM</th>
            <th>PPG</th>
            <th>PPP</th>
            <th>SHG</th>
            <th>SHP</th>
            <th>GWG</th>
            <th>OTG</th>
            <th>S</th>
            <th>MIN</th>
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
    <div className="stat-card">
      <h2>Last Five Games</h2>
      <table>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>SA</th>
            <th>GA</th>
            <th>S</th>
            <th>Sv%</th>
            <th>MIN</th>
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
      {loaded && (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {springProps => (
            <div style={springProps}>
              {!isGoalie && skaterTable}
              {isGoalie && goalieTable}
            </div>
          )}
        </Spring>
      )}
    </React.Fragment>
  );
};

LastFiveGames.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default LastFiveGames;
