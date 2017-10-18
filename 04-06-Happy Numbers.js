/* Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a “happy” number. A happy number is defined as an integer in which the following sequence ends with the number 1.

Start with the number itself.
Calculate the sum of the square of each individual digit.
If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1. For example, the number 7 is a “happy” number:
7 ^ 2 = 49
4 ^ 2 + 9 ^ 2 = 97
9 ^ 2 + 7 ^ 2 = 130
1 ^ 2 + 3 ^ 2 + 3 ^ 2 = 10
1 ^ 2 + 0 ^ 2 = 1
Once the sequence reaches the number 1, it will stay there forever since 1 ^ 2 = 1

On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 52, 29

Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.

Your task is to write a program which will print a list of all happy numbers between 1 and x (including 1 and x) where x <= 10000

Disclaimer: This Kata is an adaptation of a HW assignment I had for McGill University's COMP 208 (Computers in Engineering) class. */

const sumOfSquares = num => String(num).split('').reduce((acc, value) => (value * value) + acc, 0);

const isHappyNumber = (number) => {
  const iter = (number, acc) => {
    if (number === 1) {
      return true;
    } else if (acc.includes(number)) {
      return false;
    }
    return iter(sumOfSquares(number), acc.concat(number));
  };
  return iter(number, []);
};

const happyNumbers = (x) => {
  let result = [1];
  for (let i = 7; i <= x; i += 1) {
    if (isHappyNumber(i)) {
      result = result.concat(i);
    }
  }
  return result;
};

