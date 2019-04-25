/* eslint-env jest */
import DataPrep from '../api/stats-data-prep';
import mockBasicInfo from '../__mocks__/basicInfoMock';
import mockPlayerStats from '../__mocks__/playerStatsMock';

describe('prepareBasicInfo', () => {
  it('should produce an object with the correct props', () => {
    const props = DataPrep.prepareBasicInfo(mockBasicInfo);
    expect(props).toEqual({
      name: 'Tyler Bertuzzi',
      position: 'Left Wing',
      shootsCatches: 'L',
      height: '6\' 0"',
      weight: 190,
      nationality: 'CAN',
      active: true,
      currentTeam: 'Detroit Red Wings',
    });
  });

  it('should produce some default props if data does not have all info', () => {
    const emptyData = {};
    const props = DataPrep.prepareBasicInfo(emptyData);

    expect(props).toEqual({
      name: '',
      position: '',
      shootsCatches: '',
      height: '',
      weight: undefined,
      nationality: '',
      active: false,
      currentTeam: undefined,
    });
  });
});

describe('preparePlayerStats', () => {
  it('should produce correct props with good data', () => {
    const props = DataPrep.preparePlayerStats(mockPlayerStats);

    // Using a snapshot to avoid cluttering this file
    expect(props).toMatchSnapshot();
  });

  it('should produce default props if data does not exist', () => {
    const props = DataPrep.preparePlayerStats({});

    expect(props).toEqual({
      seasonStats: [],
      careerSeason: {},
      playoffStats: [],
      careerPlayoffs: {},
      lastFive: [],
    });
  });
});
