const solve = (str, idx) => {
  if (str[idx] !== '(') {
    return -1;
  }

  let result = 0;

  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') {
      result += 1;
    }
    if (str[i] === ')') {
      result -= 1;
    }

    if (result === 0 && i > idx) {
      return i;
    }
  }
};
