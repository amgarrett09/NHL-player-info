/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import GameInfo from '../components/GameInfo';

describe('GameInfo', () => {
  it('should render and should not change unexpectedly', () => {
    const render = renderer.create(
      <GameInfo
        homeTeam="Detroit Red Wings"
        homeScore={5}
        awayTeam="Buffalo Sabres"
        awayScore={4}
        gameState="Final"
      />,
    );

    const tree = render.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display the correct team names', () => {
    const render = shallow(
      <GameInfo
        homeTeam="Detroit Red Wings"
        homeScore={5}
        awayTeam="Buffalo Sabres"
        awayScore={4}
        gameState="Final"
      />,
    );

    const homeName = render.find('[data-test="home-team-name"]').text();
    const awayName = render.find('[data-test="away-team-name"]').text();

    expect(homeName).toBe('DET');
    expect(awayName).toBe('BUF');
  });

  it('should display the correct home and away scores', () => {
    const render = shallow(
      <GameInfo
        homeTeam="Detroit Red Wings"
        homeScore={5}
        awayTeam="Buffalo Sabres"
        awayScore={4}
        gameState="Final"
      />,
    );

    const homeScore = render.find('[data-test="home-team-score"]').text();
    const awayScore = render.find('[data-test="away-team-score"]').text();

    expect(homeScore).toBe('5');
    expect(awayScore).toBe('4');
  });

  it('should display the correct game status', () => {
    const render = shallow(
      <GameInfo
        homeTeam="Detroit Red Wings"
        homeScore={5}
        awayTeam="Buffalo Sabres"
        awayScore={4}
        gameState="Final"
      />,
    );

    const status = render.find('[data-test="game-status"]').text();

    expect(status).toBe('Final');
  });
});
