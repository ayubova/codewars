// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

// Note! a and b are not ordered!


function GetSum(a, b) {
  if (a === b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  return a + GetSum(a - 1, b);
}
