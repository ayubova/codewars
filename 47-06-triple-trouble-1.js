// Write a function which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number
//  at any place in num1 and also a straight double of the same number in num2.

function tripledouble(num1, num2) {
  const array1 = String(num1).split('');
  const array2 = String(num2).split('');
  const triples = arr => arr.filter((value, index) => value === arr[index + 1] && value === arr[index + 2]);
  const hasDouble = array => array.filter((value, index) => value === array[index + 1] && triples(array1).includes(value)).length > 0;

  return Number(hasDouble(array2));
}
