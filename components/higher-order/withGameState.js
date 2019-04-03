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

    // Use API data to return a concise game state
    const getGameState = (game) => {
      const { detailedState } = game.status;
      const gameTime = game.gameDate.slice(11, 16);

      if (detailedState === 'Final') {
        return 'Final';
      }

      if (detailedState === 'In Progress') {
        return 'Live';
      }

      return gameTime;
    };

    // Prepare data in a way that's easier for wrapped components to work with
    const out = gamesData.map(game => ({
      awayTeam: game.teams.away.team.name,
      awayScore: game.teams.away.score,
      homeTeam: game.teams.home.team.name,
      homeScore: game.teams.home.score,
      gameState: getGameState(game),
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
