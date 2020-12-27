/**
 * Generate Random Number Between 'param.min' and 'param.max'
 * @param {Number} param.min 
 * @param {Number} param.max
 * @returns {Number} Random number
 */
function getRandomNumber({
    min = 0,
    max = 9
} = {}) {
    if (!isValidate(min, max)) return null
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isValidate(min, max) {
    return (
        min <= max &&
        typeof min === 'number' &&
        typeof max === 'number' 
    );
}
export default getRandomNumber;

