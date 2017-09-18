// Check to see if a string has the same amount of 'x's and 'o's. The method must return
// a boolean and be case insensitive. The string can contains any char.

function XO(str) {
  const totalX = str.toLowerCase().split('').reduce((acc, value) => (value === 'x' ? acc + 1 : acc), 0);
  const totalO = str.toLowerCase().split('').reduce((acc, value) => (value === 'o' ? acc + 1 : acc), 0);
  return totalX === totalO;
}
