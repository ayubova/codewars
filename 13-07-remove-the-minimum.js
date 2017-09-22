/* Given an array of integers, remove the smallest value. Do not mutate the original array/list.
 If there are multiple elements with the same value, remove the one with a lower index.
 If you get an empty array/list, return an empty array/list.
 Don't change the order of the elements that are left. */

const removeSmallest = (numbers) => {
  const min = Math.min.apply(null, numbers);
  return numbers.reduce((acc, value, index) => (index === numbers.indexOf(min) ? acc : [...acc, value]), []);
};
