const sumAll = function(num1, num2) {
    const args = [...arguments].sort();
    return (args.every(num => Number.isInteger(num) && num >= 0))
        ? Array.from(Array(args[1] - args[0] + 1), (_,x) => x + args[0]).reduce((a,b) => a + b)
        : "ERROR";
};

module.exports = sumAll;
