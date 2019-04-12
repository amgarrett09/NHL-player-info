import PropTypes from 'prop-types';

import convertSeason from '../lib/convert-season';

import teamAbbreviations from '../constants/constants';

const GoalieTable = ({ stats, career }) => (
  <table className="table is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Season</th>
        <th>Team</th>
        <th><abbr title="Games Played">GP</abbr></th>
        <th><abbr title="Games Started">GS</abbr></th>
        <th><abbr title="Wins">W</abbr></th>
        <th><abbr title="Losses">L</abbr></th>
        <th><abbr title="Ties">T</abbr></th>
        <th><abbr title="Overtime Losses">OTL</abbr></th>
        <th><abbr title="Shots Against">SA</abbr></th>
        <th><abbr title="Goals Against">GA</abbr></th>
        <th><abbr title="Goals Against Average">GAA</abbr></th>
        <th><abbr title="Saves">S</abbr></th>
        <th><abbr title="Save Percentage">S%</abbr></th>
        <th><abbr title="Shutouts">SO</abbr></th>
        <th><abbr title="Minutes">MIN</abbr></th>
      </tr>
    </thead>

    <tbody>
      {stats.map((obj, i) => (
        <tr key={obj.season + obj.team.name + i.toString()}>
          <td>{convertSeason(obj.season)}</td>
          <td>{teamAbbreviations[obj.team.name] || obj.team.name}</td>
          <td>{obj.stat.games}</td>
          <td>{obj.stat.gamesStarted}</td>
          <td>{obj.stat.wins}</td>
          <td>{obj.stat.losses}</td>
          <td>{obj.stat.ties}</td>
          <td>{obj.stat.ot}</td>
          <td>{obj.stat.shotsAgainst}</td>
          <td>{obj.stat.goalsAgainst}</td>
          <td>{obj.stat.goalAgainstAverage}</td>
          <td>{obj.stat.saves}</td>
          <td>{obj.stat.savePercentage}</td>
          <td>{obj.stat.shutouts}</td>
          <td>{obj.stat.timeOnIce}</td>
        </tr>
      ))}
      <tr>
        <td><strong>Career</strong></td>
        <td />
        <td><strong>{career.games}</strong></td>
        <td><strong>{career.gamesStarted}</strong></td>
        <td><strong>{career.wins}</strong></td>
        <td><strong>{career.losses}</strong></td>
        <td><strong>{career.ties}</strong></td>
        <td><strong>{career.ot}</strong></td>
        <td><strong>{career.shotsAgainst}</strong></td>
        <td><strong>{career.goalsAgainst}</strong></td>
        <td><strong>{career.goalAgainstAverage}</strong></td>
        <td><strong>{career.saves}</strong></td>
        <td><strong>{career.savePercentage}</strong></td>
        <td><strong>{career.shutouts}</strong></td>
        <td><strong>{career.timeOnIce}</strong></td>
      </tr>
    </tbody>
  </table>
);

GoalieTable.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    season: PropTypes.string,
  })),
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
