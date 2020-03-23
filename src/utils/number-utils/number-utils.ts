// export function cbGetSmallesetUnitByDecimalDigits(decimalDigits) {
//     return (1 / Math.pow(10, decimalDigits)).toFixed(decimalDigits);
// }

// export function cbCalculatePercentageChange(a, b) {
//     return (a / b) * 100 - 100;
// }

// export function cbNumOfDecimals(args) {
//     return ((/\./).test(args) && args.match(/\..*/)[0].length - 1 || 0);
// }

// export function cbDecimalSub(amount, subAmount, toFixed = 18) {
//     return Decimal.sub(amount || 0, subAmount || 0).toFixed(toFixed);
// }

// export function cbDecimalAdd(amount = 0, addAmount = 0, toFixed = 18) {
//     return Decimal.add(amount || 0, addAmount || 0).toFixed(toFixed);
// }

// // Or - should add test
// export function cbCalculateReversePercentageChange(a, b) {
//     const isIncrease = a > 0;

//     if (isIncrease) return (b * (100 + parseFloat(a))) / 100;

//     return b * ((parseFloat(a) / 100) + 1);
// }

// export function cbUniqueId() {
//     return Math.random().toString(36).substr(2, 16);
// }

// export function cbRoundDownByDecimals(number, decimalPlaces = 4): string {
//     return new Decimal(number).toDecimalPlaces(decimalPlaces, Decimal.ROUND_DOWN).toFixed();
// }

// export function cbSubPercentage(number, percentToSub) {
//     return Decimal.sub(number, Decimal.mul(Decimal.div(number, 100), percentToSub)).toDecimalPlaces(0, Decimal.ROUND_DOWN).toFixed();
// }

// export function cbGetAmountBeforePercentageChange(number, percentToSub) {
//     const decimalPlaces = number.length;
//     let returnNumber = Decimal.div(number, Decimal.sub(100, percentToSub)).toDecimalPlaces(0, Decimal.ROUND_DOWN).toFixed();
//     const returnNumberLength = returnNumber.length;
//     for (let i = 0; i < decimalPlaces - returnNumberLength; i++)
//         returnNumber = `${returnNumber}0`;
//     return returnNumber;
// }

export function isNumber(value: string | number): boolean {
    return ((value != null) && !isNaN(Number(value.toString())));
}

// export function cbToKB(numberInBytes) {
//     return new Decimal(numberInBytes).div(1000).toNumber();
// }

// export function cbToBytes(numberInKb) {
//     if (numberInKb == '' || undefined) return undefined;
//     return new Decimal(numberInKb).mul(1000).toNumber();
// }

// export function cbDivide(a, b) {
//     if (a === 0 && b === 0) return 0;
//     return new Decimal(a).div(b).toNumber();
// }

// export function cbMultiply(a, b) {
//     return new Decimal(a).mul(b).toNumber();
// }

// export function cbFromWei(number, decimalDigits = 18) {
//     if (!number) return number;
//     return new Decimal(number).times(1 / 10 ** decimalDigits).toFixed();
// }

// export function cbToWei(number, decimalDigits = 18) {
//     if (!number) return number;

//     return new Decimal(number).times(10 ** decimalDigits).toFixed();
// }

// export function cbRoundUpByDecimals(number, decimalPlaces = 4) {
//     return new Decimal(number).toDecimalPlaces(decimalPlaces, Decimal.ROUND_UP).toFixed();
// }

// export function cbRemoveTrailingZeros(data): string {
//     let string = String(data);
//     if (!string || !string.includes('.')) return string;
//     while (string.lastIndexOf('0') == string.length - 1)
//         string = string.slice(0, string.length - 1);
//     if (string.indexOf('.') == string.length - 1)
//         string = string.slice(0, string.length - 1);
//     return string;
// }

export function getTotalDecimalDigits(string: string): number {
    if (string.indexOf('.') > 0)
        return string.toString().split('.')[1].length;
    return 0;
}

export function roundToDecimalDigits(num: number, decimalDigits: number): number {
    return +(Math.round(Number(num + `e+${decimalDigits}`)) + `e-${decimalDigits}`);
}

// export function cbIsGreater(first, second) {
//     return new Decimal(first).gt(second);
// }

// export function cbIsLower(first, second) {
//     return new Decimal(first).lt(second);
// }

// export function cbIsGreaterOrEqual(first, second) {
//     return !cbIsLower(first, second);
// }

// export function cbFormatNumberSuffix(amount, startFormattingAt, decimalPlaces, removeZeroes = true) {
//     const million = 1000000;
//     const billion = 1000000000;
//     const trillion = 1000000000000;
//     let number;
//     let shortLetter;

//     switch (true) {
//         case amount >= startFormattingAt && amount < million:
//             number = Number.parseFloat((amount / 1000).toFixed(decimalPlaces));
//             shortLetter = 'K';
//             break;
//         case amount >= million && amount < billion:
//             number = Number.parseFloat((amount / million).toFixed(decimalPlaces));
//             shortLetter = 'M';
//             break;
//         case amount >= billion && amount < trillion:
//             number = Number.parseFloat((amount / billion).toFixed(decimalPlaces));
//             shortLetter = 'B';
//             break;
//         case amount >= trillion:
//             number = Number.parseFloat((amount / trillion).toFixed(decimalPlaces));
//             shortLetter = 'T';
//             break;
//         default:
//             number = Number.parseFloat(amount).toFixed(decimalPlaces);
//     }
//     if (removeZeroes)
//         number = cbRemoveTrailingZeros(number);
//     return `${number}${shortLetter ? shortLetter : ''}`;
// }

// // TODO - move to multi blockchain wallet
// export function cbFromGwei(value) {
//     return Number(cbToWei(value, 9));
// }

// // TODO - move to multi blockchain wallet
// export function cbToGwei(value) {
//     return Number(cbFromWei(value, 9));
// }

// function cbAddTrailingZeros(value, decimalPlaces): string { // product wants us to add zeros in case they were removed from out rounding (1.12345670 instead of 1.1234567)
//     const decimalsCount = cbNumOfDecimals(value);
//     if (decimalsCount == 0) return value;
//     if (decimalsCount == decimalPlaces) return value;

//     for (let i = 0; i < decimalPlaces - decimalsCount; i++)
//         value = `${value}0`;
//     return value;
// }

// function cbGetFirstNonZeroDecimalDigit(number) {
//     return number.toFixed(0 - Math.floor(Math.log(number) / Math.log(10)));
// }

// function cbFormatNumberWithCommas(x): string {
//     const parts = x.toString().split('.');
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     return parts.join('.');
// }

// export function cbFormatNumber(amount, isSuffixed = false, startFormattingAt = 1000, decimalPlaces = 4, removeZeroes = true, firstNonZeroDigit = false): string {
//     if (!amount) return amount;

//     if (isSuffixed && !(amount < 1 && amount > 0))
//         return cbFormatNumberSuffix(amount, startFormattingAt, decimalPlaces, removeZeroes);

//     let returnValue = cbRoundDownByDecimals(amount, decimalPlaces);

//     if (firstNonZeroDigit && amount != 0 && returnValue == '0')
//         returnValue = cbGetFirstNonZeroDecimalDigit(Number(amount));

//     returnValue = cbAddTrailingZeros(returnValue, decimalPlaces);

//     if (removeZeroes)
//         returnValue = cbRemoveTrailingZeros(returnValue);

//     if (Number(amount) > startFormattingAt) return cbFormatNumberWithCommas(returnValue);

//     return returnValue;
// }

// export function cbRoundNumberByDecimals(number, decimalPlaces = 4) {
//     return new Decimal(number).toDecimalPlaces(decimalPlaces).toFixed();
// }

// export function cbCalculateSlippage(rate1, rate2) {
//     return Math.abs(rate1 - rate2) / rate1;
// }

// export function cbHexToNumber(target) {
//     if (target.indexOf('0x') === 0 || target.indexOf('-0x') === 0)
//         target.replace('0x', '');

//     return parseInt(target);
// }

// export function cbCalculateTransactionCost(gasPriceInHex, gasInHex) {
//     const gasPriceInWei = cbToGwei(cbHexToNumber(gasPriceInHex));
//     const gasAsNumber = cbHexToNumber(gasInHex);
//     return gasAsNumber * gasPriceInWei;
// }

// export function cbTrimDecimalNumber(number, maxDecimalDigits) {
//     let trimmedNumber = number.toString();
//     const inputDecimalDigits = cbGetTotalDecimalDigits(number.toString());
//     if (inputDecimalDigits > maxDecimalDigits)
//         trimmedNumber = cbRoundDownByDecimals(number, maxDecimalDigits);
//     return trimmedNumber;
// }
