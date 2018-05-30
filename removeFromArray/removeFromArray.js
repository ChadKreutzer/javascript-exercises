const removeFromArray = function() {
    const args = [...arguments];
    const arr = args.shift();
    return arr.filter(element => args.every(toRemove => toRemove !== element));
};

module.exports = removeFromArray;
