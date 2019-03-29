/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import GameInfo from '../components/GameInfo';

describe('GameInfo', () => {
  it('should not change unexpectedly', () => {
    const component = renderer.create(
      <GameInfo
        awayTeam="Detroit Red Wings"
        homeTeam="Buffalo Sabres"
        awayScore={5}
        homeScore={4}
        gameState="FINAL"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
