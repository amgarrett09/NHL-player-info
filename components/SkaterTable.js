import PropTypes from 'prop-types';

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
          <td>{obj.season}</td>
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
        <td>{career.games}</td>
        <td>{career.goals}</td>
        <td>{career.assists}</td>
        <td>{career.points}</td>
        <td>{career.plusMinus}</td>
        <td>{career.pim}</td>
        <td>{career.powerPlayGoals}</td>
        <td>{career.powerPlayPoints}</td>
        <td>{career.shortHandedGoals}</td>
        <td>{career.shortHandedPoints}</td>
        <td>{career.gameWinningGoals}</td>
        <td>{career.overTimeGoals}</td>
        <td>{career.shots}</td>
        <td>{career.shotPct}</td>
        <td>{career.faceOffPct}</td>
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
