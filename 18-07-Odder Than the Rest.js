// Create a method that takes an array/List as an input, and outputs the index at which the sole odd
// number is located.

// This method should work with arrays with negative numbers.
// If there is no negative number in the array, then the method should output -1.


const oddOne = arr => arr.findIndex(element => Math.abs(element) % 2 === 1);
