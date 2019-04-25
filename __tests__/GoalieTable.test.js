/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import GoalieTable from '../components/GoalieTable';
import { stats, career } from '../__mocks__/goalieStatsMock';

describe('GoalieTable', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <GoalieTable stats={stats} career={career} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
