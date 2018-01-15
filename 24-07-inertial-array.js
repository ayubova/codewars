// An array is defined to be inertialif the following conditions hold:

// a. it contains at least one odd value  
// b. the maximum value in the array is even 
// c. every odd value is greater than every even value that is not the maximum value.

const isInertial = (array) => {
  const evens = array.filter(e => !(e % 2));
  const odds = array.filter(elem => elem % 2);
  const max = Math.max(...array);
  const minOdd = Math.min(...odds);
  const maxEven = Math.max(...evens.filter(n => n !== max));
  return array.some(v => v % 2) && !(max % 2) && (minOdd >= maxEven);
};
