var fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if (n === 0) return 0;
    return (n === 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;
