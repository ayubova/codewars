/* Write a function, gooseFilter, that takes an array of strings as an argument
 and returns a filtered array containing the same elements but with the 'geese' removed. */

function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(value => !geese.includes(value));
}
