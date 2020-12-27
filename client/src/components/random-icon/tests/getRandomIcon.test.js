import getRandomIcon from '../utilities/getRandomIcon';
// Mocks
import getRandomNumber from '../utilities/getRandomNumber';
import getIcons from '../utilities/getIcons';

jest.mock('../utilities/getRandomNumber');
jest.mock('../utilities/getIcons', () => ([
    'img-0.svg',
    'img-1.svg',
    'img-2.svg',
    'img-3.svg',
    'img-4.svg',
]));

describe('getRandomIcon()', () => {
    it('should return and img from getIcons array', () => {
        getRandomNumber.mockReturnValue(0);
        expect(getRandomIcon()).toBe('img-0.svg');
    }); 
    it('should return null if not exist', () => {
        getRandomNumber.mockReturnValue(12);
        expect(getRandomIcon()).toBe(null);
    }); 
});
