import React from 'react';
import PlayerSearch from './PlayerSearch';

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="right input-field">
        <PlayerSearch />
        <label className="label-icon" htmlFor="playerSearch"> {/*eslint-disable-line*/}
          <i className="material-icons">search</i>
        </label>
      </div>
    </div>
  </nav>
);

export default Nav;
