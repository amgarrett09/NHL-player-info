import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import DivisionTable from './DivisionTable';

const DivisionStandings = () => {
  const [standings, setStandings] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://statsapi.web.nhl.com/api/v1/standings/byDivision',
      );
      const json = await res.json();

      setStandings(json.records);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h2>Division Standings</h2>
      {standings.map(record => (
        <DivisionTable key={record.division.id} division={record} />
      ))}
    </React.Fragment>
  );
};

export default DivisionStandings;
