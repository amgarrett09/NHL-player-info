import React, { useState } from 'react';
import Link from 'next/link';
import { Desktop, Mobile } from './DefaultMediaBreakpoints';
import PlayerSearch from './PlayerSearch';
import '../css/nav.css';

const Nav = () => {
  const [open, setOpen] = useState(false);
  let div;

  /* Used on mobile nav to restore correct class if user switches between mobile
  and desktop layouts */
  const openClass = 'nav-extension nav-extension--open';
  const closedClass = 'nav-extension';

  const toggleNav = (e) => {
    e.preventDefault();

    div.classList.toggle('nav-extension--open');
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Desktop>
        <nav>
          <div className="nav__flex">
            <span className="nav__logo">
              <Link href="/">
                <a>Hockey Scrub</a>
              </Link>
            </span>
            {/* eslint-disable-next-line */}
            <label htmlFor="player-search">
              <span className="nav__ps-label">Search players:</span>
              <PlayerSearch id="player-search" />
            </label>
          </div>
        </nav>
      </Desktop>
      <Mobile>
        <nav>
          <div className="nav__flex">
            <span className="nav__padding" />
            <span className="nav__logo">
              <Link href="/">
                <a>Hockey Scrub</a>
              </Link>
            </span>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="player-search"
              className="nav__search-button"
              onClick={toggleNav}
            >
              search
            </button>
          </div>
        </nav>
        <div
          className={open ? openClass : closedClass}
          ref={(e) => {
            div = e;
          }}
        >
          {open && (
            <div className="nav__search-container">
              {/* eslint-disable-next-line */}
              <label htmlFor="player-search">
                <span className="nav__ps-label">Search players:</span>
                <PlayerSearch id="player-search" />
              </label>
            </div>
          )}
        </div>
      </Mobile>
    </React.Fragment>
  );
};

export default Nav;
