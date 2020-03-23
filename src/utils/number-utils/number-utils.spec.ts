import { isNumber } from 'util';

// /* global test, expect */
// import * as utils from './number_utils';

// test('getSmallesetUnitByDecimalDigits', () => {
//     expect(utils.cbGetSmallesetUnitByDecimalDigits(2)).toBe('0.01');
//     expect(utils.cbGetSmallesetUnitByDecimalDigits(10)).toBe('0.0000000001');
//     expect(utils.cbGetSmallesetUnitByDecimalDigits(0)).toBe('1');
// });

// test('calculatePercentageChange', () => {
//     expect(utils.cbCalculatePercentageChange(20, 40)).toBe(-50);
//     expect(utils.cbCalculatePercentageChange(25, 20)).toBe(25);
// });

// test('calculateReversePercentageChange', () => {

// });

// test('roundDownByDecimals', () => {
//     expect(utils.cbRoundDownByDecimals(10.123456, 5)).toBe('10.12345');
//     expect(utils.cbRoundDownByDecimals(10.123456789, 2)).toBe('10.12');
//     expect(utils.cbRoundDownByDecimals(1, 5)).toBe('1');
// });

test('isNumber', () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber('5')).toBe(true);
    expect(isNumber('abc')).toBe(false);
});

// test('toKB', () => {
//     expect(utils.cbToKB(5000)).toBe(5);
// });

// test('toBytes', () => {
//     expect(utils.cbToBytes(5)).toBe(5000);
// });

// test('divide', () => {
//     expect(utils.cbDivide(1234.5678, 100)).toBe(12.345678);
// });

// test('fromWei', () => {
//     expect(utils.cbFromWei(15000000000000000000)).toBe('15');
// });

// test('toWei', () => {
//     expect(utils.cbToWei(15)).toBe('15000000000000000000');
// });

// test('roundUpByDecimals', () => {
//     expect(utils.cbRoundUpByDecimals(10.123456789, 2)).toBe('10.13');
//     expect(utils.cbRoundUpByDecimals(10.123456, 5)).toBe('10.12346');
//     expect(utils.cbRoundUpByDecimals(1, 5)).toBe('1');
// });

// test('removeTrailingZeros', () => {
//     expect(utils.cbRemoveTrailingZeros(1000000000.00000)).toBe('1000000000');
// });

// test('getTotalDecimalDigits', () => {
//     expect(utils.cbGetTotalDecimalDigits('1234.1234512345')).toBe(10);
//     expect(utils.cbGetTotalDecimalDigits('1234')).toBe(0);
// });

// test('isGreater', () => {
//     expect(utils.cbIsGreater(20, 21)).toBe(false);
//     expect(utils.cbIsGreater(21, 20)).toBe(true);
//     expect(utils.cbIsGreater(20, 20)).toBe(false);
// });

// test('isLower', () => {
//     expect(utils.cbIsLower(20, 21)).toBe(true);
//     expect(utils.cbIsLower(21, 20)).toBe(false);
//     expect(utils.cbIsLower(20, 20)).toBe(false);
// });

// test('isGreaterOrEqual', () => {
//     expect(utils.cbIsGreaterOrEqual(20, 21)).toBe(false);
//     expect(utils.cbIsGreaterOrEqual(21, 20)).toBe(true);
//     expect(utils.cbIsGreaterOrEqual(20, 20)).toBe(true);
// });

// test('formatNumberSuffix', () => {
//     expect(utils.cbFormatNumberSuffix(500000, 1000000, null)).toBe('500000');
//     expect(utils.cbFormatNumberSuffix(50000, 1000, null)).toBe('50K');
//     expect(utils.cbFormatNumberSuffix(5000000, 1000, null)).toBe('5M');
//     expect(utils.cbFormatNumberSuffix(5000000000, 1000, null)).toBe('5B');
//     expect(utils.cbFormatNumberSuffix(5555000000, 1000, 2)).toBe('5.55B');
//     expect(utils.cbFormatNumberSuffix(5000.000000, 10000000, 2, false)).toBe('5000.00');
//     expect(utils.cbFormatNumberSuffix(5000.000000, 10000000, 2)).toBe('5000');
// });

// // // TODO - move to multi blockchain wallet
// // export function cbFromGwei(value) {
// //     return Number(cbToWei(value, 9));
// // }

// // // TODO - move to multi blockchain wallet
// // export function cbToGwei(value) {
// //     return Number(cbFromWei(value, 9));
// // }

// test('formatNumber', () => {
//     expect(utils.cbFormatNumber('5000.500000', false, 1000000, 4, true, false)).toBe('5000.5');
//     expect(utils.cbFormatNumber('5000.500000', false, 1000000, 4, false, false)).toBe('5000.5000');
//     expect(utils.cbFormatNumber('5000.500000', false, 1000000, 5, false, false)).toBe('5000.50000');
//     expect(utils.cbFormatNumber('5000.500000', true, 1000, 5, false, false)).toBe('5.0005K');
//     expect(utils.cbFormatNumber('5000000', false, 1000, 5, false, false)).toBe('5,000,000');
//     expect(utils.cbFormatNumber('0.000000000001', false, 1000, 18, false, false)).toBe('0.000000000001000000');
//     expect(utils.cbFormatNumber('0.000000000001', false, 1000, 18, true, false)).toBe('0.000000000001');
//     expect(utils.cbFormatNumber('0.000000000001', false, 1000, 18, true, false)).toBe('0.000000000001');
// });

// test('roundNumberByDecimals', () => {
//     expect(utils.cbRoundNumberByDecimals(0.0123456, 4)).toBe('0.0123');
// });

// test('calculateSlippage', () => {
//     expect(utils.cbCalculateSlippage(2, 20)).toBe(9);
// });

// test('cbHexToNumber', () => {
//     expect(utils.cbHexToNumber('0x00000000001')).toBe(1);
//     expect(utils.cbHexToNumber('-0x00000000001')).toBe(-1);
// });

// test('cbTrimDecimalNumber', () => {
//     expect(utils.cbTrimDecimalNumber(0.123446498798, 5)).toBe('0.12344');
//     expect(utils.cbTrimDecimalNumber(0.123456498798, 5)).toBe('0.12345');
//     expect(utils.cbTrimDecimalNumber(0.12, 5)).toBe('0.12');
// });
