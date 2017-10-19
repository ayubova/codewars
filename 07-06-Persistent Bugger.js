/* Write a function, persistence, that takes in a positive parameter num and returns
its multiplicative persistence, which is the number of times you must multiply the digits in num
until you reach a single digit. */

const persistence = (num) => {
  const multiplyDigits = number => String(number).split('').reduce((acc, value) => Number(value) * acc, 1);
  const iter = (num, acc) => {
    if (num < 10) {
      return acc;
    }
    return iter(multiplyDigits(num), acc + 1);
  };
  return iter(num, 0);
};
