const removeFromArray = function() {
    const args = [...arguments];
    const arr = args.shift();
    return arr.filter(el => !args.some(rem => rem === el));
};

module.exports = removeFromArray;
