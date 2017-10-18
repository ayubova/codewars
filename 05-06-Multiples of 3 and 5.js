/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. */

const solution = (num) => {
  const iter = (number, acc) => {
    if (number < 3) {
      return acc;
    }
    if (number % 3 === 0 || number % 5 === 0) {
      return iter(number - 1, acc + number);
    }
    return iter(number - 1, acc);
  };
  return iter(num - 1, 0);
};
