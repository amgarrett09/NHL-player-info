/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Player from '../pages/player';

describe('Player page', () => {
  it('should render and should match snapshot', () => {
    const props = {
      id: '123456',
      name: 'Jane Doe',
      currentTeam: 'Detroit Red Wings',
      position: 'Goalie',
      shoostCatches: 'L',
      height: '5\' 6"',
      weight: 140,
      nationality: 'USA',
      active: true,
      seasonStats: [],
      careerSeason: {},
      playoffStats: [],
      careerPlayoffs: {},
      lastFive: [],
    };

    const page = renderer.create(<Player {...props} />);
    const json = page.toJSON();
    expect(json).toMatchSnapshot();
  });
});
