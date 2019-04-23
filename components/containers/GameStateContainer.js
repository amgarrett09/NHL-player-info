import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

// Wrapper that fetches data for components that need game schedule
const GameStateContainer = ({ render }) => {
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
      const json = await res.json();
      const gamesData = json.dates[0].games;

      // Use API data to return a concise game state
      const getGameState = (game) => {
        const { abstractGameState } = game.status;
        let gameTime = game.gameDate.slice(11, 16);

        // Converting time to Eastern
        let hours = parseInt(gameTime.slice(0, 2), 10) - 4;
        hours = hours < 0 ? hours + 24 : hours;
        const minutes = gameTime.slice(3, 5);

        gameTime = `${hours}:${minutes} ET`;

        if (abstractGameState === 'Final') {
          return 'Final';
        }

        if (abstractGameState === 'Live') {
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
    } catch (err) {
      setGames([]);
      setLoaded(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {loaded && render(games)}
    </React.Fragment>
  );
};

GameStateContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default GameStateContainer;
