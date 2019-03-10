import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

const LastFiveGames = ({ id }) => {
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
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
  }, []);

  const skaterTable = (
    <React.Fragment>
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
            <th>FO%</th>
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
              <td>{game.stat.faceOffPct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {springProps => (
        <div style={springProps}>
          {loaded && games.length > 0 && skaterTable}
        </div>
      )}
    </Spring>
  );
};

LastFiveGames.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LastFiveGames;
