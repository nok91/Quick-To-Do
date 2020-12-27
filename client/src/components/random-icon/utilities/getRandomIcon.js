import getRandomNumber from './getRandomNumber';
import getIcons from './getIcons';

function getRandomIcon() {
    return getIcons[getRandomNumber()] || null
}

export default getRandomIcon;