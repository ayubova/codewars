//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
//any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
  const arr = typeof iterable === 'string' ? iterable.split('') : iterable;
  return arr.filter((elem, i) => elem !== arr[i + 1]);
}
