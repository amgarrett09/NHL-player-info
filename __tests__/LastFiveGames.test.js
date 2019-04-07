/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import LastFiveGames from '../components/LastFiveGames';
import { lastFive } from '../__mocks__/skaterStatsMock';

describe('LastFiveGames', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <LastFiveGames position="Left Wing" games={lastFive} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
