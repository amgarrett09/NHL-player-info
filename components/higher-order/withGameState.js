import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Wrapper that fetches data for components that need game schedule
const withGameState = WrappedComponent => (props) => {
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
    const json = await res.json();
    const gamesData = json.dates[0].games;

    // Prepare data in a way that easier for wrapped components to work with
    const out = gamesData.map(game => ({
      awayTeam: game.teams.away.team.name,
      awayScore: game.teams.away.score,
      homeTeam: game.teams.home.team.name,
      homeScore: game.teams.home.score,
      gameState: game.status.detailedState,
    }));

    setGames(out);
    setLoaded(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {loaded && <WrappedComponent games={games} {...props} />}
    </React.Fragment>
  );
};

export default withGameState;
