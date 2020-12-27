import getIcons from '../utilities/getIcons';

describe('getIcons()', () => {
    it('should export an array of src svgs', () => {
        expect(Array.isArray(getIcons)).toBeTruthy();
        expect(getIcons.length > 0).toBeTruthy();
    });
});
