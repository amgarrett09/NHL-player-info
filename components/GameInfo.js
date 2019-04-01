import React from 'react';
import PropTypes from 'prop-types';
import teamAbbreviations from '../constants/constants';
import '../css/game-info.css';

const GameInfo = ({
  homeTeam, awayTeam, homeScore, awayScore, gameState, stateCode, gameTime,
}) => {
  let displayedStatus;

  // Translating state codes into info to display in the component
  if (gameState === 'Final') {
    displayedStatus = 'Final';
  } else if (gameState === 'Live') {
    switch (stateCode) {
      case '1':
        displayedStatus = '1ST';
        break;
      case '2':
        displayedStatus = '2ND';
        break;
      case '3':
        displayedStatus = '3RD';
        break;
      default:
        displayedStatus = null;
    }
  } else {
    displayedStatus = gameTime;
  }

  return (
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

      <div className="game-info__game-state" data-test="game-status">
        {displayedStatus}
      </div>
    </div>
  );
};

GameInfo.propTypes = {
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  gameState: PropTypes.string.isRequired,
  stateCode: PropTypes.string.isRequired,
  gameTime: PropTypes.string.isRequired,
};

export default GameInfo;
