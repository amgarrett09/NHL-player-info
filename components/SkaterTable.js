import PropTypes from 'prop-types';

import convertSeason from '../lib/convert-season';

const SkaterTable = ({ stats, career }) => (
  <table>
    <thead>
      <tr>
        <th>Season</th>
        <th>Team</th>
        <th>GP</th>
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
        <th>S%</th>
        <th>FO%</th>
      </tr>
    </thead>

    <tbody>
      {stats.map((obj, i) => (
        <tr key={obj.season + obj.team.name + i.toString()}>
          <td>{convertSeason(obj.season)}</td>
          <td>{obj.team.name}</td>
          <td>{obj.stat.games}</td>
          <td>{obj.stat.goals}</td>
          <td>{obj.stat.assists}</td>
          <td>{obj.stat.points}</td>
          <td>{obj.stat.plusMinus}</td>
          <td>{obj.stat.pim}</td>
          <td>{obj.stat.powerPlayGoals}</td>
          <td>{obj.stat.powerPlayPoints}</td>
          <td>{obj.stat.shortHandedGoals}</td>
          <td>{obj.stat.shortHandedPoints}</td>
          <td>{obj.stat.gameWinningGoals}</td>
          <td>{obj.stat.overTimeGoals}</td>
          <td>{obj.stat.shots}</td>
          <td>{obj.stat.shotPct}</td>
          <td>{obj.stat.faceOffPct}</td>
        </tr>
      ))}
      <tr>
        <td><strong>Career</strong></td>
        <td />
        <td><strong>{career.games}</strong></td>
        <td><strong>{career.goals}</strong></td>
        <td><strong>{career.assists}</strong></td>
        <td><strong>{career.points}</strong></td>
        <td><strong>{career.plusMinus}</strong></td>
        <td><strong>{career.pim}</strong></td>
        <td><strong>{career.powerPlayGoals}</strong></td>
        <td><strong>{career.powerPlayPoints}</strong></td>
        <td><strong>{career.shortHandedGoals}</strong></td>
        <td><strong>{career.shortHandedPoints}</strong></td>
        <td><strong>{career.gameWinningGoals}</strong></td>
        <td><strong>{career.overTimeGoals}</strong></td>
        <td><strong>{career.shots}</strong></td>
        <td><strong>{career.shotPct}</strong></td>
        <td><strong>{career.faceOffPct}</strong></td>
      </tr>
    </tbody>
  </table>
);

SkaterTable.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    season: PropTypes.string,
  })),
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
