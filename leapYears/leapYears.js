const leapYears = function(year) {
    const isLeap400 = year % 400 === 0;
    const isLeapOther = year % 4 === 0 && year % 100;
    return (isLeap400 || isLeapOther) ? true : false;
};

module.exports = leapYears;
