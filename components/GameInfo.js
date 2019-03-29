import React from 'react';
import PropTypes from 'prop-types';
import teamAbbreviations from '../constants/constants';
import '../css/game-info.css';

const GameInfo = ({
  homeTeam, awayTeam, homeScore, awayScore, gameState,
}) => (
  <div className="game-info">
    <div className="game-info__scores">
      <div className="row">
        <div className="col s6" data-test="team-name">
          {teamAbbreviations[awayTeam] || awayTeam}
        </div>
        <div className="col s6" data-test="team-score">
          {awayScore}
        </div>
      </div>

      <div className="row">
        <div className="col s6" data-test="team-name">
          {teamAbbreviations[homeTeam] || awayTeam}
        </div>
        <div className="col s6" data-test="team-score">
          {homeScore}
        </div>
      </div>
    </div>

    <div className="game-info__game-state">
      {gameState}
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
