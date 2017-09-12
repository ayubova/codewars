/* In this simple exercise, you will create a program that will take two lists of integers, a and b.
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
Therefore, the function should return 8. */


function findDifference(a, b) {
  const volume_a = a.reduce((acc, value) => value * acc, 1);
  const volume_b = b.reduce((acc, value) => value * acc, 1);
  return Math.abs(volume_a - volume_b);
}
