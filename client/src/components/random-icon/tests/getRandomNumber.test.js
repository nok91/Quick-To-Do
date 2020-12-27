import getRandomNumber from '../utilities/getRandomNumber';

describe('getRandomNumber()', () => {
  it('should export an array of src svgs', () => {
    const gatherNumbers = [
      {
        min: 0,
        max: 9
      },
      {
        min: 1,
        max: 1
      },
      {
        min: 0,
        max: 4
      },
      {
        min: 0,
        max: 20
      },
      {
        min: 10,
        max: 12
      }
    ];

    gatherNumbers.forEach(({ min, max }) => {
      expect(getRandomNumber({ min, max }) >= min).toBeTruthy();
      expect(getRandomNumber({ min, max }) <= max).toBeTruthy();
    });
  });

  it('should return null if min is greater than max or not a number', () => {
    expect(getRandomNumber({ min: 20, max: -10 })).toBe(null);
    expect(getRandomNumber({ min: undefined, max: -10 })).toBe(null);
    expect(getRandomNumber({ min: () => {}, max: -10 })).toBe(null);
    expect(getRandomNumber({ min: 'test', max: 'test' })).toBe(null);
    expect(getRandomNumber({ min: 'test', max: () => {} })).toBe(null);
  });
});
