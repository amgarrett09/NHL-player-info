import React from 'react';
import PropTypes from 'prop-types';

const DivisionTable = ({ division }) => (
  <table className="table is-fullwidth is-narrow">
    <thead>
      <tr>
        <th>Team</th>
        <th><abbr title="Wins">W</abbr></th>
        <th><abbr title="Losses">L</abbr></th>
        <th><abbr title="Overtime losses">OTL</abbr></th>
        <th><abbr title="Points">PTS</abbr></th>
      </tr>
    </thead>
    <tbody>
      {division.teamRecords.map(record => (
        <tr key={record.team.id}>
          <td>{record.team.name}</td>
          <td>{record.leagueRecord.wins}</td>
          <td>{record.leagueRecord.losses}</td>
          <td>{record.leagueRecord.ot}</td>
          <td>{record.points}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

DivisionTable.propTypes = {
  division: PropTypes.shape({
    standingsType: PropTypes.string,
  }).isRequired,
};

export default DivisionTable;
