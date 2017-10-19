/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

const findOdd = (arr) => {
  let element = arr[0];
  const count = array => array.reduce((acc, value) => (value === element ? acc + 1 : acc), 0);
  for (let i = 0; i < arr.length; i += 1) {
    if (count(arr) % 2 === 0) {
      element = arr[i + 1];
    } else {
      return element;
    }
  }
};
