const palindromeChainLength = (n) => {
  const isPalindrome = num => String(num) === String(num).split('').reverse().join('');
  const reverse = value => Number(String(value).split('').reverse().join(''));
  const iter = (number, result) => {
    if (isPalindrome(number)) {
      return result;
    }
    return iter(number + reverse(number), result + 1);
  };
  return iter(n, 0);
};
