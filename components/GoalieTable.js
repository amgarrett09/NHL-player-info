import React, { useState } from 'react';
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
  GS(a, b) {
    return b.stat.gamesStarted - a.stat.gamesStarted;
  },
  W(a, b) {
    return b.stat.wins - a.stat.wins;
  },
  L(a, b) {
    return b.stat.losses - a.stat.losses;
  },
  T(a, b) {
    return b.stat.ties - a.stat.ties;
  },
  OTL(a, b) {
    return b.stat.ot - a.stat.ot;
  },
  SA(a, b) {
    return b.stat.shotsAgainst - a.stat.shotsAgainst;
  },
  GA(a, b) {
    return b.stat.goalsAgainst - a.stat.goalsAgainst;
  },
  GAA(a, b) {
    return b.stat.goalAgainstAverage - a.stat.goalAgainstAverage;
  },
  S(a, b) {
    return b.stat.saves - a.stat.saves;
  },
  // eslint-disable-next-line func-names
  'S%': function (a, b) {
    return b.stat.savePercentage - a.stat.savePercentage;
  },
  SO(a, b) {
    return b.stat.shutouts - a.stat.shutouts;
  },
  MIN(a, b) {
    return b.stat.timeOnIce - a.stat.timeOnIce;
  },
};

const GoalieTable = ({ stats, career }) => {
  const [sortedStats, setSortedStats] = useState(stats);
  const [currentlySorted, setCurrentlySorted] = useState('');

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
                <abbr title="Games Played">GS</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">W</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">L</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">T</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">OTL</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">SA</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">GA</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">GAA</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">S</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">S%</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">SO</abbr>
              </button>
            </th>
            <th>
              <button type="button" className="sort-button" onClick={sortBy}>
                <abbr title="Games Played">MIN</abbr>
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedStats.map((obj, i) => (
            <tr key={obj.season + obj.team.name + i.toString()}>
              <td
                className={currentlySorted === 'Season' ? 'stat-cell--sorted' : ''}
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
                className={currentlySorted === 'GS' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.gamesStarted}
              </td>
              <td
                className={currentlySorted === 'W' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.wins}
              </td>
              <td
                className={currentlySorted === 'L' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.losses}
              </td>
              <td
                className={currentlySorted === 'T' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.ties}
              </td>
              <td
                className={currentlySorted === 'OTL' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.ot}
              </td>
              <td
                className={currentlySorted === 'SA' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shotsAgainst}
              </td>
              <td
                className={currentlySorted === 'GA' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.goalsAgainst}
              </td>
              <td
                className={currentlySorted === 'GAA' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.goalAgainstAverage}
              </td>
              <td
                className={currentlySorted === 'S' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.saves}
              </td>
              <td
                className={currentlySorted === 'S%' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.savePercentage}
              </td>
              <td
                className={currentlySorted === 'SO' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.shutouts}
              </td>
              <td
                className={currentlySorted === 'MIN' ? 'stat-cell--sorted' : ''}
              >
                {obj.stat.timeOnIce}
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
              <strong>{career.gamesStarted}</strong>
            </td>
            <td>
              <strong>{career.wins}</strong>
            </td>
            <td>
              <strong>{career.losses}</strong>
            </td>
            <td>
              <strong>{career.ties}</strong>
            </td>
            <td>
              <strong>{career.ot}</strong>
            </td>
            <td>
              <strong>{career.shotsAgainst}</strong>
            </td>
            <td>
              <strong>{career.goalsAgainst}</strong>
            </td>
            <td>
              <strong>{career.goalAgainstAverage}</strong>
            </td>
            <td>
              <strong>{career.saves}</strong>
            </td>
            <td>
              <strong>{career.savePercentage}</strong>
            </td>
            <td>
              <strong>{career.shutouts}</strong>
            </td>
            <td>
              <strong>{career.timeOnIce}</strong>
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

GoalieTable.propTypes = {
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

GoalieTable.defaultProps = {
  stats: [],
  career: {},
};

export default GoalieTable;
