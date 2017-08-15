const expect = require('chai').expect;
const as = require('../lib');

describe('number', function () {
  it('converts null to null', () => expect(as.number(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(as.number(undefined)).to.equal(undefined));
  it('converts null to 0', () => expect(as.number(null, {allowNull: false})).to.equal(0));
  it('converts undefined to 0', () => expect(as.number(undefined, {allowUndefined: false})).to.equal(0));
  it('converts "undefined" to NaN', () => expect(as.number('undefined')).to.be.NaN);
  it('converts "undefined" to 0', () => expect(as.number('undefined', {allowNaN: false})).to.equal(0));
  it('converts "123a" to NaN', () => expect(as.number('123a', {allowFindInString: false})).to.be.NaN);
  it('converts "123a" to 0', () => expect(as.number('123a', {allowFindInString: false, allowNaN: false})).to.equal(0));
  it('converts "123a" to 123', () => expect(as.number('123a')).to.equal(123));
  it('converts "$12,000.50" to 12000.50', () => expect(as.number('$12,000.50')).to.equal(12000.50));
  it('converts Infinity to 0', () => expect(as.number(Infinity, {allowInfinity: false})).to.equal(0));
  it('converts Infinity to Infinity', () => expect(as.number(Infinity)).to.equal(Infinity));
  it('converts "1" to 1', () => expect(as.number('1')).to.equal(1));
  it('converts "1.1" to 1.1', () => expect(as.number('1.1')).to.equal(1.1));
  it('converts "" to null', () => expect(as.number('')).to.equal(null));
  it('converts "" to 0', () => expect(as.number('', {allowNull: false})).to.equal(0));
  it('converts 1 to 1', () => expect(as.number(1)).to.equal(1));
  it('converts 1.1 to 1', () => expect(as.integer(1.1)).to.equal(1));
  it('converts "1.1" to 1', () => expect(as.integer('1.1')).to.equal(1));
  it('converts 1.1111 to 1.11', () => expect(as.number(1.1111, {
    withPrecision: 2,
    allowDecimals: true
  })).to.equal(1.11));
  it('converts "1" to 1 with precision', () => expect(as.number('1', {
    withPrecision: 2,
    allowDecimals: true
  })).to.equal(1));
});
