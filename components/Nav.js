import React, { useState } from 'react';
import Link from 'next/link';
import { Desktop, Mobile } from './DefaultMediaBreakpoints';
import PlayerSearch from './PlayerSearch';
import '../css/nav.css';

const Nav = () => {
  const [open, setOpen] = useState(false);

  /* Used on mobile nav to restore correct class if user switches between mobile
  and desktop layouts */
  const openClass = 'nav-extension nav-extension--open';
  const closedClass = 'nav-extension';

  const toggleNav = (e) => {
    e.preventDefault();
    document
      .querySelector('.nav-extension')
      .classList.toggle('nav-extension--open');
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Desktop>
        <nav className="purple darken-3">
          <div className="nav__flex">
            <span className="nav__logo">
              <Link href="/">
                <a>Hockey Scrub</a>
              </Link>
            </span>
            <PlayerSearch id="player-search" />
          </div>
        </nav>
      </Desktop>
      <Mobile>
        <nav className="purple darken-3">
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
        <div className={open ? openClass : closedClass}>
          {open && (
          <div className="nav__search-container">
            <PlayerSearch id="player-search" />
          </div>
          )}
        </div>
      </Mobile>
    </React.Fragment>
  );
};

export default Nav;
