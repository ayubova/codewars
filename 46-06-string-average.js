// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

const averageString = (str) => {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const array = str.split(' ').map(v => numbers.indexOf(v));
  return array.includes(-1) ? 'n/a' : numbers[Math.floor(array.reduce((acc, c) => acc + c, 0) / array.length)];
};

