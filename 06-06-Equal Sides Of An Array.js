/* You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum of the integers to the left of N
is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1. */

const findEvenIndex = (arr) => {
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
      return i;
    }
  }
  return -1;
};

