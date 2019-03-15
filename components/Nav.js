import React, { useState } from 'react';
import Link from 'next/link';
import { Desktop, Mobile } from './DefaultMediaBreakpoints';
import PlayerSearch from './PlayerSearch';
import '../css/nav.css';

const Nav = () => {
  const [open, setOpen] = useState(false);

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
        <nav>
          <div className="nav__flex">
            <span className="nav__logo">
              <Link href="/">
                <a>Hockey Scrub</a>
              </Link>
            </span>
            <PlayerSearch />
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
            <button type="button" className="nav__search-button" onClick={toggleNav}>
              search
            </button>
          </div>
          {open && (
            <div className="nav__search-container">
              <PlayerSearch />
            </div>
          )}
        </nav>
      </Mobile>
    </React.Fragment>
  );
};

export default Nav;
