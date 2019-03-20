import React, { useState } from 'react';
import Link from 'next/link';
import { Desktop, Mobile } from './DefaultMediaBreakpoints';
import PlayerSearch from './PlayerSearch';
import '../css/nav.css';

const Nav = () => {
  const [open, setOpen] = useState(false);

  /* Used on mobile nav to restore correct class if user switches between mobile
  and desktop layouts */
  const openClass = 'purple darken-3 nav--open';
  const closedClass = 'purple darken-3';

  const toggleNav = (e) => {
    e.preventDefault();

    const nav = document.querySelector('nav');
    nav.classList.toggle('nav--open');

    if (open) {
      setOpen(false);
    } else {
      setTimeout(() => {
        setOpen(true);
      }, 0.3 * 1000);
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
        <nav className={open ? openClass : closedClass}>
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
          {open && (
            <div className="nav__search-container">
              <PlayerSearch id="player-search" />
            </div>
          )}
        </nav>
      </Mobile>
    </React.Fragment>
  );
};

export default Nav;
