import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import SkaterTable from './SkaterTable';
import GoalieTable from './GoalieTable';
import '../css/table-head.css';

/* A table head that follows user on scoll to make tables easier to read

Props:
targetId - the id of the table that this head applies to
position - the position of the player the stats apply to
stats - the year-by-year stat data for the player
career - the career stat data for the player

This needs the stat data in order to align the columns of the head properly. */
const TableHead = ({
  targetId, position, stats, career,
}) => {
  const pos = position === 'Goalie' ? 'Goalie' : 'Skater';
  const headId = `${targetId}-head`;

  const checkScroll = () => {
    const table = document.getElementById(targetId);

    if (table) {
      // Calculate height where season stats are visible
      const inHeight = table.offsetTop + 80;
      const outHeight = inHeight + table.clientHeight - 150;
      const shouldShow = window.scrollY > inHeight && window.scrollY < outHeight;

      const head = document.getElementById(headId);

      if (shouldShow) {
        head.classList.add('scrolling-head--active');
      } else {
        head.classList.remove('scrolling-head--active');
      }
    }
  };

  const debouncedScroll = debounce(checkScroll, 30);

  const setupScrollListeners = () => {
    window.addEventListener('scroll', debouncedScroll);
  };

  const cleanup = () => {
    window.removeEventListener('scroll', debouncedScroll);
  };

  useEffect(() => {
    setupScrollListeners();

    return cleanup;
  }, []);

  return (
    <React.Fragment>
      <div className="scrolling-head" id={headId}>
        {/* Loading full tables with stats to make sure the labels line up
      with the table that's on the page. The actual stats will not be visible.
      Not ideal, but it works */}
        {pos === 'Skater' && <SkaterTable stats={stats} career={career} />}
        {pos === 'Goalie' && <GoalieTable stats={stats} career={career} />}
      </div>
    </React.Fragment>
  );
};

TableHead.propTypes = {
  targetId: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ),
  career: PropTypes.shape({
    stat: PropTypes.shape({
      timeOnIce: PropTypes.string,
    }),
  }),
};

TableHead.defaultProps = {
  stats: [],
  career: {},
};

export default TableHead;
