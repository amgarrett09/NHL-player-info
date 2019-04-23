import React from 'react';
import Head from 'next/head';

import { Spring } from 'react-spring';
import PlayerList from '../components/PlayerList';
import DivisionStandings from '../components/DivisionStandings';
import GameStateContainer from '../components/containers/GameStateContainer';
import GameCarousel from '../components/GameCarousel';
import { Desktop } from '../components/DefaultMediaBreakpoints';

import '../css/index.css';

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
      <div className="index__description">
        <p>A quick and readable reference for NHL stats.</p>
      </div>
      <section className="section">
        <div className="container is-fluid">
          <h1 className="title is-1">Find active players</h1>
          <div className="index__section--centered">
            <PlayerList />
          </div>
        </div>
      </section>
      <Desktop>
        <section className="section index__carousel">
          <div className="container is-fluid">
            <h2 className="title is-2">Today&#39;s Games</h2>
            <div style={{ textAlign: 'center' }}>
              <Spring
                from={{ opacity: 0, transform: 'translateY(-20px)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
              >
                {springprops => (
                  <div style={springprops}>
                    <GameStateContainer render={games => <GameCarousel games={games} />} />
                  </div>
                )}
              </Spring>
            </div>
          </div>
        </section>
      </Desktop>

      <section className="section">
        <div className="container is-fluid">
          <h2 className="title is-2">Division Standings</h2>
          <DivisionStandings />
        </div>
      </section>
    </main>
  </React.Fragment>
);

export default Index;
