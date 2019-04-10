import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Spring } from 'react-spring';

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
        <Spring
          from={{ opacity: 0, transform: 'translateY(-20px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
        >
          {springProps => (
            <div style={springProps}>
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <h3>
                      <strong>{standings[2].division.name}</strong>
                    </h3>
                    <DivisionTable division={standings[2]} />
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <h3>
                      <strong>{standings[0].division.name}</strong>
                    </h3>
                    <DivisionTable division={standings[0]} />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <h3>
                      <strong>{standings[3].division.name}</strong>
                    </h3>
                    <DivisionTable division={standings[3]} />
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <h3>
                      <strong>{standings[1].division.name}</strong>
                    </h3>
                    <DivisionTable division={standings[1]} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      )}
    </React.Fragment>
  );
};

export default DivisionStandings;
