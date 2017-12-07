// Write a function isIntArray with the below signature.

// returns true if every element in an array is an integer. 
// returns true if array is empty.
// returns false for every other input.

const isIntArray = arr => (arr ? arr.every(Number.isInteger) : false);
