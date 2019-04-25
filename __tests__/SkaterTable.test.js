/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import { stats, career } from '../__mocks__/skaterStatsMock';
import SkaterTable from '../components/SkaterTable';

describe('SkaterTable', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <SkaterTable stats={stats} career={career} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
