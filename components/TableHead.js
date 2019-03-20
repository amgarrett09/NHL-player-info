import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import '../css/table-head.css';

const TableHead = ({ position }) => {
  const pos = position === 'Goalie' ? 'Goalie' : 'Skater';

  const checkScroll = () => {
    const table = document.querySelector('#season-stat-table');

    if (table) {
      // Calculate height where season stats are visible
      const shouldShow = window.scrollY > table.offsetTop + 50;

      const head = document.querySelector('.scrolling-head');

      if (shouldShow) {
        head.classList.add('scrolling-head--active');
      } else {
        head.classList.remove('scrolling-head--active');
      }
    }
  };

  const debouncedScroll = debounce(checkScroll, 10);

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
      {pos === 'Skater' && (
        <table>
          <thead>
            <tr>
              <th>Season</th>
              <th>Team</th>
              <th>GP</th>
              <th>G</th>
              <th>A</th>
              <th>P</th>
              <th>+/-</th>
              <th>PIM</th>
              <th>PPG</th>
              <th>PPP</th>
              <th>SHG</th>
              <th>SHP</th>
              <th>GWG</th>
              <th>OTG</th>
              <th>S</th>
              <th>S%</th>
            </tr>
          </thead>
        </table>
      )}
      {pos === 'Goalie' && (
        <table>
          <thead>
            <tr>
              <th>Season</th>
              <th>Team</th>
              <th>GP</th>
              <th>GS</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>OT</th>
              <th>SA</th>
              <th>GA</th>
              <th>GAA</th>
              <th>S</th>
              <th>Sv%</th>
              <th>SO</th>
              <th>MIN</th>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

TableHead.propTypes = {
  position: PropTypes.string.isRequired,
};

export default TableHead;
