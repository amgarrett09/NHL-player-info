import React from 'react';
import PropTypes from 'prop-types';
import teamAbbreviations from '../constants/constants';
import '../css/game-info.css';

const GameInfo = ({
  homeTeam, awayTeam, homeScore, awayScore, gameState,
}) => (
  <div className="game-info box">
    <div className="columns">
      <div className="column">
        <p>
          <span data-test="away-team-name">{teamAbbreviations[awayTeam]}</span>
          &nbsp;
          <span className="game-info__score" data-test="away-team-score">
            {awayScore}
          </span>
        </p>
        <p>
          <span data-test="home-team-name">{teamAbbreviations[homeTeam]}</span>
          &nbsp;
          <span className="game-info__score" data-test="home-team-score">
            {homeScore}
          </span>
        </p>
      </div>
      <div className="column">
        <p data-test="game-status">{gameState}</p>
      </div>
    </div>
  </div>
);

GameInfo.propTypes = {
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  gameState: PropTypes.string.isRequired,
};

export default GameInfo;
