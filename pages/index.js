import React from 'react';
import Head from 'next/head';

import PlayerList from '../components/PlayerList';
import DivisionStandings from '../components/DivisionStandings';
import GamesContainer from '../components/GamesContainer';


const Index = () => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Hockey Scrub</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <main>
      <div className="container">
        <PlayerList />
        <GamesContainer />
        <DivisionStandings />
      </div>
    </main>

  </React.Fragment>
);

export default Index;
