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
  },
  {
    awayTeam: 'Chicago Blackhawks',
    awayScore: 3,
    homeTeam: 'Winnipeg Jets',
    homeScore: 4,
    gameState: '3RD',
  },
  {
    awayTeam: 'San Jose Sharks',
    awayScore: 2,
    homeTeam: 'Arizona Coyotes',
    homeScore: 1,
    gameState: '1ST',
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
