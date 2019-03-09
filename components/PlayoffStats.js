import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

import GoalieTable from './GoalieTable';
import SkaterTable from './SkaterTable';

const PlayoffStats = (props) => {
  // state = {
  //   stats: [],
  //   career: {},
  //   loaded: false,
  // };

  const [stats, setStats] = useState([]);
  const [career, setCareer] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const { id } = props;
      const [statsRes, careerRes] = await Promise.all([
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYearPlayoffs`,
        ),
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=careerPlayoffs`,
        ),
      ]);

      const [statsJson, careerJson] = await Promise.all([
        statsRes.json(),
        careerRes.json(),
      ]);

      const nhlStats = statsJson.stats[0].splits.filter(
        obj => obj.league.name === 'National Hockey League',
      );

      const careerStats = careerJson.stats[0].splits[0].stat;

      // this.setState({
      //   stats: nhlStats,
      //   career: careerStats,
      //   loaded: true,
      // });
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
  }, []);

  let { position } = props;
  if (position !== 'Goalie') {
    position = 'Skater';
  }

  return (
    <React.Fragment>
      {/* Once data loads, animate table into place */}
      { loaded && (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {springProps => (
          <div style={springProps}>
            <h2>Playoff Stats</h2>
            {position === 'Goalie' && (
            <GoalieTable stats={stats} career={career} />
            )}
            {position === 'Skater' && (
            <SkaterTable stats={stats} career={career} />
            )}
          </div>
        )}
      </Spring>
      )}
    </React.Fragment>
  );
};

PlayoffStats.propTypes = {
  id: PropTypes.string,
  position: PropTypes.string,
};

PlayoffStats.defaultProps = {
  id: '',
  position: '',
};

export default PlayoffStats;
