import React from 'react';
import Head from 'next/head';

import PlayerList from '../components/PlayerList';
import PlayerSearch from '../components/PlayerSearch';
import '../css/materialize-custom-min.css';

const Index = () => (
  <React.Fragment>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>NHL Player Info</title>
    </Head>
    <main>
      <PlayerSearch />
      <PlayerList />
    </main>

  </React.Fragment>
);

export default Index;
