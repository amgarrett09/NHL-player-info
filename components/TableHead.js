import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import SkaterTable from './SkaterTable';
import GoalieTable from './GoalieTable';

import '../css/table-head.css';

const TableHead = ({ position, stats, career }) => {
  const pos = position === 'Goalie' ? 'Goalie' : 'Skater';

  const checkScroll = () => {
    const table = document.querySelector('#season-stat-table');

    if (table) {
      // Calculate height where season stats are visible
      const inHeight = table.offsetTop + 70;
      const outHeight = inHeight + table.clientHeight - 150;
      const shouldShow = window.scrollY > inHeight && window.scrollY < outHeight;

      const head = document.querySelector('.scrolling-head');

      if (shouldShow) {
        head.classList.add('scrolling-head--active');
      } else {
        head.classList.remove('scrolling-head--active');
      }
    }
  };

  const debouncedScroll = debounce(checkScroll, 20);

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
    <div className="scrolling-head">
      {/* Loading full tables with stats to make sure the labels line up
      with the table that's on the page. The actual stats will not be visible.
      Not ideal, but it works */}
      {pos === 'Skater' && <SkaterTable stats={stats} career={career} />}
      {pos === 'Goalie' && <GoalieTable stats={stats} career={career} />}
    </div>
  );
};

TableHead.propTypes = {
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
