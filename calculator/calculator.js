const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce((a,b) => a + b, 0);

const multiply = arr => arr.reduce((a,b) => a * b);

const power = (base, exp) => multiply(Array(exp).fill(base));

const factorial = num => (num === 0) ? 1 : multiply(Array.from(Array(num).keys(), (_,x) => x + 1));

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}