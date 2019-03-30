import React from 'react';
import Head from 'next/head';

import PlayerList from '../components/PlayerList';
import DivisionStandings from '../components/DivisionStandings';
import GameCarousel from '../components/GameCarousel';

const games = [
  {
    awayTeam: 'Detroit Red Wings',
    awayScore: 5,
    homeTeam: 'Buffalo Sabres',
    homeScore: 4,
    gameState: 'FINAL',
  },
  {
    awayTeam: 'Chicago Blackhawks',
    awayScore: 3,
    homeTeam: 'Winnipeg Jets',
    homeScore: 4,
    gameState: '3RD',
  },
  {
    awayTeam: 'San Jose Sharks',
    awayScore: 2,
    homeTeam: 'Arizona Coyotes',
    homeScore: 1,
    gameState: '1ST',
  },

];
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
        <GameCarousel games={games} />
        <DivisionStandings />
      </div>
    </main>

  </React.Fragment>
);

export default Index;
