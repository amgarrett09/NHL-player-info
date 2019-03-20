import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import SeasonStats from '../components/SeasonStats';
import PlayoffStats from '../components/PlayoffStats';
import LastFiveGames from '../components/LastFiveGames';
import TableHead from '../components/TableHead';
import { Desktop } from '../components/DefaultMediaBreakpoints';

import '../css/player.css';

const Player = ({
  id,
  name,
  currentTeam,
  position,
  shootsCatches,
  height,
  weight,
  nationality,
  active,
}) => {
  if (id === '') {
    return (
      <main>
        <h1>Invalid player id</h1>
      </main>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{`${name} - Hockey Scrub`}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <main>
        <div className="container">
          {/* scrolling table head */}
          <Desktop>
            <TableHead position={position} />
          </Desktop>

          <section>
            <h1>{name}</h1>
            <p>
              <strong>{currentTeam}</strong>
            </p>
            <p>{`Position: ${position} • Shoots/Catches: ${shootsCatches}`}</p>
            <p>{`${height} • ${weight} lbs • ${nationality}`}</p>
          </section>

          {/* 'top-block' class helps prevent flickering */}
          <section className="top-block">
            {active && <LastFiveGames id={id} position={position} />}
            {!active && <SeasonStats id={id} position={position} />}
          </section>

          {active && (
            <section>
              <SeasonStats id={id} position={position} />
            </section>
          )}

          <section>
            <PlayoffStats id={id} position={position} />
          </section>
        </div>
      </main>

    </React.Fragment>
  );
};

Player.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  currentTeam: PropTypes.string,
  position: PropTypes.string,
  shootsCatches: PropTypes.string,
  height: PropTypes.string,
  weight: PropTypes.number,
  nationality: PropTypes.string,
  active: PropTypes.bool,
};

Player.defaultProps = {
  id: '',
  name: '',
  currentTeam: '',
  position: '',
  shootsCatches: '',
  height: '',
  weight: undefined,
  nationality: '',
  active: false,
};

Player.getInitialProps = async ({ query }) => {
  try {
    const res = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${query.id}`,
    );
    const json = await res.json();
    const [person] = json.people;
    const {
      fullName,
      primaryPosition,
      shootsCatches,
      height,
      weight,
      nationality,
      active,
    } = person;

    return {
      id: query.id,
      name: fullName,
      position: primaryPosition.name,
      currentTeam: person.currentTeam ? person.currentTeam.name : null,
      shootsCatches,
      height,
      weight,
      nationality,
      active,
    };
  } catch (err) {
    return {};
  }
};

export default Player;
