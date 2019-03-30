/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import GameInfo from '../components/GameInfo';

describe('GameInfo', () => {
  const component = (
    <GameInfo
      awayTeam="Detroit Red Wings"
      homeTeam="Buffalo Sabres"
      awayScore={5}
      homeScore={4}
      gameState="Live"
      stateCode="3"
      gameTime="22:00"
    />
  );

  const finishedGame = (
    <GameInfo
      awayTeam="Detroit Red Wings"
      homeTeam="Buffalo Sabres"
      awayScore={5}
      homeScore={4}
      gameState="Final"
      stateCode="8"
      gameTime="21:00"
    />
  );

  const sheduledGame = (
    <GameInfo
      awayTeam="Detroit Red Wings"
      homeTeam="Buffalo Sabres"
      awayScore={0}
      homeScore={0}
      gameState="Scheduled"
      stateCode="8"
      gameTime="23:00"
    />
  );

  it('should have two team names and two team scores', () => {
    const wrapper = shallow(component);
    const teamNames = wrapper.find('[data-test="team-name"]');
    const teamScores = wrapper.find('[data-test="team-score"]');

    expect(teamNames.length).toBe(2);
    expect(teamScores.length).toBe(2);
  });

  it('should display the period of play if game is live', () => {
    const wrapper = shallow(component);
    const gameStatus = wrapper.find('[data-test="game-status"]').text();

    expect(gameStatus).toEqual('3RD');
  });

  it('should display "Final" if the game is over', () => {
    const wrapper = shallow(finishedGame);
    const gameStatus = wrapper.find('[data-test="game-status"]').text();

    expect(gameStatus).toEqual('Final');
  });

  it('should display game time if the game is scheduled', () => {
    const wrapper = shallow(sheduledGame);
    const gameStatus = wrapper.find('[data-test="game-status"]').text();

    expect(gameStatus).toEqual('23:00');
  });

  it('should not change unexpectedly', () => {
    const wrapper = renderer.create(component);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
