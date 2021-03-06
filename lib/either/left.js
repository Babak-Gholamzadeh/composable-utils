const Right = require('./right');

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  chain: f => Left(x),
  ap: F => Left(x),
  pass: F => Left(x),
  mjoin: () => x,
	concat: either => Left(x),
  inspect: () => `Left(${x})`,
  toString: () => `Left(${x})`,
});

module.exports = Left;
