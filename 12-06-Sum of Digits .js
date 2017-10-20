/* In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.*/

const sumOfDigits = num => String(num).split('').reduce((acc, value) => acc + Number(value), 0);
const digital_root = (n) => {
console.log(n, sumOfDigits(n));
  if (n < 10) {
    return n;
  }
  return digital_root(sumOfDigits(n));
};
