import React from 'react';
import PropTypes from 'prop-types';

const DivisionTable = ({ division }) => (
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>OTL</th>
        <th>PTS</th>
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
