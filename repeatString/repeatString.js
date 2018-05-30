const repeatString = (str, count) => (count < 0) ? "ERROR" : Array(count).fill(str).join('');

module.exports = repeatString;
