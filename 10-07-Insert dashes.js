// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each
// two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3.
//  Don't count zero as an odd number.

function insertDash(num) {
  return String(num).split('').reduce((acc, value) => (value % 2 === 1 && acc[acc.length - 1] % 2 === 1 ? acc.concat('-', value) : acc.concat(value)), []).join('');
}

