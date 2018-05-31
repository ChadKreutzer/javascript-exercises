const palindromes = function(str) {
    const test = str
        .toLowerCase()
        .split('')
        .filter(x => /([a-zA-Z])/.test(x));
    return test.join('') === test.reverse().join('');
};

module.exports = palindromes;
