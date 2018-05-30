const removeFromArray = function() {
    const args = [...arguments];
    const arr = args.shift();
    return arr.filter(el => args.every(rem => rem !== el));
};

module.exports = removeFromArray;
