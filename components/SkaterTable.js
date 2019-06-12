import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import convertSeason from '../lib/convert-season';
import teamAbbreviations from '../constants/constants';

const sortingFunctions = {
  Season(a, b) {
    return a.season - b.season;
  },
  GP(a, b) {
    return b.stat.games - a.stat.games;
  },
  G(a, b) {
    return b.stat.goals - a.stat.goals;
  },
  A(a, b) {
    return b.stat.assists - a.stat.assists;
  },
  P(a, b) {
    return b.stat.points - a.stat.points;
  },
  // eslint-disable-next-line func-names
  '+/-': function (a, b) {
    return b.stat.plusMinus - a.stat.plusMinus;
  },
  PIM(a, b) {
    return b.stat.pim - a.stat.pim;
  },
  PPG(a, b) {
    return b.stat.powerPlayGoals - a.stat.powerPlayGoals;
  },
  PPP(a, b) {
    return b.stat.powerPlayPoints - a.stat.powerPlayPoints;
  },
  SHG(a, b) {
    return b.stat.shortHandedGoals - a.stat.shortHandedGoals;
  },
  SHP(a, b) {
    return b.stat.shortHandedPoints - a.stat.shortHandedPoints;
  },
  GWG(a, b) {
    return b.stat.gameWinningGoals - a.stat.gameWinningGoals;
  },
  OTG(a, b) {
    return b.stat.overTimeGoals - a.stat.overTimeGoals;
  },
  S(a, b) {
    return b.stat.shots - a.stat.shots;
  },
  // eslint-disable-next-line func-names
  'S%': function (a, b) {
    return b.stat.shotPct - a.stat.shotPct;
  },
};

const SkaterTable = ({ stats, career }) => {
  const [sortedStats, setSortedStats] = useState(stats);
  const [currentlySorted, setCurrentlySorted] = useState('');

  // When props change, reset state
  useEffect(() => {
    setSortedStats(stats);
    setCurrentlySorted('');
  }, [stats]);

  // Sort the table by a particular stat when you click on the column's title.
  const sortBy = (e) => {
    e.preventDefault();

    const colTitle = e.target.innerText;

    if (currentlySorted === colTitle) {
      const newStats = sortedStats.slice(0, sortedStats.length).reverse();

      setSortedStats(newStats);
    } else {
      const newStats = sortedStats
        .slice(0, sortedStats.length)
        .sort(sortingFunctions[colTitle]);

      setSortedStats(newStats);
      setCurrentlySorted(colTitle);
    }
  };

  return (
    <React.Fragment>
      <table className="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                Season
              </button>
            </th>
            <th>Team</th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">GP</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Goals">G</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Assists">A</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Points">P</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Plus / Minus">+/-</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Penalty in Minutes">PIM</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Powerplay Goals">PPG</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Powerplay Points">PPP</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Shorthanded Goals">SHG</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Shorthanded Points">SHP</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Game Winning Goals">GWG</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Overtime Goals">OTG</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Shots">S</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Shooting Percentage">S%</abbr>
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedStats.map((obj, i) => (
            <tr key={obj.season + obj.team.name + i.toString()}>
              <td
                className={
                  currentlySorted === 'Season' ? 'stat-cell--sorted' : ''
                }
              >
                {convertSeason(obj.season)}
              </td>
              <td>{teamAbbreviations[obj.team.name] || obj.team.name}</td>
              <td
                className={currentlySorted === 'GP' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.games}
              </td>
              <td
                className={currentlySorted === 'G' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.goals}
              </td>
              <td
                className={currentlySorted === 'A' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.assists}
              </td>
              <td
                className={currentlySorted === 'P' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.points}
              </td>
              <td
                className={currentlySorted === '+/-' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.plusMinus}
              </td>
              <td
                className={currentlySorted === 'PIM' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.pim}
              </td>
              <td
                className={currentlySorted === 'PPG' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.powerPlayGoals}
              </td>
              <td
                className={currentlySorted === 'PPP' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.powerPlayPoints}
              </td>
              <td
                className={currentlySorted === 'SHG' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shortHandedGoals}
              </td>
              <td
                className={currentlySorted === 'SHP' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shortHandedPoints}
              </td>
              <td
                className={currentlySorted === 'GWG' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.gameWinningGoals}
              </td>
              <td
                className={currentlySorted === 'OTG' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.overTimeGoals}
              </td>
              <td
                className={currentlySorted === 'S' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shots}
              </td>
              <td
                className={currentlySorted === 'S%' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shotPct}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Career</strong>
            </td>
            <td />
            <td>
              <strong>{career.games}</strong>
            </td>
            <td>
              <strong>{career.goals}</strong>
            </td>
            <td>
              <strong>{career.assists}</strong>
            </td>
            <td>
              <strong>{career.points}</strong>
            </td>
            <td>
              <strong>{career.plusMinus}</strong>
            </td>
            <td>
              <strong>{career.pim}</strong>
            </td>
            <td>
              <strong>{career.powerPlayGoals}</strong>
            </td>
            <td>
              <strong>{career.powerPlayPoints}</strong>
            </td>
            <td>
              <strong>{career.shortHandedGoals}</strong>
            </td>
            <td>
              <strong>{career.shortHandedPoints}</strong>
            </td>
            <td>
              <strong>{career.gameWinningGoals}</strong>
            </td>
            <td>
              <strong>{career.overTimeGoals}</strong>
            </td>
            <td>
              <strong>{career.shots}</strong>
            </td>
            <td>
              <strong>{career.shotPct}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>
        {`
          .sort-button {
            padding: 0;
            margin: 0;
            border: none;
            font-weight: bold;
            background: transparent;
          }
          .sort-button:hover {
            cursor: pointer;
          }

          .stat-cell--sorted {
            background-color: yellow;
          }
        `}
      </style>
    </React.Fragment>
  );
};

SkaterTable.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ),
  career: PropTypes.shape({
    stat: PropTypes.shape({
      timeOnIce: PropTypes.string,
    }),
  }),
};

SkaterTable.defaultProps = {
  stats: [],
  career: {},
};

export default SkaterTable;
