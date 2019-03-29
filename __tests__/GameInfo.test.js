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
      gameState="FINAL"
    />
  );
  it('should have two team names and two team scores', () => {
    const wrapper = shallow(component);
    const teamNames = wrapper.find('[data-test="team-name"]');
    const teamScores = wrapper.find('[data-test="team-score"]');

    expect(teamNames.length).toBe(2);
    expect(teamScores.length).toBe(2);
  });

  it('should not change unexpectedly', () => {
    const wrapper = renderer.create(component);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
