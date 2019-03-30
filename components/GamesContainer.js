import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import GameCarousel from './GameCarousel';

//   const [games, setGames] = useState([]);
//   const [loaded, setLoaded] = useState(true);
//   const fetchData = async () => {
//     const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
//     const json = await res.json();
//     const gamesData = json.dates[0].games;
//     Prepare data in the way rendered component expects
//     const out = gamesData.map(game => ({
//       awayTeam: game.teams.away.team.name,
//       awayScore: game.teams.away.score,
//       homeTeam: game.teams.home.team.name,
//       homeScore: game.teams.home.score,
//       gameState: game.status.detailedState,
//     }));
//     setGames(out);
//     setLoaded(true);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

const GamesContainer = () => {
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const fetchData = async () => {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
    const json = await res.json();
    const gamesData = json.dates[0].games;

    // Prepare data in the way rendered component expects
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
      {loaded && <GameCarousel games={games} />}
    </React.Fragment>
  );
};

export default GamesContainer;
