var ftoc = f => Math.round(50 / 9 * f - 1600 / 9) / 10;

var ctof = c => Math.round(18 * c + 320) / 10;

module.exports = {
  ftoc,
  ctof
};
