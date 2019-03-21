import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

import GoalieTable from './GoalieTable';
import SkaterTable from './SkaterTable';
import { Desktop } from './DefaultMediaBreakpoints';
import TableHead from './TableHead';
import '../css/stats.css';

const SeasonStats = ({ playerId, position, id }) => {
  const [stats, setStats] = useState([]);
  const [career, setCareer] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    setLoaded(false);
    try {
      const res = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=yearByYear,careerRegularSeason`,
      );
      const json = await res.json();

      const nhlStats = json.stats[0].splits.filter(
        obj => obj.league.name === 'National Hockey League',
      );

      const careerStats = json.stats[1].splits[0].stat;

      setStats(nhlStats);
      setCareer(careerStats);
      setLoaded(true);
    } catch (err) {
      setStats([]);
      setCareer({});
      setLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [playerId]);

  let playerType = position;
  if (playerType !== 'Goalie') {
    playerType = 'Skater';
  }

  return (
    <React.Fragment>
      {/* scrolling table head */}
      <Desktop>
        <TableHead
          position={position}
          stats={stats}
          career={career}
          targetId={id}
        />
      </Desktop>
      {/* Once data loads, animate table into place */}
      {loaded && (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {springProps => (
            <div style={springProps}>
              <div className="stat-card" id={id}>
                <h2>Regular Season Stats</h2>
                {playerType === 'Goalie' && (
                  <GoalieTable stats={stats} career={career} />
                )}
                {playerType === 'Skater' && (
                  <SkaterTable stats={stats} career={career} />
                )}
              </div>
            </div>
          )}
        </Spring>
      )}
    </React.Fragment>
  );
};

SeasonStats.propTypes = {
  playerId: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string.isRequired,
};

SeasonStats.defaultProps = {
  playerId: '',
  position: '',
};

export default SeasonStats;
