import React from 'react';
import Head from 'next/head';

import { Spring } from 'react-spring';
import PlayerList from '../components/PlayerList';
import DivisionStandings from '../components/DivisionStandings';
import withGameState from '../components/higher-order/withGameState';
import GameCarousel from '../components/GameCarousel';
import { Desktop } from '../components/DefaultMediaBreakpoints';

import '../css/index.css';

const TodaysGames = withGameState(GameCarousel);

const Index = () => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Hockey Scrub</title>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <main>
      <div className="container">
        <div className="index__description">
          <p>A quick and readable reference for NHL stats.</p>
        </div>
        <PlayerList />
        <Desktop>
          <section className="index__carousel">
            <h2>Today&#39;s Games</h2>
            <div style={{ textAlign: 'center' }}>
              <Spring
                from={{ opacity: 0, transform: 'translateY(-20px)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
              >
                {springprops => (
                  <div style={springprops}>
                    <TodaysGames />
                  </div>
                )}
              </Spring>
            </div>
          </section>
        </Desktop>
        <DivisionStandings />
      </div>
    </main>
  </React.Fragment>
);

export default Index;
