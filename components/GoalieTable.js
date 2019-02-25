import PropTypes from 'prop-types';

const GoalieTable = ({ stats, career }) => (
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
      {stats.map((obj, i) => (
        <tr key={obj.season + obj.team.name + i.toString()}>
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
      <tr>
        <td><strong>Career</strong></td>
        <td />
        <td>{career.games}</td>
        <td>{career.gamesStarted}</td>
        <td>{career.wins}</td>
        <td>{career.losses}</td>
        <td>{career.ties}</td>
        <td>{career.ot}</td>
        <td>{career.shotsAgainst}</td>
        <td>{career.goalsAgainst}</td>
        <td>{career.goalAgainstAverage}</td>
        <td>{career.saves}</td>
        <td>{career.savePercentage}</td>
        <td>{career.shutouts}</td>
        <td>{career.timeOnIce}</td>
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
