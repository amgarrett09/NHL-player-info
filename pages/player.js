import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import SeasonStats from '../components/SeasonStats';
import PlayoffStats from '../components/PlayoffStats';
import LastFiveGames from '../components/LastFiveGames';
import '../css/materialize-custom-min.css';

const Player = ({
  id,
  name,
  currentTeam,
  position,
  shootsCatches,
  height,
  weight,
  nationality,
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
        <title>{`${name} - NHL Player Info`}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <main>
        <div className="container">
          <section>
            <h1>{name}</h1>
            <p>
              <strong>{currentTeam}</strong>
            </p>
            <p>{`Position: ${position} • Shoots/Catches: ${shootsCatches}`}</p>
            <p>{`${height} • ${weight} lbs • ${nationality}`}</p>
          </section>

          <section>
            <LastFiveGames id={id} position={position} />
          </section>

          <section>
            <SeasonStats id={id} position={position} />
          </section>
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
    };
  } catch (err) {
    return {};
  }
};

export default Player;
