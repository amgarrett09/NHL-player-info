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
          {teamAbbreviations[awayTeam]}
          &nbsp;
          <span className="game-info__score">{awayScore}</span>
        </p>
        <p>
          {teamAbbreviations[homeTeam]}
          &nbsp;
          <span className="game-info__score">{homeScore}</span>
        </p>
      </div>
      <div className="column">
        <p>{gameState}</p>
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
