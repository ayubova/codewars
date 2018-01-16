// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 1000000000

const groupByCommas = n => String(n).split('').reduceRight((acc, value, i, arr) => ((arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1 ? `${value},${acc}` :  `${value}${acc}`), '');
