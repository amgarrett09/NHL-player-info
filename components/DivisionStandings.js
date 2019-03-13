import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import DivisionTable from './DivisionTable';

const DivisionStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://statsapi.web.nhl.com/api/v1/standings/byDivision',
      );
      const json = await res.json();

      setStandings(json.records);
      setLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <React.Fragment>
          <h2>Division Standings</h2>
          <div className="row">
            <div className="col s12 m6">
              <h3><strong>{standings[2].division.name}</strong></h3>
              <DivisionTable division={standings[2]} />
            </div>
            <div className="col s12 m6">
              <h3><strong>{standings[0].division.name}</strong></h3>
              <DivisionTable division={standings[0]} />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <h3><strong>{standings[3].division.name}</strong></h3>
              <DivisionTable division={standings[3]} />
            </div>
            <div className="col s12 m6">
              <h3><strong>{standings[1].division.name}</strong></h3>
              <DivisionTable division={standings[1]} />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DivisionStandings;
