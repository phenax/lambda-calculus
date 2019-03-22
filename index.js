
const { logBoolean, logNumber } = require('./utils');

const { I, M, K, KI, C, B } = require('./combinators');
// const { True, False, not, and, or, beq } = require('./boolean');
const { _0, _1, _2, _3, _4, _5, add, mul } = require('./church-numbers');

// logBoolean(not(True), not(False));
// logBoolean(and(True)(True), and(False)(False), and(True)(False), and(False)(True));
// logBoolean(or(True)(True), or(False)(False), or(True)(False), or(False)(True));
// logBoolean(beq(True)(True), beq(False)(False), beq(True)(False), beq(False)(True));

logNumber(_0, _1, _2, _3, _4, _5);
logNumber(add(_0)(_1), add(_3)(_5), add(_5)(_2));
logNumber(mul(_0)(_1), mul(_3)(_5), mul(_5)(_2));
