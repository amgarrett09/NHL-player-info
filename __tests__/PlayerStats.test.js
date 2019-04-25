/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import PlayerStats from '../components/PlayerStats';
import { stats, career } from '../__mocks__/skaterStatsMock';

describe('PlayerStats', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <PlayerStats
        position="Left Wing"
        career={career}
        stats={stats}
        title="Regular Season Stats"
        id="season-stats"
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have a title that matches the props', () => {
    const component = shallow(
      <PlayerStats
        position="Left Wing"
        career={career}
        stats={stats}
        title="Regular Season Stats"
        id="season-stats"
      />,
    );

    const title = component.find('[data-test="title"]').text();
    expect(title).toBe('Regular Season Stats');
  });

  it('should have a root div with the correct id', () => {
    const component = shallow(
      <PlayerStats
        position="Left Wing"
        career={career}
        stats={stats}
        title="Regular Season Stats"
        id="season-stats"
      />,
    );

    const divs = component.find('#season-stats').length;
    expect(divs).toBe(1);

    const component2 = shallow(
      <PlayerStats
        position="Left Wing"
        career={career}
        stats={stats}
        title="Regular Season Stats"
        id="playoff-stats"
      />,
    );

    const seasonDivs = component2.find('#season-stats').length;
    const playoffDivs = component2.find('#playoff-stats').length;

    expect(seasonDivs).toBe(0);
    expect(playoffDivs).toBe(1);
  });
});
