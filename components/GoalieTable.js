import PropTypes from 'prop-types';

const GoalieTable = ({ stats }) => (
  <table>
    <thead>
      <tr>
        <th>Season</th>
        <th>Team</th>
        <th>GP</th>
        <th>GS</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>OT</th>
        <th>SA</th>
        <th>GA</th>
        <th>GAA</th>
        <th>S</th>
        <th>Sv%</th>
        <th>SO</th>
        <th>MIN</th>
      </tr>
    </thead>

    <tbody>
      {stats.map(obj => (
        <tr key={obj.season + obj.team.name}>
          <td>{obj.season}</td>
          <td>{obj.team.name}</td>
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
    </tbody>
  </table>
);

GoalieTable.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    season: PropTypes.string,
  })),
};

GoalieTable.defaultProps = {
  stats: [],
};

export default GoalieTable;
