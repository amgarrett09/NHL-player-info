/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import GameCarousel from '../components/GameCarousel';

const games = [
  {
    awayTeam: 'Detroit Red Wings',
    awayScore: 5,
    homeTeam: 'Buffalo Sabres',
    homeScore: 4,
    gameState: 'FINAL',
    stateCode: '8',
    gameTime: '20:00',
  },
  {
    awayTeam: 'Chicago Blackhawks',
    awayScore: 3,
    homeTeam: 'Winnipeg Jets',
    homeScore: 4,
    gameState: 'Live',
    stateCode: '3',
    gameTime: '21:00',
  },
  {
    awayTeam: 'San Jose Sharks',
    awayScore: 2,
    homeTeam: 'Arizona Coyotes',
    homeScore: 1,
    gameState: 'Live',
    stateCode: '1',
    gameTime: '22:00',
  },
];

describe('GameCarousel', () => {
  const component = <GameCarousel games={games} />;

  it('should have three slides in the slider', () => {
    const wrapper = shallow(component);
    const slides = wrapper.find('[data-test="slide"]');

    expect(slides.length).toEqual(3);
  });

  it('sould render and should not change unexpectedly', () => {
    const wrapper = renderer.create(component);
    const tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
