const snakeCase = function(str){
    const prepped = (str.match(/[^\w]/) === null) ? str.replace(/([A-Z])/g, " $&") : str;
    return prepped.match(/\b\w+/g).join('_').toLowerCase();
};

module.exports = snakeCase;
