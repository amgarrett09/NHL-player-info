import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import LoadingContext from '../context/LoadingContext';
import StatsService from '../api/stats-calls';
import DataPrep from '../api/stats-data-prep';
import PlayerStats from '../components/PlayerStats';
import LastFiveGames from '../components/LastFiveGames';
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
  seasonStats,
  careerSeason,
  playoffStats,
  careerPlayoffs,
  lastFive,
}) => {
  const context = useContext(LoadingContext);

  useEffect(() => {
    context.unsetLoading();
  }, [id]);

  if (name === '') {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Error</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <main>
          <h1>There was a problem fetching player data</h1>
        </main>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{`${name} - Hockey Scrub`}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      {/* eslint-disable-next-line react/destructuring-assignment */}
      <main className={context.loading ? 'main--hidden' : 'main--visible'}>
        <section className="section">
          <h1 className="title is-1">{name}</h1>
          <p>
            <strong>{currentTeam}</strong>
          </p>
          <p>{`Position: ${position} • Shoots/Catches: ${shootsCatches}`}</p>
          <p>{`${height} • ${weight} lbs • ${nationality}`}</p>
        </section>

        <section className="section">
          <div className="container is-fluid">
            {active && lastFive.length > 0 && (
            <LastFiveGames games={lastFive} position={position} />
            )}
            {!active && seasonStats.length > 0 && (
            <React.Fragment>
              <PlayerStats
                position={position}
                stats={seasonStats}
                career={careerSeason}
                id="season-stats"
                title="Regular Season Stats"
              />
            </React.Fragment>
            )}
          </div>
        </section>

        {active && seasonStats.length > 0 && (
        <section className="section">
          <div className="container is-fluid">
            <PlayerStats
              position={position}
              stats={seasonStats}
              career={careerSeason}
              id="season-stats"
              title="Regular Season Stats"
            />
          </div>
        </section>
        )}

        {playoffStats.length > 0 && (
        <section className="section">
          <div className="container is-fluid">
            <PlayerStats
              position={position}
              stats={playoffStats}
              career={careerPlayoffs}
              id="playoff-stats"
              title="Playoff Stats"
            />
          </div>
        </section>
        )}
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
  seasonStats: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ),
  careerSeason: PropTypes.shape({
    stat: PropTypes.shape({
      timeOnIce: PropTypes.string,
    }),
  }),
  playoffStats: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ),
  careerPlayoffs: PropTypes.shape({
    stat: PropTypes.shape({
      timeOnIce: PropTypes.string,
    }),
  }),
  lastFive: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    }),
  ),
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
  seasonStats: [],
  careerSeason: {},
  playoffStats: [],
  careerPlayoffs: {},
  lastFive: [],
};

Player.getInitialProps = async ({ query }) => {
  let basicInfo;
  try {
    const basicRes = await StatsService.getBasicInfo(query.id);
    basicInfo = DataPrep.prepareBasicInfo(basicRes.data);
  } catch (err) {
    basicInfo = {};
  }

  let playerStats;
  try {
    const res = await StatsService.getCombinedStats(query.id);
    playerStats = DataPrep.preparePlayerStats(res.data);
  } catch (err) {
    playerStats = {};
  }

  return {
    id: query.id,
    ...basicInfo,
    ...playerStats,
  };
};

export default Player;
