const findNb = (m) => {
  let result = 0;
  for (var i = 1; result < m; i++) {
    result += Math.pow(i, 3);
  }
  return result === m ? i - 1 : -1;
};
