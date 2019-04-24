/* eslint-env jest */
import DataPrep from '../api/stats-data-prep';
import mockData from '../__mocks__/basicInfoMock';

describe('prepareBasicInfo', () => {
  it('should produce an object with the correct props', () => {
    const props = DataPrep.prepareBasicInfo(mockData);
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
