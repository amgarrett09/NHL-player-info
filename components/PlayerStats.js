import React from 'react';
import PropTypes from 'prop-types';

import GoalieTable from './GoalieTable';
import SkaterTable from './SkaterTable';
import '../css/stats.css';

const PlayerStats = ({
  position, id, stats, career, title,
}) => {
  let playerType = position;
  if (playerType !== 'Goalie') {
    playerType = 'Skater';
  }

  return (
    <div className="box" id={id} data-test="root div">
      <h2 className="title is 2" data-test="title">{ title }</h2>
      {playerType === 'Goalie' && (
      <GoalieTable stats={stats} career={career} />
      )}
      {playerType === 'Skater' && (
      <SkaterTable stats={stats} career={career} />
      )}
    </div>
  );
};

PlayerStats.propTypes = {
  position: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ).isRequired,
  career: PropTypes.shape({
    stat: PropTypes.shape({
      timeOnIce: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

PlayerStats.defaultProps = {
  position: '',
  title: '',
};

export default PlayerStats;
