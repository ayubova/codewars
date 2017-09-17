// Given two integer arrays a, b, both of length >= 1, create a program that returns true
// if the sum of the squares of each element in a is strictly greater than the sum of the
// cubes of each element in b.


function arrayMadness(a, b) {
  const sumOfSquaresA = a.reduce((acc, value) => acc + (value * value), 0);
  const sumOfCubesB = b.reduce((acc, value) => acc + (value * value * value), 0);
  return sumOfSquaresA > sumOfCubesB;
}